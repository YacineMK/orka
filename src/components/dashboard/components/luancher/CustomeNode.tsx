import type React from "react"
import { Handle, Position, type NodeProps } from "reactflow"

interface CustomNodeData {
  id: string
  title: string
  resources?: string
  executionTime?: string
  cost?: string
  backgroundColor: string
  isStartPoint?: boolean
  date?: string
}

const CustomNode: React.FC<NodeProps<CustomNodeData>> = ({ data, isConnectable, selected }) => {
  if (data.isStartPoint) {
    return (
      <div
        className={`rounded-full ${selected ? "ring-2 ring-blue-500" : ""}`}
        style={{
          width: "12px",
          height: "12px",
          backgroundColor: "black",
        }}
      >
        <Handle type="source" position={Position.Right} isConnectable={isConnectable} style={{ right: -3 }} />
      </div>
    )
  }

  return (
    <div
      className={`p-2 rounded-xl border ${selected ? "border-blue-700" : "border-transparent"} w-56 text-xs transition-all duration-300 hover:shadow-lg`}
      style={{
        backgroundColor: data.backgroundColor,
        minHeight: "36px",
        filter: "brightness(1.1)",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Handle type="target" position={Position.Left} isConnectable={isConnectable} style={{ left: -3, top: "50%" }} />
      <div className="node-content">
        <h3 className="text-sm font-medium text-white">{data.title}</h3>
        {data.date && <p className="text-white/80 text-xs mt-1">{data.date}</p>}
      </div>
      <Handle type="source" position={Position.Right} isConnectable={isConnectable} style={{ right: -3, top: "50%" }} />
    </div>
  )
}

export default CustomNode

