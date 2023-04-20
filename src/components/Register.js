import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";

import {
  registerContainer,
  styledH1,
  form,
  username,
  password,
  submit,
} from "../styles/RegisterStyle.js";


function Register() {

return (
  <div className="register-container">

    <h1>Register As a New User</h1>
      <form >
        <label className='username'>Username:</label> <br></br>
          <input type="text" name="username" placeholder="username"/> <br></br>
        <label for="password" className='password'>Password:</label> <br></br>
          <input type="password" name="password" placeholder="password"/> <br></br>
          <input type="submit" className="submit" value="Register"></input>
      </form>

   </div> 

)

}

export default Register;