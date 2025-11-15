import {
    Edge,
    EdgeChange,
    Node,
    NodeChange,
    OnNodesChange,
    OnEdgesChange,
    applyNodeChanges,
    applyEdgeChanges,
  } from '@xyflow/react';
  import { createWithEqualityFn } from 'zustand/traditional';
  import { finalizedNodes } from './nodes';
  import { edges } from './edges';

  export type RFState = {
    nodes: Node[];
    edges: Edge[];
    onNodesChange: OnNodesChange;
    onEdgesChange: OnEdgesChange;
  };

  const useStore = createWithEqualityFn<RFState>((set, get) => ({
    nodes: [
        ...finalizedNodes,
    ],
    edges: [
      ...edges,
    ],
    onNodesChange: (changes: NodeChange[]) => {
      set({
        nodes: applyNodeChanges(changes, get().nodes),
      });
    },
    onEdgesChange: (changes: EdgeChange[]) => {
      set({
        edges: applyEdgeChanges(changes, get().edges),
      });
    },
  }));
   
  export default useStore;