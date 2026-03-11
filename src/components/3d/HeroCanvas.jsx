import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei'
import * as THREE from 'three'

function NeuralNodes({ count = 60 }) {
  const refs = useRef([])
  const positions = useMemo(() => {
    const pos = []
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 1.4 + Math.random() * 0.8
      pos.push([
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi),
      ])
    }
    return pos
  }, [count])

  useFrame((state) => {
    refs.current.forEach((ref, i) => {
      if (ref) {
        ref.position.y = positions[i][1] + Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.05
      }
    })
  })

  return (
    <>
      {positions.map((pos, i) => (
        <mesh
          key={i}
          ref={(el) => (refs.current[i] = el)}
          position={pos}
        >
          <sphereGeometry args={[0.025, 8, 8]} />
          <meshStandardMaterial
            color={i % 3 === 0 ? '#00FFFF' : '#0066FF'}
            emissive={i % 3 === 0 ? '#00FFFF' : '#0066FF'}
            emissiveIntensity={2}
          />
        </mesh>
      ))}
    </>
  )
}

function ConnectionLines({ count = 60 }) {
  const positions = useMemo(() => {
    const pts = []
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 1.4 + Math.random() * 0.8
      pts.push(new THREE.Vector3(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      ))
    }
    return pts
  }, [count])

  const lineGeometries = useMemo(() => {
    const lines = []
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        if (positions[i].distanceTo(positions[j]) < 0.9) {
          lines.push([positions[i], positions[j]])
        }
      }
    }
    return lines.slice(0, 80)
  }, [positions])

  return (
    <>
      {lineGeometries.map((pts, i) => {
        const geometry = new THREE.BufferGeometry().setFromPoints(pts)
        return (
          <line key={i} geometry={geometry}>
            <lineBasicMaterial
              color="#0066FF"
              transparent
              opacity={0.25}
            />
          </line>
        )
      })}
    </>
  )
}

function AISphere() {
  const meshRef = useRef()
  const outerRingRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
    if (outerRingRef.current) {
      outerRingRef.current.rotation.z = state.clock.elapsedTime * 0.3
      outerRingRef.current.rotation.x = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <group ref={meshRef}>
      {/* Core distorted sphere */}
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
        <Sphere args={[1.0, 64, 64]}>
          <MeshDistortMaterial
            color="#0033AA"
            emissive="#001166"
            emissiveIntensity={1}
            distort={0.3}
            speed={2}
            roughness={0.1}
            metalness={0.8}
            transparent
            opacity={0.85}
          />
        </Sphere>
      </Float>

      {/* Inner glow core */}
      <Sphere args={[0.5, 32, 32]}>
        <meshStandardMaterial
          color="#00FFFF"
          emissive="#00FFFF"
          emissiveIntensity={3}
          transparent
          opacity={0.4}
        />
      </Sphere>

      {/* Neural nodes and connections */}
      <NeuralNodes count={50} />
      <ConnectionLines count={50} />

      {/* Orbital rings */}
      <group ref={outerRingRef}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.7, 0.015, 8, 100]} />
          <meshStandardMaterial
            color="#0066FF"
            emissive="#0066FF"
            emissiveIntensity={2}
            transparent
            opacity={0.6}
          />
        </mesh>
        <mesh rotation={[Math.PI / 3, Math.PI / 6, 0]}>
          <torusGeometry args={[1.9, 0.01, 8, 100]} />
          <meshStandardMaterial
            color="#00FFFF"
            emissive="#00FFFF"
            emissiveIntensity={1.5}
            transparent
            opacity={0.4}
          />
        </mesh>
      </group>
    </group>
  )
}

export default function HeroCanvas() {
  return (
    <div className="w-full h-full three-canvas-container">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={1.5} color="#0066FF" />
        <pointLight position={[-5, -5, -5]} intensity={0.8} color="#00FFFF" />
        <pointLight position={[0, 0, 3]} intensity={2} color="#0044ff" />

        <Stars radius={60} depth={30} count={1500} factor={2} saturation={0.8} fade speed={0.5} />

        <AISphere />
      </Canvas>
    </div>
  )
}
