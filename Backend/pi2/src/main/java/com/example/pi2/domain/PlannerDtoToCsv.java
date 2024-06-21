package com.example.pi2.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.LinkedList;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PlannerDtoToCsv {

	  private String dayOfTheWeek;
	  private String name;
	  private String description;
	  private String preparationTime;
	  private LinkedList<String> preparationSteps;
}
