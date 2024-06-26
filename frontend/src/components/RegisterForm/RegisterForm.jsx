import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { registerSchema } from '../../schemas/authSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { useState } from 'react';

function RegisterForm() {
  const { registerUser } = useAuthStore();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  });

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    const { confirmPassword, ...registerData } = data;
    try {
      const resRegister = await registerUser(registerData);
      if (resRegister.status === 201) {
        toast.success('Te has registrado con éxito!');
        navigate('/login');
      }
    } catch (error) {
      toast.error('Algo falló :(. Revisa tus datos');

      console.error('Registration failed:', error);
    } finally {
      setLoading(false);
      reset();
    }
  });

  return (
    <div className='flex flex-column justify-center bg-zinc-200 bg-opacity-80 py-16 rounded-md'>
      <form onSubmit={onSubmit} className='p-6 w-full max-w-96'>
        <div className='text-center'>
          <h2 className='text-lg font-bold text-primary max-w-lg'>
            Regístrate
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
            <span className='text-xs text-primary font-bold'>
              {errors.firstName.message}
            </span>
          )}
        </div>

        <div className='mt-1 flex flex-col text-left'>
          <input
            className='input input-bordered input-primary w-full mt-2'
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

        <div className='mt-1 flex flex-col text-left'>
          <input
            className='input input-bordered input-primary w-full mt-2'
            placeholder='Correo electrónico'
            type='email'
            {...register('email')}
          />
          {errors.email && (
            <span className='text-xs text-primary font-bold mt-1'>
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
            <span className='text-xs text-primary font-bold mt-1'>
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
            <span className='text-xs text-primary font-bold mt-1'>
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
              'Regístrate'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
