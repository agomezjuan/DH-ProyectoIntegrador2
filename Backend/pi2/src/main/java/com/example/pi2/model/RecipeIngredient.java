package com.example.pi2.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.*;
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "recipes_x_ingredient")
@JsonIdentityInfo(
		generator = ObjectIdGenerators.PropertyGenerator.class,
		property = "id"
)
@JsonIgnoreProperties(ignoreUnknown = true)
public class RecipeIngredient {

	  //	@EmbeddedId
//	RecipeIngredientKey id = new RecipeIngredientKey();
	  @Id
	  @GeneratedValue(strategy = GenerationType.IDENTITY)
	  private Integer id;

	  @ManyToOne(cascade = CascadeType.MERGE)
	  @JoinColumn(name = "recipe_id")
	  Recipe recipe;

	  @ManyToOne(cascade = CascadeType.MERGE)
	  @JoinColumn(name = "ingredient_id")
	  Ingredient ingredient;

	  private Integer quantity;

	  private Integer caloriesPartial;

	  public void calculateCalories(Integer quantity, Integer caloriesXUnit) {

			caloriesPartial = quantity * caloriesXUnit;
	  }

}
