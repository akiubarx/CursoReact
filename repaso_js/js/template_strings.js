// Template Strings

const nombre = 'Jorge';
const trabajo = 'Diseñador';

console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`);

//Concatenar multiples lineas
const contenedorApp = document.querySelector('#app');
let html = `
  <ul>
    <li>Nombre: ${nombre} </li>
    <li>Trabajo: ${trabajo} </li>
  </ul>
`;
contenedorApp.innerHTML = html;