package com.example.pi2.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.LinkedList;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PlannerDtoToCsv {

	  private String Dia;
	  private String Nombre;
	  private String Descripcion;
	  private String TiempoPreparacion;
	  private LinkedList<String> Instrucciones;
}
