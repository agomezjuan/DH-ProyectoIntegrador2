import { useEffect, useState } from 'react';
// import knifeplateImage from './knifeplate.png';
import { Layout } from '@/components/Layout';
import { Header } from '@/components/Header';
import './Planner.css';
import { DndContext, closestCenter } from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove
} from '@dnd-kit/sortable';
import PlannedRecipe from './PlannedRecipe';
import useUserProfileStore from '../../store/userProfileStore';
import { mapPlannerData } from '../../utils/plannerMapper';
import { useAuthStore } from "../../store/authStore.js";

const PlannerDnD = () => {
  const daysOfWeek = [
    { name: 'Domingo', colorClass: 'light-green' },
    { name: 'Lunes', colorClass: 'green' },
    { name: 'Martes', colorClass: 'light-green' },
    { name: 'Miércoles', colorClass: 'green' },
    { name: 'Jueves', colorClass: 'light-green' },
    { name: 'Viernes', colorClass: 'green' },
    { name: 'Sábado', colorClass: 'light-green' }
  ];
  const [items, setItems] = useState([]);
  const planner = useUserProfileStore((state) => state.planner);
  const { fetchDownloadReport} = useUserProfileStore();
  const { token, profile } = useAuthStore();

  const plannerToPost = useUserProfileStore((state) => state.plannerToPost);

  console.log('Planner', planner);
  console.log('Items', mapPlannerData(items));
  console.log('Planner To Post', plannerToPost);

  useEffect(() => {
    setItems(mapPlannerData(planner));
  }, [planner]);

  console.log('RECIPES', items);

  const handleDownload = () => {
    fetchDownloadReport(token, profile.sub);

  };
  const handlePost = () =>{

  }

  const handleDragEnd = (e) => {
    const { active, over } = e;
    setItems((items) => {
      const oldIndex = items.findIndex((item) => item.id === active.id);
      const newIndex = items.findIndex((item) => item.id === over.id);
      return arrayMove(items, oldIndex, newIndex);
    });
  };

  return (
    // <Layout>
    <div className='container bg-base-200 -mt-8'>
      {/* <Header /> */}
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <div className='w-[800px] mx-auto container planner-container'>
          <h1>AGENDA SEMANAL</h1>
          <div className='planner p-4 mt-5'>
            <div className='flex w-full gap-4'>
              <div className='flex flex-col gap-4'>
                <div className='flex justify-center'>
                  <span className='text-primary text-xl font-bold text-center m-2'>
                    Día
                  </span>
                </div>
                {daysOfWeek.map((day, index) => (
                  <div
                    className={`${day.colorClass} text-center text-3xl w-56 h-40 flex items-center justify-center border border-primary rounded-lg`}
                    key={index}>
                    {day.name}
                  </div>
                ))}
              </div>
              <div className='flex flex-col w-full gap-4'>
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
                  {items?.map((recipe) => (
                    <PlannedRecipe key={recipe.id} item={recipe} />
                  ))}
                </SortableContext>
              </div>
            </div>
            <div className='planner-buttons-container mt-4'>
              <div className='planner-buttons'>
                <button className='btn btn-primary' onClick={handleDownload}>
                  Descargar Planner
                </button>
              </div>
            </div>
            <div className='planner-buttons-container mt-4'>
              <div className='planner-buttons'>
                <button className='btn btn-primary' onClick={handlePost}>
                  Guardar Planner
                </button>
              </div>
            </div>
          </div>
        </div>
      </DndContext>
    </div>
    // </Layout>
  );
};

export default PlannerDnD;
