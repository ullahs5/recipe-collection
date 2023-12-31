import React from 'react';
import { Navigate, Route, Router, Routes } from 'react-router-dom';
import Home from './pages/home';
import { Button } from '@mui/material';
import MyPictures from './pages/myPictures';
import RegLog from './pages/reglog';
import Other from './pages/other';
import authservice from './authservice';
import MyRecipes from './pages/recipes';



const MyRoutes = () => {
    
    return (
        <div style={{backgroundColor:"#F7F7FF"}}>
        <div>
        {/* <Button onClick={Logout}>Logout</Button>
        <Button onClick={ShowToken}>ShowToken</Button> */}
        
        <Routes>
        <Route path="/" element={<RegLog />} />
        <Route
            path="/home"
            element={<PrivateRoute element={<Home />} />}
        />
        <Route
            path="/pictures"
            element={<PrivateRoute element={<MyPictures />} />}
        />
        <Route
            path="/other"
            element={<PrivateRoute element={<Other />} />}
        />

        <Route
            path="/myrecipes"
            element={<PrivateRoute element={<MyRecipes />} />}
        />
        </Routes>
       
        </div>
        </div>
    );
};

const Logout = () => {
  authservice.logout();
};

const ShowToken = () =>{
  console.log("token is " + authservice.getToken());
};


const PrivateRoute = ({ path, element }) => {
  const isAuthenticated = authservice.isAuthenticated();
  return isAuthenticated ? (
    element
  ) : (
    <Navigate to="/login" replace={true} />
  );
};
 
export default MyRoutes;