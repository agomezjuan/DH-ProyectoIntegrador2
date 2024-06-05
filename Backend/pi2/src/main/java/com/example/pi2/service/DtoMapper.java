package com.example.pi2.service;

import com.example.pi2.domain.CategoryDto;
import com.example.pi2.domain.RecipeDto;
import com.example.pi2.model.Category;
import com.example.pi2.model.Recipe;
import org.springframework.stereotype.Service;

@Service
public class DtoMapper {

    public RecipeDto toRecipeDto(Recipe recipe) {
        RecipeDto dto = new RecipeDto();
        dto.setId(recipe.getId());
        dto.setName(recipe.getName());
        dto.setUrlImg(recipe.getUrlImg());
        dto.setPreparationSteps(recipe.getPreparationSteps());
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
