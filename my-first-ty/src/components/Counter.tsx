import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const newIncrementNum : number = 5; // tipado de dato para una variable

  const increment = (num: number = 1):void => {
    // primer tipado de dato los dos puntos void ":void" le indican a la función que no retorna nada
    // al declarar un parametro para la función se debe tipar el parametro para que typescript lo reconozca, este igual se le puede dar un valor por defecto
    // Darle un valor por defecto al parametro lo vuelve opcional
    setCount(count + num);
  }

  const decrement = (num: number = 1):void => {
    setCount(count - num);
  }

  return (
    <div className="mt-5">
      <h3>Counter: useState</h3>
      <span>Valor: {count}</span>
      <br />
      <button className="btn btn-outline-primary mt-2" onClick={ () => increment() }>
        {/* ahora para llamar la funcion se tiene que hacer por una funcion flecha */}
        +1
      </button>
      <button className="btn btn-outline-primary mt-2" onClick={ () => increment(newIncrementNum) }>
        {/* al igual se le puede dar un valor para que en lugar de incrementar uno incremente el valor que le asignemos */}
        +{newIncrementNum}
      </button>
      <button className="btn btn-outline-secondary mt-2" onClick={ () => decrement() }>
        -1
      </button>
      <button className="btn btn-outline-danger mt-2" onClick={ () => setCount(0) }>
        Reset
      </button>
    </div>
  )
}
