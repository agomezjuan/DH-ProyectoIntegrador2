import React, { useEffect } from 'react';
import { Layout } from '@/components/Layout';
import MainRecipe from '../../components/MainRecipe/MainRecipe';
import { useRecipesStore } from '@/store/recipesStore'
import { useParams } from 'react-router-dom';


export const ViewRecipe = () => {
  const { id } = useParams();
  const { detail, loading, error, fetchRecipeById } = useRecipesStore();

  useEffect(() => {
    if (id) {
      fetchRecipeById(id);
    }
  }, [id, fetchRecipeById]);

  console.log('DETAIL', detail)

  return (
    <Layout>
      <div className='container bg-base-200 p-6'>
        <div
          style={{
            backgroundColor: 'rgb(130, 170, 51)',
            height: '200px',
            margin: '0 80px'
          }}
          className='flex items-center justify-center p-8 text-center'>
          <input
            type='text'
            placeholder='Busca una receta, un ingrediente, palabra clave'
            className='w-full p-4 rounded'
            style={{ margin: '0 50px' }}
          />
        </div>
        <MainRecipe title={detail.recipe?.name} />
        <div style={{ marginLeft: '80px', marginRight: '80px' }}>
          {loading && <p>Cargando...</p>}
          {error && <p>Error: {error}</p>}
          {!loading && !error && (
            <div>
              <div
                style={{
                  width: '100%',
                  float: 'left',
                  padding: '20px',
                  marginLeft: '80px'
                }}>
                <h2 style={{ fontWeight: 'bold' }}>Ingredientes</h2>
                <ul>
                  {detail.recipe?.ingredients && detail.recipe?.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              <main className='p-4'>
                <h1 className='font-bold text-xl' style={{ marginTop: '20px', marginBottom: '20px' }}>
                  Preparación
                </h1>
                <ul className='list-disc pl-5'>
                  {detail.recipe?.preparationSteps && detail.recipe?.preparationSteps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
              </main>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};


export default ViewRecipe;
