import React, {useRef, useState} from 'react'
import * as d3 from 'd3'

// https://www.d3-graph-gallery.com/graph/pie_changeData.html

export default function Dthree() {

const svgRef = useRef() 

var data1 = {a: 9, b: 20, c:30, d:8, e:12}
var data2 = {a: 6, b: 16, c:20, d:14, e:19, f:12}

const [data, setdata] = useState({a: 9, b: 20, c:30, d:8, e:12})

const svg = d3.select(svgRef.current)

let width = 250
let height = 250
let margin = 50

var radius = Math.min(width, height) / 2 - margin

svg
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var color = d3.scaleOrdinal()
  .domain(["a", "b", "c", "d", "e", "f"])
  .range(d3.schemeDark2);

    const pie = d3.pie()
    .value(function(d) {return d.value; })
    .sort(function(a, b) { console.log(a) ; return d3.ascending(a.key, b.key);} ) // This make sure that group order remains the same in the pie chart
  var data_ready = pie(d3.entries(data))

  var u = svg.selectAll("path")
    .data(data_ready)

  u
    .enter()
    .append('path')
    .merge(u)
    .transition()
    .duration(1000)
    .attr('d', d3.arc()
      .innerRadius(0)
      .outerRadius(radius)
    )
    .attr('fill', function(d){ return(color(d.data.key)) })
    .attr("stroke", "white")
    .style("stroke-width", "2px")
    .style("opacity", 1)

  u
    .exit()
    .remove()

    return (

<div>

<div>
<button onClick={()=>setdata(data1)}>Data 1</button>
<button onClick={()=>setdata(data2)}>Data 2</button>
</div>

<svg style={{background: 'teal', textAlign: 'center'}} ref={svgRef}></svg>

</div>

    )}

