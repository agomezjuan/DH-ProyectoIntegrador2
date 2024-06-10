package com.example.pi2.service;

import com.example.pi2.domain.CategoryDto;
import com.example.pi2.domain.RecipeDto;
import com.example.pi2.model.Category;
import com.example.pi2.model.CategoryXRecipe;
import com.example.pi2.model.Recipe;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class DtoMapper {

    public RecipeDto toRecipeDto(Recipe recipe, boolean includeCategories) {
        RecipeDto dto = new RecipeDto();
        dto.setId(recipe.getId());
        dto.setName(recipe.getName());
        dto.setUrlImg(recipe.getUrlImg());
        dto.setDescription(recipe.getDescription());
        dto.setTime(recipe.getPreparationTime());
        dto.setPreparationSteps(recipe.getPreparationSteps());
        dto.setIngredients(recipe.getIngredients());
        if (includeCategories && (Objects.nonNull(recipe.getCategoryXRecipes())
                && !recipe.getCategoryXRecipes().isEmpty())) {
            dto.setCategories(recipe.getCategoryXRecipes()
                    .stream()
                    .map(CategoryXRecipe::getCategory)
                    .map(c -> toCategoryDto(c, false))
                    .toList());
        }
        return dto;
    }

    public CategoryDto toCategoryDto(Category category, boolean includeRecipes) {
        CategoryDto dto = new CategoryDto();
        dto.setId(category.getId());
        dto.setName(category.getName());
        dto.setUrlImg(category.getUrlImg());
        if (includeRecipes && (Objects.nonNull(category.getCategoryXRecipes())
                && !category.getCategoryXRecipes().isEmpty())) {
            dto.setRecipes(category.getCategoryXRecipes()
                    .stream()
                    .map(CategoryXRecipe::getRecipe)
                    .map(r -> toRecipeDto(r, false))
                    .toList());
        }
        return dto;
    }

}
