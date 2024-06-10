package com.example.pi2.controller;

import com.example.pi2.domain.RecipeDto;
import com.example.pi2.exceptions.ResourceAlreadyExistExeption;
import com.example.pi2.exceptions.ResourceNotFoundException;
import com.example.pi2.model.Recipe;
import com.example.pi2.service.DtoMapper;
import com.example.pi2.service.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
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

    private RecipeDto mapResponseToDto(Recipe recipe) {
        return mapper.toRecipeDto(recipe, true);
    }

    // CRUD
    @PostMapping
    public RecipeDto createRecipe(@RequestBody Recipe recipe) throws ResourceAlreadyExistExeption, ResourceNotFoundException {
        return mapResponseToDto(recipeService.createRecipe(recipe));
    }

    @GetMapping("/{id}")
    public RecipeDto getRecipeById(@PathVariable Integer id) throws ResourceNotFoundException {
        return mapResponseToDto(recipeService.getRecipeById(id));
    }

    @GetMapping
    public List<RecipeDto> getAllRecipes() {
        return recipeService.getAllRecipes().stream().map(this::mapResponseToDto).toList();
    }

    @PutMapping
    public RecipeDto updateRecipe(@RequestBody Recipe recipe) throws ResourceNotFoundException {
        return mapResponseToDto(recipeService.updateRecipe(recipe));
    }

    @DeleteMapping("/{id}")
    public void deleteRecipe(@PathVariable Integer id) {
        recipeService.deleteRecipe(id);
    }

    @GetMapping("/pagination")
    public ResponseEntity<Page<RecipeDto>> getAllPaginated(@RequestParam(defaultValue = "0") Integer page,
                                                        @RequestParam(defaultValue = "10") Integer elements,
                                                        @RequestParam(defaultValue = "id") String sortBy,
                                                        @RequestParam(required = false) String name) {
        Page<RecipeDto> recipePage = recipeService.getAllPaginated(page, elements, sortBy, name)
                .map(this::mapResponseToDto);
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
}
