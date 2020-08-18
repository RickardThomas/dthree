
import * as d3 from 'd3'

import React, {useRef} from 'react'

export default function Dthree() {


    const svgRef = useRef() 

    console.log(d3.pie())
    
    return (

<div>



<svg 
    style={{width:'400px', 
    height: '300px', 
    background: 'slategrey'}} 
    ref={svgRef}></svg>

</div>

    )}
