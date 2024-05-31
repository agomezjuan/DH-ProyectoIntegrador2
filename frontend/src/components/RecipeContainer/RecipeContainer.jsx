import { RecipeCard } from '../RecipeCard';

const RecipeContainer = ({ title, recipes }) => {
  return (
    <div className='mb-8'>
      <h2 className='text-2xl font-bold mb-4 text-primary'>{title}</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipeContainer;
