import React from "react";
import { scaleLinear, axisLeft, axisBottom, select, line, text } from "d3";

function sortNumber(a, b) {
  return a - b;
}

const newData = [];
const newData1 = [];
const newData2 = [];
const newData3 = [];
const newData4 = [];
const newData5 = [];
const newData6 = [];
const newData7 = [];

export default class ScatterPlot extends React.Component {
  render() {
    const margin = { top: 20, right: 15, bottom: 60, left: 60 };
    const width = 800 - margin.left - margin.right;
    const height = 800 - margin.top - margin.bottom;
    const data = this.props.data;
    const data2 = this.props.data2;
    const data3 = this.props.data3;
    const data4 = this.props.data4;
    const data5 = this.props.data5;
    const data6 = this.props.data6;
    const data7 = this.props.data7;
    const data8 = this.props.data8;

    const x = scaleLinear().domain([0, 30]).range([0, width]);

    const y = scaleLinear().domain([0, 51]).range([height, 0]);

    return (
      <div>
        <svg
          width={width + margin.right + margin.left + 220}
          height={height + margin.top + margin.bottom + 20}
          className="chart"
          style={{ backgroundColor: "white" }}
        >
          
          <g
            transform={`translate(${margin.left+40}  ,  ${margin.top} )`}
            width={width}
            height={height}
            className="main"
          >
            <Legend
              x={800}
              y={30}
              style={{ fill: "red" }}
              teamName={"Player"}
            />
            <RenderCircles
              data={data}
              scale={{ x, y }}
              style={{ fill: "red" }}
            />
            <TrendLine data={data} scale={{ x, y }} stroke={"red"} />
            <ConnectDots
              data={data}
              scale={{ x, y }}
              connectLines={newData}
              stroke={"red"}
            />

            <RenderCircles
              data={data2}
              scale={{ x, y }}
              style={{ fill: "blue" }}
            />
            <TrendLine data={data2} scale={{ x, y }} stroke={"blue"} />
            <ConnectDots
              data={data2}
              scale={{ x, y }}
              connectLines={newData1}
              stroke={"blue"}
            />
            <Legend x={800} y={70} style={{ fill: "blue" }} teamName={"BLA"} />
            <RenderCircles
              data={data3}
              scale={{ x, y }}
              style={{ fill: "black" }}
            />
            <TrendLine data={data3} scale={{ x, y }} stroke={"black"} />
            <ConnectDots
              data={data3}
              scale={{ x, y }}
              connectLines={newData2}
              stroke={"black"}
            />
            <Legend x={800} y={110} style={{ fill: "black" }} teamName={"BLU"} />
            <RenderCircles
              data={data4}
              scale={{ x, y }}
              style={{ fill: "green" }}
            />
            <TrendLine data={data4} scale={{ x, y }} stroke={"green"} />
            <ConnectDots
              data={data4}
              scale={{ x, y }}
              connectLines={newData3}
              stroke={"green"}
            />
            <Legend x={800} y={150} style={{ fill: "green" }} teamName={"ZAS"} />
            <RenderCircles
              data={data5}
              scale={{ x, y }}
              style={{ fill: "yellow" }}
            />
            <TrendLine data={data5} scale={{ x, y }} stroke={"yellow"} />
            <ConnectDots
              data={data5}
              scale={{ x, y }}
              connectLines={newData4}
              stroke={"yellow"}
            />
            <Legend
              x={800}
              y={190}
              style={{ fill: "yellow" }}
              teamName={"DOR"}
            />
            <RenderCircles
              data={data6}
              scale={{ x, y }}
              style={{ fill: "purple" }}
            />
            <TrendLine data={data6} scale={{ x, y }} stroke={"purple"} />
            <ConnectDots
              data={data6}
              scale={{ x, y }}
              connectLines={newData5}
              stroke={"purple"}
            />
            <Legend
              x={800}
              y={230}
              style={{ fill: "purple" }}
              teamName={"FRU"}
            />
            <RenderCircles
              data={data7}
              scale={{ x, y }}
              style={{ fill: "pink" }}
            />
            <TrendLine data={data7} scale={{ x, y }} stroke={"pink"} />
            <ConnectDots
              data={data7}
              scale={{ x, y }}
              connectLines={newData6}
              stroke={"pink"}
            />
            <Legend x={800} y={270} style={{ fill: "pink" }} teamName={"CAN"} />
            <RenderCircles
              data={data8}
              scale={{ x, y }}
              style={{ fill: "grey" }}
            />
            <TrendLine data={data8} scale={{ x, y }} stroke={"grey"} />
            <ConnectDots
              data={data8}
              scale={{ x, y }}
              connectLines={newData7}
              stroke={"grey"}
            />
            <Legend x={800} y={310} style={{ fill: "grey" }} teamName={"BAT"} />
            <Axis
              axis="x"
              transform={"translate(0," + height + ")"}
              scale={axisBottom().scale(x)}
              
            />
            <Axis
              axis="y"
              transform="translate(0,0)"
              scale={axisLeft().scale(y)}
            />
                  <text
        x={width/2}
        y={height + 60}
        style={{ fontSize: "25px", color: "black" }}
      >
        Turno
      </text> 
      <text
        x={-width/2}
        y={-60}
        style={{ fontSize: "25px", color: "black" }}
        transform={'rotate(-90)'}
      >
        Poder
      </text> 
          </g>
        </svg>
      </div>
    );
  }
}

