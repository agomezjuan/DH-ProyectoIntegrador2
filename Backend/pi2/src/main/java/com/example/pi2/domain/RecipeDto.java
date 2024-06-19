package com.example.pi2.domain;

import lombok.Data;

import java.util.LinkedList;
import java.util.List;

@Data
public class RecipeDto {
    private Integer id;
    private String name;
    private String urlImg;
    private LinkedList<String> preparationSteps;
    private List<String> ingredients;
    private String description;
    private String preparationTime;
    private boolean favorite;
}
