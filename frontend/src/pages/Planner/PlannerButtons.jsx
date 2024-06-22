import PropTypes from "prop-types";
const PlannerButtons = ({ handleDownload, handleDelete, handlePost }) => (
  <div className='planner-buttons-container mt-4'>
    <div className='planner-buttons'>
      <button className='btn btn-primary' onClick={handleDownload}>
        Descargar Plan
      </button>
    </div>
    <div className='planner-buttons'>
      <button className='btn btn-primary' onClick={handleDelete}>
        Limpiar Plan
      </button>
    </div>
    <div className='planner-buttons'>
      <button className='btn btn-primary' onClick={handlePost}>
        Guardar Plan
      </button>
    </div>
  </div>
);
PlannerButtons.propTypes = {
  handleDownload: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handlePost: PropTypes.func.isRequired,
};

export default PlannerButtons;
