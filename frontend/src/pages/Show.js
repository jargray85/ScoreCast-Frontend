import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Show = () => {
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

  return (
    <div>
      <div className="parent-container-show">
        <h1 className="title">Game:</h1>
        <br />
        <div className="events-container">
          <div className="event-details">
            <div className="team-details">
              <img
                className="team-logo"
                src={gameToDisplay?.HOME_IMAGES}
                alt={gameToDisplay?.HOME_NAME}
              />
              <h3 className="team-name">{gameToDisplay?.HOME_NAME}</h3>
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
                {gameToDisplay?.AWAY_PARTICIPANT_NAME_ONE}
              </h3>
            </div>
            <h3 className="status">{gameToDisplay?.EVENT_STATUS}</h3>
          </div>
       
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Q1</th>
            <th>Q2</th>
            <th>Q3</th>
            <th>Q4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{gameToDisplay?.HOME_NAME}</td>
            <td>{gameToDisplay?.HOME_SCORE_PART_1}</td>
            <td>{gameToDisplay?.HOME_SCORE_PART_2}</td>
            <td>{gameToDisplay?.HOME_SCORE_PART_3}</td>
            <td>{gameToDisplay?.HOME_SCORE_PART_4}</td>
           
          </tr>
          <tr>
            <td> {gameToDisplay?.AWAY_PARTICIPANT_NAME_ONE}</td>
            <td>{gameToDisplay?.AWAY_SCORE_PART_1}</td>
            <td>{gameToDisplay?.AWAY_SCORE_PART_2}</td>
            <td>{gameToDisplay?.AWAY_SCORE_PART_3}</td>
            <td>{gameToDisplay?.AWAY_SCORE_PART_4}</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
      </div>
  );
};

export default Show;
