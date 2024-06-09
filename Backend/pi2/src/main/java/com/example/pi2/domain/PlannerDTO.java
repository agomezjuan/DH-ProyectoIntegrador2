package com.example.pi2.domain;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PlannerDTO {

	  private Long id;
	  private String idUser;
	  private String sunday;
	  private String monday;
	  private String tuesday;
	  private String wednesday;
	  private String thursday;
	  private String friday;
	  private String saturday;

}
