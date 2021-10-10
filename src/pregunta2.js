"use strict";

// La solucion de la pregunta 2 va aqui
//Pregunta 2:
//Sus tareas:
//PARTE 1
//1. Escribe una función asíncrona 'loadNPause' que recree la pregunta 1, esta vez
//usando async / await (solo la parte donde se consume la promesa, reutilice la
//función 'createImage' que escribió antes)
const loadNPause = async () => {
    return 'imgs/img-1.jpg';
  }
  loadNPause().then((resultado) => console.log(resultado));
  
  const createImage = async () => {
    return Promise.resolve('imgs/img-1.jpg');
  }
  
  createImage().then((resultado) => console.log(resultado));



//PARTE 2
//1. Cree una función asíncrona 'loadAll' que reciba un array de rutas de imagen
//'imgArr'

