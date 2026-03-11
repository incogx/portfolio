import { useCallback } from 'react'
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Background,
  Controls,
  MiniMap,
} from 'reactflow'
import 'reactflow/dist/style.css'

const nodeStyle = (color) => ({
  background: `rgba(6, 18, 36, 0.9)`,
  border: `1px solid ${color}`,
  borderRadius: '12px',
  padding: '12px 16px',
  color: '#e2e8f0',
  fontFamily: 'Inter, sans-serif',
  fontSize: '13px',
  fontWeight: 600,
  boxShadow: `0 0 20px ${color}30`,
  minWidth: '160px',
  textAlign: 'center',
})

const initialNodes = [
  {
    id: '1',
    position: { x: 300, y: 0 },
    data: {
      label: (
        <div>
          <div style={{ fontSize: '22px', marginBottom: '4px' }}>🌾</div>
          <div>Organic Waste</div>
          <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '2px' }}>Agricultural input</div>
        </div>
      ),
    },
    style: nodeStyle('#00C851'),
  },
  {
    id: '2',
    position: { x: 100, y: 160 },
    data: {
      label: (
        <div>
          <div style={{ fontSize: '22px', marginBottom: '4px' }}>🪲</div>
          <div>BSFL Processing</div>
          <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '2px' }}>Protein + frass output</div>
        </div>
      ),
    },
    style: nodeStyle('#f59e0b'),
  },
  {
    id: '3',
    position: { x: 500, y: 160 },
    data: {
      label: (
        <div>
          <div style={{ fontSize: '22px', marginBottom: '4px' }}>📡</div>
          <div>IoT Monitoring</div>
          <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '2px' }}>Temperature, humidity, pH</div>
        </div>
      ),
    },
    style: nodeStyle('#0066FF'),
  },
  {
    id: '4',
    position: { x: 100, y: 320 },
    data: {
      label: (
        <div>
          <div style={{ fontSize: '22px', marginBottom: '4px' }}>🍄</div>
          <div>Mushroom Mycelium</div>
          <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '2px' }}>Substrate cultivation</div>
        </div>
      ),
    },
    style: nodeStyle('#8b5cf6'),
  },
  {
    id: '5',
    position: { x: 300, y: 480 },
    data: {
      label: (
        <div>
          <div style={{ fontSize: '22px', marginBottom: '4px' }}>🧪</div>
          <div>Bioplastic Production</div>
          <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '2px' }}>Biodegradable polymers</div>
        </div>
      ),
    },
    style: nodeStyle('#00FFFF'),
  },
  {
    id: '6',
    position: { x: 300, y: 640 },
    data: {
      label: (
        <div>
          <div style={{ fontSize: '22px', marginBottom: '4px' }}>♻️</div>
          <div>Circular Economy Output</div>
          <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '2px' }}>Zero-waste closed loop</div>
        </div>
      ),
    },
    style: nodeStyle('#00C851'),
  },
]

const initialEdges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    animated: true,
    style: { stroke: '#00C851', strokeWidth: 2 },
    label: 'Feed',
    labelStyle: { fill: '#94a3b8', fontSize: 11 },
    labelBgStyle: { fill: '#020408' },
  },
  {
    id: 'e1-3',
    source: '1',
    target: '3',
    animated: true,
    style: { stroke: '#0066FF', strokeWidth: 2 },
    label: 'Monitor',
    labelStyle: { fill: '#94a3b8', fontSize: 11 },
    labelBgStyle: { fill: '#020408' },
  },
  {
    id: 'e2-4',
    source: '2',
    target: '4',
    animated: true,
    style: { stroke: '#f59e0b', strokeWidth: 2 },
    label: 'Substrate',
    labelStyle: { fill: '#94a3b8', fontSize: 11 },
    labelBgStyle: { fill: '#020408' },
  },
  {
    id: 'e3-2',
    source: '3',
    target: '2',
    style: { stroke: '#0066FF', strokeWidth: 1.5, strokeDasharray: '5 5' },
  },
  {
    id: 'e4-5',
    source: '4',
    target: '5',
    animated: true,
    style: { stroke: '#8b5cf6', strokeWidth: 2 },
    label: 'Mycelium bind',
    labelStyle: { fill: '#94a3b8', fontSize: 11 },
    labelBgStyle: { fill: '#020408' },
  },
  {
    id: 'e5-6',
    source: '5',
    target: '6',
    animated: true,
    style: { stroke: '#00FFFF', strokeWidth: 2 },
    label: 'Output',
    labelStyle: { fill: '#94a3b8', fontSize: 11 },
    labelBgStyle: { fill: '#020408' },
  },
  {
    id: 'e6-1',
    source: '6',
    target: '1',
    animated: true,
    style: { stroke: '#00C851', strokeWidth: 2, strokeDasharray: '6 3' },
    label: 'Back to farm',
    labelStyle: { fill: '#94a3b8', fontSize: 11 },
    labelBgStyle: { fill: '#020408' },
  },
]

export default function BioLoopDiagram() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  )

  return (
    <div className="w-full h-[600px] rounded-2xl overflow-hidden border border-[rgba(0,200,80,0.2)] bg-[rgba(2,4,8,0.8)]">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        attributionPosition="bottom-left"
      >
        <Background color="#0066FF" gap={32} size={1} style={{ opacity: 0.08 }} />
        <Controls style={{ background: 'rgba(6,18,36,0.9)', border: '1px solid rgba(0,102,255,0.3)' }} />
        <MiniMap
          nodeColor={(n) => n.style?.boxShadow?.includes('#00C851') ? '#00C851' : '#0066FF'}
          style={{ background: 'rgba(6,18,36,0.9)', border: '1px solid rgba(0,102,255,0.2)' }}
        />
      </ReactFlow>
    </div>
  )
}
