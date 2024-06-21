import { useEffect } from 'react';
import { useAuthStore } from '../store/auth';
import PropTypes from 'prop-types';

export function Errors({ errors }) {
  const cleanErrors = useAuthStore((state) => state.cleanErrors);

  useEffect(() => {
    // remove errors after 5 seconds
    const timeout = setTimeout(() => {
      cleanErrors();
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {errors.map((error, i) => (
        <div className='bg-red-500 text-white p-2 rounded-md mb-2' key={i}>
          {error.message}
        </div>
      ))}
    </>
  );
}

Errors.propTypes = {
  errors: PropTypes.array.isRequired
};
