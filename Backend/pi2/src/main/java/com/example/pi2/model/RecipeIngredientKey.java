package com.example.pi2.model;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class RecipeIngredientKey implements Serializable {

	  @Column(name = "ingredient_id")
	  Integer ingredientId;

	  @Column(name = "recipe_id")
	  Integer recipeId;

	  @Override
	  public boolean equals(Object o) {

			if (this == o) return true;
			if (o == null || getClass() != o.getClass()) return false;
			RecipeIngredientKey that = (RecipeIngredientKey) o;
			return Objects.equals(ingredientId, that.ingredientId) && Objects.equals(recipeId, that.recipeId);
	  }
	  @Override
	  public int hashCode() {

			return Objects.hash(ingredientId, recipeId);
	  }

}
