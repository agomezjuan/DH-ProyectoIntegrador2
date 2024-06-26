import { useEffect, useRef } from 'react';
import { Layout } from '@/components/Layout';
import MainRecipe from '../../components/MainRecipe/MainRecipe';
import { SearchBar } from '@/components/SearchBar/SearchBar';
import { useRecipesStore } from '@/store/recipesStore';
import { useParams } from 'react-router-dom';
import { PlannerProvider } from '../../context/PlannerContext';
import useUserProfileStore from '../../store/userProfileStore';
import decodeHTML from '../../utils/decodeHTML';

export const ViewRecipe = () => {
  const ref = useRef();
  const { id } = useParams();
  const { detail, loading, error, fetchRecipeById } = useRecipesStore();

  const { favoriteRecipes } = useUserProfileStore();

  const favorite = favoriteRecipes.some((recipe) => recipe.recipe.id == id);

  useEffect(() => {
    if (id) {
      fetchRecipeById(id);
    }

    ref.current.scrollIntoView({ behavior: 'smooth' });
  }, [id, fetchRecipeById, favoriteRecipes]);

  return (
    <Layout>
      <div className='container lg:px-20 bg-base-200 lg:py-6' ref={ref}>
        <div className='h-[200px] bg-secondary flex items-center justify-center p-8 text-center'>
          <SearchBar />
        </div>
        <PlannerProvider>
          <MainRecipe
            title={decodeHTML(detail.recipe?.name)}
            time={detail.recipe?.preparationTime}
            img={detail.recipe?.urlImg}
            favorite={favorite}
          />
        </PlannerProvider>
        <div className='container'>
          <main className='p-4'>
            {loading && <p>Cargando...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && (
              <div className='p-6'>
                <div className='mb-5'>
                  <p className='text-center md:text-left text-lg text-gray-600 mb-4'>
                    {decodeHTML(detail.recipe?.description)}
                  </p>
                  <h2 className='font-bold text-xl'>Ingredientes</h2>
                  <ul className='list-disc p-5'>
                    {detail.recipe?.ingredients &&
                      detail.recipe?.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                  </ul>
                </div>
                <h2 className='font-bold text-xl'>Preparación</h2>
                <ul className='list-decimal p-5'>
                  {detail.recipe?.preparationSteps &&
                    detail.recipe?.preparationSteps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                </ul>
              </div>
            )}
          </main>
        </div>
      </div>
    </Layout>
  );
};

export default ViewRecipe;
