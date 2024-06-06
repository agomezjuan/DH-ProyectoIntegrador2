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

    @Query("SELECT s FROM Schedule s")
    List<Schedule> findAll();

    @Query("SELECT s FROM Schedule s WHERE s.id = :id")
    Optional<Schedule> findById(@Param("id") Long id);

    @Query("INSERT INTO Schedule (idUsuario, recipe, diaDeLaSemana) VALUES (:idUsuario, :recipe, :diaDeLaSemana)")
    Schedule save(@Param("idUsuario") String idUsuario, @Param("recipe") Recipe recipe, @Param("diaDeLaSemana") String diaDeLaSemana);

    @Query("UPDATE Schedule s SET s.idUsuario = :idUsuario, s.recipe = :recipe, s.diaDeLaSemana = :diaDeLaSemana WHERE s.id = :id")
    Schedule update(@Param("id") Long id, @Param("idUsuario") String idUsuario, @Param("recipe") Recipe recipe, @Param("diaDeLaSemana") String diaDeLaSemana);

    @Query("DELETE FROM Schedule s WHERE s.id = :id")
    void deleteById(@Param("id") Long id);
}