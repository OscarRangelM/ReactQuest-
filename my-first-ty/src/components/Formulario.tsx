import React, { use } from 'react'
import { useForm } from '../hooks/useForm';
// Este es un formulario simple que usa el hook useForm para manejar el estado del formulario.
// El useForm es un hook personalizado que maneja el estado del formulario y los cambios en los inputs.
// Este formulario tiene dos inputs: email y nombre. Ambos tienen un valor inicial y se actualizan cuando el usuario escribe en ellos.
// El estado del formulario se guarda en formState y se actualiza con handleChange.
// Este hook hace que la funcion sea reutilizable y si quisieramos usarlo en otro formulario, solo tenemos que pasarle el estado inicial y ya esta. No tenemos que repetir el codigo de manejo de estado y cambios en los inputs.


export const Formulario = () => {

  const { formState, handleChange } = useForm({
    email: 'hankSolo@gmail.com',
    nombre: 'Hank Solo',
  });

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input type="email" className="form-control" name='email' onChange={handleChange} value={formState.email}/>
      </div>

      <div className="mb-3">
        <label className="form-label">Nombre:</label>
        <input type="text" className="form-control" name='nombre' onChange={handleChange} value={formState.nombre}/>
      </div>

      <pre>{ JSON.stringify(formState) }</pre>
    </form>
  )
}
