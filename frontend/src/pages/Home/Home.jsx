import { useEffect, useState } from 'react';
import { Layout } from '@/components/Layout';
import { Header } from '@/components/Header';
import { RecipeContainer } from '@/components/RecipeContainer';
import { Carousel } from '../../components/carousel/Carousel';
import { useRecipesStore } from '@/store/recipesStore';


export const Home = () => {


  const { recipes, loading, fetchRecipes } = useRecipesStore();

  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  console.log('RECIPES', recipes);

  return (
    <Layout>
      <div className='container bg-base-200 p-6'>
        <Header />
        <div className='mt-11'></div>
        <div className='container bg-base-200 p-6'>
          <Carousel />
          {recipes &&
          <RecipeContainer
            title='Popular Recipes'
            recipes={recipes}
            loading={loading}
          />}
        </div>
      </div>
    </Layout>
  );
};
