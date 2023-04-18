import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const TeamNavBar = () => {
    const params = useParams();
    const navigate = useNavigate();
    const id = params.id;

    //styling of the Link
    const LinkStyledTeamNavBar = styled(Link)`
    text-decoration: none;
    color: black;
    display: flex;
    font-size: 1.5rem;
    
    `;

  return (
    <div className="nav-bar-team">
    <LinkStyledTeamNavBar to={`/team/${id}`}>Team</LinkStyledTeamNavBar>
    <LinkStyledTeamNavBar to={`/team/${id}/squad`}>Squad</LinkStyledTeamNavBar>
    <LinkStyledTeamNavBar to={`/team/${id}/games`}>Games</LinkStyledTeamNavBar>
  </div>
  )
}

export default TeamNavBar