import React from "react";
import "./styles.css";

export default function GameSchedule({ G, ctx, moves, events }) {
  if (!G) return <div></div>;
  //const schedule = G.schedule;
  const teams = [G.players[0], ...G.offer.dummies];

  const schedule = [
    [[0, 1], [2, 3], [4, 5], [6, 7]],
    [[0, 2], [1, 3], [4, 6], [5, 7]],
    [[0, 3], [2, 1], [4, 7], [6, 5]],
    [[0, 1], [2, 3], [4, 5], [6, 7]],
    [[0, 1], [2, 3], [4, 5], [6, 7]],
    [[0, 1], [2, 3], [4, 5], [6, 7]],
    [[0, 1], [2, 3], [4, 5], [6, 7]],

  ];

  const rounds = schedule.map((round, r) => {
    const matches = round.map((match, m) => <li key={`match${r}${m}`}>{teams[match[0]].name} x {teams[match[1]].name}</li>);
    return (
      <li key={`round${r}`} className="round">
        <h1>Round {r + 1}</h1>
        <ul>{matches}</ul>
      </li>
    );
  });

  return <ol className="schedule">{rounds}</ol>;
}

