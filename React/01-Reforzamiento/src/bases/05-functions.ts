function nuevaFuncion ( valor: string) : string {
    return `El valor es: ${valor}`;
}

const arrowFunct = (newValue: string ) : string =>{
    return `El valor es: ${newValue}`;
}

const resultado = nuevaFuncion('Hola Mundo');
const resultado2 = arrowFunct('Hola Mundo');

function getUser () {
    return {
        uid: 'xmf5241',
        username: 'oscar.rangel'
    }
}

const getUsert2 = () => ({
    uid: 'xmf5241',
    username: 'oscar.rangel'
})

const user = getUser();
const user2 = getUsert2();
console.log(resultado);
console.log(resultado2);
console.log(user);
console.log(user2);