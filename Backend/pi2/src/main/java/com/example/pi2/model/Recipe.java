package com.example.pi2.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Cascade;

import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
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
	  @Column(unique = true)
	  private String name;
	  private String urlImg;
	  private LinkedList<String> preparationSteps;
	  @OneToMany(mappedBy = "recipe")
	  private Set<RecipeIngredient> ingredients = new HashSet<>();
	  @OneToMany(mappedBy = "recipe", fetch = FetchType.LAZY)
      private List<CategoryXRecipe> categoryXRecipes;

	  private Integer caloriesTotal;

	  public void calculateTotalCalories() {

			Integer acc = 0;
			for (RecipeIngredient ingredient :
					ingredients) {
				  acc += ingredient.getCaloriesPartial();
			}
			caloriesTotal = acc;
	  }
}
