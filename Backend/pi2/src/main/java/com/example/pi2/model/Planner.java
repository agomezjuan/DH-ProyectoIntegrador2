package com.example.pi2.model;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "planners")
public class Planner {

	  @Id
	  @GeneratedValue(strategy = GenerationType.IDENTITY)
	  private Long id;

	  @Column(name = "id_user", nullable = false)
	  private String idUser;

	  @ManyToOne(cascade = CascadeType.MERGE)
	  @JoinColumn(name = "recipe_id1")
	  private Recipe sunday;
	  @ManyToOne(cascade = CascadeType.MERGE)
	  @JoinColumn(name = "recipe_id2")
	  private Recipe monday;
	  @ManyToOne(cascade = CascadeType.MERGE)
	  @JoinColumn(name = "recipe_id3")
	  private Recipe tuesday;
	  @ManyToOne(cascade = CascadeType.MERGE)
	  @JoinColumn(name = "recipe_id4")
	  private Recipe wednesday;
	  @ManyToOne(cascade = CascadeType.MERGE)
	  @JoinColumn(name = "recipe_id5")
	  private Recipe thursday;
	  @ManyToOne(cascade = CascadeType.MERGE)
	  @JoinColumn(name = "recipe_id6")
	  private Recipe friday;
	  @ManyToOne(cascade = CascadeType.MERGE)
	  @JoinColumn(name = "recipe_id7")
	  private Recipe saturday;

}
