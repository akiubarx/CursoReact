//Object destructuring
//Consiste en extraer valors de un objeto
const aprendiendoJS = {
  version: {
    nueva: 'ES6',
    anterior: 'ES5'
  },
  framework: ['React', 'VueJS', 'AngularJS']
}
console.log(aprendiendoJS);

//Version anterior
let version1 = aprendiendoJS.version;
let framework1 = aprendiendoJS.framework[1];

console.log(version1);

let{version, framework} = aprendiendoJS;
console.log(version);
console.log(framework);

//Destructuring forma nueva

let{anterior} = aprendiendoJS.version;
console.log(anterior);

//Notas del Usuario: El destructuramiento debe saber a donde apuntar en base a los nombre de las propiedades y objetos