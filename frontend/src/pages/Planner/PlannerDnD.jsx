import { useEffect, useState } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove
} from '@dnd-kit/sortable';
import PlannedRecipe from './PlannedRecipe';
import useUserProfileStore from '../../store/userProfileStore';
import { mapPlannerData, mapPlannerToPost } from '../../utils/plannerMapper';
import { useAuthStore } from '../../store/authStore.js';
import PlannerHeader from './PlannerHeader';
import PlannerDay from './PlannerDay';
import PlannerButtons from './PlannerButtons';
import './Planner.css';

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const planner = useUserProfileStore((state) => state.planner);
  const { fetchDownloadReport, fetchPlannerByUser, fetchDeletePlannerByUser, fetchSavePlanner } = useUserProfileStore();
  const { token, profile } = useAuthStore();
  const [plannerToPost, setPlannerToPost] = useState(
    useUserProfileStore((state) => state.plannerToPost)
  );

  useEffect(() => {
    setItems(mapPlannerData(planner));
  }, [planner]);

  useEffect(() => {
    setPlannerToPost(mapPlannerToPost(items));
  }, [items]);

  useEffect(() => {
    const loadPlanner = async () => {
      try {
        setLoading(true);
        await fetchPlannerByUser(token);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadPlanner();
  }, [fetchPlannerByUser]);

  const handleDownload = async () => {
    try {
      setLoading(true);
      await fetchDownloadReport(token, profile.sub);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePost = async () => {
    try {
      setLoading(true);
      await fetchSavePlanner(token, plannerToPost);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      setLoading(true);
      await fetchDeletePlannerByUser(token);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDragEnd = (e) => {
    const { active, over } = e;
    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.recipe.id === active.id);
        const newIndex = items.findIndex((item) => item.recipe.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='container bg-base-200 -mt-8'>
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
                  <PlannerDay day={day} key={index} />
                ))}
              </div>
              <div className='flex flex-col w-full gap-4'>
                <PlannerHeader />
                <SortableContext
                  items={items}
                  strategy={verticalListSortingStrategy}>
                  {items?.map((recipes, index) =>
                    recipes.recipe?.id ? (
                      <PlannedRecipe
                        key={recipes.recipe?.id}
                        item={recipes?.recipe}
                      />
                    ) : (
                      <PlannedRecipe key={index * 13} item={{ id: index }} />
                    )
                  )}
                </SortableContext>
              </div>
            </div>
            <PlannerButtons
              handleDownload={handleDownload}
              handleDelete={handleDelete}
              handlePost={handlePost}
            />
          </div>
        </div>
      </DndContext>
    </div>
  );
};

export default PlannerDnD;
