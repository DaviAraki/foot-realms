import React from "react";
import "./styles.css";

export default function ScoreTrack({ G, ctx, moves, events }) {
  const points = [];
  for (let i = 0; i < 22; i++) {
    points.push(
      <div className="score-square" key={`square${i}`}>
        <div className="score-value">{i}</div>
        {G.players.map((player,p) =>
          player.points === i ? <div key={`playerS${p}`}>{player.name}</div> : ""
        )}

        {G.offer.dummies.map((dummy,d) =>
          dummy.points === i ? <div key={`dummyS${d}`}>{dummy.name}</div> : ""
        )}
      </div>
    );
  }
  return <div className="scoreTrack">{points}</div>;
}
