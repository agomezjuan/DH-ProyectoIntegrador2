package com.example.pi2.service;

import com.example.pi2.model.Recipe;
import com.example.pi2.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecipeService {
    @Autowired
    private RecipeRepository recipeRepository;

    //POST
    public Recipe createRecipe(Recipe recipe) {
        return recipeRepository.save(recipe);
    }
    //GET
    public Recipe getRecipeById(String id) {
        return recipeRepository.findById(id).orElse(null);
    }

    public List<Recipe>getAllRecipes(){
        return (List<Recipe>) recipeRepository.findAll();
    }

    //PUT
    public Recipe updateRecipe(String id, Recipe recipe){
        Recipe existingRecipe = recipeRepository.findById(id).orElse(null);
        if(existingRecipe != null){
            existingRecipe.setName(recipe.getName());
            existingRecipe.setPreparationSteps(recipe.getPreparationSteps());
            existingRecipe.setCategories(recipe.getCategories());
            existingRecipe.setIngredients(recipe.getIngredients());
            return recipeRepository.save(existingRecipe);
        }else{
            return null;
        }

    }

    //DELETE
    public void deleteRecipe(String id){
        recipeRepository.deleteById(id);

    }

}
