import React from "react";
import { Link } from "react-router-dom";

export default function PlayerDisplay({ player }) {
  return (
    <Link className="playerItem" to={`/${player.Id}`}>
      <img className="playerImage" src={`images/${player.Id}.jpg`} alt="players" height="100" width="100"/>
      <h3 className="panlayerName">{player.PFName}</h3>
      <h5 className="playerSkill">Skill: {player.SkillDesc}</h5>
      <h5 className="playerSkill">TeamName: {player.TName}</h5>
      <h3 className="playerValue">Value: ${player.Value}</h3>
      <h5>Upcomming matches</h5>
      {player.UpComingMatchesList.map((match) => (
        <p key={match.VsCCode}>
          {match.CCode} vs {match.VsCCode} <br />
          {match.MDate}
        </p>
      ))}
    </Link>
  );
}
