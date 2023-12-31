import React, { useState, useEffect } from "react";
import Paper from '@mui/material/Paper';
import { Container } from "@mui/material";

function ShowUsers(){
  const paperStyle = {padding:'50px 20px', width:600, margin:"20px auto"};
  const[users, setUsers] = useState([]);
  
  useEffect(()=> {
    fetch("http://localhost:8080/api/auth/users")
    .then(res=> res.json())
    .then((e)=>{setUsers(e); })
  },[])
    
    return(

      <Container>
        <Paper elevation={3} style={paperStyle}>

        {users.map(user=>(
          <Paper elevation={6} style={{margin:"10px", 
          padding:"15px", textAlign:"left"}} key={user.id}>
            Id:{user.id}<br/>
            Gamertag:{user.gamertag}<br/>
            Email:{user.email}<br/>
          </Paper>
        ))}
    
        </Paper>
      </Container>
      

    );
}

export default ShowUsers;