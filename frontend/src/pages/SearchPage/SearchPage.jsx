import { Layout } from '@/components/Layout';
import { Header } from '@/components/Header';
import { useSearchStore } from '@/store/searchStore';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const SearchPage = () => {
  const results = useSearchStore((state) => state.results);
  const loading = useSearchStore((state) => state.loading);
  const searchRecipes = useSearchStore((state) => state.searchRecipes);
  const { searchText } = useParams();

  console.log('Buscando...', searchText);

  useEffect(() => {
    if (searchText.trim()) {
      searchRecipes(searchText);
    }
  }, [searchRecipes, searchText]);
  console.log('results', results);

  return (
    <Layout>
      <div className='container bg-base-200 p-6'>
        <Header />
        <div className='mt-11'></div>
        <div className='container bg-base-200 p-6 my-20'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {loading ? (
              <p>Cargando...</p>
            ) : (
              <>
                {results.length === 0 && (
                  <p>
                    No se encontraron resultadosn para &quot;{searchText}&quot;
                  </p>
                )}
                {results.map((recipe, index) => (
                  <RecipeCard key={index} recipe={recipe.recipe} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};
