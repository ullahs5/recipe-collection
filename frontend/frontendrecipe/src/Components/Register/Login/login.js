// Login.js

import React, { useState } from 'react';
import AuthService from '../../authservice';
import { Button, Container, TextField } from '@mui/material';

const Login = () => {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault()
    const user = {email: email, password: password};
    fetch("http://localhost:8080/api/auth/authenticate", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user)
    })
    .then((response) => {
      if(response.ok){console.log("valid"); return response.json()}
      else{console.log("invalid"); throw Error("invalid creds")}
    })
    .then((body) => {
        localStorage.setItem('token', body.token);
        localStorage.setItem('email', user.email)
        console.log(body.token);
        window.location.href = "/home";
    }).catch((error) => error.message);
  }
  return (
  <div>


    <div style={{display:"flex", flexDirection:"column", alignItems:"center", rowGap:"10px"}}>
    <h1 style={{color:"#F7F7FF", fontSize:30}}>Login</h1>
    <TextField className="textfield" label="username" value={email}
    onChange={(e)=> setUsername(e.target.value)}></TextField>

    <TextField className="textfield" label="password" value={password}
    onChange={(e)=> setPassword(e.target.value)}></TextField>

    <Button variant="contained" onClick={handleLogin}>Login</Button>
    </div>

  </div>
  );
};

export default Login;
