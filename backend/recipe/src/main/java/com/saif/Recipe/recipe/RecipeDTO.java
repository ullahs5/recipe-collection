package com.saif.Recipe.recipe;

import com.saif.Recipe.photos.Photo;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RecipeDTO {
    private Integer id;
    private String name;
    private String description;
    private String ingredients;
    private String instructions;
    private int preparationTime;
    private int cookingTime;
    private int servings;
    private String author;
    private String source;
    private String difficulty;
    private String notes;
    private Photo photo;
}
