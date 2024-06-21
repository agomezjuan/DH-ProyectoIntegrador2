import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function UpdateUserData(){
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    // resolver: yupResolver(loginSchema),
    defaultValues: {
      name: '',
      lastName: '',
    }
  });

  const goToChangePassword = () => {
    navigate('/change-password');
  };

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })
    return(
        <div className='flex justify-around bg-zinc-200 bg-opacity-80 py-16 rounded-md'>

        <form onSubmit={onSubmit}>
        <div className='text-center'>
          <h2 className='text-lg font-bold text-primary max-w-lg'>
            Datos de Usuario
          </h2>
        </div>
        <div className='flex justify-evenly gap-4'>
        <div className='flex text-left'>
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

        <div className='flex flex-col text-left'>
          <input
            className='w-80 mt-7 p-1 italic rounded-sm border border-solid border-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary'
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
        <button
            type='submit'
            className='bg-primary px-3 font-semibold text-white p-2 mt-8 rounded-sm border border-solid border-primary hover:bg-green-900'>
            Actualiza tus datos
          </button>
          </div>
        </form>
        <div className='mt-2'>
          <button className='btn btn-ghost text-primary'onClick={goToChangePassword}>
            Actualizar Contraseña
          </button>
        </div>
        </div>
        
    )
}

export default UpdateUserData;