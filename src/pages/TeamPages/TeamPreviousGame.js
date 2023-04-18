import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import TeamNavBar from "./TeamNavBar";

const TeamPreviousGame = () => {

    const params = useParams();
  const navigate = useNavigate();
  const id = params.id;

  const [resultData, setResultData] = useState(null);

    //function fetch all the past results of the team
    useEffect(() => {
        const fetchResult = async () => {
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
              `https://flashlive-sports.p.rapidapi.com/v1/teams/results?team_id=${id}&sport_id=1&locale=en_INT&page=1`,
              options
            );
            const data = await response.json();
            setResultData(data.DATA);
          } catch (error) {
            console.error(error);
          }
        };
        fetchResult();
      }, [id]);
    
      //console.log(resultData);

  return (
    <div className="allCompetitions">
    <h2 className="allCompetitionTitle">All Competitions and Current Results:</h2>
    <TeamNavBar/>
    {resultData &&
      resultData.map((team, index) => (
        <div className="competition" key={team.ID}>
          <h2>{team.NAME}</h2>
          {index &&
            team.EVENTS.map((event, eventIndex) => (
              <div className="event-game" key={eventIndex}>
                <div className="column-game">
                  {" "}
                  <img
                    className="image-team-game"
                    src={event.HOME_IMAGES}
                    alt={event.HOME_PARTICIPANT_NAME_ONE}
                  ></img>
                  {event.HOME_PARTICIPANT_NAME_ONE}
                </div>
                <div className="column-game">VS</div>
                <div className="column-game">
                  <img
                    className="image-team-game"
                    src={event.AWAY_IMAGES}
                    alt={event.AWAY_PARTICIPANT_NAME_ONE}
                  ></img>
                  {event.AWAY_PARTICIPANT_NAME_ONE}
                </div>
                <div className="column-game">
                  result: {event.HOME_SCORE_CURRENT} -{" "}
                  {event.AWAY_SCORE_CURRENT}
                </div>
              </div>
            ))}
        </div>
      ))}
  </div>
  )
}

export default TeamPreviousGame