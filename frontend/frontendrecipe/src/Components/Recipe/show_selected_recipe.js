// import React, { useEffect, useState } from 'react';
// import authservice from '../authservice';
// import { TextField } from '@mui/material';

// function StandardImageList() {
//   const [recipeData, setRecipeData] = useState([]);

//   useEffect(() => {
//     const fetchRecipeData = async (authToken, email) => {
//       try {
//         const response = await fetch(`http://localhost:8080/api/recipe/get/${email}`, { headers: { Authorization: `Bearer ${authToken}` } });
//         if (response.ok) {
//           const data = await response.json();
//           const recipes = data.map((recipe) => ({
//             ...recipe,
//             photoUrl: createImageUrl(recipe.photo.data),
//           }));
//           setRecipeData(recipes);
//         } else {
//           console.error('Failed to fetch recipe data');
//         }
//       } catch (error) {
//         console.error('Network error:', error);
//       }
//     };

//     const authToken = authservice.getToken();
//     const email = authservice.getEmail();

//     fetchRecipeData(authToken, email);
//   }, []);

//   const createImageUrl = (base64Data) => {
//     const byteArray = Uint8Array.from(atob(base64Data), (c) => c.charCodeAt(0));
//     const blob = new Blob([byteArray], { type: 'image/jpeg' });
//     return URL.createObjectURL(blob);
//   };

//   if (recipeData.length === 0) {
//     // Show a loading state while fetching the recipe data
//     return <div>Loading...</div>;
//   }

//   return (
//     <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//       {recipeData.map((recipe, index) => (
//         <div key={index} style={{ flex: '0 0 250px', margin: '10px' }}>
//           <img
//             src={recipe.photoUrl}
//             alt={`Recipe Image ${index}`}
//             style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
//           />
          
//           <p>Author: {recipe.author}</p>
//           <p>Description: {recipe.description}</p>
//           {/* Include additional text fields for other recipe fields */}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default StandardImageList;
// import React, { useEffect, useState } from 'react';
// import authservice from '../authservice';
// import { Card, CardActionArea, CardContent, Grid, Typography } from '@mui/material';
// import { makeStyles } from '@mui/styles';
// import RecipePopUp from './upload_dialogue';
// import { getValue } from '@testing-library/user-event/dist/utils';

// function UserRecipeList() {
//   const [recipeData, setRecipeData] = useState('');
//   const classes = useStyles();


//   useEffect(() => {
//     const fetchRecipeData = async (authToken, email) => {
//       try {
//         const response = await fetch(`http://localhost:8080/api/recipe/get/${email}`, { headers: { Authorization: `Bearer ${authToken}` } });
//         if (response.ok) {
//           const data = await response.json();
//           const recipe = data.map((recipe) => ({
//             ...recipe,
//             photoUrl: createImageUrl(recipe.photo.data),
//           }));
//           setRecipeData(recipe);
//         } else {
//           console.error('Failed to fetch recipe data');
//         }
//       } catch (error) {
//         console.error('Network error:', error);
//       }
//     };

//     const authToken = authservice.getToken();
//     const email = authservice.getEmail();
    

//     fetchRecipeData(authToken, email);
//   }, []);

//   const createImageUrl = (base64Data) => {
//     const byteArray = Uint8Array.from(atob(base64Data), (c) => c.charCodeAt(0));
//     const blob = new Blob([byteArray], { type: 'image/jpeg' });
//     return URL.createObjectURL(blob);
//   };

//   if (recipeData.length === 0) {
//     // Show a loading state while fetching the recipe data
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <Grid item>
//         <Card className={classes.card}>
//           <CardActionArea onClick={() => console.log(recipeData[0].id)}>
//             <img
//               src={recipeData[0].photoUrl}
//               alt={`Recipe Image`}
//               style={{ width: '100%', height: '200px', cursor: 'pointer' }}
//             />
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="h2">
//                 Author: {recipeData[0].author}
//               </Typography>
//               <Typography variant="body2" color="textSecondary" component="p">
//                 Description: {recipeData[0].description}
//               </Typography>
//               {/* Include additional text fields for other recipe fields */}
//             </CardContent>
//           </CardActionArea>
//         </Card>
//       </Grid>
//     </div>
//   );
// }

