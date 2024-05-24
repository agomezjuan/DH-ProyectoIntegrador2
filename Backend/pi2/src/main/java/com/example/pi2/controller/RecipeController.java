package com.example.pi2.controller;

import com.example.pi2.exceptions.ResourceAlreadyExistExeption;
import com.example.pi2.exceptions.ResourceNotFoundException;
import com.example.pi2.model.Recipe;
import com.example.pi2.service.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/recipes")
public class RecipeController {

    @Autowired
    private RecipeService recipeService;

    @PostMapping
    public Recipe createRecipe(@RequestBody Recipe recipe) throws ResourceAlreadyExistExeption, ResourceNotFoundException {
        return recipeService.createRecipe(recipe);
    }

    @GetMapping("/{id}")
    public Recipe getRecipeById(@PathVariable Integer id) throws ResourceNotFoundException {
        return recipeService.getRecipeById(id);
    }

    @GetMapping
    public List<Recipe> getAllRecipes() {
        return recipeService.getAllRecipes();
    }

    @PutMapping
    public Recipe updateRecipe(@RequestBody Recipe recipe) throws ResourceNotFoundException {
        return recipeService.updateRecipe(recipe);

    }

    @DeleteMapping("/{id}")
    public void deleteRecipe(@PathVariable Integer id) {
        recipeService.deleteRecipe(id);
    }
}
