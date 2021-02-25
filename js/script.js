class Personaje {
  nombre;
  familia;
  edad;
  estado;

  constructor(nombrePersonaje, familiaPersonaje, edadPersonaje, estadoPersonaje) {
    this.nombre = nombrePersonaje;
    this.familia = familiaPersonaje;
    this.edad = edadPersonaje;
    this.estado = estadoPersonaje;
  }
}

class Rey extends Personaje {
  anyosDeReinado;
  mensaje = "Vais a morir todos";
  constructor(nombrePersonaje, familiaPersonaje, edadPersonaje, estadoPersonaje, anyosDeReinadoPersonaje) {
    super(nombrePersonaje, familiaPersonaje, edadPersonaje, estadoPersonaje);
    this.anyosDeReinado = anyosDeReinadoPersonaje;
  }
}

class Luchador extends Personaje {
  ArmaQueUsa;
  destreza; //valor del 1 al 10
  mensaje = "Primero pego y luego pregunto";
}

class Asesor extends Personaje {
  personajeAQuienAsesora; // tiene que ser un luchador, rey, asesor o escudero
  mensaje = "No sé por que, pero creo que voy a morir pronto";
}

class Escudero extends Personaje {
  personajeAQuienSirve; //tiene que ser un luchador
  gradoDePelotismo; //valor del 1 al 10
  mensaje = "Soy un Loser";

}

const joffreyBaratheon = new Rey("Joffrey Baratheon", "Baratheon", 19, "Vivo", 2);

console.log(joffreyBaratheon);
