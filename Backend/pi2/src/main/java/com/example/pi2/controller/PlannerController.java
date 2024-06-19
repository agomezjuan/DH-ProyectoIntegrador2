package com.example.pi2.controller;

import com.example.pi2.domain.PlannerDTO;
import com.example.pi2.domain.PlannerDtoToCsv;
import com.example.pi2.model.Planner;
import com.example.pi2.service.PlannerService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
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
	  public Planner save(@RequestBody Planner planner, @AuthenticationPrincipal Jwt jwt) {

			planner.setIdUser(jwt.getSubject());
			return plannerService.save(planner);
	  }

	  @PostMapping("/user/{idUser}")
	  public Planner createScheduleForUser(@PathVariable String idUser, @RequestBody Planner planner) {

			return plannerService.saveForUser(idUser, planner);
	  }

	  @GetMapping("/getcsvv2")
	  public void sendCSV(HttpServletResponse response, @RequestParam String idUser) throws IOException {

			String csvFileName = "PlanSemanal.csv";
			response.setContentType("text/csv");
			String headerKey = "Content-Disposition";
			String headerValue = String.format("attachment; filename=\"%s\"",
					csvFileName);
			response.setHeader(headerKey, headerValue);
			ICsvBeanWriter csvBeanWriter = new CsvBeanWriter(response.getWriter(), CsvPreference.STANDARD_PREFERENCE);
			String[] header = {"Id", "idUser", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"};
			csvBeanWriter.writeHeader(header);
			List<PlannerDTO> plannerDTOList = plannerService.dtoForCsv(idUser);
			for (PlannerDTO plannerDTO1 :
					plannerDTOList) {
				  csvBeanWriter.write(plannerDTO1, header);
			}

			csvBeanWriter.close();
	  }

	  @GetMapping("/getcsv")
	  public void sendCSVv2(HttpServletResponse response, @RequestParam String idUser) throws IOException {

			String csvFileName = "PlanSemanal.csv";
			response.setContentType("text/csv");
			String headerKey = "Content-Disposition";
			String headerValue = String.format("attachment; filename=\"%s\"",
					csvFileName);
			response.setHeader(headerKey, headerValue);
			ICsvBeanWriter csvBeanWriter = new CsvBeanWriter(response.getWriter(), CsvPreference.STANDARD_PREFERENCE);
			String[] header = {"dayOfTheWeek", "name", "description", "preparationTime", "preparationSteps"};
			csvBeanWriter.writeHeader(header);
			List<PlannerDtoToCsv> plannerDTOList = plannerService.dtoToCsv2(idUser);
			for (PlannerDtoToCsv plannerDTO1 :
					plannerDTOList) {
				  csvBeanWriter.write(plannerDTO1, header);
			}

			csvBeanWriter.close();
	  }

	  @DeleteMapping("/{id}")
	  public void delete(@PathVariable Long id) {

			plannerService.deleteById(id);
	  }

	  @DeleteMapping("/byUserId")
	  public void deleteByUserId(@AuthenticationPrincipal Jwt jwt) {

			String userId = jwt.getSubject();
			plannerService.deleteByUserId(userId);
	  }

}
