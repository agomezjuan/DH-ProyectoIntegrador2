package com.example.pi2.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "recipes_x_ingredient")
@JsonIdentityInfo(
		generator = ObjectIdGenerators.PropertyGenerator.class,
		property = "id"
)
public class RecipesIngredient {

	@EmbeddedId
	RecipesIngredientKey id;

	@ManyToOne
	@MapsId("recipeId")
	@JoinColumn(name = "recipe_id")
	Recipe recipe;

	@ManyToOne
	@MapsId("ingredientId")
	@JoinColumn(name = "ingredient_id")
	Ingredient ingredient;


	private Integer quantity;

	private Integer caloriesPartial;

	public void calculateCalories(Integer quantity, Integer caloriesXUnit){
		  caloriesPartial = quantity*caloriesXUnit;
	}

}
