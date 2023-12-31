package com.saif.Recipe.recipe;

import com.saif.Recipe.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RecipeRepository extends JpaRepository<Recipe, Integer> {
    List<Recipe> findByUser(User user);

    boolean existsByUser(User user);
}
