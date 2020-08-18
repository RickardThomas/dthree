import React, {useRef, useEffect, useState} from 'react'
import {select} from 'd3';

// https://www.youtube.com/watch?v=9uEmNgHzPhQ&list=PLDZ4p-ENjbiPo4WH7KdHjh_EMI7Ic8b2B

export default function Hd3A() {

    const svgRef = useRef();

    const [data, setData] = useState([3,13,21,21,45,56]);

    useEffect(() => {

    const svg = select(svgRef.current)

    svg
    .selectAll('circle')
    .data(data)

    .join(
    enter => enter.append('circle')
    .attr('class', 'new')
    .attr('r', value => value)
    .attr('cx', value => value * 2)
    .attr('cy', value => value * 2)

    .attr('stroke', 'red'),

    update => 
        update 
        .attr('class', 'updated')
        .attr('r', value => value)
        .attr('cx', value => value * 2)
        .attr('cy', value => value * 2),
    
    exit => exit.remove(),
    
    console.log(svg)
    )
    }, [data])

    return (

      <div>
      
        <button onClick={() => setData(data.map(value => value + 5))}> update data</button>
        
        <button onClick={() => setData(data.filter(value => value < 75))}> filter data</button>

        <svg style={{width:'400px', height: '300px', background: 'whitesmoke'}} ref={svgRef}></svg>

      </div>
    )


}
