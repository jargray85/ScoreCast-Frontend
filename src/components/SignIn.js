import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const SignIn = ({ setToken, URL }) => {
  SignIn.propTypes = {
    // this is where you define your props
    setToken: PropTypes.func.isRequired, // setToken is a function that is required
  };

  //
  async function loginUser(credentials) {
    console.log(credentials)
    return fetch('http://localhost:4000/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
      
    }).then((data) => data.json());
  }

 

  //
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  //
  const handleSubmit = async (e) => {
    //console.log(e);
    e.preventDefault();
    try {
      const token = await loginUser({
        email,
        password,
      });
      setToken(token);
    } catch (e) {
      console.log(e);
    }
  };

  //verification
  console.log(email);
  console.log(password);

  return (
    <div className="parent-container-register">
      <h1 className="title-register">Welcome Back! Please Sign In</h1>
      <h2 className="title-register-h2">
        If you do not have an account, please register {" "}
        <Link to="/register"> here</Link>
      </h2>
      <form className="form-register" onSubmit={handleSubmit}>
        <label>email:</label>
        <input
          type="text"
          name="name"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="button-register">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
