import React, { useState } from "react";

import {
    SearchBarContainer,
   
    SearchInput,
    LinkHomeStyled,

} from "../styles/SearchBarStyle.js";

const SearchBar = ({ data, searchKey }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item[searchKey].toLowerCase().includes(searchTerm.toLowerCase())
  );

  

  return (
    <SearchBarContainer>
      
      <SearchInput
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {filteredData.map((item, index) => (
         <div className="event-card" key={index}>
         <h1 className="tournament-name">
           <img
             className="tournament-logo"
             src={item.TOURNAMENT_IMAGE}
             alt={item.NAME}
           />{" "}
           {item.NAME}
         </h1>
         {item.EVENTS.map((event, index) => {
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
    </SearchBarContainer>
  );
};





export default SearchBar;