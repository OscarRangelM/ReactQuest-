// Esta es una funcion personailzada para manejar formularios en React.

import { useState, ChangeEvent } from "react";

export const useForm = <T extends Object>( initialState: T ) => {
  // El tipo T es un generico que nos permite pasar cualquier tipo de objeto como estado inicial del formulario
  // La T tambien puede ser un array y se puede poner con un or (|) si se quiere que sea un array o un objeto. Por ejemplo: T extends Object | any[].
  const [ formState, setFormState ] = useState( initialState );

  const handleChange = ( { target }: ChangeEvent<HTMLInputElement> ) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [ name ]: value
    });
  }

  return {
    formState,
    handleChange,
  }
}