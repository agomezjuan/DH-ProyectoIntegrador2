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

function mapPlannerDataInverse(data){
  let planner = {};
  if(data){
    data.forEach(day => {
      if(day.recipeId){
        planner = {...planner, [day.id] : {id:day.recipeId}}
      }
    });
  }
  return planner
}

export { mapPlannerData, mapPlannerDataInverse };
