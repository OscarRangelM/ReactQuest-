import { useEffect, useRef, useState } from "react";

type TimerArguments = {
  milisegundos: number;
  segundos?: number; // Este argumento es opcional, ya que no lo estamos usando en este componente y para eso usamos el signo de interrogación
}

export const Timer = ( argumentos: TimerArguments) => {
  // Recibimos los argumentos del padre y tambien se deben tipar. Lo vamos hacer fuera del componente
  const { milisegundos } = argumentos; // Desestructuramos los argumentos para obtener el milisegundos

  const [ segundos, setSegundos ] = useState(0);
  const ref = useRef<NodeJS.Timeout | null>(null);
  // Usamos useRef para guardar el setInterval y poder limpiarlo cuando el componente se desmonte o cambie el milisegundos
  // El useRef nos permite guardar un valor mutable que no causa una re-renderizacion del componente cuando cambia. En este caso, lo usamos para guardar el setInterval.
  // Es importante tipar el useRef, en este caso usamos NodeJS.Timeout que es el tipo que devuelve el setInterval en NodeJS. Si usamos solo Timeout nos da error porque no lo reconoce. Tambien puede ser null o undefined al inicio porque no tiene ningun valor.

  useEffect(() => {
    ref.current && clearInterval(ref.current);
    // Limpiamos el intervalo anterior si existe para evitar que se acumulen intervalos cuando cambiamos el milisegundos

    ref.current = setInterval( () => setSegundos( seg => seg + 1 ), milisegundos );
  }, [milisegundos]);
  // Lo que vamos hacer es que con el useEffect cada segundo se actualice el estado de segundos
  // Usamos el setInterval para que cada segundo se actualice el estado y dentro le pasamos una funcion felcha que manda a llamar el setSegundos para no pasar el estado segundos como dependencias del useEffect ya que esto nos causa congflictos que no se ven a simple vista pero esta mal. El setSegundos recibe una funcion flecha que recibe el estado actual y le suma 1. El segundo parametro del setInterval es el tiempo en milisegundos que queremos que se ejecute la funcion flecha.

  return (
    <>
      <h4>Timer: <small>{ segundos }</small></h4>
    </>
  )
}
