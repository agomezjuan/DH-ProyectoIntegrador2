package com.example.pi2.domain;

import lombok.Data;

@Data
public class FavoriteRequestDto {
    private String username;
    private Integer recipeId;
}
