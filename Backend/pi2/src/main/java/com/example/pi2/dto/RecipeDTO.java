package com.example.pi2.dto;

import com.example.pi2.model.Ingredient;
import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import java.util.LinkedList;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString(exclude = "ingredients")
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonAutoDetect
public class RecipeDTO {
	private Integer id;
	private String name;
	private String urlImg;
	private LinkedList<String> preparationSteps;
	private Set<Ingredient> ingredients;
}
