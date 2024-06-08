import React from 'react';
import StarRating from '../StarRating/StarRating';


const MainRecipe = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0 80px' }}>
      {}
      <div style={{ width: '45%', maxWidth: '900px' }}>
        <div className="grid gap-4">
          {}
          <div>
              <img className="h-auto max-w-full rounded-lg" src="https://www.pequeocio.com/wp-content/uploads/elementor/thumbs/ensalada-cesar-qfujo8fmrbj2dyx2dweu9v6j1f16i9ccpolfwpnhw8.jpg" alt="" />
          </div>
          <div className="grid grid-cols-5 gap-4">
              {}
              <div>
                  <img className="h-auto max-w-full rounded-lg" src="https://img-global.cpcdn.com/recipes/0515c99e15f36edc/400x400cq70/photo.jpg" alt="" />
              </div>
              <div>
                  <img className="h-auto max-w-full rounded-lg" src="https://cecotec.es/recetas/wp-content/uploads/2022/11/Cecofry_Ensalada-Cesar_ligera_RRSS-1.jpg" alt="" />
              </div>
              <div>
                  <img className="h-auto max-w-full rounded-lg" src="https://content-cocina.lecturas.com/medio/2021/08/30/ensalada_cesar_con_pechuga_de_pollo_y_queso_parmesano_ead88b4f_1200x1200.jpg" alt="" />
              </div>
              <div>
                  <img className="h-auto max-w-full rounded-lg" src="https://content-cocina.lecturas.com/medio/2022/06/02/ensalada-cesar_f94e0e8c_1200x1200.jpg" alt="" />
              </div>
              <div>
                  <img className="h-auto max-w-full rounded-lg" src="https://www.shoothecook.es/wp-content/uploads/ensalada-cesar-con-pollo-receta-f-500x500.jpg" alt="" />
              </div>
          </div>
        </div>
      </div>

      {}
      <div style={{ width: '45%', maxWidth: '900px' }}>
      <h2 style={{ fontWeight: 'bold', fontSize: '30px' }}>Ensalada César</h2>
        <div className="grid gap-4">
          {}
          <div>
              {}
          </div>
            {}
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
            <div style={{ margin: '0 5px', textAlign: 'center' }}> {}
              <i className="fas fa-clock"></i>
              <p>Tiempo</p>
            </div>
            <div style={{ margin: '0 5px', textAlign: 'center' }}>
              <i className="fas fa-tachometer-alt"></i>
              <p>Dificultad</p>
            </div>
            <div style={{ margin: '0 5px', textAlign: 'center' }}>
              <i className="fas fa-calendar-alt"></i>
              <p>Planeador</p>
            </div>
            <div style={{ margin: '0 5px', textAlign: 'center' }}>
              <i className="fas fa-heart"></i>
              <p>Favoritos</p>
            </div>
          </div>

          {}
          <div style={{ textAlign: 'left', marginTop: '20px', margin: '20px' }}>
            {}
            <StarRating /> {}
          </div>

        </div>
      </div>
    </div>
  );
}

export default MainRecipe;
