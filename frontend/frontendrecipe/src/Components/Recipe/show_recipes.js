

import React, { useEffect, useState } from 'react';
import authservice from '../authservice';
import { Card, CardActionArea, CardContent, Grid, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button, Fade } from '@mui/material';
import { makeStyles } from '@mui/styles';

function UserRecipeList() {
  const [recipeData, setRecipeData] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null); // Track the selected recipe
  const classes = useStyles();

  useEffect(() => {
    const fetchRecipeData = async (authToken, email) => {
      try {
        const response = await fetch(`http://localhost:8080/api/recipe/get/${email}`, { headers: { Authorization: `Bearer ${authToken}` } });
        if (response.ok) {
          const data = await response.json();
          const recipes = data.map((recipe) => ({
            ...recipe,
            photoUrl: createImageUrl(recipe.photo.data),
          }));
          setRecipeData(recipes);
        } else {
          console.error('Failed to fetch recipe data');
        }
      } catch (error) {
        console.error('Network error:', error);
      }
    };

    const authToken = authservice.getToken();
    const email = authservice.getEmail();

    fetchRecipeData(authToken, email);
  }, []);

  const createImageUrl = (base64Data) => {
    const byteArray = Uint8Array.from(atob(base64Data), (c) => c.charCodeAt(0));
    const blob = new Blob([byteArray], { type: 'image/jpeg' });
    return URL.createObjectURL(blob);
  };

  const openDialog = (recipe) => {
    setSelectedRecipe(recipe); // Set the selected recipe
  };

  const closeDialog = () => {
    setSelectedRecipe(null); // Clear the selected recipe
  };

  if (recipeData.length === 0) {
    // Show a loading state while fetching the recipe data
    return <div style={{paddingLeft:"46.5%"}}>You have no recipes</div>;
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', columnGap: '40px', rowGap: '40px', justifyContent: "center" }}>
      {recipeData.map((recipe, index) => (
        <Grid item key={recipe.id}>
          <Card className={classes.card}>
            <CardActionArea onClick={() => openDialog(recipe)}> {/* Open the dialog on click */}
              <img
                src={recipe.photoUrl}
                alt={`Recipe Image ${index}`}
                style={{ width: '100%', height: '200px', cursor: 'pointer' }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Author: {recipe.author}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Description: {recipe.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}

      {/* Popup Dialog */}
      <Dialog PaperProps={{style: {minWidth: 500}}}open={selectedRecipe !== null} onClose={closeDialog} TransitionComponent={Fade} transitionDuration={{enter:1000, exit:0}}>
        {selectedRecipe && (
          <>
            {/* <DialogTitle>Recipe Details</DialogTitle> */}
            <DialogContent>
              <img
                src={selectedRecipe.photoUrl}
                alt="Recipe"
                style={{ width: '300px', height: '200px', marginLeft:"50px"}}
              />
              <Typography gutterBottom variant="h5" component="h2">
                Author: {selectedRecipe.author}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Description: {selectedRecipe.description}
              </Typography>
              {/* Include additional text fields for other recipe fields */}
              <Typography variant="body2" color="textSecondary" component="p">
                Name: {selectedRecipe.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Ingredients: {selectedRecipe.ingredients}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Instructions: {selectedRecipe.instructions}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Preparation time: {selectedRecipe.preparationTime}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Cooking time: {selectedRecipe.cookingTime}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Servings: {selectedRecipe.servings}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Notes: {selectedRecipe.notes}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Diffculty: {selectedRecipe.difficulty}
              </Typography>
              
            </DialogContent>
            <DialogActions>
              <Button onClick={closeDialog}>Close</Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </div>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    padding: 16,
  },
  card: {
    maxWidth: 340,
    minWidth: 340,
  },
}));

export default UserRecipeList;


