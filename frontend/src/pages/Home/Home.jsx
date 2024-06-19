import { useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { Header } from '@/components/Header';
import { RecipeContainer } from '@/components/RecipeContainer';
import { Carousel } from '../../components/carousel/Carousel';
import { useRecipesStore } from '@/store/recipesStore';
import { Pagination } from '@/components/Pagination';
import {useAuthStore} from "../../store/authStore.js";

export const Home = () => {
  const { recipes, loading, fetchRecipes } = useRecipesStore();
  const { profile } = useAuthStore();

  useEffect(() => {
    if(profile){
      fetchRecipes(0, profile.email)
    } else {
      fetchRecipes();
    }
  }, [fetchRecipes]);

  return (
    <Layout>
      <div className='container bg-base-200 p-6'>
        <Header />
        <div className='mt-11'></div>
        <div className='container bg-base-200 p-6'>
          <Carousel />
          {recipes && (
            <RecipeContainer
              title='Popular Recipes'
              recipes={recipes}
              loading={loading}
            />
          )}
        </div>
        <Pagination />
      </div>
    </Layout>
  );
};
