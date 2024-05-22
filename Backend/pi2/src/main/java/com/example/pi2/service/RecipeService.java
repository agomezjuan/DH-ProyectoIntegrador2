package com.example.pi2.service;

import com.example.pi2.exceptions.ResourceAlreadyExistExeption;
import com.example.pi2.exceptions.ResourceNotFoundException;
import com.example.pi2.model.Recipe;
import com.example.pi2.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecipeService {
    @Autowired
    private RecipeRepository recipeRepository;

    public Recipe createRecipe(Recipe recipe) throws ResourceNotFoundException, ResourceAlreadyExistExeption {
        if(recipe == null){
            throw new ResourceNotFoundException("Recipe object cannot be null");
        }

        if(recipe.getName()== null || recipe.getName().isEmpty()){
            throw new ResourceNotFoundException("Recipe name required");
        }
        if(nameAlreadyInUse(recipe.getName())){
            throw new ResourceAlreadyExistExeption("A Recipe with that name already exists in the database");
        }

        return recipeRepository.save(recipe);

    }

    public Recipe getRecipeById(Integer id) throws ResourceNotFoundException {
        Recipe recipe = recipeRepository.findById(id).orElse(null);
        if (recipe == null) {
            throw new ResourceNotFoundException("Recipe not found with id: " + id);
        }
        return recipe;

    }

    public Recipe getRecipeByName(String name) throws ResourceNotFoundException{
        Recipe recipe = recipeRepository.findByName(name).orElse(null);
        if (recipe == null) {
            throw new ResourceNotFoundException("Recipe not found with id: " + name);
        }
        return recipe;
    }

    public List<Recipe> getAllRecipes() {
        return  recipeRepository.findAll();
    }

    public Recipe updateRecipe(Recipe recipe) throws ResourceNotFoundException {
        Recipe existingRecipe = recipeRepository.findById(recipe.getId()).orElse(null);
        if (existingRecipe != null) {
            existingRecipe.setName(recipe.getName());
            existingRecipe.setPreparationSteps(recipe.getPreparationSteps());
            //existingRecipe.setCategories(recipe.getCategories());
//            existingRecipe.setIngredients(recipe.getIngredients());
            return recipeRepository.save(existingRecipe);
        } else {
            throw new ResourceNotFoundException("Recipe with ID " + recipe.getId() + " not found");
        }

    }

    public void deleteRecipe(Integer id) {
        recipeRepository.deleteById(id);
    }





// UTILS



private boolean nameAlreadyInUse(String name){
    return recipeRepository.findByName(name).isPresent();
}
}