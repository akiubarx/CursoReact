//.Filter / .Find / .Reduce / Metodos para arreglos
const personas = [
  { nombre: "Jorge", edad: 29, aprendiendo: "JavaScript" },
  { nombre: "Nach", edad: 25, aprendiendo: "Laravel" },
  { nombre: "Man", edad: 32, aprendiendo: "Phyton" },
  { nombre: "Isra", edad: 30, aprendiendo: "Angular" },
  { nombre: "Dom", edad: 35, aprendiendo: "PHP" }
];
console.log(personas);

//mayores 28 años
const mayores = personas.filter(persona => {
  return persona.edad > 28;
});

//Personas con A
const encontrarA = personas.find(nombres => {
  return nombres.edad == 25;
});

//Total de edades
let total = personas.reduce((edadTotal, persona) => {
  return edadTotal + persona.edad;
}, 0);

//Ejecuta el Find ->v
console.log(`${encontrarA.nombre} esta aprendiendo ${encontrarA.aprendiendo}`);
//Ejecuta el Filter ->v
//console.log(mayores);
//Ejecuta el reduce ->v
//console.log(total / personas.length);
///Nota del Usuario: Filter revisa todo el arreglo, Find solo trae la primer respuesta del arreglo y Reduce se puede usar para juntar todos los valores señalados del arreglo
