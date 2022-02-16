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

export let mostrarDirector = (films)  => {

  return `<option>${films.director}</option>`;
/*films.forEach(element => {
  console.log(element.director);
});*/

}
