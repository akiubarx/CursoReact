//Orientado a Objetos: Clases
//Definimos la Clase
class Tarea {
  constructor(nombre, prioridad) {
    this.nombre = nombre;
    this.prioridad = prioridad;
  }
  mostrar() {
    return `${this.nombre} tiene una prioridad ${this.prioridad}`;
  }
}
//Definimos el Objeto
let tarea1 = new Tarea("Aprender JavaScript", "Alta");
let tarea2 = new Tarea("Preparar Cafe", "Alta");

//Mostramos
console.log(tarea1.mostrar());
console.log(tarea2.mostrar());

/*Notas del Usuario: Asi como en CSS el objeto definido con la clase se puede usar N cantidad de veces.
Las funciones cuando pasan a estar en una clase se denominan metodos
*/