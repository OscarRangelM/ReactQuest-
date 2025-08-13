import { Counter } from "./components/Counter";
import { Usuarios } from './components/Usuarios';

import { TimerPadre } from "./components/TimerPadre";
import { CounterReducer } from "./components/CounterReducer";
import { Formulario } from "./components/Formulario";

function App() {
  return (
    <>
      <h1>Hello World - typescript</h1>
      <hr />

      <h2>useState</h2>

      <Counter />
      <Usuarios />

      <hr />
      <h2>useEffect - useRef</h2>

      <TimerPadre />

      <hr />
      <h2>useReducer</h2>

      <CounterReducer />

      <hr />
      <h2>Custom Hooks</h2>
      
      <Formulario />
    </>
  );
}

export default App;
