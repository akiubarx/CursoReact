//Modulos ES6
const nombreTarea = "Pasear al perro";

export default nombreTarea;

//Definimos la Clase
class Tarea {
  constructor(nombre, prioridad) {
    this.nombre = nombre;
    this.prioridad = prioridad;
  }
  mostrar() {
    console.log(`${this.nombre} tiene una prioridad ${this.prioridad}`);
  }
}

//Clase heredada
class GenerarCompra extends Tarea {
  constructor(nombre, prioridad, cantidad) {
    super(nombre, prioridad);
    this.cantidad = cantidad;
  }
  mostrar() {
    super.mostrar();
    console.log(` y se deben comprar ${this.cantidad} piezas`);
  }
}
//Definimos el Objeto
//
let compra1 = new GenerarCompra("Articulo 1", "Alta", 250);

//Mostramos
//compra1.mostrar();

/*Notas del Usuario: Solo se puede tener un 'export default' por archivo,
Pero cargara toda la información del js.
*/
