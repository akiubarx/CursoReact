//Objetc Constructor

//object literal
const persona = {
  nombre: "Jorge",
  profesion: "Desarrollador web",
  edad: 500
};

console.log(persona);

//object constructor

function Tarea(nombre, urgencia) {
  this.nombre = nombre;
  this.urgencia = urgencia;
}
//crear nueva tarea
const tarea1 = new Tarea("Aprender React y JS", "Urgente");
const tarea2 = new Tarea("Preparar café", "Urgente");
const tarea3 = new Tarea("Pasear al perro", "Media");

console.log(tarea1);
console.log(tarea2);
console.log(tarea3);

//Nota del Usuario: El "object constructor" permite crear multiples objetos.
