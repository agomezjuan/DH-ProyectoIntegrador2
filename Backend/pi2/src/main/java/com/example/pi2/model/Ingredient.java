package com.example.pi2.model;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.*;

import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table (name= "ingredients")
@JsonIdentityInfo(
		generator = ObjectIdGenerators.PropertyGenerator.class,
		property = "id"
)
public class Ingredient {
	  @Id
	  @GeneratedValue(strategy = GenerationType.IDENTITY)
	  private Integer id;
	  private String name;
	  private Integer caloriesUnit;
	  private String imgUrl;
	  @OneToMany(mappedBy = "ingredient", cascade = CascadeType.MERGE)
	  @JsonIgnore
	  private Set<RecipeIngredient> recipes  = new HashSet<>();
}
