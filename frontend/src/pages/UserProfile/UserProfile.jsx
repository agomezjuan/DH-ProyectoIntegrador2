import { useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { RecipeContainer } from '@/components/RecipeContainer';
import { PlannerDnD } from '../Planner';
import { useUserProfileStore } from '@/store/userProfileStore';
import { useAuthStore } from '@/store/authStore';
import { SearchBar } from '@/components/SearchBar/SearchBar';
import { useNavigate } from 'react-router-dom';

function UserProfile() {
  const { favoriteRecipes, fetchFavoriteRecipes, loading } =
    useUserProfileStore();
  const isAuth = useAuthStore((state) => state.isAuth);
  const { profile, token } = useAuthStore();
  const navigate = useNavigate();

  const username = profile?.email;

  useEffect(() => {
    if (isAuth) {
      fetchFavoriteRecipes(token, username);
    } else {
      navigate('/login');
    }
  }, [fetchFavoriteRecipes, isAuth, navigate, token, username]);

  return (
    <Layout>
      <div className='container bg-base-200 py-6'>
        <div
          style={{
            backgroundColor: 'rgb(130, 170, 51)',
            height: '200px',
            margin: '0 80px'
          }}
          className='flex items-center justify-center p-8 text-center'>
          <SearchBar />
        </div>
        <PlannerDnD />
        <div className='container bg-base-200 px-24 mt-12'>
          {favoriteRecipes && (
            <RecipeContainer
              title={'Tus recetas favoritas'}
              recipes={favoriteRecipes}
              loading={loading}
            />
          )}
        </div>
      </div>
    </Layout>
  );
}

export default UserProfile;
