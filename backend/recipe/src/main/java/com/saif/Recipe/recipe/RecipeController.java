package com.saif.Recipe.recipe;

import com.saif.Recipe.photos.PhotoController;

import com.saif.Recipe.user.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin
public class RecipeController {

    private final PhotoController photoController;
    private final UserRepository userRepository;
    private final RecipeRepository recipeRepository;


    @GetMapping("/api/recipe/get/{userEmail}")
    @Transactional
    public ResponseEntity<List<Recipe>> getRecipes(@PathVariable("userEmail") String userEmail) {
        if (!userRepository.existsById(userRepository.findByEmail(userEmail).orElseThrow().getId())) {
            throw new EntityNotFoundException("Not found User with email = " + userEmail);
        }

        List<Recipe> recipes = recipeRepository.findByUser(userRepository.findByEmail(userEmail).orElseThrow(()-> new EntityNotFoundException("user not found")));
        //List<RecipeDTO> c_recipes = convertToDTO(recipes);
        return ResponseEntity.ok(recipes);
    }

    @GetMapping("/api/recipe/get/{userEmail}/{recipeId}")
    @Transactional
    public ResponseEntity<List<Recipe>> getRecipe(@PathVariable("userEmail") String userEmail, @PathVariable("recipeId") Integer recipeId) {

        List<Recipe> recipe = recipeRepository.findByUser(userRepository.findByEmail(userEmail).stream().filter(r -> r.getId().equals(recipeId)).findFirst().orElseThrow());


        return ResponseEntity.ok(recipe);
    }



    record recipeRequest(String email, String name, String author, String description, String ingredients, String instructions, int preparationTime, int cookingTime, int servings, String source, String difficulty, String notes) {}
    @PostMapping("api/recipe/post")
    public Recipe createRecipe(@RequestPart("info") recipeRequest request, @RequestPart("data") MultipartFile file) throws IOException {
        Recipe recipe = new Recipe();
        recipe.setUser(userRepository.findByEmail(request.email()).orElseThrow());
        recipe.setName(request.name());
        recipe.setAuthor(request.author());
        recipe.setDescription(request.description());
        recipe.setIngredients(request.ingredients());
        recipe.setInstructions(request.instructions());
        recipe.setPreparationTime(request.preparationTime());
        recipe.setCookingTime(request.cookingTime());
        recipe.setServings(request.servings());
        recipe.setSource(request.source());
        recipe.setDifficulty(request.difficulty());
        recipe.setNotes(request.notes());
        recipe.setPhoto(photoController.createPhoto(file).getBody());
        recipeRepository.save(recipe);
        return recipe;
    }

//    @PostMapping("/api/recipe/post")
//    public Recipe createRecipe(@RequestBody RecipeRequest request, @RequestPart("data") MultipartFile file) throws IOException {
//        Recipe recipe = new Recipe();
//        recipe.setUser(userRepository.findByEmail(request.email()).orElseThrow(() -> new EntityNotFoundException("Not found User with email = " + request.email())));
//        recipe.setName(request.name());
//        recipe.setDescription(request.description());
//        recipe.setIngredients(request.ingredients());
//        recipe.setInstructions(request.instructions());
//        recipe.setPreparationTime(request.preparationTime());
//        recipe.setCookingTime(request.cookingTime());
//        recipe.setServings(request.servings());
//        recipe.setAuthor(request.author());
//        recipe.setSource(request.source());
//        recipe.setDifficulty(request.difficulty());
//        recipe.setNotes(request.notes());
//        recipe.setPhoto(photoController.createPhoto(file).getBody());
//        recipeRepository.save(recipe);
//        return recipe;
//    }
}

// create recipe,