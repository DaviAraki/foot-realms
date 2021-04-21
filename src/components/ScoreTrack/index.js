import React from "react";


export default function ScoreTrack({ G, ctx, moves, events }) {
  const points = [];
  for (let i = 0; i < 22; i++) {
    points.push(
      <div className="score-square">
        {i + "\n"}
        <div className="teamPositions">
          {G.players[0].points === i ? "P0 " : ""}
          {G.offer.dummies.map((dummy) =>
            dummy.points === i ? dummy.name + " " : ""
          )}
        </div>
      </div>
    );
  }
  return <div className="scoreTrack">{points}</div>;
}
