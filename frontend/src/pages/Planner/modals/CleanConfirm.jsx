import PropTypes from 'prop-types';
import useUserProfileStore from '../../../store/userProfileStore';

export const CleanConfirm = ({ token }) => {
  const { fetchDeletePlannerByUser } = useUserProfileStore();

  const handleClick = () => {
    fetchDeletePlannerByUser(token);
  };
  return (
    <dialog id='clean-confirm' className='modal'>
      <div className='modal-box'>
        <h3 className='font-bold text-lg'>Limpiar Plan</h3>
        <p className='py-4'>¿Seguro que quieres limpiar tu plan?</p>
        <p>
          Esta acción borrará tu plan actual y tendrás que crear otro desde
          cero.
        </p>
        <div className='modal-action'>
          <form method='dialog'>
            {/* if there is a button in form, it will close the modal */}
            <button
              className='btn bg-[#f17f82] hover:bg-[#e54a4f] me-2'
              onClick={handleClick}>
              Confirmar
            </button>
            <button className='btn'>Cancelar</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

CleanConfirm.propTypes = {
  token: PropTypes.string
};
