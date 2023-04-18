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
    <div className="register-container">
      <h1>Sign-In</h1>
      <form>
        <label>Username:</label>
        <input type="text" name="username" placeholder="username" />
        <label for="password">Password:</label>
        <input type="password" name="password" placeholder="password" />
      </form>
      <button>Sign-In</button>; 
    </div>
  );
};

export default SignIn;
