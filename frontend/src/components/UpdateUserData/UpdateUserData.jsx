import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { updasteUserSchema } from '../../schemas/authSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuthStore } from '../../store/authStore';

function UpdateUserData() {
  const navigate = useNavigate();
  const [toastMessage, setToastMessage] = useState(null);
  const { updateUserData, profile } = useAuthStore();

  console.log('PROFILE: ', profile)

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
      await updateUserData(data);
      setToastMessage({
        type: 'success',
        message: 'Datos actualizados correctamente'
      });
    } catch (error) {
      setToastMessage({
        type: 'error',
        message: 'Error al actualizar los datos'
      });
      console.error('Update failed:', error);
      reset();
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
            className='w-80 mt-7 p-1 italic rounded-sm border border-solid border-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary'
            placeholder='Nombre'
            type='text'
            {...register('firstName')}
          />
          {errors.firstName && (
            <span className='text-xs text-primary font-bold'>
              {errors.firstName.message}
            </span>
          )}
        </div>

        <div className='mt-1 flex flex-col text-left'>
          <input
            className='w-80 mt-2 p-1 italic rounded-sm border border-solid border-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary'
            placeholder='Apellido'
            type='text'
            {...register('lastName')}
          />
          {errors.lastName && (
            <span className='text-xs text-primary font-bold'>
              {errors.lastName.message}
            </span>
          )}
        </div>
          <div className='text-center'>
        <button
          type='submit'
          className='bg-primary px-3 font-semibold text-white p-2 mt-8 rounded-sm border border-solid border-primary hover:bg-green-900'>
          Actualiza tus datos
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
      {toastMessage && (
        <div className='toast toast-center toast-middle'>
          <div
            className={`alert ${toastMessage.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
            <span>{toastMessage.message}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default UpdateUserData;
