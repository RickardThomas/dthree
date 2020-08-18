import React from 'react'
import * as d3 from 'd3'

export default function Dthree() {

    const blue =  d3.schemeBlues.map( n => n.map( y => console.log(y)  ))

    console.log(d3.color )

    // d3.scaleUtc
    // d3.axisTop

    console.log(d3.axisTop(1,1))
    
    return (

<div>

    <svg
    x={100} 
    y={10} 
    width={300} 
    height={600}
    fill={'yellow'}
    /> 

</div>

    )}
