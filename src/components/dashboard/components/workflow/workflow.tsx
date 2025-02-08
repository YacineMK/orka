"use client";

import type React from "react";
import { useState, useCallback, useEffect } from "react";
import ReactFlow, {
  type Node,
  type Edge,
  addEdge,
  type Connection,
  MarkerType,
  ReactFlowProvider,
  useReactFlow,
  Background,
  Controls,
  applyEdgeChanges,
  applyNodeChanges,
  NodeChange,
  EdgeChange,
} from "reactflow";
import "reactflow/dist/style.css";
import CustomNode from "./customNode";

const nodeTypes = {
  custom: CustomNode,
};

const colors = ["#5500FF", "#FB9820", "#F6684F", "#ECA9C9", "#00BFFF"];

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const initialNodes: Node[] = [
  {
    id: "1",
    type: "custom",
    position: { x: 0, y: 50 },
    data: {
      id: "1",
      title: "Task 1",
      resources: "Team A",
      executionTime: "2 days",
      cost: "$1000",
      backgroundColor: getRandomColor(),
    },
  },
  {
    id: "2",
    type: "custom",
    position: { x: 200, y: 150 },
    data: {
      id: "2",
      title: "Task 2",
      resources: "Team B",
      executionTime: "3 days",
      cost: "$1500",
      backgroundColor: getRandomColor(),
    },
  },
  {
    id: "3",
    type: "custom",
    position: { x: 400, y: 250 },
    data: {
      id: "3",
      title: "Task 3",
      resources: "Team C",
      executionTime: "1 day",
      cost: "$500",
      backgroundColor: getRandomColor(),
    },
  },
  {
    id: "4",
    type: "custom",
    position: { x: 200, y: 350 },
    data: {
      id: "4",
      title: "Task 4",
      resources: "Team D",
      executionTime: "4 days",
      cost: "$2000",
      backgroundColor: getRandomColor(),
    },
  },
  {
    id: "5",
    type: "custom",
    position: { x: 400, y: 450 },
    data: {
      id: "5",
      title: "Task 5",
      resources: "Team E",
      executionTime: "5 days",
      cost: "$2500",
      backgroundColor: getRandomColor(),
    },
  },
];

const initialEdges: Edge[] = [
  {
    id: "e1-4",
    source: "1",
    target: "4",
    type: "smoothstep",
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: "e2-4",
    source: "2",
    target: "4",
    type: "smoothstep",
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
    type: "smoothstep",
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: "e4-7",
    source: "4",
    target: "7",
    type: "smoothstep",
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: "e5-7",
    source: "5",
    target: "7",
    type: "smoothstep",
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: "e6-7",
    source: "6",
    target: "7",
    type: "smoothstep",
    markerEnd: { type: MarkerType.ArrowClosed },
  },
];

const Workflow: React.FC = () => {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);
  const { setCenter } = useReactFlow();
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes((nds) => applyNodeChanges(changes, nds)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((eds) => applyEdgeChanges(changes, eds)),
    [],
  );
  const onConnect = useCallback(
    (connection: Connection) =>
      setEdges((eds) => addEdge({ ...connection, type: "smoothstep" }, eds)),
    [],
  );

  const onNodeClick = useCallback(
    (event: React.MouseEvent, node: Node) => {
      setSelectedNode(node);
      setCenter(node.position.y, node.position.y, { duration: 800 });
    },
    [setCenter],
  );

  const closePopup = useCallback(() => {
    setSelectedNode(null);
  }, []);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <ReactFlowProvider>
      {isClient ? (
        <div className="relative w-full h-[500px]" style={{ width: "900px" }}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onNodeClick={onNodeClick}
            nodeTypes={nodeTypes}
            minZoom={0.5} // Set minimum zoom level
            maxZoom={2} // Set maximum zoom level
          >
            <Background />
            <Controls />
          </ReactFlow>
          {selectedNode && (
            <div className="absolute top-0 left-0 w-full h-full bg-black/15 flex items-center justify-center">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <h2 className="text-lg font-bold mb-2 text-black">
                  {selectedNode.data.title}
                </h2>
                <p className="text-black font-bold">
                  Resources:{" "}
                  <span className="font-normal">
                    {selectedNode.data.resources}
                  </span>
                </p>
                <p className="text-black font-bold">
                  Execution Time:{" "}
                  <span className="font-normal">
                    {selectedNode.data.executionTime}
                  </span>
                </p>
                <p className="text-black font-bold">
                  Cost:{" "}
                  <span className="font-normal">{selectedNode.data.cost}</span>
                </p>
                <button
                  onClick={closePopup}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      ) : null}
    </ReactFlowProvider>
  );
};

export { Workflow };
const FlowDiagram: React.FC = () => (
  <ReactFlowProvider>
    <Workflow />
  </ReactFlowProvider>
);

export default FlowDiagram;
