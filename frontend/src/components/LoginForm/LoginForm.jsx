import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { loginSchema } from '../../schemas/authSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';

function LoginForm() {
  const { login } = useAuthStore();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      grant_type: 'password',
      client_id: 'frontend',
      username: '',
      password: ''
    }
  });

  const goToChangePassword = () => {
    navigate('/change-password');
  };

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);

    try {
      await login(data).then(() => {
        toast.success('Bienvenida!');
        setTimeout(() => {
          navigate('/');
        }, 2000);
      });
      reset();
    } catch (error) {
      toast.error('Algo falló :(. Revisa tus datos');

      console.error('Login failed:', error);
    } finally {
      setLoading(false);
    }
  });

  return (
    <div className='flex flex-column text-center bg-zinc-200 bg-opacity-80 md:py-16 rounded-md w-full'>
      <div className='flex flex-col items-center w-full'>
        <form onSubmit={onSubmit} className='p-6 w-full max-w-96'>
          <h2 className='text-lg font-bold text-primary max-w-lg'>
            Iniciar Sesión
          </h2>
          <div className='flex flex-col text-left'>
            <input
              className='input input-bordered input-primary w-full mt-7'
              placeholder='Correo electrónico'
              type='text'
              {...register('username')}
            />
            {errors.username && (
              <span className='text-xs text-primary font-bold mt-1'>
                {errors.username.message}
              </span>
            )}
          </div>

          <div className='mt-1 flex flex-col text-left '>
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

          <button
            type='submit'
            className={`btn btn-primary p-2 mt-8 ${loading ? 'loading' : ''}`}
            disabled={loading}>
            {loading ? (
              <span className='loading loading-ring loading-xs'></span>
            ) : (
              'Iniciar Sesión'
            )}
          </button>
        </form>
        <div className='mt-2'>
          <button className='btn btn-ghost text-primary'>
            <Link to='/register'>Registrarse</Link>
          </button>
        </div>
        <div className='mt-2'>
          <button
            className='btn btn-ghost text-primary'
            onClick={goToChangePassword}>
            ¿Olvidaste tu contraseña?
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
