import { useState } from 'react';
import { Timer } from './Timer';

export const TimerPadre = () => {

  const [milisegundos, setMilisegundos] = useState(1000);

  return (
    <>
      <span>Milisegundos: { milisegundos }</span>
      
      <button
        className="btn btn-outline-success"
        onClick={ () => setMilisegundos( 1000 ) }
      >
        Aumentar
      </button>
      <button
        className="btn btn-outline-success"
        onClick={ () => setMilisegundos( 2000 ) }
      >
        Disminuir
      </button>
      <Timer milisegundos={ milisegundos } />
    </>
  )
}
