

import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

let button = document.getElementById('btn-validar');
let inputText = document.getElementById('caja-texto');
let container = document.getElementById('container');
let htmlCode = "";

button.addEventListener('click', function (event) {



});

document.addEventListener("DOMContentLoaded", function (event) {


  let pokemones = data.pokemon;  // arreglo de todos los pokemones

  pokemones.forEach(function (element) {  // recorrido arreglo con foreach

    
    htmlCode = htmlCode +

      "<div class=\"card\">" +
      "<img src=\"" + element.img + "\">" +
      "<div class=\"contenido\">" +
      "<h3>" + element.name + "</h3>" +
      "<p><b> Generación: </b> num" +
      "<p><b> Tamaño</b> 0.71 m.</p>" +
      "<p><b> Peso:</b>6.9 kg</p>" +
      "<p><b> Tipo:</b></p>" +
      "</p>" +
      "</div>" +
      "</div>";




  });
  
  container.innerHTML = htmlCode; //insertar cogio html desde js

})