// const useStyles = makeStyles(() => ({
//   root: {
//     flexGrow: 1,
//     padding: 16,
//   },
//   card: {
//     maxWidth: 340,
//     minWidth: 340,
//   },
// }));

// export default UserRecipeList;
// import React, { useEffect, useState } from 'react';
// import authservice from '../authservice';
// import { Card, CardActionArea, CardContent, Grid, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
// import { makeStyles } from '@mui/styles';

// function UserRecipeList() {
//   const [recipeData, setRecipeData] = useState([]);
//   const [selectedRecipe, setSelectedRecipe] = useState(null); // Track the selected recipe
//   const classes = useStyles();

//   useEffect(() => {
//     const fetchRecipeData = async (authToken, email) => {
//       try {
//         const response = await fetch(`http://localhost:8080/api/recipe/get/${email}`, { headers: { Authorization: `Bearer ${authToken}` } });
//         if (response.ok) {
//           const data = await response.json();
//           const recipes = data.map((recipe) => ({
//             ...recipe,
//             photoUrl: createImageUrl(recipe.photo.data),
//           }));
//           setRecipeData(recipes);
//         } else {
//           console.error('Failed to fetch recipe data');
//         }
//       } catch (error) {
//         console.error('Network error:', error);
//       }
//     };

//     const authToken = authservice.getToken();
//     const email = authservice.getEmail();

//     fetchRecipeData(authToken, email);
//   }, []);

//   const createImageUrl = (base64Data) => {
//     const byteArray = Uint8Array.from(atob(base64Data), (c) => c.charCodeAt(0));
//     const blob = new Blob([byteArray], { type: 'image/jpeg' });
//     return URL.createObjectURL(blob);
//   };

//   const openDialog = (recipe) => {
//     setSelectedRecipe(recipe); // Set the selected recipe
//   };

//   const closeDialog = () => {
//     setSelectedRecipe(null); // Clear the selected recipe
//   };

//   if (recipeData.length === 0) {
//     // Show a loading state while fetching the recipe data
//     return <div>Loading...</div>;
//   }

//   return (
//     <div style={{ display: 'flex', flexWrap: 'wrap', columnGap: '40px', rowGap: '40px', justifyContent: "center" }}>
//       {recipeData.map((recipe, index) => (
//         <Grid item key={recipe.id}>
//           <Card className={classes.card}>
//             <CardActionArea onClick={() => openDialog(recipe)}> {/* Open the dialog on click */}
//               <img
//                 src={recipe.photoUrl}
//                 alt={`Recipe Image ${index}`}
//                 style={{ width: '100%', height: '200px', cursor: 'pointer' }}
//               />
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="h2">
//                   Author: {recipe.author}
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary" component="p">
//                   Description: {recipe.description}
//                 </Typography>
//               </CardContent>
//             </CardActionArea>
//           </Card>
//         </Grid>
//       ))}

//       {/* Popup Dialog */}
//       <Dialog open={selectedRecipe !== null} onClose={closeDialog}>
//         {selectedRecipe && (
//           <>
//             <DialogTitle>Recipe Details</DialogTitle>
//             <DialogContent>
//               <Typography gutterBottom variant="h5" component="h2">
//                 Author: {selectedRecipe.author}
//               </Typography>
//               <Typography variant="body2" color="textSecondary" component="p">
//                 Description: {selectedRecipe.description}
//               </Typography>
//               {/* Include additional fields for other recipe details */}
//             </DialogContent>
//             <DialogActions>
//               <Button onClick={closeDialog}>Close</Button>
//             </DialogActions>
//           </>
//         )}
//       </Dialog>
//     </div>
//   );
// }

// const useStyles = makeStyles(() => ({
//   root: {
//     flexGrow: 1,
//     padding: 16,
//   },
//   card: {
//     maxWidth: 340,
//     minWidth: 340,
//   },
// }));

// export default UserRecipeList;
