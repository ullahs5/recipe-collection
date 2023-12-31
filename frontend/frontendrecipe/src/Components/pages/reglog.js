import React from 'react';


import { Container, Paper } from '@mui/material';
import Login from '../Register/Login/login';
import Register from '../Register/Login/register';


const RegLog = () => {
    
    return (
        

        <div style={{backgroundColor: "#C49991", minHeight: "100vh"}}>
            <div/>
                <Register/>
                <Login/>
            <div/>
        </div>

        
    );
};
 
export default RegLog;