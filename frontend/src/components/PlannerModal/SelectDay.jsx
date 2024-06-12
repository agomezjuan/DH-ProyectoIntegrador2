import { FaCalendarAlt } from 'react-icons/fa';
import { usePlanner } from '../../hooks/usePlanner';

function SelectDay() {
  const { setDay } = usePlanner();

  const handleChange = (e) => {
    setDay(e.target.value);
  };

  return (
    <>
      <select
        className='select select-bordered w-full max-w-xs my-4'
        onChange={handleChange}>
        <option disabled selected>
          Selecciona el día
        </option>
        <option value={'sunday'}>
          <FaCalendarAlt /> Domingo
        </option>
        <option value={'monday'}>
          <FaCalendarAlt /> Lunes
        </option>
        <option value={'tuesday'}>
          <FaCalendarAlt /> Martes
        </option>
        <option value={'wednesday'}>
          <FaCalendarAlt /> Miércoles
        </option>
        <option value={'thursday'}>
          <FaCalendarAlt /> Jueves
        </option>
        <option value={'friday'}>
          <FaCalendarAlt /> Viernes
        </option>
        <option value={'saturday'}>
          <FaCalendarAlt /> Sábado
        </option>
      </select>
    </>
  );
}

export default SelectDay;
