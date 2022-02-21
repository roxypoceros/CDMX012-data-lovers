// estas funciones son de ejemplo
// controlar toda la logica del programa 
//manipulacion del DOM template string
export let mostrarFilm = (film) => {
  return `<article class = "peli">
          <img src="${film.poster}">
          <h2> ${film.title}</h2>
          <h3>Director: ${film.director}</h3>
          <h3>Producer: ${film.producer}</h3>
          <h3>${film.release_date} </h3>
          </article>`
};


//Funcion del select por director
export let filtroDirectores = (films,director) => {
  const arrayDirector = films.filter(film => film.director == director);
  return arrayDirector; 
};