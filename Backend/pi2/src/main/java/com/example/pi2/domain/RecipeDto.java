package com.example.pi2.domain;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.util.LinkedList;
import java.util.List;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class RecipeDto {
    private Integer id;
    private String name;
    private String urlImg;
    private String description;
    private String time;
    private LinkedList<String> preparationSteps;
    private List<String> ingredients;
    private List<CategoryDto> categories;
}
