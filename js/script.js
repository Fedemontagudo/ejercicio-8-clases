const personajesGot = [];
class Personaje {
  serie = "Juego de Tronos";
  nombre;
  familia;
  edad;
  estado;

  constructor(nombrePersonaje, familiaPersonaje, edadPersonaje, estadoPersonaje) {
    this.nombre = nombrePersonaje;
    this.familia = familiaPersonaje;
    this.edad = edadPersonaje;
    this.estado = estadoPersonaje;
    personajesGot.push(this);
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

  set destreza(destrezaPersonaje) {
    if (destrezaPersonaje < 1) {
      this.destreza = 1;
      console.log("El valor de destreza debe ser entre 1 y 10");
    } else if (destrezaPersonaje > 10) {
      this.destreza = 10;
      console.log("El valor de destreza debe ser entre 1 y 10");
    } else {
      this.destreza = destrezaPersonaje;
    }
  }

  constructor(nombrePersonaje, familiaPersonaje, edadPersonaje, estadoPersonaje, armaPersonaje, destrezaPersonaje) {
    super(nombrePersonaje, familiaPersonaje, edadPersonaje, estadoPersonaje);
    this.ArmaQueUsa = armaPersonaje;
    if (destrezaPersonaje < 1) {
      this.destreza = 1;
      console.log("El valor de destreza debe ser entre 1 y 10");
    } else if (destrezaPersonaje > 10) {
      this.destreza = 10;
      console.log("El valor de destreza debe ser entre 1 y 10");
    } else {
      this.destreza = destrezaPersonaje;
    }
  }
}

class Asesor extends Personaje {
  personajeAQuienAsesora; // tiene que ser un luchador, rey, asesor o escudero
  mensaje = "No sé por que, pero creo que voy a morir pronto";
  constructor(nombrePersonaje, familiaPersonaje, edadPersonaje, estadoPersonaje, personajeAQuienAsesora) {
    super(nombrePersonaje, familiaPersonaje, edadPersonaje, estadoPersonaje)
    this.personajeAQuienAsesora = personajeAQuienAsesora;
  }
}

class Escudero extends Personaje {
  personajeAQuienSirve; //tiene que ser un luchador
  gradoDePelotismo; //valor del 1 al 10
  mensaje = "Soy un Loser";
  constructor(nombrePersonaje, familiaPersonaje, edadPersonaje, estadoPersonaje, personajeAQuienSirve) {
    super(nombrePersonaje, familiaPersonaje, edadPersonaje, estadoPersonaje)
    this.personajeAQuienSirve = personajeAQuienSirve
  }
}

const joffreyBaratheon = new Rey("Joffrey Baratheon", "Baratheon", 19, "Vivo", 2);
const jaimeLannister = new Luchador("Jamie Lannister", "Lannister", 40, "Vivo", "Espada", 4);
const daenerysTargaryen = new Luchador("Daenerys Targaryen", "Targaryen", 30, "Vivo", "Dragones", 8);
const tyrionLannister = new Asesor("Tyrion Lannister", "Lannister", 40, "Vivo", joffreyBaratheon)
const Bronn = new Escudero("Bronn", "Desconocido/del aguasnegras", 32, "Vivo", /* aquivaJaimeLanniser */)

const mensajesLuchadores = personajes => personajes
  .filter(personaje => personaje.constructor.name === "Luchador")
  .map(personaje => personaje.mensaje);

console.log(personajesGot[0].serie);
console.log(personajesGot.map(personaje => personaje.mensaje));
