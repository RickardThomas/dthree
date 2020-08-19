import React, { useEffect } from "react";
import * as d3 from "d3";

// A function that takes data and draw a chart in barplotVizDiv with it
const createBarChart = data => {
  // set the dimensions and margins of the graph
  var margin = { top: 30, right: 30, bottom: 70, left: 60 },
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

  const svg = d3
    .select(".barplotVizDiv")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // Add the X axis
  const x = d3
    .scaleBand()
    .range([0, width])
    .domain(data.map(d => d.group))
    .padding(0.2);
  svg
    .append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // Add Y axis
  const y = d3
    .scaleLinear()
    .domain([0, 20])
    .range([height, 0]);
  svg.append("g").call(d3.axisLeft(y));

  // Add the bars
  svg
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", d => x(d.group))
    .attr("y", d => y(d.value))
    .attr("width", x.bandwidth())
    .attr("height", d => height - y(d.value))
    .attr("fill", "#69b3a2");
};

export const Barplot = props => {
  
  // A hook that redraws the chart each time the dataset changes
  useEffect(() => {
    createBarChart(props.data);
  }, [props.data]);

  return  <Barplot />
};