import React, { useCallback, useEffect, useMemo } from 'react';
import {
  BaseEdge,
  getBezierPath,
  useReactFlow,
  type Edge,
  type EdgeProps,
} from 'reactflow';

export type AnimatedNodeEdge = Edge & {
  data: {
    animationId: string;
    animated: boolean;
  };
};

const visitedNodes = new Set<string>();

export function AnimatedNodeEdge({
  id,
  data,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style,
  target,
  source
}: EdgeProps<AnimatedNodeEdge>) {
  const { getNode, setNodes, getEdges, setEdges } = useReactFlow();
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const animationDotId = `animated-dot-${id}`;
  const selector = useMemo(
    () => `.animated-dot[data-id="${animationDotId}"]`,
    [animationDotId],
  );

  const canTurnGreen = useCallback(() => {
    if (source === 'start') return true;
    return visitedNodes.has(source);
  }, [source]);

  const triggerNextAnimations = useCallback((nodeId: string) => {
    const edges = getEdges();
    const connectedEdges = edges.filter(edge => edge.source === nodeId);
    setEdges(edges.map(edge => {
      if (connectedEdges.includes(edge)) {
        return {
          ...edge,
          data: {
            ...edge.data,
            animated: true,
          },
        };
      }
      return edge;
    }));
  }, [getEdges, setEdges]);

  useEffect(() => {
    if (!data?.animated) return;

    const dot = document.querySelector(selector) as HTMLElement;
    if (!dot) {
      const newDot = document.createElement('div');
      newDot.className = 'animated-dot';
      newDot.setAttribute('data-id', animationDotId);
      newDot.style.width = '8px';
      newDot.style.height = '8px';
      newDot.style.backgroundColor = 'black';
      newDot.style.borderRadius = '50%';
      newDot.style.position = 'absolute';
      newDot.style.zIndex = '1000';
      document.querySelector('.react-flow__viewport')?.appendChild(newDot);
    }

    const node = document.querySelector(selector) as HTMLElement;
    if (!node) return;

    const path = `M ${sourceX},${sourceY} ${edgePath}`;
    node.style.offsetPath = `path('${path}')`;
    node.style.offsetRotate = '0deg';
    node.style.offsetAnchor = 'center';

    const animation = node.animate(
      [
        { offsetDistance: '0%' },
        { offsetDistance: '100%' }
      ],
      {
        duration: 2000,
        iterations: Infinity,
      }
    );

    const checkInterval = setInterval(() => {
      const progress = typeof animation.currentTime === 'number' ? (animation.currentTime % 2000) / 2000 : 0;
      
      if (progress > 0.95) {
        const targetNode = getNode(target);
        if (targetNode && 
            targetNode.data.backgroundColor !== '#4CAF50' && 
            canTurnGreen(target)) {
          setNodes(nodes => 
            nodes.map(node => {
              if (node.id === target) {
                visitedNodes.add(target);
                return {
                  ...node,
                  data: {
                    ...node.data,
                    backgroundColor: '#4CAF50',
                  }
                };
              }
              return node;
            })
          );
          triggerNextAnimations(target);
        }
      }
    }, 100);

    return () => {
      clearInterval(checkInterval);
      animation.cancel();
      if (node.parentNode) {
        node.remove();
      }
    };
  }, [selector, edgePath, sourceX, sourceY, target, source, data?.animated, getNode, setNodes, getEdges, setEdges, animationDotId, canTurnGreen, triggerNextAnimations]);

  return <BaseEdge id={id} path={edgePath} style={style} />;
}