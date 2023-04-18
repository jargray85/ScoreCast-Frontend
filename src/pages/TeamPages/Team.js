import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import TeamSquad from "./TeamSquad.js";
import TeamNavBar from "./TeamNavBar.js";




const Team = () => {
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;

  const [teamData, setTeamData] = useState(null);
  const [teamNews, setTeamNews] = useState(null);
  
  
  const [expandedResult, setExpandedResult] = useState(null);
  const [expandedSquad, setExpandedSquad] = useState(null);

  //Function to fetch the team data
  useEffect(() => {
    const fetchTeam = async () => {
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
          `https://flashlive-sports.p.rapidapi.com/v1/teams/data?locale=en_INT&team_id=${id}&sport_id=1`,
          options
        );
        const data = await response.json();
        setTeamData(data.DATA);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTeam();
  }, [id]);

  //console.log(teamData);

  //Function to fetch the team news

  useEffect(() => {
    const fetchNews = async () => {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "ac51594b08msh2eef46005123836p1b146djsn08e1e603f805",
          "X-RapidAPI-Host": "flashlive-sports.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(`https://flashlive-sports.p.rapidapi.com/v1/teams/news?team_id=${id}&locale=en_INT`, options)
        const data = await response.json();
        setTeamNews(data.DATA);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNews();
  }, [id]);

console.log(teamNews);


  //A function that toggles the results
  const toggleExpandedTeam = (index) => {
    if (expandedResult === index) {
      setExpandedResult(null);
    } else {
      setExpandedResult(index);
    }
  };

  //A function that toggles the squad
    const toggleExpandedSquad = (indexSquad) => {
        if (expandedSquad === indexSquad) {
            setExpandedSquad(null);
        } else {
            setExpandedSquad(indexSquad);
        }
    };

  return (
    <>
      <div className="team-info">
        <img
          className="image-team-game"
          src={teamData?.IMAGE_PATH}
          alt={teamData?.TEAM_NAME}
        ></img>

        <h1 className="title">{teamData?.TEAM_NAME}</h1>
      </div>
     <TeamNavBar />

        <div className="team-info">
            <h2 className="title">News</h2>
            {teamNews && teamNews.slice(0, 10).map((news, index) => (
                <div className="news" key={index}>
                    <h3>{news.TITLE}</h3>
                    <a href={news.LINK}></a>
                  
                    </div>
            ))}
        </div>
    </>
  );
};

export default Team;
