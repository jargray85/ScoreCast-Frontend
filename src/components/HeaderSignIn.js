import React from "react";
import { Link } from "react-router-dom";


import {
    HeaderWrapper,
    H1Styled,
    Nav,
    LinkStyled,
    ButtonsContainer,
    TitleDiv,
    Button,
    LinkStyledH1,
} from "../styles/HeaderStyle.js";

const HeaderSignIn = () => {
    
  return (
    <HeaderWrapper>
      <TitleDiv>
        <LinkStyledH1 to={'/'}><H1Styled>SPORTSCAST</H1Styled></LinkStyledH1>

        <ButtonsContainer>
         <Link to="/register"><Button>Sign Up</Button></Link>
         <Link to="/signin"> <Button>Sign In</Button></Link>
        </ButtonsContainer>
      </TitleDiv>
      <Nav>
        <LinkStyled to="/">Home</LinkStyled>


     
      </Nav>


    </HeaderWrapper>
  );
};

export default HeaderSignIn;
