import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";


const ShowSoccer = () => {
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;
  const [showGame, setShowGame] = useState(null);

  useEffect(() => {
    const fetchShow = async () => {
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
          `https://flashlive-sports.p.rapidapi.com/v1/events/data?locale=en_INT&event_id=${id}`,
          options
        );
        const data = await response.json();
        setShowGame(data.DATA);
      } catch (error) {
        console.error(error);
      }
    };
    fetchShow();
  }, [id]);

  let gameToDisplay = showGame?.EVENT;
  console.log(gameToDisplay);

  let currentStage = "";
  if (gameToDisplay?.STAGE === "FIRST_HALF") {
    currentStage = "First Half";
  } else if (gameToDisplay?.STAGE === "SECOND_HALF") {
    currentStage = "Second Half";
  } else if (gameToDisplay?.STAGE === "HALF_TIME") {
    currentStage = "Half Time";
  } else if (gameToDisplay?.STAGE === "PENDING") {
    currentStage = "Game Starting Soon";
  } else {
    currentStage = "Game Ended";
  }

  return (
    <div>
      <div className="parent-container-show">
        <h1 className="title">Game:</h1>
        <br />
        <div className="events-container-show">
          <div className="event-details-show">
            <div className="details-row">
              <div className="currentStage">
                <h3 className="stage">{currentStage}</h3>
              </div>
            </div>
            <div className="details-row">
              <div className="team-details">
                <img
                  className="team-logo"
                  src={gameToDisplay?.HOME_IMAGES}
                  alt={gameToDisplay?.HOME_NAME}
                />
                <h3 className="team-name">{gameToDisplay?.HOME_NAME}</h3>
                <Link to={`/team/${gameToDisplay?.HOME_PARTICIPANT_IDS[0]}`}>More Info</Link>
              </div>
              <div className="score-details">
                <h3>{gameToDisplay?.HOME_SCORE_CURRENT}</h3>
                <h3>-</h3>
                <h3>{gameToDisplay?.AWAY_SCORE_CURRENT}</h3>
              </div>
              <div className="team-details">
                <img
                  className="team-logo"
                  src={gameToDisplay?.AWAY_IMAGES}
                  alt={gameToDisplay?.AWAY_PARTICIPANT_NAME_ONE}
                />
                <h3 className="team-name">
                  {gameToDisplay?.AWAY_PARTICIPANT_NAME_ONE} </h3>
                  <Link to={`/team/${gameToDisplay?.AWAY_PARTICIPANT_IDS[0]}`}>More Info</Link>
               
              </div>
              <h3 className="status">{gameToDisplay?.EVENT_STATUS}</h3>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th></th>
                <th>First Half</th>
                <th>Second Half</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{gameToDisplay?.HOME_NAME}</td>
                <td>{gameToDisplay?.HOME_SCORE_PART_1}</td>
                <td>{gameToDisplay?.HOME_SCORE_PART_2}</td>
              </tr>
              <tr>
                <td> {gameToDisplay?.AWAY_PARTICIPANT_NAME_ONE}</td>
                <td>{gameToDisplay?.AWAY_SCORE_PART_1}</td>
                <td>{gameToDisplay?.AWAY_SCORE_PART_2}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShowSoccer;
