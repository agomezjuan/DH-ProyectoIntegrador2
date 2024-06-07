package com.example.pi2.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.*;

import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
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
	  private String description;
	  private String preparationTime;
	  @Column(length = 2500)
	  private LinkedList<String> preparationSteps;
	  @Column(length = 2500)
	  private LinkedList<String> ingredients;
	  @OneToMany(mappedBy = "recipe", fetch = FetchType.LAZY)
	  private List<CategoryXRecipe> categoryXRecipes;
}
