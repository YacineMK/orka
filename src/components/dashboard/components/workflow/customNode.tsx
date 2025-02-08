import React from "react";
import { Handle, Position, NodeProps } from "reactflow";

interface CustomNodeData {
  id: string;
  title: string;
  resources: string;
  executionTime: string;
  cost: string;
  backgroundColor: string; // Add backgroundColor to the data interface
}

const CustomNode: React.FC<NodeProps<CustomNodeData>> = ({
  data,
  isConnectable,
  selected,
}) => {
  return (
    <div
      className={`p-2 rounded-xl border-2 ${selected ? "border-blue-700" : "border-blue-500"} w-56 text-xs text-center cursor-pointer transition-all duration-300 hover:shadow-lg`}
      style={{ backgroundColor: data.backgroundColor, height: "60px" }} // Apply background color and adjust height
    >
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <div className="node-content">
        <h3 className="mb-1 text-sm font-medium text-white">{data.title}</h3>
        <p className="text-gray-200">Duration: {data.executionTime}</p>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={isConnectable}
      />
    </div>
  );
};

export default CustomNode;
