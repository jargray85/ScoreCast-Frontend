import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";


function Register() {

const LinkHomeStyled = styled(Link)`
  text-decoration: none;
  color: black;
;`

return (
  <div className="register-container">

    <h1>Register As a New User</h1>
      <form >
        <label>Username:</label>
          <input type="text" name="username" placeholder="username"/>
        <label for="password">Password:</label>
          <input type="password" name="password" placeholder="password"/>
      </form>

   </div> 

)

}

export default Register;