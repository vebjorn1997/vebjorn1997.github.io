import { Node } from "@xyflow/react"

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
        data: { 
          label: 'History of Mass Surveillance',
          description: 'American surveillance practices began expanding during the mid-20th century, particularly under President Roosevelt, when intelligence agencies started collecting domestic communications from journalists, politicians, and activists. This unchecked surveillance led to congressional action in 1978 through the Foreign Intelligence Surveillance Act (FISA), which sought to protect Fourth Amendment rights while permitting foreign intelligence gathering. However, the attacks of 9/11 initiated a dramatic shift: the Patriot Act weakened FISA’s limitations, empowering the government to pursue broad, indiscriminate “collect it all” data collection that erased longstanding boundaries between domestic and foreign surveillance.'
        },
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
        data: { 
          label: 'Early History pre 9/11',
          description: 'Mass surveillance in the United States has its roots in the mid-20th century, when intelligence agencies gradually expanded their reach into domestic communications under the justification of national security. During the Roosevelt era, programs such as Project MINARET secretly collected radio and telegram messages from journalists, lawmakers, and activists, violating Fourth Amendment protections without public knowledge or oversight. These abuses eventually prompted Congress to enact the Foreign Intelligence Surveillance Act (FISA) in 1978, which sought to draw a clear boundary between foreign intelligence gathering and domestic criminal investigations. Although FISA introduced requirements like probable cause and judicial review, the pre-9/11 era still saw a steady growth in electronic surveillance capabilities, laying the technological and institutional groundwork for much broader intrusion in the decades to come.'
        },
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
        data: { 
          label: 'Post 9/11',
          description: 'After the terrorist attacks of September 11, 2001, the United States shifted dramatically from targeted intelligence collection to widespread mass surveillance. The Patriot Act reshaped and weakened key provisions of FISA, broadening executive authority and introducing vague language that allowed surveillance to proceed as long as foreign intelligence was a “significant purpose,” rather than the primary one. This change enabled the government to collect data on vast numbers of people without individualized suspicion, embracing a “collect it all” mentality in which every citizen became a potential threat. The blurring of lines between foreign and domestic monitoring paved the way for expansive programs such as PRISM, normalizing continuous data collection and deeply altering the balance between national security and constitutional privacy rights.'
        },
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
        data: { 
          label: 'Justifications for Surveillance',
          description: 'Supporters of mass surveillance argue that broad data collection is essential for preventing terrorism, noting increased public willingness after 9/11 to accept such measures in the name of safety. Scholars like Conrey and Haney claim surveillance deters attacks and is supported by the logic that “if you have nothing to hide, you have nothing to fear.” In contrast, analyses of Chinese public opinion show that surveillance support there stems from a desire for social stability rather than fear of terrorism. Critics counter that while limited, anonymized surveillance can benefit public health or disaster response, indiscriminate data collection—like PRISM—lacks purpose, oversight, and proportionality, making it incompatible with democratic values.'
        },
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
        data: { 
          label: 'Benefits',
          description: ''
        },
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
        data: { 
          label: 'Snowden Revelations',
          description: 'The 2013 Snowden disclosures exposed the true scope of U.S. mass surveillance, revealing that programs like PRISM allowed the National Security Agency to collect massive amounts of digital metadata from private corporations under the guise of targeting foreigners. Because internet traffic routinely crosses international borders, the NSA effectively gained access to American communications while claiming otherwise, raising serious constitutional concerns. These revelations also showed that domestic law enforcement agencies routinely used NSA databases for warrantless searches, fostering an atmosphere of self-censorship and highlighting how national security tools had quietly morphed into mechanisms of domestic monitoring.'
        },
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
        data: { 
          label: 'Path to Authoritarianism',
          description: 'Mass surveillance creates the conditions for a gradual slide toward authoritarianism, even within liberal democracies. Countries like Russia demonstrate how easily surveillance tools can be repurposed to suppress dissent, especially once public normalization of such technologies lowers political resistance. Scholars warn that Western democracies possess surveillance capabilities rivaling or surpassing those of authoritarian states, and that historical examples like the Weimar Republic show how democratic erosion often begins from within. As surveillance becomes more embedded in daily life through both government and corporate systems, the United States risks drifting toward authoritarian control if these technologies remain unchecked.'
        },
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