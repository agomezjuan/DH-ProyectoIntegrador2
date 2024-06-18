import { useForm } from 'react-hook-form';

function RestorePassword() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
      } = useForm({
        // resolver: yupResolver(registerSchema),
        defaultValues: {
          email: '',
          password: '',
          confirmPassword: ''
        }
      });

      const onSubmit = handleSubmit(async (data) => {
        // const { confirmPassword, ...registerData } = data;
        try {
        //   const resRegister = await registerUser(data);
        //   if (resRegister.status === 201) {
        //     console.log('Registro exitoso:', resRegister.statusText);
            // navigate('/login');
        //   }
        } catch (error) {
          console.error('Registration failed:', error);
        } finally {
          reset();
        }
      });

    return(
        <div className='flex flex-column justify-center bg-zinc-200 bg-opacity-80 py-16 rounded-md'>
      <form onSubmit={onSubmit}>
      <div className='mt-1 flex flex-col text-left'>
          <input
            className='w-80 mt-2 p-1 italic rounded-sm border border-solid border-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary'
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
        <div className='mt-1 flex flex-col text-left'>
          <input
            className='w-80 mt-2 p-1 italic rounded-sm border border-solid border-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary'
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
            Cambiar Contraseña
          </button>
        </div>
      </form>
      </div>
    )
}

export default RestorePassword;