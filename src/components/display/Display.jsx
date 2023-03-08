import React,{useState,useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import "./display.css";
export default function Display() {
  const params = useParams();
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const response = await fetch(
        "https://api.npoint.io/20c1afef1661881ddc9c"
      );
      const result = await response.json();
      setPlayers(result.playerList);
    };
    fetchAPI();
  }, []);
  
  const player = players.filter((p)=>p.Id === params.imageId);
  return (
    <>
    <div className="display">
      <div>
        <img src={`images/${params.imageId}.jpg`} alt="players" />
        <Link className="displayLink" to="/">
          Back to Home
        </Link>
      </div>
      <div>
        {player.map((p)=>(
          <>
            <h3 className="panlayerName">{p.PFName}</h3>
            <h5 className="playerSkill">Skill: {p.SkillDesc}</h5>
            <h5 className="playerSkill">TeamName: {p.TName}</h5>
            <h3 className="playerValue">Value: ${p.Value}</h3>
            <h5>Upcomming matches</h5> 
            {p.UpComingMatchesList.map((match) => (
              <p key={match.VsCCode}>
                {match.CCode} vs {match.VsCCode} <br />
                {match.MDate}
              </p>
            ))}
          </>
        ))}
    </div>
  </div>
    </>
  );
}
