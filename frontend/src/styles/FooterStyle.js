import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterWrapper = styled.div`

width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 2rem;
background-color: rgba(0, 0, 0, 0.6);
color: white;
height: 2rem;
bottom: 0;
left: 0;
position: fixed;
justify-content: right;
z-index: 1;
transition: 0.3s;
`;

export const LinkStyled = styled(Link)`
@font-face {
  font-family: 'sport';
  src: url('./frontend/src/fonts/esp.ttf');
}
font-family: sport;
text-decoration: none;
color: white;
display: inline-block;
font-size: 1.3rem;
margin-right: 5rem;
flex-direction: row;
text-shadow: 1px 1px 2px black;
letter-spacing: .5px;
`;