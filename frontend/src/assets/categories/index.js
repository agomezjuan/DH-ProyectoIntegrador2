import shuffle from 'lodash/shuffle';

const categories = [
    { url_img: '/categories/Broccoli-Meal-Prep-Recipe.jpg', name: '30 minutos' },
    {
        url_img: '/categories/Creamy-Parmesan-Green-Beans-Casserole-with-Bacon.jpg',
      name: 'Aperitivos'
    },
    { url_img: '/categories/postres.jpg', name: 'Postres' },
    {
      url_img: '/categories/Grilled-Lemon-Garlic-Chicken-Skewers-recipe.jpg',
      name: 'Plato Fuerte'
    }
  ];

export const categoriesMock = shuffle(categories);