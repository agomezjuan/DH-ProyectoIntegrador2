package com.example.pi2.service;

import com.example.pi2.domain.PlannerDTO;
import com.example.pi2.domain.PlannerDtoToCsv;
import com.example.pi2.domain.PlannerWithRecipeDTO;
import com.example.pi2.model.Planner;
import com.example.pi2.model.Recipe;
import com.example.pi2.repository.PlannerRepository;
import com.example.pi2.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PlannerService {

	  @Autowired
	  private PlannerRepository plannerRepository;

	  @Autowired
	  private RecipeRepository recipeRepository;

	  @Autowired
	  private DtoMapper mapper;

	  public List<Planner> findAll() {

			return plannerRepository.findAll();
	  }

	  public Planner findById(Long id) {

			return plannerRepository.findById(id).orElseThrow(() -> new RuntimeException("Schedule not found"));
	  }

	  public List<Planner> findByUserId(String idUser) {

			return plannerRepository.findByUserId(idUser);

	  }

	  public PlannerWithRecipeDTO findPlanByUserId(String idUser) {

			return mapperPlan(plannerRepository.findOneByUser(idUser));

	  }

	  public Planner save(Planner planner) {

			Planner plannerToUpdate = plannerRepository.findOneByUser(planner.getIdUser());
			if (plannerToUpdate != null) {
				  plannerRepository.deleteById(plannerToUpdate.getId());
			}
			return plannerRepository.save(planner);

	  }

	  public Planner saveForUser(String idUser, Planner planner) {

			planner.setIdUser(idUser);
			return plannerRepository.save(planner);
	  }

	  public List<PlannerDTO> dtoForCsv(String IdUser) {

			List<Planner> plannerList = plannerRepository.findByUserId(IdUser);
			List<PlannerDTO> plannerDTOList = new ArrayList<>();
			System.out.println(plannerList.toString());
			for (Planner planner :
					plannerList) {
				  PlannerDTO plannerDTO = new PlannerDTO();
				  plannerDTO.setId(planner.getId());
				  plannerDTO.setIdUser(planner.getIdUser());
				  if (planner.getSunday() != null)
						plannerDTO.setSunday(planner.getSunday().getName());
				  if (planner.getMonday() != null)
						plannerDTO.setMonday(planner.getMonday().getName());
				  if (planner.getTuesday() != null)
						plannerDTO.setTuesday(planner.getTuesday().getName());
				  if (planner.getWednesday() != null)
						plannerDTO.setWednesday(planner.getWednesday().getName());
				  if (planner.getThursday() != null)
						plannerDTO.setThursday(planner.getThursday().getName());
				  if (planner.getFriday() != null)
						plannerDTO.setFriday(planner.getFriday().getName());
				  if (planner.getSaturday() != null)
						plannerDTO.setSaturday(planner.getSaturday().getName());
				  plannerDTOList.add(plannerDTO);
			}
			return plannerDTOList;
	  }

	  public List<PlannerDtoToCsv> dtoToCsv2(String idUser) {

			Planner planner = plannerRepository.findOneByUser(idUser);
//			PlannerDtoToCsv plannerDTO = new PlannerDtoToCsv();
			List<PlannerDtoToCsv> plannerDtoToCsvList = new ArrayList<>();

			if (planner != null) {

				  if (planner.getSunday() != null) {
						PlannerDtoToCsv plannerDtoToCsv = mapper.toPlannerDtoToCsv(planner.getSunday());
						plannerDtoToCsv.setDayOfTheWeek("Domingo");
						plannerDtoToCsvList.add(plannerDtoToCsv);
				  }
				  if (planner.getMonday() != null) {
						PlannerDtoToCsv plannerDtoToCsv = mapper.toPlannerDtoToCsv(planner.getMonday());
						plannerDtoToCsv.setDayOfTheWeek("Lunes");
						plannerDtoToCsvList.add(plannerDtoToCsv);
				  }
				  if (planner.getTuesday() != null) {
						PlannerDtoToCsv plannerDtoToCsv = mapper.toPlannerDtoToCsv(planner.getTuesday());
						plannerDtoToCsv.setDayOfTheWeek("Martes");
						plannerDtoToCsvList.add(plannerDtoToCsv);
				  }
				  if (planner.getWednesday() != null) {
						PlannerDtoToCsv plannerDtoToCsv = mapper.toPlannerDtoToCsv(planner.getWednesday());
						plannerDtoToCsv.setDayOfTheWeek("Miércoles");
						plannerDtoToCsvList.add(plannerDtoToCsv);
				  }
				  if (planner.getThursday() != null) {
						PlannerDtoToCsv plannerDtoToCsv = mapper.toPlannerDtoToCsv(planner.getThursday());
						plannerDtoToCsv.setDayOfTheWeek("Jueves");
						plannerDtoToCsvList.add(plannerDtoToCsv);
				  }
				  if (planner.getFriday() != null) {
						PlannerDtoToCsv plannerDtoToCsv = mapper.toPlannerDtoToCsv(planner.getFriday());
						plannerDtoToCsv.setDayOfTheWeek("Viernes");
						plannerDtoToCsvList.add(plannerDtoToCsv);
				  }
				  if (planner.getSaturday() != null) {
						PlannerDtoToCsv plannerDtoToCsv = mapper.toPlannerDtoToCsv(planner.getSaturday());
						plannerDtoToCsv.setDayOfTheWeek("Sábado");
						plannerDtoToCsvList.add(plannerDtoToCsv);
				  }
			}

			return plannerDtoToCsvList;
	  }

	  public void deleteById(Long id) {

			Planner planner = findById(id);
			plannerRepository.delete(planner);
	  }

	  public void deleteByUserId(String userId) {

			Planner planner = plannerRepository.findOneByUser(userId);
			if (planner != null) {
				  plannerRepository.delete(planner);
			}
	  }

	  private PlannerWithRecipeDTO mapperPlan(Planner planner) {

			PlannerWithRecipeDTO plannerDTO = new PlannerWithRecipeDTO();
			if (planner != null) {
				  plannerDTO.setId(planner.getId());
				  plannerDTO.setIdUser(planner.getIdUser());
				  if (planner.getMonday() != null)
						plannerDTO.setMonday(mapper.toFullRecipeDto(planner.getMonday()));
				  if (planner.getTuesday() != null)
						plannerDTO.setTuesday(mapper.toFullRecipeDto(planner.getTuesday()));
				  if (planner.getWednesday() != null)
						plannerDTO.setWednesday(mapper.toFullRecipeDto(planner.getWednesday()));
				  if (planner.getThursday() != null)
						plannerDTO.setThursday(mapper.toFullRecipeDto(planner.getThursday()));
				  if (planner.getFriday() != null)
						plannerDTO.setFriday(mapper.toFullRecipeDto(planner.getFriday()));
				  if (planner.getSaturday() != null)
						plannerDTO.setSaturday(mapper.toFullRecipeDto(planner.getSaturday()));
				  if (planner.getSunday() != null)
						plannerDTO.setSunday(mapper.toFullRecipeDto(planner.getSunday()));
			}

			return plannerDTO;
	  }
}