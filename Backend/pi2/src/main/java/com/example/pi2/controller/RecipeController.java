package com.example.pi2.controller;

import com.example.pi2.domain.RecipeWithCategories;
import com.example.pi2.exceptions.ResourceAlreadyExistExeption;
import com.example.pi2.exceptions.ResourceNotFoundException;
import com.example.pi2.model.CategoryXRecipe;
import com.example.pi2.model.Recipe;
import com.example.pi2.service.DtoMapper;
import com.example.pi2.service.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/recipes")
public class RecipeController {

    @Autowired
    private RecipeService recipeService;
    @Autowired
    private DtoMapper mapper;

    // CRUD
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

    @GetMapping("/pagination")
    public ResponseEntity<Page<Recipe>> getAllPaginated(@RequestParam(defaultValue = "0") Integer page, @RequestParam(defaultValue = "10") Integer elements, @RequestParam(defaultValue = "id") String sortBy) {
        Page<Recipe> recipePage = recipeService.getAllPaginated(page, elements, sortBy);
        return new ResponseEntity<>(recipePage, new HttpHeaders(), HttpStatus.OK);

    // EXTRA
    @GetMapping("/name/{name}")
    public RecipeWithCategories getRecipeByName(@PathVariable String name) throws ResourceNotFoundException {
        Recipe recipe = recipeService.getRecipeByNameWithCategory(name);
        RecipeWithCategories withCategories = new RecipeWithCategories();
        withCategories.setRecipe(mapper.toRecipeDto(recipe));
        withCategories.setCategories(recipe.getCategoryXRecipes()
                .stream().map(CategoryXRecipe::getCategory).map(mapper::toCategoryDto).toList());
        return withCategories;
    }

    @PostMapping("/categories/associate/{id}")
    public void associateCategories(@PathVariable Integer id, @RequestBody List<String> categoryNames) throws ResourceNotFoundException {
        recipeService.associateCategories(id, categoryNames);
    }

    @PostMapping("/categories/remove/{id}")
    public void removeCategories(@PathVariable Integer id, @RequestBody List<String> categoryNames) throws ResourceNotFoundException {
        recipeService.removeCategories(id, categoryNames);
    }
}
