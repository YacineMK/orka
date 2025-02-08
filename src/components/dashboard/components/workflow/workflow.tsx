"use client";

import { useState, useCallback } from "react";
import ReactFlow, {
  type Node,
  type Edge,
  addEdge,
  type Connection,
  MarkerType,
  ReactFlowProvider,
  Background,
  applyEdgeChanges,
  applyNodeChanges,
  type NodeChange,
  type EdgeChange,
  Panel,
} from "reactflow";
import "reactflow/dist/style.css";
import CustomNode from "./customNode";

const nodeTypes = {
  custom: CustomNode,
};

const colors = ["#5500FF", "#FB9820", "#F6684F", "#ECA9C9", "#00BFFF"];
const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

// Helper function to calculate X position based on date
const getXPositionForDate = (date: string) => {
  const baseX = 100; // Starting X position
  const daySpacing = 250; // Space between days
  const day = Number.parseInt(date.split("-")[2]);
  return baseX + (day - 1) * daySpacing;
};

// Helper function to find available Y position for a given date
const findAvailableYPosition = (
  nodes: Node[],
  date: string,
  baseY = 100,
  spacing = 100,
) => {
  const sameDataNodes = nodes.filter(
    (node) => node.data.date === date && !node.data.isStartPoint,
  );
  const usedYPositions = sameDataNodes.map((node) => node.position.y);
  let yPos = baseY;
  while (usedYPositions.includes(yPos)) {
    yPos += spacing;
  }
  return yPos;
};

const initialNodes: Node[] = [
  {
    id: "start",
    type: "custom",
    position: { x: 50, y: 200 },
    data: {
      id: "start",
      title: "Start",
      backgroundColor: "black",
      isStartPoint: true,
    },
  },
  {
    id: "1",
    type: "custom",
    position: { x: getXPositionForDate("2025-01-01"), y: 100 },
    data: {
      id: "1",
      title: "Project Planning",
      backgroundColor: getRandomColor(),
      date: "2025-01-01",
    },
  },
  {
    id: "2",
    type: "custom",
    position: { x: getXPositionForDate("2025-01-01"), y: 225 },
    data: {
      id: "2",
      title: "Resource Setup",
      backgroundColor: getRandomColor(),
      date: "2025-01-01",
    },
  },
  {
    id: "3",
    type: "custom",
    position: { x: getXPositionForDate("2025-01-02"), y: 50 },
    data: {
      id: "3",
      title: "Design Phase",
      backgroundColor: getRandomColor(),
      date: "2025-01-02",
    },
  },
  {
    id: "4",
    type: "custom",
    position: { x: getXPositionForDate("2025-01-02"), y: 175 },
    data: {
      id: "4",
      title: "Research",
      backgroundColor: getRandomColor(),
      date: "2025-01-02",
    },
  },
  {
    id: "5",
    type: "custom",
    position: { x: getXPositionForDate("2025-01-02"), y: 300 },
    data: {
      id: "5",
      title: "Requirements Analysis",
      backgroundColor: getRandomColor(),
      date: "2025-01-02",
    },
  },
  {
    id: "6",
    type: "custom",
    position: { x: getXPositionForDate("2025-01-03"), y: 150 },
    data: {
      id: "6",
      title: "Development",
      backgroundColor: getRandomColor(),
      date: "2025-01-03",
    },
  },
  {
    id: "7",
    type: "custom",
    position: { x: getXPositionForDate("2025-01-04"), y: 100 },
    data: {
      id: "7",
      title: "Testing",
      backgroundColor: getRandomColor(),
      date: "2025-01-04",
    },
  },
  {
    id: "8",
    type: "custom",
    position: { x: getXPositionForDate("2025-01-04"), y: 225 },
    data: {
      id: "8",
      title: "Documentation",
      backgroundColor: getRandomColor(),
      date: "2025-01-04",
    },
  },
];

const getEdgeStyle = (sourceNode: Node) => ({
  stroke: sourceNode.data.backgroundColor,
});

const createEdge = (
  source: string,
  target: string,
  sourceNode: Node,
): Edge => ({
  id: `e-${source}-${target}`,
  source,
  target,
  type: "step",
  markerEnd: {
    type: MarkerType.ArrowClosed,
    color: sourceNode.data.backgroundColor,
  },
  style: { ...getEdgeStyle(sourceNode), strokeWidth: 2 },
  sourceHandle: "right",
  targetHandle: "left",
  animated: true,
});

