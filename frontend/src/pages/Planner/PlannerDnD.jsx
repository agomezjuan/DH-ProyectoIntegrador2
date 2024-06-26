import { useEffect, useState } from 'react';
// import knifeplateImage from './knifeplate.png';
import { FaFileCsv, FaFilePdf, FaTrashCan } from 'react-icons/fa6';
import { FaSave } from 'react-icons/fa';
import { PDFDownloadLink } from '@react-pdf/renderer';
import './Planner.css';
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
import { CleanConfirm } from './modals/CleanConfirm.jsx';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PlanPDF from './PlanPDF/PlanPDF.jsx';

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
  const { fetchDownloadReport, fetchPlannerByUser, fetchSavePlanner } =
    useUserProfileStore();
  const { token, profile } = useAuthStore();

  const [plannerToPost, setPlannerToPost] = useState(
    useUserProfileStore((state) => state.plannerToPost)
  );

  console.log('Planner', planner);
  console.log('Items', mapPlannerData(items));
  console.log('Planner To Post', plannerToPost);

  useEffect(() => {
    setItems(mapPlannerData(planner));
  }, [planner]);

  useEffect(() => {
    setPlannerToPost(mapPlannerToPost(items));
  }, [items]);

  console.log('RECIPES', items);

  const handleDownload = () => {
    fetchDownloadReport(token, profile.sub);
  };
  const handlePost = () => {
    fetchSavePlanner(token, plannerToPost).then((response) => {
      console.log(response);
      if (response.idUser !== profile.sub) {
        toast.error('Error al guardar el plan');
        return;
      }
      fetchPlannerByUser(token);
      toast.success('El plan se ha guardado correctamente!');
    });
  };

  useEffect(() => {
    fetchPlannerByUser(token);
  }, [fetchPlannerByUser]);

  const handleDragEnd = (e) => {
    const { active, over } = e;
    setItems((items) => {
      const oldIndex = items.findIndex(
        (item, index) =>
          (item?.recipe?.id ? item?.recipe?.id : index) === active.id
      );
      const newIndex = items.findIndex(
        (item, index) =>
          (item?.recipe?.id ? item?.recipe?.id : index) === over.id
      );
      return arrayMove(items, oldIndex, newIndex);
    });
  };

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
                  {items?.map((recipes, index) =>
                    recipes?.recipe?.id ? (
                      <PlannedRecipe
                        key={recipes?.recipe?.id}
                        item={recipes?.recipe}
                      />
                    ) : (
                      <PlannedRecipe key={index * 13} item={{ id: index }} />
                    )
                  )}
                </SortableContext>
              </div>
            </div>
            <div className='flex justify-between mt-10 mx-10'>
              <div className='planner-buttons'>
                <button className='btn btn-accent' onClick={handlePost}>
                  <FaSave />
                  Guardar
                </button>
              </div>
              <div className='planner-buttons'>
                <button className='btn btn-info' onClick={handleDownload}>
                  <FaFileCsv />
                  CSV
                </button>
              </div>
              <div className='planner-buttons'>
                <PDFDownloadLink
                  document={<PlanPDF planner={planner} />}
                  fileName='plan.pdf'>
                  {({ loading }) =>
                    loading ? (
                      <button className='btn btn-info'>Cargando...</button>
                    ) : (
                      <button className='btn btn-info'>
                        <FaFilePdf />
                        PDF
                      </button>
                    )
                  }
                </PDFDownloadLink>
              </div>
              <div className='planner-buttons'>
                <button
                  className='btn bg-[#f17f82] hover:bg-[#e54a4f] '
                  onClick={() =>
                    document.getElementById('clean-confirm').showModal()
                  }>
                  <FaTrashCan />
                  Limpiar
                </button>
              </div>
            </div>
          </div>
        </div>
        <CleanConfirm token={token} />
      </DndContext>
    </div>
  );
};

export default PlannerDnD;
