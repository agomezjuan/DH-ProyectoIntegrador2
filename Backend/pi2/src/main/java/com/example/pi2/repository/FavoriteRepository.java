package com.example.pi2.repository;

import com.example.pi2.model.Favorite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
public interface FavoriteRepository extends JpaRepository<Favorite, Long>{

    List<Favorite> findByUserId(String userId);

    boolean existsByUserIdAndRecipeId(String userId, Integer recipeId);
    void deleteByUserIdAndRecipeId(String userId, Integer recipeId);


}
