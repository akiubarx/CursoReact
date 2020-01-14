//Parametros por default en las funciones

function actividad(nombre = "nombre", actividad = "actividad") {
  //function actividad(nombre, actividad){
  console.log(
    `La persona ${nombre}, esta realizando la actividad ${actividad}`
  );
}
actividad("Jorge", "Aprender JavaScript");
actividad("Jorge", "Mejorar conocimientos");
actividad();

//Nota del usuario: Los parametros asignados por default, se aplicaran cuando no se pase un parametro directo a la funcion, en otro casos, esos valores se sobreescriben por los deseados.