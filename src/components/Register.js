import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Register({ setToken }) {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

 async function registerUser (credentials) {
    return fetch('http://localhost:4000/register', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await registerUser({
        username,
        email,
        password,
      });
      setToken(token);
    } catch (e) {
      console.log(e);
    }
    navigate('/');
  };

  console.log(username);
  console.log(email);
  

 

  return (
    <div className="parent-container-register">
      <h1 className="title-register">Register</h1>
      <form onSubmit={handleSubmit} className="form-register">
        <label>Username:</label>
        <input type="text" name="username" placeholder="Username" onChange={e=> setUsername(e.target.value)} />
        <label>Email:</label>
        <input type="email"  name="email" placeholder="Email" onChange={e=> setEmail(e.target.value)} />
        <label for="password">Password:</label>
        <input type="password" name="password" placeholder="password" onChange={e=> setPassword(e.target.value)}  />
        <button className="button-register">Register</button>
      </form>
    </div>
  );
}

export default Register;
