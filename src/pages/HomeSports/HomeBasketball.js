import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

function HomeBasketball() {
  const [dataSport, setDataSport] = useState([]);

  useEffect(() => {
    const fetchSportsData = async () => {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "ac51594b08msh2eef46005123836p1b146djsn08e1e603f805",
          "X-RapidAPI-Host": "flashlive-sports.p.rapidapi.com",
        },
      };

      fetch(
        "https://flashlive-sports.p.rapidapi.com/v1/events/live-list?locale=en_INT&timezone=-4&sport_id=3",
        options
      )
        .then((response) => response.json())
        .then((response) => setDataSport(response.DATA)) //console.log(response.DATA))
        .catch((err) => console.error(err));
    };

    fetchSportsData();
  }, []);

  //console.log(process.env.API_KEY)

  console.log(dataSport);
  console.log(dataSport.NAME);

  // console.log(dataSport[6].EVENTS.AWAY_PARTICIPANT_NAME_ONE);
  //console.log(dataSport[0].EVENTS.HOME_NAME);

  //style the <link> tag using styled components
  const LinkHomeStyled = styled(Link)`
    text-decoration: none;
    color: black;
  `;


  if (!Array.isArray(dataSport)) {
    return <div>Error: Data is not an array</div>;
  }
  return (
    <div className="parent-container">
     

      <h1 className="title">Basketball Live Events</h1>
      <br />
      <div className="events-container">
        {dataSport.map((sport, index) => (
          <div className="event-card" key={index}>
            <h1 className="tournament-name">
              <img
                className="tournament-logo"
                src={sport.TOURNAMENT_IMAGE}
                alt={sport.NAME}
              />{" "}
              {sport.NAME}
            </h1>
            {sport.EVENTS.map((event, index) => {
              let currentStage = "";
              if (event.STAGE === "FIRST_QUARTER") {
                currentStage = "First Quarter";
              } else if (event.STAGE === "SECOND_QUARTER") {
                currentStage = "Second Quarter";
              } else if (event.STAGE === "THIRD_QUARTER") {
                currentStage = "Third Quarter";
              } else if (event.STAGE === "FOURTH_QUARTER") {
                currentStage = "Fourth Quarter";
              } else if (event.STAGE === "HALF_TIME") {
                currentStage = "Half Time";
              } else if (event.STAGE === "PENDING") {
                currentStage = "Game Starting Soon";
              } else {
                currentStage = "Game Ended";
              }
                return(
              <LinkHomeStyled to={`/basketball/show/${event.EVENT_ID}`}>
                <div className="event-details" key={index}>
                  <div className="details-row">
                    <div className="currentStage">
                      <h3 className="stage">{currentStage}</h3>
                    </div>
                  </div>
                  <div className="details-row">
                    <div className="team-details">
                      <img
                        className="team-logo"
                        src={event.HOME_IMAGES}
                        alt={event.HOME_NAME}
                      />
                      <h3 className="team-name">{event.HOME_NAME}</h3>
                    </div>
                    <div className="score-details">
                      <h3>{event.HOME_SCORE_CURRENT}</h3>
                      <h3>-</h3>
                      <h3>{event.AWAY_SCORE_CURRENT}</h3>
                    </div>
                    <div className="team-details">
                      <img
                        className="team-logo"
                        src={event.AWAY_IMAGES}
                        alt={event.AWAY_PARTICIPANT_NAME_ONE}
                      />
                      <h3 className="team-name">
                        {event.AWAY_PARTICIPANT_NAME_ONE}
                      </h3>
                    </div>
                  </div>
                </div>
              </LinkHomeStyled>
                );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeBasketball;
