package com.example.pi2.domain;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
public class RecipeWithCategoriesDto {
    private RecipeDto recipe;
    private List<CategoryDto> categories;

    public RecipeWithCategoriesDto(RecipeDto recipe) {
        this.recipe = recipe;
        this.categories = new ArrayList<>();
    }
}
