import React from 'react';
import UploadFile from '../Recipe/upload_recipe';
import NavbarIn from '../Navbar/loggedin_index';


 
const Home = () => {
    return (
        <div>
            <NavbarIn/>
            <h1>HomePage</h1>
            <UploadFile/>
        </div>
    );
};
 
export default Home;