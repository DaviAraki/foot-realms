import { useD3 } from "../../hooks/useD3";
import React from "react";
import * as d3 from "d3";

function TrendlineChart({ data }) {
  const ref = useD3(
    (svg) => {
      const height = 500;
      const width = 500;
      const margin = { top: 20, right: 30, bottom: 30, left: 40 };

      svg
        .select("body")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      svg.append("g").attr("class", "y axis");

      svg.append("g").attr("class", "y axis");

      const xScale = d3.scale
        .ordinal()
        .rangeRoundBands([margin.left, width], 0.1);

      const yScale = d3.scale.linear().range([height, 0]);

      const xAxis = d3.svg.axis().scale(xScale).orient("bottom");

      const yAxis = d3.svg.axis().scale(yScale).orient("left");

      const x = d3
        .scaleUtc()
        .domain(d3.extent(data, (d) => d.turn))
        .range([margin.left, width - margin.right]);

      const y = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.strength)])
        .nice()
        .range([height - margin.bottom, margin.top]);

      const line = d3
        .line()
        .defined((d) => !isNaN(d.strength))
        .x((d) => x(d.turn))
        .y((d) => y(d.strength));

      svg.select(".x-axis").call(xAxis);
      svg.select(".y-axis").call(yAxis);
    },
    [data.length]
  );
  return (
    <svg
      ref={ref}
      style={{
        height: 500,
        width: "100%",
        marginRight: "0px",
        marginLeft: "0px",
      }}
    >
      <g className="plot-area" />
      <g className="x-axis" />
      <g className="y-axis" />
    </svg>
  );
}
export default TrendlineChart;
