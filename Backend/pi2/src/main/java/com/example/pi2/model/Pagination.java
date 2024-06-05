package com.example.pi2.model;

import lombok.*;

import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Pagination {
	  private List<Recipe> recipeList = new ArrayList<>();
	  private Long totalElements;
	  private int totalPages;
}
