package com.example.pi2.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Cascade;

import java.util.HashSet;
import java.util.LinkedList;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "recipes")
@JsonIdentityInfo(
		generator = ObjectIdGenerators.PropertyGenerator.class,
		property = "id"
)
public class Recipe {

	  @Id
	  @GeneratedValue(strategy = GenerationType.IDENTITY)
	  private Integer id;
	  private String name;
	  private String urlImg;
	  private LinkedList<String> preparationSteps;
	  @OneToMany(mappedBy = "recipe")
	  private Set<RecipeIngredient> ingredients = new HashSet<>();

	  private Integer caloriesTotal;

	  public void calculateTotalCalories() {

			Integer acc = 0;
			for (RecipeIngredient ingredient :
					ingredients) {
				  acc += ingredient.getCaloriesPartial();
			}
			caloriesTotal = acc;
	  }
	  // TODO falta completar relacion con la entidad Category
}
