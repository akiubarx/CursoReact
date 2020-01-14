//Creando Funciones

//Decalaracion de la funcion
function saludar(nombre){
  console.log(`Bienvenido: ${nombre}`)
}

//aplicacion o uso de la funcion
saludar('Jorge');

//Function expression
const cliente = function(nombreCliente){
  console.log(`Mostrando datos del cliente: ${nombreCliente}`);
}
//aplicacion o uso de la funcion
cliente('Jorge');

//Nota del usuario: En el primer caso, no importa si se manda a llamar la funcion antes o despues de delararla, esta se ejecutara por igual; en el segundo caso primero se debe declarar la funcion antes de mandarla a llamar.