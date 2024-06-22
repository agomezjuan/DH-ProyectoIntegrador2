import PropTypes from 'prop-types';

const PlannerDay = ({ day, index }) => (
  <div
    className={`${day.colorClass} text-center text-3xl w-56 h-40 flex items-center justify-center border border-primary rounded-lg`}
    key={index}>
    {day.name}
  </div>
);

PlannerDay.propTypes = {
  day: PropTypes.shape({
    name: PropTypes.string.isRequired,
    colorClass: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default PlannerDay;

