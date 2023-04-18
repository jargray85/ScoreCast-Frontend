import { Link } from "react-router-dom";
import styled from "styled-components";
import backgroundImage from "../images/ryan-OywyPkrDEvg-unsplash.jpg";
// import myFont from '/fonts/BebasNeue-Regular.ttf';

const MainTitle = styled.h1`
  @font-face {
    font-family: 'sport';
    // src: url('') format('truetype');
  }
  font-family: sport;
  font-size: 6rem;
  font-weight: 700;
  margin-bottom: 1;
  color: white;
  text-shadow: 5px 5px 5px black;
  letter-spacing: .5px;
  `;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const SoccerLink = styled(Link)`
  text-decoration: none;
  color: white;
  display: flex;
  text-shadow: 5px 5px 5px black;
  letter-spacing: .5px;
  border: 3px solid white;
  padding: 50px;
  border-radius: 5px;
  box-shadow: 5px 5px 5px black;
  margin-right: 130px;
  font-size: 50px;
  background-color: rgba(0,0,0,0.5); 
  @font-face {
    font-family: 'sportsb1';
    src: url('/fonts/Jersey M54.ttf') 
  }
  font-family: 'sportsb1';
  
  &:hover {
    transform: scale(0.9);
    transition: transform 0.3s ease-in-out;
  }

  &::before {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;


const BasketballLink = styled(Link)`
  text-decoration: none;
  color: white;
  display: flex;
  text-shadow: 1px 1px 2px black;
  letter-spacing: .5px;
  border: 3px solid white;
  padding: 50px;
  border-radius: 5px;
  margin-left: 130px;
  font-size: 50px;
  background-color: rgba(0,0,0,0.5); 

  &:hover {
    transform: scale(0.9);
    transition: transform 0.3s ease-in-out;
  }
`;

function Home() {
  return (
    <MainDiv>
      <MainTitle>SCORECAST</MainTitle>
      <LinksContainer>
        <SoccerLink to="/soccer">Soccer</SoccerLink>
        <BasketballLink to="/basketball">Basketball</BasketballLink>
      </LinksContainer>
    </MainDiv>
  );
}

export default Home;
