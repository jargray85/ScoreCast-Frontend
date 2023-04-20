import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FooterWrapper, LinkStyled } from "../styles/FooterStyle.js";

// Sign in //
const SignIn = () => {
  const LinkHomeStyled = styled(Link)`
    text-decoration: none;
    color: black; ;
  `;

  return (
    <div className="signin-container">
      <h1>Sign-In</h1>
      <form>
        <label>Username:</label> <br></br>
        <input type="text" name="username" placeholder="username" /> <br></br>
        <label for="password">Password:</label> <br></br>
        <input type="password" name="password" placeholder="password" /> <br></br>
        <button>Sign-In</button>
      </form>
 
    </div>
  );
};

export default SignIn;
