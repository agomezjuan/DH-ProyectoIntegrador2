package com.example.pi2.domain;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PlannerWithRecipeDTO {

    private Long id;
    private String idUser;
    private RecipeWithCategoriesDto sunday;
    private RecipeWithCategoriesDto monday;
    private RecipeWithCategoriesDto tuesday;
    private RecipeWithCategoriesDto wednesday;
    private RecipeWithCategoriesDto thursday;
    private RecipeWithCategoriesDto friday;
    private RecipeWithCategoriesDto saturday;
}
