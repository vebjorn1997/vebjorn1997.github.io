import { Node, Position } from "@xyflow/react"

const nodes: Node[] = [
    {
        id: 'root',
        type: 'mindmap',
        data: { 
          label: 'Mass Surveillance',
          description: 'Mass surveillance in the United States has expanded far beyond its stated purpose of national security, evolving into a system that collects, analyzes, and stores the data of millions of people—often without their knowledge or meaningful oversight. While originally framed as a counterterrorism measure following 9/11, these surveillance programs increasingly blur the line between foreign intelligence gathering and domestic monitoring. The result is a growing threat to civil liberties, as constant data collection normalizes government intrusion into private life and undermines democratic accountability.'
        },
        position: { x: 0, y: 0 },
        style: {
            backgroundColor: 'yellow',
            border: '1px solid black',
            borderRadius: 1,
        }
    },
    {
        id: 'history-of-mass-surveillance',
        type: 'mindmap',
        data: { label: 'History of Mass Surveillance' },
        position: { x: 200, y: 100 },
        style: {
          backgroundColor: 'orange',
          border: '1px solid black',
          borderRadius: 10,
        },
    },
    {
        id: 'early-history-pre-911',
        type: 'mindmap',
        data: { label: 'Early History pre 9/11' },
        position: { x: 350, y: 200 },
        style: {
          backgroundColor: 'orange',
          border: '1px solid black',
          borderRadius: 10,
        },
    },
    {
        id: 'post-911',
        type: 'mindmap',
        data: { label: 'Post 9/11' },
        position: { x: 50, y: 200 },
        style: {
          backgroundColor: 'orange',
          border: '1px solid black',
          borderRadius: 10,
        },
    },
    {
        id: 'justifications-for-surveillance',
        type: 'mindmap',
        data: { label: 'Justifications for Surveillance' },
        position: { x: -200, y: -100 },
        style: {
          backgroundColor: 'lightblue',
          border: '1px solid black',
          borderRadius: 10,
        },
    },
    {
        id: 'benefits',
        type: 'mindmap',
        data: { label: 'Benefits' },
        position: { x: -400, y: -25 },
        style: {
          backgroundColor: 'lightblue',
          border: '1px solid black',
          borderRadius: 10,
        },
    },
    {
        id: 'snowden-revelations',
        type: 'mindmap',
        data: { label: 'Snowden Revelations' },
        position: { x: 200, y: -100 },
        style: {
          backgroundColor: 'pink',
          border: '1px solid black',
          borderRadius: 10,
        },
    },
    {
        id: 'path-to-authoritarianism',
        type: 'mindmap',
        data: { label: 'Path to Authoritarianism' },
        position: { x: -200, y: 100 },
        style: {
          backgroundColor: 'lightgreen',
          border: '1px solid black',
          borderRadius: 10,
        },
    },
    // {
    //     id: 'surveillance-types',
    //     type: 'mindmap',
    //     data: { label: 'Surveillance Types' },
    //     position: { x: 100, y: 100 },
    //     style: {
    //       backgroundColor: 'beige',
    //       border: '1px solid black',
    //       borderRadius: 10,
    //     },
    // },
    // {
    //     id: 'nsa-mass-surveillance-post-911',
    //     type: 'mindmap',
    //     data: { label: 'NSA Mass Surveillance (post 9/11)' },
    //     position: { x: -100, y: 100 },
    //     style: {
    //       backgroundColor: 'beige',
    //       border: '1px solid black',
    //       borderRadius: 10,
    //     },
    // },
]
export const finalizedNodes = [
    ...nodes,
    ...nodes.map(node => ({ ...node, draggable: false })),
]