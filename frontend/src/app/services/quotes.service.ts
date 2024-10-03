import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  private quotes: string[] = [
    "Un libro es un sueño que tienes en la mano. - Neil Gaiman",
    "La lectura es para la mente lo que el ejercicio es para el cuerpo. - Joseph Addison",
    "Los libros son los amigos más silenciosos y constantes; son los consejeros más accesibles y sabios. - Charles W. Eliot",
    "La lectura nos da un lugar adonde ir cuando tenemos que quedarnos donde estamos. - Mason Cooley",
    "Un lector vive mil vidas antes de morir. El hombre que nunca lee vive solo una. - George R.R. Martin",
    "Un libro bien elegido te salvará de cualquier cosa, incluso de ti mismo. - Daniel Pennac",
    "Los libros son el tesoro de la humanidad. - Platón",
    "La lectura es la puerta a un mundo de imaginación. - Anónimo",
    "No hay amigo tan leal como un libro. - Ernest Hemingway",
    "Los libros son una forma de escapar de la realidad sin salir de casa. - Anónimo",
    "La lectura es una aventura que dura toda la vida. - Anónimo",
    "Las palabras son, en mi no tan humilde opinión, nuestra más inagotable fuente de magia. - J.K. Rowling",
    "Leer es un acto de resistencia. - Anónimo",
    "Cada libro es un viaje, y cada lectura es una aventura. - Anónimo",
    "Los libros son los cimientos sobre los cuales se construye el conocimiento. - Anónimo",
    "La lectura es una conversación con los hombres más sabios de los siglos pasados. - René Descartes"
  ];

  constructor() { }

  getRandomQuote(): string {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    return this.quotes[randomIndex];
  }
}
