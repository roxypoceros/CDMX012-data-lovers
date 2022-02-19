// import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

// Ser la salida y la manipulacion del DOM

import data from './data/ghibli/ghibli.js';
import { mostrarFilm } from './data.js';
import { filtroDirectores } from './data.js';

const films = data.films;
let director = "";
let html = ` ` ;

//Imprime en el HTML la data de las 20 peliculas del Studio Ghibli
const allFilms = document.getElementById("allFilms");
allFilms.innerHTML= data.films.map (mostrarFilm).join(" ");

//Filtrado por director
document.querySelector('#filtrarDirector').addEventListener('change', () =>{
director = document.querySelector('#filtrarDirector').value; 
const allFilms = document.getElementById("allFilms");
for(let i=0; i<filtroDirectores(films,director).length; i++){
  console.log(filtroDirectores(films,director)[i])
      let peliDirectores = `<article class = "peli">
          <img src="${filtroDirectores(films,director)[i].poster}">
          <h2> ${filtroDirectores(films,director)[i].title}</h2>
          <h3>Director: ${filtroDirectores(films,director)[i].director}</h3>
          <h3>Producer: ${filtroDirectores(films,director)[i].producer}</h3>
          <h3>${filtroDirectores(films,director)[i].release_date} </h3>
          </article>`
          html += peliDirectores;
}
allFilms.innerHTML= html

//console.log(html)
//console.log(allFilms)
//console.log(director)
//console.log (filtroDirectores (films,director))
 
})