class RenderCircles extends React.Component {
  render() {
    let renderCircles = this.props.data.map((coords, i) => (
      <circle
        cx={this.props.scale.x(coords[0])}
        cy={this.props.scale.y(coords[1])}
        r="5"
        style={this.props.style}
        key={i}
      />
    ));
    return <g>{renderCircles}</g>;
  }
}

class ConnectDots extends React.Component {
  render() {
    // return <g>{renderConnections}</g>;
    let x_coords = this.props.data.map((n) => {
      return n[0];
    });
    let y_coords = this.props.data.map((n) => {
      return n[1];
    });

    if (x_coords[0]) {
      let dataHolder = [
        this.props.scale.x(x_coords[x_coords.length - 1]),
        this.props.scale.y(y_coords[y_coords.length - 1]),
      ];
      this.props.connectLines.push(dataHolder);
    }
    return (
      <path
        fill={"none"}
        strokeWidth={5}
        stroke={this.props.stroke}
        d={line()(this.props.connectLines)}
      />
    );
  }
}

class TrendLine extends React.Component {
  render() {
    let x_coords = this.props.data.map((n) => {
      return n[0];
    });
    let y_coords = this.props.data.map((n) => {
      return n[1];
    });
    const trendline = linearRegression(y_coords, x_coords);

    // Lowest and highest x coordinates to draw a plot line
    const lowest_x = x_coords.sort(sortNumber)[0];
    const hightest_x = x_coords.sort(sortNumber)[x_coords.length - 1];
    const trendline_points = [
      [lowest_x, trendline(lowest_x)],
      [hightest_x, trendline(hightest_x)],
    ];

    return (
      <line
        x1={this.props.scale.x(trendline_points[0][0])}
        y1={this.props.scale.y(trendline_points[0][1])}
        x2={this.props.scale.x(trendline_points[1][0])}
        y2={this.props.scale.y(trendline_points[1][1])}
        strokeDasharray={"4 4"}
        strokeWidth={2}
        stroke={this.props.stroke}
      />
    );
  }
}
class Legend extends React.Component {
  render() {
    const circleLegend = (
      <circle
        cx={this.props.x}
        cy={this.props.y}
        r={8}
        style={this.props.style}
      />
    );
    const legendName = (
      <text
        x={this.props.x + 15}
        y={this.props.y + 10}
        style={{ fontSize: "30px", color: "black" }}
      >
        {this.props.teamName}
      </text>
    );
    return (
      <g>
        {circleLegend}
        {legendName}
      </g>
    );
  }
}
class RenderLabels extends React.Component {
  render() {
    let x_coords = this.props.data.map((n) => {
      return n[0];
    });
    let y_coords = this.props.data.map((n) => {
      return n[1];
    });
    let newXCoords = 0;
    let newYCoords = 1;

    if (x_coords[0]) {
      newXCoords = this.props.scale.x(x_coords[x_coords.length - 1]);
      newYCoords = this.props.scale.y(y_coords[y_coords.length - 1]);
    }
    return (
      <text
        transform={"translate(" + newXCoords + "," + newYCoords + ")"}
        x={12}
        style={this.props.style}
      >
        {this.props.name}
      </text>
    );
  }
}
class Axis extends React.Component {
  componentDidMount() {
    const node = this.refs[this.props.axis];
    select(node).call(this.props.scale);
  }

  render() {
    return (
      <g
        className="main axis date"
        transform={this.props.transform}
        ref={this.props.axis}
        style={{fontSize: 30}}
        

      />
    );
  }
}

function linearRegression(y, x) {
  var lr = {};
  var n = y.length;
  var sum_x = 0;
  var sum_y = 0;
  var sum_xy = 0;
  var sum_xx = 0;
  var sum_yy = 0;

  for (var i = 0; i < y.length; i++) {
    sum_x += x[i];
    sum_y += y[i];
    sum_xy += x[i] * y[i];
    sum_xx += x[i] * x[i];
    sum_yy += y[i] * y[i];
  }

  lr["slope"] = (n * sum_xy - sum_x * sum_y) / (n * sum_xx - sum_x * sum_x);
  lr["intercept"] = (sum_y - lr.slope * sum_x) / n;
  lr["r2"] = Math.pow(
    (n * sum_xy - sum_x * sum_y) /
      Math.sqrt((n * sum_xx - sum_x * sum_x) * (n * sum_yy - sum_y * sum_y)),
    2
  );

  return (x) => {
    return lr.slope * x + lr.intercept;
  };
}
