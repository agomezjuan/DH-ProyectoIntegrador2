

const MainRecipe = ({title, time, img}) => {
  return (
  <div
  // style={{ display: 'flex', justifyContent: 'space-between', margin: '0 80px' }}
  className="flex justify-between mx-20 mt-8"
  >
      <div style={{ width: '45%', maxWidth: '900px' }}>
        <div className="grid gap-4">
          <div>
              <img className="h-auto max-w-full rounded-lg" src={img} alt="" />
          </div>
        </div>
      </div>
      <div style={{ width: '45%', maxWidth: '900px' }}>
      <h2 style={{ fontWeight: 'bold', fontSize: '30px' }}>{title}</h2>
        <div className="grid gap-4">
          <div>
          </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
            <div style={{ margin: '0 5px', textAlign: 'center' }}> {}
              <i className="fas fa-clock"></i>
              <p>Tiempo de preparación: <span>{time}</span></p>
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
        </div>
      </div>
    </div>

  );
}

export default MainRecipe;
