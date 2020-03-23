//Orientado a Objetos: Heredar clases
//Definimos la Clase
class Tarea{
  constructor(nombre, prioridad){
    this.nombre = nombre;
    this.prioridad = prioridad
  }
  mostrar(){
    console.log(`${this.nombre} tiene una prioridad ${this.prioridad}`);
    //return `${this.nombre} tiene una prioridad ${this.prioridad}`;
  }
}

//Clase heredada
class GenerarCompra extends Tarea{
  constructor(nombre, prioridad, cantidad){
    super(nombre, prioridad);
    this.cantidad = cantidad;
  }
  mostrar(){
    super.mostrar();
    console.log( ` y se deben comprar ${this.cantidad} piezas`);
    //return `${this.nombre} el producto tiene una prioridad ${this.prioridad} y se deben comprar ${this.cantidad} piezas`;
    //super.mostrar();
    //return `y se deben comprar ${this.cantidad} piezas`;
  }
}
//Definimos el Objeto
//
let compra1 = new GenerarCompra('Articulo 1', 'Alta', 250);


//Mostramos
compra1.mostrar();
//console.log(compra1.mostrar());

/*Notas del Usuario: Asi como en CSS el objeto definido con la clase se puede usar N cantidad de veces.
Las funciones cuando pasan a estar en una clase se denominan metodos, estos se pueden reescribir cuando estan dentro de una clase tantas veces queramos, tambien se pueden heredar con el indicador 'super'.
El indicador 'super' funciona para traer los metodos que se aplicaran de la clase que se esta heredando, y asi solo añadir los nuevos.
Recordatorio: Solo se pude usar un return por consulta
*/