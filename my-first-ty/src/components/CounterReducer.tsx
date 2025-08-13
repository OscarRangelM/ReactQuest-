import { useReducer } from "react";


const initialState = {
  count: 0,
};

// Hay que definir todas las acciones que el reducer va a usar.
type ActionType = {
  type: 'incrementar' | 'decrementar' | 'resetear' | 'custom';
  payload?: number; // Este es opcional, ya que no todas las acciones lo necesitan. Por ejemplo, la accion de resetear no necesita un payload.
}

// La accion es lo que se va a enviar al reducer para que este pueda modificar el estado.
const contadorReducer = (state: typeof initialState, action: ActionType) => {

  switch (action.type) {
    case 'incrementar':
      return { ...state, count: state.count + 1 }; // Esto rompe la referencia del objeto y crea un nuevo objeto con el nuevo valor de count. Osea apunta a un nuevo lugar en memoria.
    case 'decrementar':
      return { ...state, count: state.count - 1 };
    case 'resetear':
      return initialState;
    case 'custom':
      return { ...state, count: action.payload ?? state.count }; // Si no se manda un payload, se queda con el valor actual de count. El ?? es el operador de coalescencia nula, que devuelve el operando de la izquierda si no es null o undefined, y el de la derecha en caso contrario.
    default:
      return state;
  }
}
// Siempre regresa un nuevo state. El inicial nunca se va mutar.

export const CounterReducer = () => {

  const [ contadorState, dispatch] = useReducer(contadorReducer, initialState);

  return (
    <>
      <h3>Contador: {contadorState.count}</h3>
      <button className="btn btn-outline-primary" onClick={() => dispatch({ type: 'incrementar' })}>Incrementar +1</button>
      {/* El type siempre tiene que ser el que esta definido en el ActionType, si se pone uno que no existe, TypeScript va a marcar un error. */}
      <button className="btn btn-outline-primary" onClick={() => dispatch({ type: 'decrementar' })}>Decrementar -1</button>
      <button className="btn btn-outline-primary" onClick={() => dispatch({ type: 'resetear' })}>Resetear</button>
      <button className="btn btn-outline-primary" onClick={() => dispatch({ type: 'custom', payload: 100 })}>Custom</button>
    </>
  )
}
