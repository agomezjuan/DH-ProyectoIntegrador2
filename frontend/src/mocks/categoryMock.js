import { categoriesMock } from '@/assets/categories';

/**
 * Simula una solicitud GET a un endpoint de API para obtener categorias.
 * @returns {Promise} Una promesa que resuelve con los datos de las categorias.
 */
export const fetchCategories = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Resolver la promesa con los datos simulados
      resolve(categoriesMock);
    }, 1000); // Simula un retraso de 1 segundo
  });
};