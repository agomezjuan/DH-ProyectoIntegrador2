package com.example.pi2.repository;

import com.example.pi2.model.Recipe;
import com.example.pi2.model.Schedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ScheduleRepository extends JpaRepository<Schedule, Long> {

    @Query("SELECT s FROM Schedule s WHERE s.idUser = :idUser")
    List<Schedule> findByUserId(@Param("idUser") String idUser);
    @Query("UPDATE Schedule s SET s.idUser = :idUser, s.recipe = :recipe, s.weekDay = :weekDay WHERE s.id = :id")
    Schedule update(@Param("id") Long id, @Param("idUser") String idUser, @Param("recipe") Recipe recipe, @Param("weekDay") String weekDay);
}