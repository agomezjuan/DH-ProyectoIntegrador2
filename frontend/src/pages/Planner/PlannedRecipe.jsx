import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function PlannedRecipe({ item }) {
  const { attributes, listeners, setNodeRef, transition, transform } =
    useSortable({
      id: item?.id
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };
  return (
    <div
      {...attributes}
      {...listeners}
      ref={setNodeRef}
      style={style}
      className='bg-gray-200 rounded-md h-40 w-full grid grid-cols-3'>
      <div className='rounded-bl-md rounded-tl-md overflow-hidden'>
        <Link to={`/recipe/${item?.recipeId}`}>
          <img
            src={item?.urlImg}
            alt={item?.name}
            className='h-40 object-cover aspect-square scale-110 transition-transform duration-500 hover:scale-105'
          />
        </Link>
      </div>
      <div className='flex flex-col p-2 col-start-2 col-end-4'>
        <Link to={`/recipe/${item?.recipeId}`}>
          <h3 className='text-lg font-semibold hover:text-primary'>
            {item?.name}
          </h3>
        </Link>
        <p className='text-gray-600'>{item?.description}</p>
      </div>
    </div>
  );
}

PlannedRecipe.propTypes = {
  item: PropTypes.object.isRequired
};

export default PlannedRecipe;
