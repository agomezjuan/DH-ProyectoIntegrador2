import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import PropTypes from 'prop-types';

function PlannedRecipe({ item }) {
  const { attributes, listeners, setNodeRef, transition, transform } =
    useSortable({
      id: item?.recipe?.id
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
      className='bg-gray-200 rounded-md h-36 w-96 grid grid-cols-3'>
      <div className='rounded-bl-md rounded-tl-md overflow-hidden'>
        <img
          src={item?.recipe?.urlImg}
          alt={item?.recipe?.name}
          className='h-36 object-cover aspect-square'
        />
      </div>
      <div className='flex flex-col p-2 col-start-2 col-end-4'>
        <h3 className='text-lg font-semibold'>{item?.recipe?.name}</h3>
        <p className='text-gray-600'>{item?.recipe?.description}</p>
      </div>
    </div>
  );
}

PlannedRecipe.propTypes = {
  item: PropTypes.object.isRequired
};

export default PlannedRecipe;
