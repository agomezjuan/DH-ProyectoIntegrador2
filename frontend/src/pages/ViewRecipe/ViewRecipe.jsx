import React from 'react';
import { Layout } from '@/components/ViewRecipeComponents/Layout';
import { Header } from '@/components/ViewRecipeComponents/Header';
import { RecipeContainer } from '@/components/ViewRecipeComponents/RecipeContainer';
import { fetchRecipes } from '@/mocks/recipeMock';
import { Carousel } from '../../components/carousel/Carousel';
import SearchBar from '../../components/ViewRecipeComponents/SearchBar/SearchBar';
import MainRecipe from '../../components/ViewRecipeComponents/MainRecipe/MainRecipe';
import Ingredients from '../../components/ViewRecipeComponents/Ingredients/Ingredients';
import Preparation from '../../components/ViewRecipeComponents/Preparation/Preparation';
import RatingComment from '../../components/ViewRecipeComponents/RatingComment/RatingComment';


const popularRecipes = [fetchRecipes, fetchRecipes, fetchRecipes];

export const ViewRecipe = () => {
  return (
    <Layout>
      <div className='container bg-base-200 p-6'>
        <Header />
        <SearchBar />
      <main className="p-4"></main>
        <MainRecipe />
        <Ingredients />
        <Preparation />
        <RatingComment />
        <div className='mt-11'></div>
        <div className='container bg-base-200 p-6'>
        <RecipeContainer title='Recetas Favoritas' recipes={popularRecipes} />

      </div>
      </div>

    </Layout>

  );
};

export default ViewRecipe;
