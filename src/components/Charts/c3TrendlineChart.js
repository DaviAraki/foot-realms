import React from "react";
import c3 from "c3";
import { types } from "neo4j-driver";

export const Chart = (props) => {
  React.useEffect(() => {
    c3.generate({
      bindto: "#chart",
      data: {
        columns: [
          ["strenght"].concat(props.strength),
          ["banana", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
        ],
        type: "scatter",
        types: {
          banana: "line",
        },
      },
    });
  }, [props.strength]);
  console.log(props.strength);

  return <div id="chart" />;
};
