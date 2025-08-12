import { Counter } from "./components/Counter";
import { Usuarios } from './components/Usuarios';

import { TimerPadre } from "./components/TimerPadre";

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
    </>
  );
}

export default App;
