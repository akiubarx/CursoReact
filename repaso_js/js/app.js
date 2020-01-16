//Funciones en un objeto
const carrito = ['Producto 1','Producto 2','Producto 3'];
console.log(carrito);

//Forma clasica de hacerlo
/*const appContenedor = document.querySelector('#app');

let html = '';
carrito.forEach(producto => {
  html += `<li>${producto}</li>`
})*/

//Forma a estilo Map
carrito.map(producto => {
  return 'El producto es ' + producto;
});

//Nota del Usuario (Parte 1): El map, conserva el arreglo original y devuelve un nuevo arreglo.

//Forma clasica
const persona = {
  nombre: 'Jorge',
  profesion: 'Desarrollador web',
  edad: '500'
}
const {nombre} = persona;
console.log(nombre);

//Forma con Objects Keys
console.log(Object.keys(persona));

//Nota del Usuario (Parte 1):