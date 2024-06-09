package com.example.pi2.repository;

import com.example.pi2.model.Planner;
import com.example.pi2.model.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlannerRepository extends JpaRepository<Planner, Long> {

	  @Query("SELECT p FROM Planner p WHERE p.idUser = :idUser")
	  List<Planner> findByUserId(@Param("idUser") String idUser);

	  @Modifying
	  @Query("UPDATE Planner p SET p.idUser = :idUser, p.recipe = :recipe, p.weekDay = :weekDay WHERE p.id = :id")
	  Planner update(@Param("id") Long id, @Param("idUser") String idUser, @Param("recipe") Recipe recipe, @Param("weekDay") String weekDay);
}