import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { loginSchema } from '../../schemas/authSchemas';
import { yupResolver } from '@hookform/resolvers/yup';

function LoginForm() {
  const { login, profile } = useAuthStore();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

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
    setToastMessage(null);
    try {
      await login(data);
      setToastMessage({ type: 'success', message: 'Bienvenida!' });
      reset();
      navigate("/");
    } catch (error) {
      setToastMessage({ type: 'error', message: 'Algo falló :(. Revisa tus datos' });
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  });

  useEffect(() => {
    let timer;
    if (toastMessage) {
      timer = setTimeout(() => {
        if (toastMessage.type === 'success') {
          navigate("/");
        }
        setToastMessage(null);
      }, 5000);
    }

    return () => clearTimeout(timer);
  }, [toastMessage, navigate]);

  return (
    <div className='flex flex-column text-center bg-zinc-200 bg-opacity-80 py-16 rounded-md'>
      <div className='text-center mx-auto'>
        <form onSubmit={onSubmit}>
          <h2 className='text-lg font-bold text-primary max-w-lg'>
            Iniciar Sesión
          </h2>
          <div className='flex flex-col text-left'>
            <input
              className='w-80 mt-7 p-1 italic rounded-sm border border-solid border-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary'
              placeholder='Correo electrónico'
              type='text'
              {...register('username')}
            />
            {errors.username && (
              <span className='text-xs text-primary font-bold'>
                {errors.username.message}
              </span>
            )}
          </div>

          <div className='mt-1 flex flex-col text-left'>
            <input
              className='w-80 mt-2 p-1 italic rounded-sm border border-solid border-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary'
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

          <button
            type='submit'
            className={`bg-primary px-3 font-semibold text-white p-2 mt-8 rounded-sm border border-solid border-primary hover:bg-green-900 ${loading ? 'loading' : ''}`}
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
          <button className='btn btn-ghost text-primary'onClick={goToChangePassword}>
            ¿Olvidaste tu contraseña?
          </button>
        </div>
      </div>
      {toastMessage && (
        <div className='toast toast-center toast-middle'>
          <div className={`alert ${toastMessage.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
            <span>{toastMessage.message}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginForm;
