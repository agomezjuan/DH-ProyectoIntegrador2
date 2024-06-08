package com.example.pi2.service;

import com.example.pi2.model.Planner;
import com.example.pi2.model.Recipe;
import com.example.pi2.repository.PlannerRepository;
import com.example.pi2.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlannerService {

    @Autowired
    private PlannerRepository plannerRepository;

    @Autowired
    private RecipeRepository recipeRepository;

    public List<Planner> findAll() {
        return plannerRepository.findAll();
    }

    public Planner findById(Long id) {
        return plannerRepository.findById(id).orElseThrow(() -> new RuntimeException("Schedule not found"));
    }

    public List<Planner> findByUserId(String idUser) {
        return plannerRepository.findByUserId(idUser);
    }
    public Planner save(Planner planner) {
        return plannerRepository.save(planner);
    }

    public Planner saveForUser(String idUser, Planner planner) {
        planner.setIdUser(idUser);
        return plannerRepository.save(planner);
    }
    public Planner update(Long id, Planner plannerDetails) {
        Planner planner = findById(id);
        planner.setIdUser(plannerDetails.getIdUser());
        Recipe recipe = recipeRepository.findById(plannerDetails.getRecipe().getId()).orElseThrow(() -> new RuntimeException("Recipe not found"));
        planner.setRecipe(recipe);
        planner.setWeekDay(plannerDetails.getWeekDay());
        return plannerRepository.save(planner);
    }

    public void deleteById(Long id) {
        Planner planner = findById(id);
        plannerRepository.delete(planner);
    }
}