import { useEffect, useState } from 'react';
import { Layout } from '@/components/Layout';
import { Header } from '@/components/Header';
import { RecipeContainer } from '@/components/RecipeContainer';
import { Carousel } from '../../components/carousel/Carousel';
import { getRecipes } from '@/api/httpService';

export const Home = () => {
  const [popularRecipes, setPopularRecipes] = useState([]);
  const [newRecipes, setNewRecipes] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state, usaremos react query para esto

  useEffect(() => {
    getRecipes().then((res) => {
      if (res.status === 200) {
        setPopularRecipes(
          res.data
            // Solo recetas que contengan la palabra 'carne'
            // luego la cambiamos para que sea aleatorio
            .filter((recipe) => recipe.name.toLowerCase().includes('carne'))
            .slice(0, 3)
        );
        setNewRecipes(res.data.slice(3, 6));
        setLoading(false);
      }
    });
  }, []);

  return (
    <Layout>
      <div className='container bg-base-200 p-6'>
        <Header />
        <div className='mt-11'></div>
        <div className='container bg-base-200 p-6'>
          <Carousel />
          <RecipeContainer
            title='Popular Recipes'
            recipes={popularRecipes}
            loading={loading}
          />
          <RecipeContainer
            title='New Recipes'
            recipes={newRecipes}
            loading={loading}
          />
        </div>
      </div>
    </Layout>
  );
};
