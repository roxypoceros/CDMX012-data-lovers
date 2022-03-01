// import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

// Ser la salida y la manipulacion del DOM

import data from "./data/ghibli/ghibli.js";
import { mostrarFilm } from "./data.js";
import { filtroDirectores } from "./data.js";
import { filtroProductores } from "./data.js";
import { filtroFecha } from "./data.js";
import { ordenarAlfabeticamente } from "./data.js";
import { buscador } from "./data.js";
import { visualizarPeli } from "./data.js";
//import { visualizarPersonaje } from "./data.js";

const films = data.films;
let director = "";
let producer = "";
let release_date = "";
let todosFilms = films;

//Imprime en el HTML la data de las 20 peliculas del Studio Ghibli
const allFilms = document.getElementById("allFilms");
allFilms.innerHTML = films.map(mostrarFilm).join(" ");

//Filtrado por director
const filtrarDirector = document.querySelector("#filtrarDirector");
filtrarDirector.addEventListener("change", () => {
  director = document.querySelector("#filtrarDirector").value;
  //console.log (filtroDirectores (films,director))
  const allFilms = document.getElementById("allFilms");
  allFilms.innerHTML = " ";

  for (let i = 0; i < filtroDirectores(films, director).length; i++) {
    //console.log(filtroDirectores(films,director)[i])
    let peliDirectores = `<section class = "peli">
          <img src="${filtroDirectores(films, director)[i].poster}">
          <h2> ${filtroDirectores(films, director)[i].title}</h2>
          <h3>Director: ${filtroDirectores(films, director)[i].director}</h3>
          <h3>Producer: ${filtroDirectores(films, director)[i].producer}</h3>
          <h3>${filtroDirectores(films, director)[i].release_date} </h3>
          </section>`;
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
    let peliProductores = `<section class = "peli">
          <img src="${filtroProductores(films, producer)[i].poster}">
          <h2> ${filtroProductores(films, producer)[i].title}</h2>
          <h3>Director: ${filtroProductores(films, producer)[i].director}</h3>
          <h3>Producer: ${filtroProductores(films, producer)[i].producer}</h3>
          <h3>${filtroProductores(films, producer)[i].release_date} </h3>
          </section>`;
    allFilms.innerHTML += peliProductores;
  }
});

//Filtrado por fecha
const filtrarFecha = document.querySelector("#filtrarFecha");
filtrarFecha.addEventListener("change", () => {
  release_date = document.querySelector("#filtrarFecha").value;
  const allFilms = document.getElementById("allFilms");
  allFilms.innerHTML = " ";

  for (let i = 0; i < filtroFecha(films, release_date).length; i++) {
    let peliFecha = `<section class = "peli">
          <img src="${filtroFecha(films, release_date)[i].poster}">
          <h2> ${filtroFecha(films, release_date)[i].title}</h2>
          <h3>Director: ${filtroFecha(films, release_date)[i].director}</h3>
          <h3>Producer: ${filtroFecha(films, release_date)[i].producer}</h3>
          <h3>${filtroFecha(films, release_date)[i].release_date} </h3>
          </section>`;
    allFilms.innerHTML += peliFecha;
  }
});

//Filtrado por Orden AZ
const filtroAZ = document.querySelector("#filtroAZ");
filtroAZ.addEventListener("change", () => {
  allFilms.innerHTML = "";
  for (let i = 0; i < ordenarAlfabeticamente(films, filtroAZ.value).length; i++) {
    let peliOrden = `<section class = "peli">
          <img src="${ordenarAlfabeticamente(films, filtroAZ.value)[i].poster}">
          <h2> ${ordenarAlfabeticamente(films, filtroAZ.value)[i].title}</h2>
          <h3>Director: ${ordenarAlfabeticamente(films, filtroAZ.value)[i].director}</h3>
          <h3>Producer: ${ordenarAlfabeticamente(films, filtroAZ.value)[i].producer}</h3>
          <h3>${ordenarAlfabeticamente(films, filtroAZ.value)[i].release_date}</h3>
          </section>`;
    allFilms.innerHTML += peliOrden;
  }
});

