class Personaje {
  nombre;
  familia;
  edad;
  estado;
}

class Rey extends Personaje {
  anyosDeReinado;
  mensaje; "Vais a morir todos";
}

class Luchador extends Personaje {
  ArmaQueUsa;
  destreza; //valor del 1 al 10
  mensaje; "Primero pego y luego pregunto"
}

class Asesor extends Personaje {
  personajeAQuienAsesora; // tiene que ser un luchador, rey, asesor o escudero
  mensaje; "No sé por que, pero creo que voy a morir pronto"
}

class Escudero extends Personaje {
  personajeAQuienSirve; //tiene que ser un luchador
  gradoDePelotismo; //valor del 1 al 10
  mensaje; "Soy un Loser"

}

console.log(Escudero)
