import { useState } from "react";
import authservice from "../authservice";
import { Input, TextField } from "@mui/material";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

function UploadFile() {
    
  const [recipeName, setRecipeName] = useState(''); const [author, setAuthor] = useState(''); const [description, setDescription] = useState(''); 
  const [ingredients, setIngredients] = useState(''); const [instructions, setInstructions] = useState(''); const [preparationTime, setPreparationTime] = useState('');
  const [cookingTime, setCookingTime] = useState(''); const [servings, setServings] = useState(''); const [notes, setNotes] = useState('');
  const [difficulty, setDifficulty] = useState('')
  
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    
  const handleFileUpload = async () => {
      const fileupload = document.getElementById('fileupload');
      const file = fileupload.files[0];

      
      
  
      try {
        
        const info = {"email": authservice.getEmail(), "name": recipeName, "author": author, "description": description, "ingredients": ingredients, "instructions": instructions, 
      "preparationTime": preparationTime, "cookingTime": cookingTime, "servings": servings, "difficulty": difficulty, "notes": notes}
      
        

        const formData = new FormData();
        formData.append('data', file);
        //formData.append('author', author)
        formData.append('info',  new Blob([JSON.stringify(info)], { type: 'application/json' }))
        
        
        const authToken = authservice.getToken();
        console.log(formData);
        
        
        const response = await fetch('http://localhost:8080/api/recipe/post', {
          method: 'POST',
          headers: {Authorization: `Bearer ${authToken}`},
          body: formData
        });
        
  
        if (response.ok) {
          const text = await response.text();
          console.log("HERES THE TEXT" + text)
          alert("successfully uploaded image");
          window.location.reload(false); 
        } else {
          console.error('Failed to upload file');
        }
      } catch (error) {
        console.error('Network error:', error);
      }
    };
  
    return (
      <div>

        {/* <input id="fileupload" type="file" />
        <button onClick={handleFileUpload} >Upload</button>
        <TextField className="textfield" label="just_the_request" value={request}
        onChange={(e)=> setRequest(e.target.value)}></TextField> */}


        <div style={{ display: 'flex', flexWrap: 'wrap', columnGap:'40px', justifyContent:"center", marginBottom: '30px'}}>
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Create Recipe
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogContent>
              <input id= "fileupload" type="file"></input>
              <button onClick={handleFileUpload} >Upload</button>
              <Input placeholder="name" value={recipeName} onChange={(e)=> setRecipeName(e.target.value)}></Input>
              <Input placeholder="author" value={author} onChange={(e)=> setAuthor(e.target.value)}></Input>
              <Input placeholder="description" value={description} onChange={(e)=> setDescription(e.target.value)}></Input>
              <Input placeholder="ingredients" value={ingredients} onChange={(e)=> setIngredients(e.target.value)}></Input>
              <Input placeholder="instructions" value={instructions} onChange={(e)=> setInstructions(e.target.value)}></Input>
              <Input placeholder="preparation time" value={preparationTime} onChange={(e)=> setPreparationTime(e.target.value)}></Input>
              <Input placeholder="cooking time" value={cookingTime} onChange={(e)=> setCookingTime(e.target.value)}></Input>
              <Input placeholder="servings" value={servings} onChange={(e)=> setServings(e.target.value)}></Input>
              <Input placeholder="difficulty" value={difficulty} onChange={(e)=> setDifficulty(e.target.value)}></Input>
              <Input placeholder="notes" value={notes} onChange={(e)=> setNotes(e.target.value)}></Input>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </div>

      </div>
    );
  }
  
  export default UploadFile;
  