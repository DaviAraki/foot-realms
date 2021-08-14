import React from "react";
import { scaleLinear, axisLeft, axisBottom, select, line } from "d3";

const newData = [];
const newData1 = [];
const newData2 = [];
const newData3 = [];
const newData4 = [];
const newData5 = [];
const newData6 = [];
const newData7 = [];

export default class PointChart extends React.Component {
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

    const y = scaleLinear().domain([0, 22]).range([height, 0]);

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
           
            <RenderCircles
              data={data2}
              scale={{ x, y }}
              style={{ fill: "blue" }}
            />
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
            <ConnectDots
              data={data8}
              scale={{ x, y }}
              connectLines={newData7}
              stroke={"grey"}
            />
            <Legend x={800} y={310} style={{ fill: "grey" }} teamName={"BAT"} />
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
            <ConnectDots
              data={data}
              scale={{ x, y }}
              connectLines={newData}
              stroke={"red"}
            />

            <Axis
              axis="x"
              transform={"translate(0," + height + ")"}
              scale={axisBottom().scale(x)}
              style={{color: 'red'}}
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
        Ponto
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
