import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import TeamNavBar from "./TeamNavBar";

const TeamSquad = () => {
    const params = useParams();
    const navigate = useNavigate();
    const id = params.id;

    const [squadData, setSquadData] = useState(null);
      //function to get all the squad members of the team
  useEffect(() => {
    const fetchSquad = async () => {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "ac51594b08msh2eef46005123836p1b146djsn08e1e603f805",
          "X-RapidAPI-Host": "flashlive-sports.p.rapidapi.com",
        },
      };
      try {
        const response = await fetch(
          `https://flashlive-sports.p.rapidapi.com/v1/teams/squad?locale=en_INT&sport_id=1&team_id=${id}`,
          options
        );
        const data = await response.json();
        setSquadData(data.DATA);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSquad();
  }, [id]);

  console.log(squadData);
  return (
    <div className="squad">
    <h1 className="squadTitle">Squad:</h1>
    <TeamNavBar />
    {squadData && squadData.map((position, indexSquad) => (
        <div className="positions" key={indexSquad}>
           
            <h2 className='namePosition'>{position.GROUP_LABEL}</h2>
            <div className="cardAllPlayer" >
            {position.ITEMS.map((player, playerIndex) => (
               <div className="card">
               <img src={player.PLAYER_IMAGE_PATH} alt={player.PLAYER_NAME} className="card-img-top" />
               <div className="card-body">
                 <h5 className="card-title">{player.PLAYER_NAME} #{player.PLAYER_JERSEY_NUMBER}</h5>
                 
               </div>
             </div>
            
             
            ))}
                </div>
        </div>    
    ))}
  </div>
  )
}

export default TeamSquad