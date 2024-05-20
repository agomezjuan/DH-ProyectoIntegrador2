package com.example.pi2.service;

import com.example.pi2.exception.ResourceNotFoundException;
import com.example.pi2.model.Recipe;
import com.example.pi2.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecipeService {
    @Autowired
    private RecipeRepository recipeRepository;

    public Recipe createRecipe(Recipe recipe) {
        // agregar validación de receta existente y datos validos
        return recipeRepository.save(recipe);

    }

    public Recipe getRecipeById(String id) {
        Recipe recipe = recipeRepository.findById(id).orElse(null);
        if (recipe == null) {
            throw new ResourceNotFoundException("Recipe not found with id: " + id);

        }
        return recipe;

    }

    public List<Recipe> getAllRecipes() {
        return  recipeRepository.findAll();
    }

    public Recipe updateRecipe(Recipe recipe) {
        Recipe existingRecipe = recipeRepository.findById().orElse(null);
        if (existingRecipe != null) {
            existingRecipe.setName(recipe.getName());
            existingRecipe.setPreparationSteps(recipe.getPreparationSteps());
            existingRecipe.setCategories(recipe.getCategories());
            existingRecipe.setIngredients(recipe.getIngredients());
            return recipeRepository.save(existingRecipe);
        } else {
            throw new ResourceNotFoundException("");// agregar mensaje
        }

    }

    public void deleteRecipe(String id) {
        recipeRepository.deleteById(id);
    }

}
