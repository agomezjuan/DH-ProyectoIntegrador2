import { Layout } from '@/components/Layout';
import MainRecipe from '../../components/MainRecipe/MainRecipe';


// const popularRecipes = [recipeMock, recipeMock, recipeMock];

export const ViewRecipe = () => {
  return (
    <Layout>
      <div className='container bg-base-200 p-6'>
      <div style={{ backgroundColor: 'rgb(130, 170, 51)', height: '200px', margin: '0 80px' }} className="flex items-center justify-center p-8 text-center">
      <input
        type="text"
        placeholder="Busca una receta, un ingrediente, palabra clave"
        className="w-full p-4 rounded"
        style={{ margin: '0 50px' }}
      />
    </div>
        <MainRecipe />
        <div style={{ width: '100%', float: 'left', padding: '20px', marginLeft: '80px' }}>
      <h2 style={{ fontWeight: 'bold' }}>Ingredientes</h2>
      <ul>
        <li>1/4 tazas de aceite de oliva, para el pollo</li>
        <li>1 cucharadita de ajo en polvo, para el pollo</li>
        <li>al gusto de sal, para el pollo</li>
        <li>al gusto de pimienta, para el pollo</li>
        <li>400 gramos de pechuga de pollo, limpia y sin hueso</li>
        <li>2 anchoas, para el aderezo</li>
        <li>1 cucharada de ajo, picado, para el aderezo</li>
        <li>1 cucharadita de mostaza Dijon, para el aderezo</li>
        <li>1 cucharada de salsa inglesa, para el aderezo</li>
        <li>1 Huevo San Juan®, para el aderezo</li>
        <li>1/2 limones, (jugo) para el aderezo</li>
        <li>1/2 tazas de aceite de oliva, para el aderezo</li>
        <li>1 cucharada de queso parmesano, rallado, para el aderezo</li>
        <li>suficiente de lechuga romana</li>
        <li>suficiente de crutón, para acompañar</li>
        <li>suficiente de queso parmesano, en láminas, para decorar</li>
      </ul>
    </div>
    <div style={{ marginLeft: '80px', marginRight: '80px' }}>
      <main className="p-4">
        <h1 className="font-bold text-xl" style={{ marginTop: '20px', marginBottom: '20px' }}>Preparación</h1>
        <ul className="list-disc pl-5">
          <li>En un bowl mezcla el aceite de oliva con el ajo en polvo, la sal y la pimienta. Barniza el sartén parrilla con la mezcla, coloca el pollo y baña con la misma mezcla hasta cubrir. Cocina por 15 minutos, procura que cada lado quede bien cocido. Retira del fuego y corta en láminas de 1 centímetro de grosor. Reserva.</li>
          <li>Para el aderezo, en un bowl ensaladero mezcla las anchoas con el ajo, la mostaza Dijon y la salsa inglesa, apóyate de una cuchara para incorporar poco a poco los ingredientes. Rompe la cáscara de la pieza de Huevo San Juan y separa la clara de la yema. Vierte sólo la yema a la preparación e incorpora. Añade el jugo del limón y vierte poco a poco el aceite de oliva sin dejar de mover. Agrega el queso parmesano y las hojas de lechuga, baña por completo.</li>
          <li>Sirve las hojas de lechuga en un plato, añade el pollo cocido, los crutones de pan y decora con láminas de parmesano. ¡Disfruta!</li>
        </ul>
      </main>
    </div>
     
      </div>

    </Layout>

  );
};

export default ViewRecipe;
