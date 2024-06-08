package com.example.pi2.domain;

import lombok.Data;

import java.util.List;

@Data
public class CategoryWithRecipeDto {
    private CategoryDto category;
    private List<RecipeDto> recipes;
}
