package com.saif.Recipe.recipe;

import com.saif.Recipe.photos.Photo;
import com.saif.Recipe.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "recipe")
public class Recipe {
    @Id
    @GeneratedValue
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
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;
    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "recipe_photo")
    private Photo photo;








}
