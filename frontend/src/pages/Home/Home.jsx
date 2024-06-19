import { useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { Header } from '@/components/Header';
import { RecipeContainer } from '@/components/RecipeContainer';
import { Carousel } from '../../components/carousel/Carousel';
import { useAuthStore } from '@/store/authStore';
import { useRecipesStore } from '@/store/recipesStore';
import { useCategoriesStore } from '../../store/categoryStore';

export const Home = () => {
  const { recipes, loading, fetchRecipes, setRecipesByCategory } = useRecipesStore();
  const { load, selectedCategory, fetchCategoryByName, categoryByName } = useCategoriesStore();
  const { profile } = useAuthStore();

  useEffect(() => {
    const loadRecipes = async () => {
      if (selectedCategory) {
        fetchCategoryByName(selectedCategory.name);
        console.log(`resultado ${JSON.stringify(categoryByName.recipes)}`)
        setRecipesByCategory(categoryByName?.recipes ?? []);
      } else {
        if(profile && profile.email) {
          fetchRecipes(0, profile.email)
        } else {
          fetchRecipes();
        }
      }
    };

    loadRecipes();
  }, [fetchRecipes, selectedCategory]);

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
