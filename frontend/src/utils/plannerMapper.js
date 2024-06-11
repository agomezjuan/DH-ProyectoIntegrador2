function mapPlannerData(data) {
  if (data) {
    return [
      data.sunday ?? '',
      data.monday ?? '',
      data.tuesday ?? '',
      data.wednesday ?? '',
      data.thursday ?? '',
      data.friday ?? '',
      data.saturday ?? ''
    ];
  } else {
    // Manejo de error o retorno de un valor predeterminado
    return [];
  }
}

export { mapPlannerData };
