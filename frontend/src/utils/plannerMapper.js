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
const weekDays = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday'
];

function mapPlannerToPost(data){
  let plannerToPost = {}
  data.forEach((day,index) => {
    if(day.recipe){
      plannerToPost = {...plannerToPost, [weekDays[index]]:{id: day.recipe.id}}
    }
  });
  return plannerToPost
}

export { mapPlannerData, mapPlannerToPost };
