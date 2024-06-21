import { FaPlus } from 'react-icons/fa';
import PropTypes from 'prop-types';

export const AddRecipe = ({ tooltip }) => {
  return (
    <div
      className='flex items-center justify-center h-40 rounded-md hover:bg-secondary/50 cursor-pointer tooltip tooltip-right'
      data-tip={tooltip}>
      <FaPlus className='text-3xl' />
    </div>
  );
};

AddRecipe.propTypes = {
  tooltip: PropTypes.string
};
