// Arrow functions
//Version tradicional:
/*let viajando = function(destino) {
    return `Viajando a la ciudad de: ${destino}`;
}

let viaje = viajando('Paris');

console.log(viaje);*/
//arrow function -
let viajando = destino => `Viajando a la ciudad de: ${destino}`;

let viaje;
viaje = viajando("Paris");

console.log(viaje);

//Notas del usuario: En las funciones con return, se ecribe la variable y despues una segunda variable que asignara los parametros de la primera.
// En las "arrow function" se reemplaza la pabra "fuction" por "=>" y se invierte el orden de escritura. Ademas se da por implicito la palabra "return" y se elimina el uso de "{}".
