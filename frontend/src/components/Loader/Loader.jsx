export const Loader = () => {
  return (
    <div className='flex flex-col justify-center items-center h-36 w-full'>
      <span className='loading loading-ring loading-md'></span>
      <span className='text-primary mt-4'>Cargando...</span>
    </div>
  );
};
