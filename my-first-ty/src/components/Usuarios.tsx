import { useState } from "react";

// Las interfaces son reglas que le decimos a TypeScript que un objeto debe cumplir
interface Usuario {
  uid: number;
  name: string;
  // Se pueden agregar más propiedades si es necesario
  // las propiedades que estan dentro de esta interfaz son obligatorias y tienen que ser las mismas que se declaren en state o marca un error.
}

// Se puede usar la interfaz para tipar un objeto fuera de un componente
const temUsuario: Usuario = {
  uid: 9,
  name: "Hank"
};
// Este tambien tiene que cumplir con las propiedades de la interfaz Usuario

export const Usuarios = () => {

  const [usuarios, setUsuarios] = useState<Usuario>(temUsuario);

  const login = () => {
    setUsuarios({ uid: 1, name: "Juan" });
  }

  return (
    <div className="mt-5">
      <h3>Usuarios</h3>
      <button className="btn btn-outline-primary" onClick={login}>Login</button>

      <pre>{ JSON.stringify( usuarios) }</pre>
    </div>
  )
}
