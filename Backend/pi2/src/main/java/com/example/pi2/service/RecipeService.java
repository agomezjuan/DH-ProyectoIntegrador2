package com.example.pi2.service;

import com.example.pi2.exceptions.ResourceAlreadyExistExeption;
import com.example.pi2.exceptions.ResourceNotFoundException;
import com.example.pi2.model.Ingredient;
import com.example.pi2.model.Recipe;
import com.example.pi2.model.RecipeIngredient;
import com.example.pi2.repository.IngredientRepository;
import com.example.pi2.repository.RecipeIngredientRepository;
import com.example.pi2.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class RecipeService {

	  @Autowired
	  private RecipeRepository recipeRepository;
	  @Autowired
	  private IngredientRepository ingredientRepository;
	  @Autowired
	  private RecipeIngredientRepository recipeIngredientRepository;

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

	  public List<Recipe> getAllRecipes() {

			return recipeRepository.findAll();
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

// UTILS

	  private boolean nameAlreadyInUse(String name) {

			return recipeRepository.findByName(name).isPresent();
	  }
}