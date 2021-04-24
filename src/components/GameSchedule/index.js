import React from "react";
import "./styles.css";

export default function GameSchedule({ G, ctx, moves, events }) {
  if (!G) return <div></div>;
  const schedule = G.board.schedule;
  const teams = [G.players[0], ...G.board.dummies];

  // const schedule = [
  //   [[1, 0], [2, 7], [3, 6], [4, 5]],
  //   [[2, 3], [0, 6], [7, 5], [1, 4]],
  //   [[5, 1], [6, 7], [3, 0], [4, 2]],
  //   [[6, 4], [7, 3], [1, 2], [5, 0]],
  //   [[0, 2], [3, 1], [4, 7], [5, 6]],
  //   [[3, 4], [7, 0], [1, 6], [2, 5]],
  //   [[6, 2], [7, 1], [0, 4], [5, 3]],

  // ];

  const rounds = schedule.map((round, r) => {
    const matches = round.map((match, m) => <li key={`match${r}${m}`}>{teams[match[0]].strength} {teams[match[0]].name}  x {teams[match[1]].name} {teams[match[1]].strength}</li>);
    return (
      <li key={`round${r}`} className="round">
        <h1>Round {r + 1}</h1>
        <ul>{matches}</ul>
      </li>
    );
  });

  return <ol className="schedule">{rounds}</ol>;
}

