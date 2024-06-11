import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import PropTypes from 'prop-types';

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
        <img
          src={item?.urlImg}
          alt={item?.name}
          className='h-40 object-cover aspect-square scale-110 transition-transform duration-500 hover:scale-105'
        />
      </div>
      <div className='flex flex-col p-2 col-start-2 col-end-4'>
        <h3 className='text-lg font-semibold'>{item?.name}</h3>
        <p className='text-gray-600'>{item?.description}</p>
      </div>
    </div>
  );
}

PlannedRecipe.propTypes = {
  item: PropTypes.object.isRequired
};

export default PlannedRecipe;
