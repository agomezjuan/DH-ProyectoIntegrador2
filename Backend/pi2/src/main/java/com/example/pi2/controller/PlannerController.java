package com.example.pi2.controller;

import com.example.pi2.domain.PlannerDTO;
import com.example.pi2.model.Planner;
import com.example.pi2.service.PlannerService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.supercsv.io.CsvBeanWriter;
import org.supercsv.io.ICsvBeanWriter;
import org.supercsv.prefs.CsvPreference;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/planner")
public class PlannerController {

	  @Autowired
	  private PlannerService plannerService;

	  @GetMapping
	  public List<Planner> getAll() {

			return plannerService.findAll();
	  }

	  @GetMapping("/{id}")
	  public Planner getById(@PathVariable Long id) {

			return plannerService.findById(id);
	  }

	  @GetMapping("/user/{idUser}")
	  public List<Planner> getByUserId(@PathVariable String idUser) {

			return plannerService.findByUserId(idUser);
	  }

	  @PostMapping
	  public Planner save(@RequestBody Planner planner) {

			return plannerService.save(planner);
	  }

	  @PostMapping("/postWeek")
	  public List<Planner> saveMany(@RequestBody List<Planner> plannerList){
			return plannerService.postWeek(plannerList);
	  }

	  @PostMapping("/user/{idUser}")
	  public Planner createScheduleForUser(@PathVariable String idUser, @RequestBody Planner planner) {

			return plannerService.saveForUser(idUser, planner);
	  }
	  @GetMapping("/getcsv")
	  public void sendCSV(HttpServletResponse response, @RequestParam String idUser) throws IOException {

			String csvFileName = "Planner.csv";
			response.setContentType("text/csv");
			String headerKey = "Content-Disposition";
			String headerValue = String.format("attachment; filename=\"%s\"",
					csvFileName);
			response.setHeader(headerKey, headerValue);
			ICsvBeanWriter csvBeanWriter = new CsvBeanWriter(response.getWriter(), CsvPreference.STANDARD_PREFERENCE);
			String[] header = {"Id", "idUser", "recipeName", "weekDay"};
			csvBeanWriter.writeHeader(header);
			List<PlannerDTO> plannerDTOList = plannerService.dtoForCsv(idUser);
			for (PlannerDTO plannerDTO1 :
					plannerDTOList) {
				  csvBeanWriter.write(plannerDTO1, header);
			}

			csvBeanWriter.close();
	  }

	  @PutMapping("/{id}")
	  public Planner update(@PathVariable Long id, @RequestBody Planner plannerDetails) {

			return plannerService.update(id, plannerDetails);
	  }

	  @DeleteMapping("/{id}")
	  public void delete(@PathVariable Long id) {

			plannerService.deleteById(id);
	  }

}
