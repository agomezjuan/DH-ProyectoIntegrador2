import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { changePasswordSchema } from '../../schemas/authSchemas';
import { useAuthStore } from '../../store/authStore';
import { useUserProfileStore } from '../../store/userProfileStore';
import { toast } from 'react-toastify';

function RestorePassword() {
  const navigate = useNavigate();
  const { resetPassword, logout } = useAuthStore();
  const { cleanPlanner } = useUserProfileStore();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(changePasswordSchema),
    defaultValues: {
      username: '',
      password: '',
      confirmPassword: ''
    }
  });

  const onSubmit = handleSubmit(async (data) => {
    data.email = data.username;
    const { confirmPassword, ...resetData } = data;
    try {
      setLoading(true);
      const response = await resetPassword(resetData);
      if (response) {
        logout();
        cleanPlanner();
        toast.success('Has actualizado tu contraseña');
        navigate('/login');
      } else {
        toast.error('Correo no existe como usuario');
        reset();
        navigate('/');
      }
    } catch (error) {
      toast.error('Algo falló :(. Revisa tus datos');
      console.error('Password reset failed:', error);
    } finally {
      setLoading(false);
      reset();
    }
  });

  return (
    <div className='flex flex-column justify-center bg-zinc-200 bg-opacity-80 py-16 rounded-md'>
      <form onSubmit={onSubmit}>
        <h2 className='text-lg font-bold text-primary max-w-lg'>
          Cambiar contraseña
        </h2>
        <div className='mt-1 flex flex-col text-left'>
          <input
            className='input input-bordered input-primary w-full mt-7'
            placeholder='Correo electrónico'
            type='email'
            {...register('username')}
          />
          {errors.email && (
            <span className='text-xs text-primary font-bold'>
              {errors.email.message}
            </span>
          )}
        </div>

        <div className='mt-1 flex flex-col text-left'>
          <input
            className='input input-bordered input-primary w-full mt-2'
            placeholder='Contraseña'
            type='password'
            {...register('password')}
          />
          {errors.password && (
            <span className='text-xs text-primary font-bold'>
              {errors.password.message}
            </span>
          )}
        </div>
        <div className='mt-1 flex flex-col text-left'>
          <input
            className='input input-bordered input-primary w-full mt-2'
            placeholder='Confirmar Contraseña'
            type='password'
            {...register('confirmPassword')}
          />
          {errors.confirmPassword && (
            <span className='text-xs text-primary font-bold'>
              {errors.confirmPassword.message}
            </span>
          )}
        </div>
        <div className='flex justify-center'>
          <button
            type='submit'
            className={`btn btn-primary p-2 mt-8 ${loading ? 'loading' : ''}`}>
            {loading ? (
              <span className='loading loading-ring loading-xs'></span>
            ) : (
              'Cambiar Contraseña'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default RestorePassword;
