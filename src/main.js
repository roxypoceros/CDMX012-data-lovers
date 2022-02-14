// import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

// Ser la salida y la manipulacion del DOM

import data from './data/ghibli/ghibli.js';
import { mostrarFilm } from './data.js';


const allFilms = document.getElementById("allFilms");
allFilms.innerHTML= data.films.map (mostrarFilm).join(" ")


//const pelicula= document.getElementById('pelicula');
//pelicula.innerHTML=example("en un futuro eso sera la data")

