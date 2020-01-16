//Funciones en un objeto
const persona = {
  nombre: "Jorge",
  trabajo: "Desarrollador Web",
  edad: "500",
  musicaRock: "true",
  mostrarInformacion() {
    console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`);
  }
};

persona.mostrarInformacion();
//Nota del Usuario:
