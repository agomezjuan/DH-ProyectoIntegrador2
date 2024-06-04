package com.example.pi2.repository;

import com.example.pi2.model.Recipe;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RecipeRepository extends JpaRepository<Recipe, Integer> {

	  @Query("SELECT r FROM Recipe r WHERE r.name = ?1")
	  Optional<Recipe> findByName(String name);

	  @Query("SELECT r FROM Recipe r")
	  Page<Recipe> findRecipesPaginated(Pageable pageable);
	
	  @Query("""
					SELECT r
					FROM Recipe r
					LEFT JOIN FETCH r.categoryXRecipes cxr
					WHERE r.name = ?1""")
	  Optional<Recipe> findByNameWithCategory(String name);

}
