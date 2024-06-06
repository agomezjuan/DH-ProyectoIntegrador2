package com.example.pi2.controller;

import com.example.pi2.model.Schedule;
import com.example.pi2.service.ScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/schedule")
public class ScheduleController {

    @Autowired
    private ScheduleService scheduleService;

    @GetMapping
    public List<Schedule> getAll() {
        return scheduleService.findAll();
    }

    @GetMapping("/{id}")
    public Schedule getById(@PathVariable Long id) {
        return scheduleService.findById(id);
    }

    @PostMapping
    public Schedule save(@RequestBody Schedule schedule) {
        return scheduleService.save(schedule);
    }

    @PutMapping("/{id}")
    public Schedule update(@PathVariable Long id, @RequestBody Schedule scheduleDetails) {
        return scheduleService.update(id, scheduleDetails);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        scheduleService.deleteById(id);
    }

}
