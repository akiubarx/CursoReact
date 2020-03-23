//Definimos la Clase
export default class Tarea {
  constructor(nombre, prioridad) {
    this.nombre = nombre;
    this.prioridad = prioridad;
  }
  mostrar() {
    console.log(`${this.nombre} tiene una prioridad ${this.prioridad}`);
  }
}

/*Notas del Usuario: Solo se puede tener un 'export default' por archivo,
Pero cargara toda la información del js.
*/