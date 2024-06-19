package com.example.pi2.controller;

import com.example.pi2.domain.FavoriteDto;
import com.example.pi2.domain.RecipeWithCategoriesDto;
import com.example.pi2.exceptions.ResourceAlreadyExistExeption;
import com.example.pi2.exceptions.ResourceNotFoundException;
import com.example.pi2.model.Favorite;
import com.example.pi2.model.Recipe;
import com.example.pi2.service.DtoMapper;
import com.example.pi2.service.FavoritesService;
import com.example.pi2.service.RecipeService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/recipes")
public class RecipeController {

    @Autowired
    private RecipeService recipeService;

    @Autowired
    private FavoritesService favoritesService;

    @Autowired
    private DtoMapper mapper;

    // CRUD
    @PostMapping
    public RecipeWithCategoriesDto createRecipe(@RequestBody Recipe recipe) throws ResourceAlreadyExistExeption, ResourceNotFoundException {
        return mapper.toFullRecipeDto(recipeService.createRecipe(recipe));
    }

    @GetMapping("/{id}")
    public RecipeWithCategoriesDto getRecipeById(@PathVariable Integer id) throws ResourceNotFoundException {
        return mapper.toFullRecipeDto(recipeService.getRecipeById(id));
    }

    @GetMapping
    public List<RecipeWithCategoriesDto> getAllRecipes(@RequestParam(required = false, name = "username") String username) {
        var recipes = recipeService.getAllRecipes().stream().map(mapper::toFullRecipeDto).toList();
        this.setFavoriteFlagToRecipes(recipes, username);
        return recipes;
    }

    @PutMapping
    public RecipeWithCategoriesDto updateRecipe(@RequestBody Recipe recipe) throws ResourceNotFoundException {
        return mapper.toFullRecipeDto(recipeService.updateRecipe(recipe));
    }

    @DeleteMapping("/{id}")
    public void deleteRecipe(@PathVariable Integer id) {
        recipeService.deleteRecipe(id);
    }

    @GetMapping("/pagination")
    public ResponseEntity<Page<RecipeWithCategoriesDto>> getAllPaginated(@RequestParam(defaultValue = "0") Integer page,
                                                        @RequestParam(defaultValue = "9") Integer elements,
                                                        @RequestParam(defaultValue = "id") String sortBy,
                                                        @RequestParam(required = false) String name,
                                                        @RequestParam(required = false) String username) {
        Page<RecipeWithCategoriesDto> recipePage = recipeService.getAllPaginated(page, elements, sortBy, name)
                .map(mapper::toFullRecipeDto);
        setFavoriteFlagToRecipes(recipePage.getContent(), username);
        return ResponseEntity.ok(recipePage);
    }

    // EXTRA
    @PostMapping("/categories/associate/{id}")
    public void associateCategories(@PathVariable Integer id, @RequestBody List<String> categoryNames) throws ResourceNotFoundException {
        recipeService.associateCategories(id, categoryNames);
    }

    @PostMapping("/categories/remove/{id}")
    public void removeCategories(@PathVariable Integer id, @RequestBody List<String> categoryNames) throws ResourceNotFoundException {
        recipeService.removeCategories(id, categoryNames);
    }

    @PostMapping("/addMany")
    public void addMany(@RequestBody List<Recipe> recipes){
        recipeService.postMultiple(recipes);
    }

    private void setFavoriteFlagToRecipes(List<RecipeWithCategoriesDto> recipes, String username) {
        if(StringUtils.isBlank(username)) {
            return;
        }

        List<FavoriteDto> favorites = favoritesService.getRecipesFavoriteByUser(username);
        for (RecipeWithCategoriesDto recipe : recipes) {
            recipe.getRecipe().setFavorite(favorites
                    .stream()
                    .anyMatch(favorite -> Objects.equals(favorite.getRecipeId(), recipe.getRecipe().getId())));
        }
    }
}
