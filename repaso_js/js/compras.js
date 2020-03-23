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