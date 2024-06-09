import shuffle from 'lodash/shuffle';

import carne from './recetas-carne.json';
import cerdo from './recetas-cerdo.json';
import pollo from './recetas-pollo.json';
import pescado from './recetas-salmon.json';
import pastas from './recetas-pastas.json';
import patatas from './recetas-patatas.json';

let idCounter = 1;

// A los objetos de recetas les falta un id, lo añadimos con esta función
function addUniqueId(recipes) {
  return recipes.map((recipe) => ({
    ...recipe,
    id: idCounter++
  }));
}

// Mezclamos todas las recetas para que aparezcan aleatoriamente
export const recipeMocks = shuffle([
  ...addUniqueId(carne),
  ...addUniqueId(pollo),
  ...addUniqueId(pescado),
  ...addUniqueId(pastas),
  ...addUniqueId(cerdo),
  ...addUniqueId(patatas)
]);
