import React from "react";
import "./styles.css";

export default function ScoreTrack({ G, ctx, moves, events }) {
  const points = [];
  for (let i = 0; i < 22; i++) {
    points.push(
      <div className="score-square">
        <div className="score-value">{i}</div>
        {G.players.map((player) =>
          player.points === i ? <div>{player.name}</div> : ""
        )}

        {G.offer.dummies.map((dummy) =>
          dummy.points === i ? <div>{dummy.name}</div> : ""
        )}
      </div>
    );
  }
  return <div className="scoreTrack">{points}</div>;
}
