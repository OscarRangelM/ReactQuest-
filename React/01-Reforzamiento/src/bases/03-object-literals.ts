const person01 = { // Esta les la declaración de un objeto literal.
    name: 'Oscar',
    lastName: 'Rangel',
    age: 28,
}

const person02 = { ...person01 }; // Esto es lo que se conoce como el operador de propagación, que nos permite copiar las propiedades de un objeto a otro objeto, en este caso estamos copiando las propiedades de person01 a person02, pero person02 es un nuevo objeto, no es una referencia a person01, por lo tanto, si modificamos person02 no afectará a person01. Esto solo funciona con las propiedades de primer nivel si hay un objeto dentro de otro objeto, el operador de propagación solo copiará la referencia del objeto interno, por lo tanto, si modificamos el objeto interno en person02, también se modificará en person01.

// const person02 = structuredClone(person01); // Esto es lo que se conoce como el método structuredClone, que nos permite copiar un objeto de manera profunda, es decir, si hay un objeto dentro de otro objeto, el método structuredClone copiará el objeto interno en lugar de copiar la referencia del objeto interno, por lo tanto, si modificamos el objeto interno en person02, no se modificará en person01. Este método es parte de la especificación de ECMAScript y está disponible en los navegadores modernos y en Node.js a partir de la versión 17.0.0. Es importante mencionar que el método structuredClone no es compatible con todos los tipos de datos, como funciones, símbolos, objetos con referencias circulares, entre otros.

person02.name = 'Mauricio';
person02.lastName = 'Morales';
person02.age = 27;


// Interfaces...

interface Person { // Esta no tiene un equivalente a algo ya existente en JavaScript, es una estructura que nos permite definir un contrato para un objeto, es decir, nos permite definir qué propiedades y métodos debe tener un objeto para cumplir con ese contrato. En este caso, estamos definiendo una interfaz llamada Person que tiene tres propiedades: name, lastName y age, todas ellas son de tipo string o number.
    //Este solo es un molde y se acostumbra que empieze con mayuscula, pero no es obligatorio.
    name: string;
    lastName: string;
    age: number;
    address?: { // El signo de interrogación indica que esta propiedad es opcional, es decir, un objeto que cumpla con el contrato de la interfaz Person no necesariamente tiene que tener la propiedad address, pero si la tiene, debe ser de tipo string.
        street: string;
        city: string;
        country: string;
    } // Esto no lo más correcto lo ideal sería crear una nueva interfaz para la dirección, pero lo estamos haciendo de esta manera para mostrar que también podemos tener objetos anidados dentro de un objeto literal, y que también podemos definir contratos para esos objetos anidados utilizando interfaces.
}

const person03: Person = { // Aquí estamos creando un objeto literal que cumple con el contrato definido por la interfaz Person, es decir, el objeto person03 tiene las propiedades name, lastName y age, todas ellas son de tipo string o number.
    name: 'Mauricio',
    lastName: 'Morales',
    age: 27,
}

// console.log(person01, person02);
// console.log(person01);
console.log(person03);