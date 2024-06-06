import React from 'react';
import { Layout } from '@/components/Layout';
import { Header } from '@/components/Header';
import { RecipeContainer } from '@/components/RecipeContainer';
import { recipeMock } from '@/mocks/recipeMock';
import { Carousel } from '../../components/carousel/Carousel';

const popularRecipes = [recipeMock, recipeMock, recipeMock];
const newRecipes = [recipeMock, recipeMock, recipeMock];

export const Home = () => {
 

  return (
    <Layout>
      <div className='container bg-base-200 p-6'>
        <Header />
        <div className='mt-11'></div>
        <div className='container bg-base-200 p-6'>
      <Carousel/>
        <RecipeContainer title='Popular Recipes' recipes={popularRecipes} />
        <RecipeContainer title='New Recipes' recipes={newRecipes} />

   </div>
      </div>
    </Layout>
  );
};
