import { Button, Container, TextField } from "@mui/material";
import React, { useState } from "react";


function Register(){
    const[username, setUsername] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const  handleRegister = (e) => {
        e.preventDefault()
        const user = {usertag: username, email: email, password: password};
        try{
            fetch("http://localhost:8080/api/auth/register", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(user)
            })
        } 
        catch (error){
            console.log(error);
        }
        
    }

    return(
        <div>
            
            <div style={{display:"flex", flexDirection:"column", alignItems:"center", rowGap:"10px"}}>
            <h1 style={{color:"#F7F7FF", fontSize:30}}>Register</h1>
            <TextField className="textfield" label="username" value={username}
            onChange={(e)=> setUsername(e.target.value)}></TextField>
            <TextField className="textfield" label="email" value={email}
            onChange={(e)=> setEmail(e.target.value)}></TextField>
            <TextField className="textfield" label="password" value={password}
            onChange={(e)=> setPassword(e.target.value)}></TextField>
            <Button variant="contained" onClick={handleRegister}>register</Button>
            </div>
        </div>
    );
}

export default Register;