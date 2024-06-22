const PlannerDay = ({ day, index }) => (
  <div
    className={`${day.colorClass} text-center text-3xl w-56 h-40 flex items-center justify-center border border-primary rounded-lg`}
    key={index}>
    {day.name}
  </div>
);

export default PlannerDay;
