import { useContext } from 'react';
import { PlannerContext } from '../context/PlannerContext';

// Hook personalizado para acceder al contexto
export const usePlanner = () => {
  const contexto = useContext(PlannerContext);

  if (!contexto) {
    throw new Error('usePlanner debe ser usado dentro de un PlannerProvider');
  }

  return contexto;
};
