package com.example.pi2.service;

import com.example.pi2.domain.PlannerDTO;
import com.example.pi2.model.Planner;
import com.example.pi2.model.Recipe;
import com.example.pi2.repository.PlannerRepository;
import com.example.pi2.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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

	  public void deleteById(Long id) {

			Planner planner = findById(id);
			plannerRepository.delete(planner);
	  }
}