import { RecipeCard } from '../RecipeCard';

const RecipeContainer = ({ title, recipes, loading }) => {
  return (
    <div className='mb-20'>
      <h2 className='text-2xl font-bold mb-4 text-primary'>{title}</h2>
      {loading ? (
        <div className='flex flex-col justify-center items-center h-36'>
          <span className='loading loading-ring loading-md'></span>
          <span className='text-primary mt-4'>Cargando...</span>
        </div>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {/* { recipes && recipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))} */}
        </div>
      )}
    </div>
  );
};

export default RecipeContainer;
