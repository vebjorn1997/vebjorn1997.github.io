import { Edge } from "@xyflow/react";

const edges_raw: Edge[] = [
    {
        id: 'e1',
        source: 'root',
        target: 'history-of-mass-surveillance'
    },
    {
        id: 'e2',
        source: 'history-of-mass-surveillance',
        target: 'early-history-pre-911'
    },
    {
        id: 'e3',
        source: 'history-of-mass-surveillance',
        target: 'post-911',
    },
    {
        id: 'e4',
        source: 'root',
        target: 'justifications-for-surveillance',
    },
    {
        id: 'e5',
        source: 'root',
        target: 'path-to-authoritarianism',
    },
    {
        id: 'e6',
        source: 'justifications-for-surveillance',
        target: 'benefits',
    },
    {
        id: 'e7',
        source: 'root',
        target: 'snowden-revelations',
    },
]

export const edges = [
    ...edges_raw,
    ...edges_raw.map(edge => ({ ...edge, style: { stroke: 'red' } })),
]