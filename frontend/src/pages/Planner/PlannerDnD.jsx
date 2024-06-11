import { useEffect, useState } from 'react';
// import knifeplateImage from './knifeplate.png';
import { Layout } from '@/components/Layout';
import { Header } from '@/components/Header';
import './Planner.css';
import { DndContext, closestCenter } from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy
} from '@dnd-kit/sortable';
// import { AddRecipe } from './AddRecipe';
import { useRecipesStore } from '../../store/recipesStore';
import PlannedRecipe from './PlannedRecipe';
// import { AddRecipe } from './AddRecipe';

const PlannerDnD = () => {
  const daysOfWeek = [
    { name: 'Lunes', colorClass: 'green' },
    { name: 'Martes', colorClass: 'light-green' },
    { name: 'Miércoles', colorClass: 'green' },
    { name: 'Jueves', colorClass: 'light-green' },
    { name: 'Viernes', colorClass: 'green' },
    { name: 'Sábado', colorClass: 'light-green' },
    { name: 'Domingo', colorClass: 'green' }
  ];
  const [items, setItems] = useState(Array(7).fill(''));
  const recipes = useRecipesStore((state) => state.recipes);
  console.log('RECIPES', recipes);

  useEffect(() => {
    setItems(recipes.slice(0, 7));
  }, [recipes]);

  console.log('RECIPES', items);
  const handleDownload = () => {
    // Implementar funcionalidad para descargar el planner
    alert('Descargar Planner no está implementado aún.');
  };

  const handleDragEnd = () => {};

  return (
    <Layout>
      <div className='container bg-base-200 p-6'>
        <Header />
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}>
          <div className='w-[800px] mx-auto container mt-24 planner-container'>
            <h1>AGENDA SEMANAL</h1>
            <div className='planner p-4'>
              <div className='flex w-full'>
                <div className='flex flex-col'>
                  <div className='flex justify-center'>
                    <span className='text-primary text-xl font-bold text-center m-2'>
                      Día
                    </span>
                  </div>
                  {daysOfWeek.map((day, index) => (
                    <div
                      className={`${day.colorClass} text-center text-3xl w-56 h-40 flex items-center justify-center border border-primary`}
                      key={index}>
                      {day.name}
                    </div>
                  ))}
                </div>
                <div className='flex flex-col w-full'>
                  <div className='font-bold text-primary flex items-center justify-center gap-2 m-2'>
                    {/* <img
                      src={knifeplateImage}
                      alt='Knife Plate'
                      className='knifeplate-icon'
                      style={{ width: '24px', height: '24px' }}
                    /> */}
                    <span className='text-primary text-xl font-bold'>
                      Recetas
                    </span>
                  </div>
                  <SortableContext
                    items={items}
                    strategy={verticalListSortingStrategy}>
                    {items?.map((recipe, index) => (
                      <div
                        key={index}
                        className='flex items-center justify-center h-40 border border-primary'>
                        <PlannedRecipe key={index} item={recipe} />
                      </div>
                    ))}
                  </SortableContext>
                  {/* <AddRecipe key={index} tooltip='Añadir receta' /> */}
                </div>
              </div>
              <div className='planner-buttons-container mt-4'>
                <div className='planner-buttons'>
                  <button className='btn btn-primary' onClick={handleDownload}>
                    Descargar Planner
                  </button>
                </div>
              </div>
            </div>
          </div>
        </DndContext>
      </div>
    </Layout>
  );
};

export default PlannerDnD;
