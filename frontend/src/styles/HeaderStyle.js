import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  color: white;
  height: 3rem;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
`;
//create a link for the H1Styled main title using styled components
export const LinkStyledH1 = styled(Link)`
  text-decoration: none;
  color: white;
  display: flex;
  font-size: 1.5rem;
  margin: 0 1rem;
  flex-direction: row;
  align-items: center;
  
`;
//create a h1 using styled components
export const H1Styled = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin: 0;
  align-items: center;
`;
//create a div to wrap the title and the buttons
export const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 2rem;
  grid-row: 1 / 2;
  grid-column: 1 / 3;
`;

//create a nav bar using styled components
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background-color: rgba(0, 0, 0, 0);
  color: white;
  height: 3rem;
  grid-row: 2 / 3;
  grid-column: 1 / 3;
  // opacity: 0.3;
  text-shadow: 1px 1px 2px black;
  @font-face {
    font-family: 'sportsb';
    src: url('./frontend/src/fonts/AmericanCaptain.ttf')
  };
  font-family: sportsb;
  

`;
//create a link using styled components
export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: white;
  display: flex;
  font-size: 1.5rem;
  opacity: 1;
`;

// create a search bar container
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  padding: 0 3px;
  margin-right: 10px;
  opacity: 1;
`;

// create a search icon
export const SearchIcon = styled(FaSearch)`
  color: gray;
`;

// create a search input field
export const SearchInput = styled.input`
  border: none;
  outline: none;
  margin-left: 5px;
  font-size: 1.3rem;
`;
//create a button using styled components
export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  padding: 3px 15px;
  margin-top: 10px;
  margin: 1rem 1rem 0 0;
  color: white;
  background-color: black;
  border-radius: 15px;
  text-align: center;
  text-decoration: none;
  opacity: 1;
  border: none;
  cursor: pointer;
  text-shadow: 1px 1px 2px black;
  margin-top: 30px;
  letter-spacing: .5px;

  &:hover {
    opacity: 0.8;
    transform: scale(0.9);
    transition: transform 0.3s ease-in-out;
  }
`;

// create a container for the buttons and position it to the upper right corner
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 2rem;
  margin-bottom: 2rem;
  grid-column: 2 / 3;
  grid-row: 1 / 2 2 / 3;

`;
