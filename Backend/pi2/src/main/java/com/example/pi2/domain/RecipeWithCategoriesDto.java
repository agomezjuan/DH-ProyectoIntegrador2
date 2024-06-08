package com.example.pi2.domain;

import lombok.Data;

import java.util.List;

@Data
public class RecipeWithCategoriesDto {
    private RecipeDto recipe;
    private List<CategoryDto> categories;
}
