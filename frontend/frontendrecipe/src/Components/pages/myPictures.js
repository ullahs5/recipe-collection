import React from 'react';

import StandardImageList from '../Recipe/show_recipes';
import NavbarIn from '../Navbar/loggedin_index';


 
const MyPictures = () => {
    
    return (
        <div>
            <NavbarIn/>
            <h1>My Pictures</h1>
            <StandardImageList/>
        </div>
    );
};
 
export default MyPictures;