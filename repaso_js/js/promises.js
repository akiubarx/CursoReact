//Promises
const aplicarDescuento = new Promise((resolve, reject) => {
  setTimeout(() => {
    let descuento = true;
    if(descuento){
      resolve('Descuento aplicado');
    } else {
      reject('No se pudo aplicar el descuento');
    }
  }, 3000);
});

aplicarDescuento.then(resultado => {
  console.log(resultado);
}).catch(error => {
  console.log(error);
});
///Nota del Usuario: Las promesas requieren de los parametros "resolve y reject", asi mismo, para su aplicación se debe mandar un 'then' de forma que se de por terminada la ejecución de la promesa.