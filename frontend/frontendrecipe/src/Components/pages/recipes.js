import React from 'react';
import NavbarIn from '../Navbar/loggedin_index';
import UploadFile from '../Recipe/upload_recipe';
import RecipePopUp from '../Recipe/upload_dialogue';
import RecipeCollection from '../copy';
import { Card, CardActionArea, CardContent, Grid, Typography} from '@mui/material';
import { makeStyles } from '@mui/styles';
import UserRecipeList from '../Recipe/show_recipes';
import ShowSelectedRecipe from '../Recipe/show_selected_recipe';


const MyRecipes = () => {

    return(
        <div style={{backgroundColor: "#C49991", minHeight: "100vh"}}>
            <div>
            <NavbarIn/>
            </div>
            
            <div >
                <UploadFile/>
                <UserRecipeList/>
            </div>

        </div>

        
    );
}

export default MyRecipes;