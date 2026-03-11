import { useEffect, useRef } from 'react'

export default function ParticleBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationId
    let mouse = { x: -9999, y: -9999 }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const onMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    window.addEventListener('mousemove', onMouseMove)

    const onMouseLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }
    window.addEventListener('mouseleave', onMouseLeave)

    // Create particles
    const PARTICLE_COUNT = 80
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2,
      pulseOffset: Math.random() * Math.PI * 2,
    }))

    const CONNECTION_DIST = 150
    const MOUSE_FORCE_DIST = 100

    const draw = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update & draw particles
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        // Mouse repulsion
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < MOUSE_FORCE_DIST) {
          const force = (MOUSE_FORCE_DIST - dist) / MOUSE_FORCE_DIST
          p.x += (dx / dist) * force * 1.5
          p.y += (dy / dist) * force * 1.5
        }

        const pulse = 0.5 + 0.5 * Math.sin(time * 0.001 + p.pulseOffset)
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 3)
        grd.addColorStop(0, `rgba(0, 255, 255, ${p.opacity * pulse})`)
        grd.addColorStop(1, 'rgba(0, 102, 255, 0)')

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius * (1 + pulse * 0.5), 0, Math.PI * 2)
        ctx.fillStyle = grd
        ctx.fill()
      })

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.25
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(0, 102, 255, ${alpha})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }

        // Mouse connections
        const dx = particles[i].x - mouse.x
        const dy = particles[i].y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < MOUSE_FORCE_DIST * 2) {
          const alpha = (1 - dist / (MOUSE_FORCE_DIST * 2)) * 0.5
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.strokeStyle = `rgba(0, 255, 255, ${alpha})`
          ctx.lineWidth = 0.8
          ctx.stroke()
        }
      }

      animationId = requestAnimationFrame(draw)
    }

    animationId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  )
}
