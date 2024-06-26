import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { updasteUserSchema } from '../../schemas/authSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuthStore } from '../../store/authStore';
import { toast } from 'react-toastify';
import { useState } from 'react';

function UpdateUserData() {
  const navigate = useNavigate();
  const { updateUserData, profile } = useAuthStore();
  const [loading, setLoading] = useState(false);

  console.log('PROFILE: ', profile);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(updasteUserSchema),
    defaultValues: {
      firstName: profile?.given_name,
      lastName: profile?.family_name
    }
  });

  const goToChangePassword = () => {
    navigate('/change-password');
  };

  const onSubmit = handleSubmit(async (data) => {
    try {
      setLoading(true);
      await updateUserData(data);
      toast.success('Datos actualizados correctamente');
    } catch (error) {
      toast.error('Error al actualizar los datos');

      console.error('Update failed:', error);
      reset();
    } finally {
      setLoading(false);
    }
  });

  return (
    <div className='flex flex-column justify-center bg-zinc-200 bg-opacity-80 py-16 rounded-md'>
      <form onSubmit={onSubmit}>
        <div className='text-center'>
          <h2 className='text-lg font-bold text-primary max-w-lg'>
            Actualizar información
          </h2>
        </div>
        <div className='flex flex-col text-left'>
          <input
            className='input input-bordered input-primary w-full mt-7'
            placeholder='Nombre'
            type='text'
            {...register('firstName')}
          />
          {errors.firstName && (
            <span className='text-xs text-primary font-bold mt-1'>
              {errors.firstName.message}
            </span>
          )}
        </div>

        <div className='mt-1 flex flex-col text-left'>
          <input
            className='input input-bordered input-primary w-full mt-7'
            placeholder='Apellido'
            type='text'
            {...register('lastName')}
          />
          {errors.lastName && (
            <span className='text-xs text-primary font-bold mt-1'>
              {errors.lastName.message}
            </span>
          )}
        </div>
        <div className='text-center'>
          <button
            type='submit'
            className={`btn btn-primary p-2 mt-8 ${loading ? 'loading' : ''}`}
            disabled={loading}>
            {loading ? (
              <span className='loading loading-ring loading-xs'></span>
            ) : (
              'Actualiza tus datos'
            )}
          </button>
        </div>

        <div className='mt-2 text-center'>
          <button
            className='btn btn-ghost text-primary'
            onClick={goToChangePassword}>
            Actualizar Contraseña
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateUserData;
