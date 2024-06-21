import { useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { Header } from '@/components/Header';
import { RecipeContainer } from '@/components/RecipeContainer';
import { Carousel } from '../../components/carousel/Carousel';
import { useAuthStore } from '@/store/authStore';
import { Pagination } from '@/components/Pagination';
import { useRecipesStore } from '@/store/recipesStore';
import { useCategoriesStore } from '../../store/categoryStore';

export const Home = () => {
  const { recipes, loading, fetchRecipes, setRecipesByCategory } = useRecipesStore();
  const { selectedCategory } = useCategoriesStore();
  const { profile } = useAuthStore();

  const mapCategoryRecipe = (category) => {
    const categoryRecipes = category?.recipes || [];
    return categoryRecipes.map(element => ({
      recipe: element
    }));
  }

  useEffect(() => {
    const loadRecipes = async () => {
      if (selectedCategory) {
        setRecipesByCategory(mapCategoryRecipe(selectedCategory));
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
              title={selectedCategory? `Recetas de ${selectedCategory?.category?.name}` : 'Recetas populares'}
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
