package com.example.pi2.repository;

import com.example.pi2.entity.Ingredient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IngredientRepository extends JpaRepository<Ingredient, Integer> {


	  @Query("SELECT i FROM Ingredient i WHERE i.name = ?1")
	  Optional<Ingredient> findByName(String name);
//	  @Query("SELECT e FROM Experience e WHERE e.name = ?1")
//	  Optional<Experience> findByName(String name);
//
//	  @Query("SELECT e FROM Experience e WHERE e.id = ?1")
//	  Optional<Experience> findById(Integer id);
//
//	  @Query("SELECT e FROM Experience e WHERE e.experienceSlug = ?1")
//	  Optional<Experience> findByExperienceSlug(String slug);
//
//	  @Query("SELECT e FROM Experience e WHERE e.category.id = ?1")
//	  Page<Experience> findExperiencesByCategory(Integer categoryId, Pageable pageable);
//
//	  @Modifying
//	  @Query(value = "DELETE FROM characteristic_list ec WHERE ec.experience_id = ?1", nativeQuery = true)
//	  void deleteExperienceAsso(Integer id);

}
