package com.example.pi2.service;

import com.example.pi2.model.Schedule;
import com.example.pi2.model.Recipe;
import com.example.pi2.repository.ScheduleRepository;
import com.example.pi2.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ScheduleService {

    @Autowired
    private ScheduleRepository scheduleRepository;

    @Autowired
    private RecipeRepository recipeRepository;

    public List<Schedule> findAll() {
        return scheduleRepository.findAll();
    }

    public Schedule findById(Long id) {
        return scheduleRepository.findById(id).orElseThrow(() -> new RuntimeException("Schedule not found"));
    }

    public Schedule save(Schedule schedule) {
        return scheduleRepository.save(schedule);
    }

    public Schedule update(Long id, Schedule scheduleDetails) {
        Schedule schedule = findById(id);
        schedule.setIdUsuario(scheduleDetails.getIdUsuario());
        Recipe recipe = recipeRepository.findById(scheduleDetails.getRecipe().getId()).orElseThrow(() -> new RuntimeException("Recipe not found"));
        schedule.setRecipe(recipe);
        schedule.setDiaDeLaSemana(scheduleDetails.getDiaDeLaSemana());
        return scheduleRepository.save(schedule);
    }

    public void deleteById(Long id) {
        Schedule schedule = findById(id);
        scheduleRepository.delete(schedule);
    }
}