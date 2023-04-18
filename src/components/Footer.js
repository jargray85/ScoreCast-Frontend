import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FooterWrapper, LinkStyled } from "../styles/FooterStyle.js";

const Footer = () => {


  return (
    <FooterWrapper>
      <div>
        <LinkStyled to="">Eleanor Brow</LinkStyled>
        <LinkStyled to="https://github.com/jargray85">James Gray</LinkStyled>
        <LinkStyled to="https://github.com/tavice">Thomas Avice</LinkStyled>
        <LinkStyled to="https://github.com/thenickao">Nick Kao</LinkStyled>
      </div>
    </FooterWrapper>
  );
}

export default Footer;
