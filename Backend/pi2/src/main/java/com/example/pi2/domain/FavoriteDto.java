package com.example.pi2.domain;

import lombok.Data;

@Data
public class FavoriteDto {
    private Long favoriteId;
    private Integer recipeId;
    private String recipeName;
}
