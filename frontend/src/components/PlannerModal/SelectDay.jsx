import { FaCalendarAlt } from 'react-icons/fa';

function SelectDay() {
  return (
    <select className='select select-bordered w-full max-w-xs my-4'>
      <option disabled selected>
        Selecciona el día
      </option>
      <option>
        <FaCalendarAlt /> Lunes
      </option>
      <option>
        <FaCalendarAlt /> Martes
      </option>
      <option>
        <FaCalendarAlt /> Miércoles
      </option>
      <option>
        <FaCalendarAlt /> Jueves
      </option>
      <option>
        <FaCalendarAlt /> Viernes
      </option>
      <option>
        <FaCalendarAlt /> Sábado
      </option>
      <option>
        <FaCalendarAlt /> Domingo
      </option>
    </select>
  );
}

export default SelectDay;
