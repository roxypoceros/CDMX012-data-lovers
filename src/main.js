// import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

// Ser la salida y la manipulacion del DOM

import data from "./data/ghibli/ghibli.js";
import { mostrarFilm } from "./data.js";
import { filtroDirectores } from "./data.js";
import { filtroProductores } from "./data.js";
import { filtroFecha } from "./data.js";
import { ordenarAlfabeticamente  } from "./data.js";
import { buscador } from "./data.js";


const films = data.films;
let director = "";
let producer = "";
let release_date = "";
let todosFilms = films;


//Imprime en el HTML la data de las 20 peliculas del Studio Ghibli
const allFilms = document.getElementById("allFilms");
allFilms.innerHTML = data.films.map(mostrarFilm).join(" ");

//Filtrado por director
const filtrarDirector = document.querySelector("#filtrarDirector");
filtrarDirector.addEventListener("change", () => {
  director = document.querySelector("#filtrarDirector").value;
  //console.log (filtroDirectores (films,director))
  const allFilms = document.getElementById("allFilms");
  allFilms.innerHTML = " ";

  for (let i = 0; i < filtroDirectores(films, director).length; i++) {
    //console.log(filtroDirectores(films,director)[i])
    let peliDirectores = `<article class = "peli">
          <img src="${filtroDirectores(films, director)[i].poster}">
          <h2> ${filtroDirectores(films, director)[i].title}</h2>
          <h3>Director: ${filtroDirectores(films, director)[i].director}</h3>
          <h3>Producer: ${filtroDirectores(films, director)[i].producer}</h3>
          <h3>${filtroDirectores(films, director)[i].release_date} </h3>
          </article>`;
    /* html += peliDirectores;*/
    allFilms.innerHTML += peliDirectores;
  }
});

//Filtrado por productor
const filtrarProductor = document.querySelector("#filtrarProductor");
filtrarProductor.addEventListener("change", () => {
  producer = document.querySelector("#filtrarProductor").value;
  //console.log (filtroProductores (films,producer))
  const allFilms = document.getElementById("allFilms");
  allFilms.innerHTML = " ";

  for (let i = 0; i < filtroProductores(films, producer).length; i++) {
    // console.log(filtroDirectores(films,producer)[i])
    let peliProductores = `<article class = "peli">
          <img src="${filtroProductores(films, producer)[i].poster}">
          <h2> ${filtroProductores(films, producer)[i].title}</h2>
          <h3>Director: ${filtroProductores(films, producer)[i].director}</h3>
          <h3>Producer: ${filtroProductores(films, producer)[i].producer}</h3>
          <h3>${filtroProductores(films, producer)[i].release_date} </h3>
          </article>`;
    /* html += peliDirectores;*/
    allFilms.innerHTML += peliProductores;
  }
});

//Filtrado por fecha
const filtrarFecha = document.querySelector("#filtrarFecha");
filtrarFecha.addEventListener("change", () => {
  release_date = document.querySelector("#filtrarFecha").value;
  //console.log (filtroProductores (films,producer))
  const allFilms = document.getElementById("allFilms");
  allFilms.innerHTML = " ";

  for (let i = 0; i < filtroFecha(films, release_date).length; i++) {
    // console.log(filtroDirectores(films,producer)[i])
    let peliFecha = `<article class = "peli">
          <img src="${filtroFecha(films, release_date)[i].poster}">
          <h2> ${filtroFecha(films, release_date)[i].title}</h2>
          <h3>Director: ${filtroFecha(films, release_date)[i].director}</h3>
          <h3>Producer: ${filtroFecha(films, release_date)[i].producer}</h3>
          <h3>${filtroFecha(films, release_date)[i].release_date} </h3>
          </article>`;
    /* html += peliDirectores;*/
    allFilms.innerHTML += peliFecha;
  }
});

//Filtrado por Orden AZ
const filtroAZ = document.querySelector('#filtroAZ');
filtroAZ.addEventListener('change', () => {
  allFilms.innerHTML = '';

  for (let i = 0; i < ordenarAlfabeticamente(films,filtroAZ.value).length; i++) {
    // console.log(filtroDirectores(films,producer)[i])
    let peliOrden = `<article class = "peli">
          <img src="${ordenarAlfabeticamente(films,filtroAZ.value)[i].poster}">
          <h2> ${ordenarAlfabeticamente(films,filtroAZ.value)[i].title}</h2>
          <h3>Director: ${ordenarAlfabeticamente(films,filtroAZ.value)[i].director}</h3>
          <h3>Producer: ${ordenarAlfabeticamente(films,filtroAZ.value)[i].producer}</h3>
          <h3>${ordenarAlfabeticamente(films,filtroAZ.value)[i].release_date} </h3>
          </article>`;
    /* html += peliDirectores;*/
    allFilms.innerHTML += peliOrden;
  }
  //allFilms.innerHTML= ordenarAlfabeticamente(films,filtroAZ.value);
});

//Buscador
const inputBuscador = document.getElementById("inputBuscador");
inputBuscador.addEventListener('keyup',() =>{

   todosFilms = buscador(films, 'title', inputBuscador.value);
   allFilms.innerHTML = todosFilms.map(mostrarFilm).join(" ");


});