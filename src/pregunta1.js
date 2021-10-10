"use strict";

// La solucion de la pregunta 1 va aqui

//PARTE 1
//1. Cree una función 'createImage' que reciba 'imgPath' como entrada. Esta
//función devuelve una promesa que crea una nueva imagen (use
//document.createElement('img')) y establece el atributo ‘.src’ en el ruta de la
//imagen proporcionada
let imgl;

let createImage = function (imgPath) {
var img1= new Image(); 
imgl.src='imgs/img-1.png';
imgl.alt='alt';
document.body.appendChild(img1);

var img2= document.createElement('img'); 
img2.src='imgs/img-2.jpg';
img2.alt='alt text';
document.body.appendChild(img2);
};

//2. Cuando la imagen haya terminado de cargarse, agréguela al elemento DOM
//con la clase 'images' y resuelva la promesa. El valor resuelto debe ser el
//elemento de la imagen en cuestión. En caso de que haya un error al cargar la
//imagen (escuche el evento 'error'), rechace la promesa.

function create(src) {
  return new Promise(function(resolve, reject) {
      let img = new Image();
      img.src = src;
      img.onload = function() { resolve(img); }
      img.onerror = function() { 
          reject(new Error("Error al cargar la imagen: " + img.src)); 
      }
      for (const i = 0; i < 1000000; i++) {
        let img = document.createElement("img");
      };
  });
};


//PARTE 2
//3. Consuma la promesa usando ‘.then’ y también controle los errores.
function loadImg(src){
const  promesa = loadImg("imgs/img-1.jpg");
promesa.then(
    function(img) { 
        document.write("Tamaño: " + img.width + "x" + img.height); 
        document.close();
    },
    function(error) { 
        document.write(error.message); 
        document.close();
    }
);
  };

//4. Una vez que se haya cargado la imagen, pause la ejecución durante 2
//segundos usando temporizadores.

//5. Una vez transcurridos los 2 segundos, oculte la imagen actual (configure la
//propiedad ‘display’ de CSS a 'none'), y cargue una segunda imagen.

function verform()
{
//document.getElementById("frm").style.visibility="visible";
 
document.getElementById("img").style.visibility="hidden";
 
}

//6. Una vez que se haya cargado la segunda imagen, vuelva a pausar la ejecución
//durante 2 segundos.



//7. Una vez transcurridos los 2 segundos, oculte la imagen actual.
function ready(element) {
  
  return new Promise(function(resolve, reject) {
    
    element.addEventListener('onload', function() {
      resolve()
    })

    element.addEventListener('onerror', function(err) {
      reject('There was an error')
    })

    // timeout en 1s
    setTimeout(function(){
      reject('Something must be wrong, try again or fallback to something else')
    }, 1000)

  })
}

ready("imgs/image")
  .then(function() {
    // Imagen cargada correctamente
  })
  .catch(function() {
    // Hubo un error, mostrar mensaje o cargar imagen por defecto...
  })