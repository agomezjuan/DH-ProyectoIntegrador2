import { recipeMocks } from '@/assets/recetas';

/**
 * Simula una solicitud GET a un endpoint de API para obtener recetas.
 * @returns {Promise} Una promesa que resuelve con los datos de las recetas.
 */
export const fetchRecipes = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Resolver la promesa con los datos simulados
      resolve(recipeMocks);
    }, 1000); // Simula un retraso de 1 segundo
  });
};
