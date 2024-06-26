import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { registerSchema } from '../../schemas/authSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';

function RegisterForm() {
  const { registerUser } = useAuthStore();
  const navigate = useNavigate();

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
            className='w-full mt-2 p-1 italic rounded-sm border border-solid border-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary'
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

        <div className='mt-1 flex flex-col text-left'>
          <input
            className='w-full mt-2 p-1 italic rounded-sm border border-solid border-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary'
            placeholder='Correo electrónico'
            type='email'
            {...register('email')}
          />
          {errors.email && (
            <span className='text-xs text-primary font-bold'>
              {errors.email.message}
            </span>
          )}
        </div>

        <div className='mt-1 flex flex-col text-left'>
          <input
            className='w-full mt-2 p-1 italic rounded-sm border border-solid border-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary'
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
            className='w-full mt-2 p-1 italic rounded-sm border border-solid border-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary'
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
            className='bg-primary px-3 font-semibold text-white p-2 mt-8 rounded-sm border border-solid border-primary hover:bg-green-900'>
            Regístrate
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
