package com.example.pi2.repository;

import com.example.pi2.model.Category;
import com.example.pi2.model.CategoryXRecipe;
import com.example.pi2.model.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CategoryXRecipeRepository extends JpaRepository<CategoryXRecipe, Integer> {

    Optional<CategoryXRecipe> findByRecipeAndCategory(Recipe recipe, Category category);
}
