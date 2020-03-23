//Spread Operator ...
let lenguajes = ["PHP", "JavaScript", "Python"];
let framework = ["React", "Django", "Laravel"];

let combinacion = [...lenguajes, ...framework];

console.log(combinacion);

//
//let [ultimo] = lenguajes.reverse();
let [ultimo] = [...lenguajes].reverse();

console.log(lenguajes);
console.log(ultimo);

//
function suma(a, b, c) {
  console.log(a + b + c);
}
const numeros = [1, 2, 3];
suma(...numeros);
///Nota del Usuario: El Spread Operator ayuda a obtener informacion del array sin desacomodar el orden original del mismo. Por otro lado facilita la ejecucion de funciones que consulten a un arreglo.