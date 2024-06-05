package com.example.pi2.service;

import com.example.pi2.exceptions.ResourceAlreadyExistExeption;
import com.example.pi2.exceptions.ResourceNotFoundException;
import com.example.pi2.model.*;
import com.example.pi2.repository.CategoryXRecipeRepository;
import com.example.pi2.repository.IngredientRepository;
import com.example.pi2.repository.RecipeIngredientRepository;
import com.example.pi2.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Service
public class RecipeService {
    public static final String NO_MATCHING_CATEGORY_NAMES = "None of the provided category names are in our database, please create the categories and try again";
    private static final String RECIPE_NOT_FOUND_FMT = "Recipe not found with %s: %s";
    @Autowired
    private RecipeRepository recipeRepository;
    @Autowired
    private CategoryXRecipeRepository categoryXRecipeRepository;
    @Autowired
    private CategoryService categoryService;
    @Autowired
    private IngredientRepository ingredientRepository;
    @Autowired
    private RecipeIngredientRepository recipeIngredientRepository;

    public Recipe getRecipeByNameWithCategory(String name) throws ResourceNotFoundException {
        return recipeRepository.findByNameWithCategory(name)
                .orElseThrow(() -> new ResourceNotFoundException(RECIPE_NOT_FOUND_FMT.formatted("name", name)));
    }

    public List<Recipe> getAllRecipes() {
        return recipeRepository.findAll();
    }

    public Recipe createRecipe(Recipe recipe) throws ResourceNotFoundException, ResourceAlreadyExistExeption {

        if (recipe == null) {
            throw new ResourceNotFoundException("Recipe object cannot be null");
        }
        if (recipe.getName() == null || recipe.getName().isEmpty()) {
            throw new ResourceNotFoundException("Recipe name required");
        }
        if (nameAlreadyInUse(recipe.getName())) {
            throw new ResourceAlreadyExistExeption("A Recipe with that name already exists in the database");
        }
        Recipe recipe1 = recipeRepository.save(recipe);
        Set<RecipeIngredient> recipeIngredientSet = recipe1.getIngredients();
        for (RecipeIngredient recipeIngredient :
                recipeIngredientSet) {
            recipeIngredient.setRecipe(recipe1);
            Ingredient ingredient = ingredientRepository.findById(recipeIngredient.getIngredient().getId()).orElse(null);
            recipeIngredient.calculateCalories(recipeIngredient.getQuantity(), ingredient.getCaloriesUnit());
        }
        recipeIngredientRepository.saveAll(recipeIngredientSet);
        Recipe recipeFullData = recipeRepository.getReferenceById(recipe1.getId());
        recipeFullData.calculateTotalCalories();

        return recipeRepository.save(recipeFullData);

    }

    public Recipe getRecipeById(Integer id) throws ResourceNotFoundException {

        Recipe recipe = recipeRepository.findById(id).orElse(null);
        if (recipe == null) {
            throw new ResourceNotFoundException("Recipe not found with id: " + id);
        }
        return recipe;

    }

    public Recipe getRecipeByName(String name) throws ResourceNotFoundException {

        Recipe recipe = recipeRepository.findByName(name).orElse(null);
        if (recipe == null) {
            throw new ResourceNotFoundException("Recipe not found with id: " + name);
        }
        return recipe;
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

    public Page<Recipe> getAllPaginated(Integer page, Integer elements, String sortBy) {

        PageRequest paging = PageRequest.of(page, elements, Sort.by(sortBy));
        return recipeRepository.findAll(paging);
    }

    public void associateCategories(Integer id, List<String> categoryNames) throws ResourceNotFoundException {
        Recipe recipe = getRecipeById(id);
        List<CategoryXRecipe> categoryXRecipes = new ArrayList<>();
        for (String name : categoryNames) {
            Category category = categoryService.findByName(name);
            if (category != null) {
                CategoryXRecipe cxr = new CategoryXRecipe();
                cxr.setCategory(category);
                cxr.setRecipe(recipe);
                categoryXRecipes.add(cxr);
            }
        }
        if (categoryXRecipes.isEmpty()) {
            throw new ResourceNotFoundException(NO_MATCHING_CATEGORY_NAMES);
        }
        categoryXRecipeRepository.saveAll(categoryXRecipes);
    }

    public void removeCategories(Integer id, List<String> categoryNames) throws ResourceNotFoundException {
        Recipe recipe = getRecipeById(id);
        List<CategoryXRecipe> categoryXRecipes = new ArrayList<>();
        for (String name : categoryNames) {
            Category category = categoryService.findByName(name);
            if (category != null) {
                categoryXRecipeRepository.findByRecipeAndCategory(recipe, category).ifPresent(categoryXRecipes::add);
            }
        }
        if (categoryXRecipes.isEmpty()) {
            throw new ResourceNotFoundException(NO_MATCHING_CATEGORY_NAMES);
        }
        categoryXRecipeRepository.deleteAll(categoryXRecipes);
    }

    // UTILS
    private boolean nameAlreadyInUse(String name) {
        return recipeRepository.findByName(name).isPresent();
    }
}