import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import {
  HeaderWrapper,
  H1Styled,
  Nav,
  LinkStyled,
  SearchContainer,
  SearchInput,
  SearchIcon,
  ButtonsContainer,
  TitleDiv,
  Button,
  LinkStyledH1,
} from "../styles/HeaderStyle.js";

const Header = () => {
    
  return (
    <HeaderWrapper>
      <TitleDiv>
        {/* <LinkStyledH1 to={'/'}><H1Styled>SPORTSCAST</H1Styled></LinkStyledH1> */}
      </TitleDiv>

      <Nav>
        <LinkStyled to="/">Home</LinkStyled>

        <LinkStyled to="/soccer">Soccer</LinkStyled>
        <LinkStyled to="/basketball">Basketball</LinkStyled>
        <SearchContainer>
          <SearchIcon />
          <SearchInput
            type="text"
            placeholder="Search for your team"
            id="myInput"
          />
        </SearchContainer>

        <ButtonsContainer>
          <Button>Sign In</Button>
          <Button>Sign Up</Button>
        </ButtonsContainer>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
