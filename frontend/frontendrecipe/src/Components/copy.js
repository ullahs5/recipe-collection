import { Card, CardActionArea, CardContent, Grid, Typography} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing
  },
  card: {
    maxWidth: 300,
  },
}));

const RecipeCollection = () => {
  const classes = useStyles();

  const recipes = [
    {
      title: 'Pasta Carbonara',
      description: 'A classic Italian dish with pasta, eggs, cheese, and bacon.',
    },
    {
      title: 'Chicken Parmesan',
      description: 'Breaded chicken topped with tomato sauce and melted cheese.',
    },
    {
      title: 'Chocolate Chip Cookies',
      description: 'Soft and chewy cookies loaded with chocolate chips.',
    },
    // Add more recipes here...
  ];

  return (
    <div className={classes.root}>
      <Grid container spacing={2} justify="center">
        {recipes.map((recipe, index) => (
          <Grid item key={index}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {recipe.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {recipe.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default RecipeCollection;
