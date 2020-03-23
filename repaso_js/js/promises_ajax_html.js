//Promises con ajax
const descargarUsuarios = cantidad => new Promise((resolve, reject) => {
  //Pasar cantidad a la api
  const api = `https://randomuser.me/api?results=${cantidad}&nat=us`;
  
  //Llamado ajax
  const xhr = new XMLHttpRequest();

  //Abrir conexion
  xhr.open('GET', api, true);

  //On load
  xhr.onload = () => {
    if(xhr.status === 200){
      resolve(JSON.parse(xhr.responseText).results);
    }else{
      reject(Error(xhr.statusText));
    }
  }
  //Opcional
  xhr.oneror = (error) => reject(error);
  //Enviar la peticion
  xhr.send();
});

descargarUsuarios(20) .then(
  miembros => imprimirHTML(miembros),
  //miembros => console.log(miembros),
  error => console.error(
    new Error('Hubo un error' + error)
  )
);
function imprimirHTML(usuarios) {
  let html = '';
  usuarios.forEach(usuario => {
    html += `
      <li>
        Nombre: ${usuario.name.first} ${usuario.name.last}
        País: ${usuario.nat}
        Imagen: <img src="${usuario.picture.thumbnail}">
        Correo: ${usuario.email}
      </li>
    `;
  });

  const contenedorApp = document.querySelector('#app');
  contenedorApp.innerHTML = html;
}


/*Notas del Usuario: 1)Crear la constante con la url de la api a consultar.
2)xhr es una "constante o estandar para nombrar las conexiones httpRequest"
3).open se usa pra consultar el llamado al ajax, el cual requiere tres parametros GET/POST, la api y true o false dependiendo de si queremos que sea asincrono o no.
---
4)xhr.status === 200 es otro "estandar" para revisar que la llamada sea correcta
5).results viene de la api que se esta consultando
6)JSON.parse convierte de un string(forma en la que viene el json) a un objeto de js
7)Oneror se puede o no usar
---
8)Con el forEach recorremos cada uno de los resultado que arroja el json
9)Para etiquetas html internas como "img" ect, se debe marcar esta misma y pasar despues los valores a mostrar
10)El querySelector debe estar marcado en el html para saber en donde mostrar los resultados, en este caso se indica por medio de un "id"
*/