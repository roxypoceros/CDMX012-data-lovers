// estas funciones son de ejemplo
// controlar toda la logica del programa
//manipulacion del DOM template string
export let mostrarFilm = (film) => {
  return `<article class = "peli">
          <img src="${film.poster}" class="poster">
          <h2> ${film.title}</h2>
          <h3>Director: ${film.director}</h3>
          <h3>Producer: ${film.producer}</h3>
          <h3>${film.release_date} </h3>
          </article>`;
};

//Funcion del select por director
export let filtroDirectores = (films, director) => {
  const arrayDirector = films.filter((film) => film.director == director);
  return arrayDirector;
};

//Funcion del select por productor
export let filtroProductores = (films, producer) => {
  const arrayProductor = films.filter((film) => film.producer == producer);
  return arrayProductor;
};

//Funcion del select por año
export let filtroFecha = (films, release_date) => {
  const arrayFecha = films.filter((film) => film.release_date == release_date);
  return arrayFecha;
};

//Orden por letras de pelicula A-Z -- Z-A
export const ordenarAlfabeticamente = (films, orden) => {
  const ordenarDeAZ = films.sort((film1, film2) => ((film1.title > film2.title) ? 1 : -1));
  if (orden === 'A-Z') {
  //console.table(ordenarDeAZ);
    return ordenarDeAZ;
  }
  if (orden === 'Z-A') {
    return ordenarDeAZ.reverse();
  }
  return ordenarDeAZ;
};

//Buscador
export const buscador = (films, condition, value) => {
  //console.log(value);
  return films.filter(elemento => elemento[condition].toLowerCase().includes(value.toLowerCase()));
}