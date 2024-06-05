import image from '@/assets/recipe.png';
import ensalada from '@/assets/image9.png';
export const recipeMock = {
  id: 1,
  title: 'Spaghetti Carbonara',
  rating: 4,
  prepTime: '30 min',
  image
};

export const recipeMocks = [
  recipeMock,
  {
    id: 2,
    title: 'Ensalada Caesar',
    rating: 4,
    prepTime: '30 min',
    image: ensalada
  },
  {
    id: 3,
    title: 'Hamburguesa Pullet Pork',
    rating: 4,
    prepTime: '25 min',
    image: ensalada
  }
];
