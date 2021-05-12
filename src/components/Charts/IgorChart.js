import { useD3 } from "../../hooks/useD3";
import React from "react";
import * as d3 from "d3";

function IgorChart({ data }) {
  const ref = useD3(
    (svg) => {
      const height = 500;
      const width = 500;
      const margin = { top: 20, right: 30, bottom: 30, left: 40 };

      var x = d3
        .scaleTime()
        .domain(
          d3.extent(data, function (d) {
            return d.turn;
          })
        )
        .rangeRound([margin.left, width - margin.right]);

      const y1 = d3
        .scaleLinear()
        .domain([
          d3.min(data, (d) => d.strength),
          d3.max(data, (d) => d.strength),
        ])
        .rangeRound([height - margin.bottom, margin.top]);

      const xAxis = (g) =>
        g.attr("transform", `translate(0,${height - margin.bottom})`).call(
          d3
            .axisBottom(x)
            .tickValues(
              d3
                .ticks(...d3.extent(x.domain()), width / 40)
                .filter((v) => x(v) !== undefined)
            )
            .tickSizeOuter(0)
        );

      const y1Axis = (g) =>
        g
          .attr("transform", `translate(${margin.left},0)`)
          .style("color", "steelblue")
          .call(d3.axisLeft(y1).ticks(null, "s"))
          .call((g) => g.select(".domain").remove())
          .call((g) =>
            g
              .append("text")
              .attr("x", -margin.left)
              .attr("y", 10)
              .attr("fill", "currentColor")
              .attr("text-anchor", "start")
              .text(data.y1)
          );

      svg.select(".x-axis").call(xAxis);
      svg.select(".y-axis").call(y1Axis);

      var Tooltip = d3
        .select("#my_dataviz")
        .append("div")
        .style("opacity", 0)
        .attr("class", "tooltip")
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "2px")
        .style("border-radius", "5px")
        .style("padding", "5px");

      // Three function that change the tooltip when user hover / move / leave a cell
      var mouseover = function (d) {
        Tooltip.style("opacity", 1);
      };
      var mousemove = function (d) {
        Tooltip.html("Exact value: " + d.strength)
          .style("left", d3.pointer(this)[0] + 70 + "px")
          .style("top", d3.pointer(this)[1] + "px");
      };
      var mouseleave = function (d) {
        Tooltip.style("opacity", 0);
      };

      svg
        .select(".plot-area")
        .select("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "orange")
        .attr("stroke-width", 1.5)
        .attr(
          "d",
          d3
            .line()
            .curve(d3.curveBasis) // Just add that to have a curve instead of segments
            .x(function (d) {
              return x(d.turn);
            })
            .y(function (d) {
              return y1(d.strength);
            })
        );
      svg.selectAll("circle").remove();

      svg
        .selectAll("dot")
        .data(data)
        .enter()
        .append("circle")
        .attr("class", "myCircle")
        .attr("cx", function (d) {
          return x(d.turn);
        })
        .attr("cy", function (d) {
          return y1(d.strength);
        })
        .attr("r", 2)
        .attr("stroke", "#69b3a2")
        .attr("stroke-width", 0)
        .attr("fill", "yellow")
        .on("mouseover", mouseover)
        .on("mousemove", mousemove)
        .on("mouseleave", mouseleave);
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
      <g className="plot-area">
        <path />{" "}
      </g>
      <g className="x-axis" />
      <g className="y-axis" />
    </svg>
  );
}

export default IgorChart;
