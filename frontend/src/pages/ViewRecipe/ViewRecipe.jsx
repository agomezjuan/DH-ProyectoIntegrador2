import { useEffect } from 'react';
import { Layout } from '@/components/Layout';
import MainRecipe from '../../components/MainRecipe/MainRecipe';
import { useRecipesStore } from '@/store/recipesStore';
import { useParams } from 'react-router-dom';

export const ViewRecipe = () => {
  const { id } = useParams();
  const { detail, loading, error, fetchRecipeById } = useRecipesStore();

  useEffect(() => {
    if (id) {
      fetchRecipeById(id);
    }
  }, [id, fetchRecipeById]);

  return (
    <Layout>
      <div className='container bg-base-200 p-6'>
        <div className='flex items-center justify-center p-8 text-center h-[200px] mx-20 bg-secondary'>
          <input
            type='text'
            placeholder='Busca una receta, un ingrediente, palabra clave'
            className='w-full p-4 rounded'
            style={{ margin: '0 50px' }}
          />
        </div>
        <MainRecipe
          title={detail.recipe?.name}
          time={detail.recipe?.preparationTime}
          img={detail.recipe?.urlImg}
        />
        <div className='container mx-auto'>
          {loading && <p>Cargando...</p>}
          {error && <p>Error: {error}</p>}
          {!loading && !error && (
            <div>
              <div className='my-5 p-4 mx-20'>
                <h2 className='text-xl font-bold mb-3'>Ingredientes</h2>
                <ul className='list-disc px-5'>
                  {detail.recipe?.ingredients &&
                    detail.recipe?.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                </ul>
              </div>
              <main className='p-4 mx-20'>
                <h1 className='font-bold text-xl mb-3'>Preparación</h1>
                <ol className='pl-5 list-decimal'>
                  {detail.recipe?.preparationSteps &&
                    detail.recipe?.preparationSteps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                </ol>
              </main>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ViewRecipe;
