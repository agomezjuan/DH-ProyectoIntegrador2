import { useNavigate } from 'react-router-dom';
import SelectDay from './SelectDay';
import { usePlanner } from '../../hooks/usePlanner';
import { useRecipesStore } from '../../store/recipesStore';
import useUserProfileStore from '../../store/userProfileStore';
import { useAuthStore } from "../../store/authStore";

export const PlannerModal = () => {
  const navigate = useNavigate();
  const { day } = usePlanner();
  const detail = useRecipesStore((state) => state.detail);
  const { profile } = useAuthStore();

const userId = profile?.sub

  const addRecipeToPlanner = useUserProfileStore(
    (state) => state.addRecipeToPlanner
  );

  const handleClick = (userId) => {
    addRecipeToPlanner(day, detail.recipe);
    navigate(`/user/${userId}`);
  };

  return (
    <dialog id='planner_modal' className='modal'>
      <div className='modal-box flex flex-col items-center'>
        <h3 className='font-bold text-lg text-center text-primary'>
          Elige el día en el que deseas agregar esta receta
        </h3>
        <SelectDay />
        <div className='modal-action'>
          <form method='dialog'>
            {/* if there is a button in form, it will close the modal */}
            <button className='btn btn-primary' onClick={() => handleClick(userId)}>
              Confirmar
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};