//Buscador
const inputBuscador = document.getElementById("inputBuscador");
inputBuscador.addEventListener("keyup", () => {
  todosFilms = buscador(films, "title", inputBuscador.value);
  allFilms.innerHTML = todosFilms.map(mostrarFilm).join(" ");
});

//Limpia pantalla
let contenedorGeneralPeli = document.getElementById("contenedorGeneralPeli");
const contenedorItemCarrusel = document.getElementById(
  "contenedorItemCarrusel"
);
const textoStudioGhibli = document.getElementById("textoStudioGhibli");
const seccionBuscador = document.getElementById("seccionBuscador");
const seccionFiltrado = document.getElementById("seccionFiltrado");

document.querySelectorAll(".peli").forEach((el) => {
  el.addEventListener("click", (e) => {
    const id = e.target.getAttribute("id");

    contenedorItemCarrusel.style.display = "none";
    contenedorGeneralPeli.style.display = "flex";
    allFilms.style.display = "none";
    seccionBuscador.style.display = "none";
    textoStudioGhibli.style.display = "none";
    seccionFiltrado.style.display = "none";

    //Muestra en pantalla sinopsis
    const selectPeli = document.getElementById("selectPeli");
    selectPeli.innerHTML = " ";

    for (let i = 0; i < visualizarPeli(films, id).length; i++) {
      let peliActual = visualizarPeli(films, id)[i]; //Se guarda la posición de la pelicula por ID
      //console.table(peliActual)
      let peliGeneral = `<section id="${id}">
          <section class="sinopsisPoster">
          <img src="${visualizarPeli(films, id)[i].poster}" class="posterPeli">
          </section>
          <section class="sinopsisTitulo">
          <h2> ${visualizarPeli(films, id)[i].title}</h2>
          <h3> ${visualizarPeli(films, id)[i].description}</h3>
          </section>
          </section>`;
      selectPeli.innerHTML += peliGeneral;

      //Muestra en pantalla personajes
      const selectPersonajes = document.getElementById("selectPersonajes");
      let nuevaGente = peliActual.people;//Te toma la posision de la pelicula y el arreglo de personajes 
      console.table(nuevaGente);
      for (let i = 0; i < nuevaGente.length; i++) {
        let peliPersonajes = `<section id="${id}" >
      <img src="${nuevaGente[i].img}" class="posterPeli">
      <h2>Name: ${nuevaGente[i].name}</h2>
      <h2>Gender: ${nuevaGente[i].gender}</h2>
      <h2>Age: ${nuevaGente[i].age}</h2>
      </section>`;
        selectPersonajes.innerHTML += peliPersonajes;
      }

      //Muestra en pantalla locaciones
      const selectLocaciones = document.getElementById("selectLocaciones");
      let nuevaLocacion = peliActual.locations;
      for (let i = 0; i < nuevaLocacion.length; i++) {
        let peliLocacion = `<section id="${id}" >
      <img src="${nuevaLocacion[i].img}" class="posterPeli">
      <h2> ${nuevaLocacion[i].name}</h2>
      </section>`;
        selectLocaciones.innerHTML += peliLocacion;
      }

      //Muestra en pantalla vehiculos
      const selectVehiculos = document.getElementById("selectVehiculos");
      let nuevoVehiculo = peliActual.vehicles;
      for (let i = 0; i < nuevoVehiculo.length; i++) {
        let peliVehiculo = `<section id="${id}">
      <img src="${nuevoVehiculo[i].img}" class="posterPeli">
      <h2> ${nuevoVehiculo[i].name}</h2>
      </section>`;
        selectVehiculos.innerHTML += peliVehiculo;
      }
    }
  });
});

//Graficar
const grafica = document.querySelector('#myChart');
const graficaTop = (films,rt_score) => {
   const arrayTop= films.sort((film1, film2) => ((film1.rt_score > film2.rt_score) ? 1 : -1));
   console.table(arrayTop) 
  if(rt_score == '90-100'){
     return arrayTop;
    }
}

/* const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          y: {
              beginAtZero: true
          }
      }
  }
});
 */