const createInitialEdges = (nodes: Node[]): Edge[] => {
  const nodeMap = new Map(nodes.map((node) => [node.id, node]));

  return [
    createEdge("start", "1", nodeMap.get("start")!),
    createEdge("start", "2", nodeMap.get("start")!),
    createEdge("start", "3", nodeMap.get("start")!),

    createEdge("3", "6", nodeMap.get("3")!),
    createEdge("4", "6", nodeMap.get("4")!),
    createEdge("5", "6", nodeMap.get("5")!),

    createEdge("6", "7", nodeMap.get("6")!),
    createEdge("6", "8", nodeMap.get("6")!),

    createEdge("1", "4", nodeMap.get("1")!),
    createEdge("2", "5", nodeMap.get("2")!),
  ];
};

const scrollbarStyles = `
  .workflow-container {
    overflow-x: scroll;
    overflow-y: hidden;
    width: 100%;
    height: 500px;
  }

  .workflow-container::-webkit-scrollbar {
    height: 8px;
    background: #f1f1f1;
  }

  .workflow-container::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }

  .workflow-container::-webkit-scrollbar-thumb:hover {
    background: #666;
  }
`;

const WorkflowInner = () => {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(createInitialEdges(initialNodes));
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
    (connection: Connection) => {
      const sourceNode = nodes.find((node) => node.id === connection.source);
      if (!sourceNode) return;

      setEdges((eds) =>
        addEdge(
          {
            ...connection,
            type: "step",
            markerEnd: {
              type: MarkerType.ArrowClosed,
              color: sourceNode.data.backgroundColor,
            },
            style: { ...getEdgeStyle(sourceNode), strokeWidth: 2 },
            sourceHandle: "right",
            targetHandle: "left",
            animated: true,
          },
          eds,
        ),
      );
    },
    [nodes],
  );

  const onNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
    if (!node.data.isStartPoint) {
      setSelectedNode(node);
    }
  }, []);

  const closePopup = useCallback(() => {
    setSelectedNode(null);
  }, []);

  // Generate calendar grid
  const calendarGrid = [];
  for (let day = 1; day <= 5; day++) {
    calendarGrid.push(
      <div
        key={`day-${day}`}
        className="absolute border-r border-gray-200 h-full"
        style={{
          left: `${getXPositionForDate(`2025-01-0${day}`)}px`,
          width: "250px", // Increased from 220px
          pointerEvents: "none",
        }}
      >
        <div className="text-sm font-medium text-gray-500 mb-2 pl-2">
          January {day}, 2025
        </div>
      </div>,
    );
  }

  return (
    <>
      <style>{scrollbarStyles}</style>
      <div className="workflow-container h-[800px]">
        <div className="relative h-[500px]" style={{ width: "1300px" }}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onNodeClick={onNodeClick}
            nodeTypes={nodeTypes}
            minZoom={0.4}
            maxZoom={2}
            defaultViewport={{ x: 0, y: 0, zoom: 0.75 }}
            fitView
            preventScrolling={true}
            zoomOnScroll={false}
            panOnScroll={false}
            selectionOnDrag={false}
          >
            <Background />
            {calendarGrid}
          </ReactFlow>
          {selectedNode && (
            <div className="absolute top-0 left-0 w-full h-full bg-black/15 flex items-center justify-center">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <h2 className="text-lg font-bold mb-2 text-black">
                  {selectedNode.data.title}
                </h2>
                <p className="text-black font-bold">
                  Date:{" "}
                  <span className="font-normal">{selectedNode.data.date}</span>
                </p>
                {selectedNode.data.resources && (
                  <p className="text-black font-bold">
                    Resources:{" "}
                    <span className="font-normal">
                      {selectedNode.data.resources}
                    </span>
                  </p>
                )}
                {selectedNode.data.executionTime && (
                  <p className="text-black font-bold">
                    Execution Time:{" "}
                    <span className="font-normal">
                      {selectedNode.data.executionTime}
                    </span>
                  </p>
                )}
                {selectedNode.data.cost && (
                  <p className="text-black font-bold">
                    Cost:{" "}
                    <span className="font-normal">
                      {selectedNode.data.cost}
                    </span>
                  </p>
                )}
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
      </div>
    </>
  );
};

const FlowDiagram = () => (
  <ReactFlowProvider>
    <WorkflowInner />
  </ReactFlowProvider>
);

export default FlowDiagram;
