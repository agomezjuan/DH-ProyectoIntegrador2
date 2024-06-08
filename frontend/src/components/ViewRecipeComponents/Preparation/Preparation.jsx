import React from 'react';
import hero from '@/assets/hero.png';
import { FaMagnifyingGlass } from 'react-icons/fa6';

const Preparation = () => {
  return (
    <div style={{ marginLeft: '80px', marginRight: '80px' }}>
      <header className="flex items-center justify-between bg-gray-100 p-4">
        {}
      </header>
      <main className="p-4">
        <h1 className="font-bold text-xl" style={{ marginTop: '20px', marginBottom: '20px' }}>Preparación</h1>
        <ul className="list-disc pl-5">
          <li>En un bowl mezcla el aceite de oliva con el ajo en polvo, la sal y la pimienta. Barniza el sartén parrilla con la mezcla, coloca el pollo y baña con la misma mezcla hasta cubrir. Cocina por 15 minutos, procura que cada lado quede bien cocido. Retira del fuego y corta en láminas de 1 centímetro de grosor. Reserva.</li>
          <li>Para el aderezo, en un bowl ensaladero mezcla las anchoas con el ajo, la mostaza Dijon y la salsa inglesa, apóyate de una cuchara para incorporar poco a poco los ingredientes. Rompe la cáscara de la pieza de Huevo San Juan y separa la clara de la yema. Vierte sólo la yema a la preparación e incorpora. Añade el jugo del limón y vierte poco a poco el aceite de oliva sin dejar de mover. Agrega el queso parmesano y las hojas de lechuga, baña por completo.</li>
          <li>Sirve las hojas de lechuga en un plato, añade el pollo cocido, los crutones de pan y decora con láminas de parmesano. ¡Disfruta!</li>
        </ul>
      </main>
    </div>
  );
}

export default Preparation;
