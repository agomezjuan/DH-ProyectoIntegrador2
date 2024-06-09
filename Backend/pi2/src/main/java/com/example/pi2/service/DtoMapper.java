package com.example.pi2.service;

import com.example.pi2.domain.CategoryDto;
import com.example.pi2.domain.CategoryWithRecipeDto;
import com.example.pi2.domain.RecipeDto;
import com.example.pi2.domain.RecipeWithCategoriesDto;
import com.example.pi2.model.Category;
import com.example.pi2.model.CategoryXRecipe;
import com.example.pi2.model.Recipe;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class DtoMapper {

    public RecipeWithCategoriesDto toFullRecipeDto(Recipe recipe) {
        RecipeWithCategoriesDto dto = new RecipeWithCategoriesDto();
        dto.setRecipe(toRecipeDto(recipe));
        if (Objects.nonNull(recipe.getCategoryXRecipes())
                && !recipe.getCategoryXRecipes().isEmpty()) {
            dto.setCategories(recipe.getCategoryXRecipes()
                    .stream()
                    .map(CategoryXRecipe::getCategory)
                    .map(this::toCategoryDto)
                    .toList());
        }
        return dto;
    }

    public RecipeDto toRecipeDto(Recipe recipe) {
        RecipeDto dto = new RecipeDto();
        dto.setId(recipe.getId());
        dto.setName(recipe.getName());
        dto.setUrlImg(recipe.getUrlImg());
        dto.setPreparationSteps(recipe.getPreparationSteps());
        dto.setIngredients(recipe.getIngredients());
        return dto;
    }

    public CategoryWithRecipeDto toFullCategoryDto(Category category) {
        CategoryWithRecipeDto dto = new CategoryWithRecipeDto();
        dto.setCategory(toCategoryDto(category));
        if (Objects.nonNull(category.getCategoryXRecipes())
                && !category.getCategoryXRecipes().isEmpty()) {
            dto.setRecipes(category.getCategoryXRecipes()
                    .stream()
                    .map(CategoryXRecipe::getRecipe)
                    .map(this::toRecipeDto)
                    .toList());
        }
        return dto;
    }

    public CategoryDto toCategoryDto(Category category) {
        CategoryDto dto = new CategoryDto();
        dto.setId(category.getId());
        dto.setName(category.getName());
        dto.setUrlImg(category.getUrlImg());
        return dto;
    }
}
