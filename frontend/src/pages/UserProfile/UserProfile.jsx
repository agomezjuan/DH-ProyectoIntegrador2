import React, { useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { RecipeContainer } from '@/components/RecipeContainer';
import {PlannerDnD} from '../Planner'
import { useUserProfileStore } from '@/store/userProfileStore';
import { SearchBar } from '@/components/SearchBar/SearchBar';

function UserProfile(){
    const { favoriteRecipes, fetchFavoriteRecipes, loading, } = useUserProfileStore();

    useEffect(() => {
      const token = 'user-auth-token'; // replace with actual token
      const username = 'user-username'; // replace with actual username
      fetchFavoriteRecipes(token, username);
    }, [fetchFavoriteRecipes]);
    return(
        <Layout>
            <div className='container bg-base-200 p-6'>
            <div
          style={{
            backgroundColor: 'rgb(130, 170, 51)',
            height: '200px',
            margin: '0 80px'
          }}
          className='flex items-center justify-center p-8 text-center'>
          <SearchBar />
        </div>
            <PlannerDnD/>
            {favoriteRecipes && (
            <RecipeContainer
              title={'Tus Favoritas'}
              recipes={favoriteRecipes}
              loading={loading}
            />
          )}
          </div>
        </Layout>
    )
}

export default UserProfile;