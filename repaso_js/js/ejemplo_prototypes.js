//Prototypes

//object literal
const persona = {
  nombre: "Jorge",
  profesion: "Desarrollador web",
  edad: 500
};

//object constructor
function Tarea(nombre, urgencia) {
  this.nombre = nombre;
  this.urgencia = urgencia;
}
//Agregar prototype a tarea
Tarea.prototype.mostrarInformacionTarea = function() {
  return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`;
};
//crear nueva tarea
const tarea1 = new Tarea("Aprender React y JS", "Urgente");
console.log(tarea1);
console.log(tarea1.mostrarInformacionTarea());

//Nota del Usuario: El prototype permite atar las funciones a objetos especificos.