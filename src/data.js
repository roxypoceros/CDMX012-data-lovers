// estas funciones son de ejemplo
// controlar toda la logica del programa 

//manipulacion del DOM template string
export let mostrarFilm = (film) => {
  return `<img src="${film.poster}">
          <h2>${film.title}</h2>
          <h3>${film.director}</h3>
          <h3>${film.producer}</h3>
          <h3>${film.release_date}</h3>`
}


/*let filmsGhibli = films.map(function recorrer (elemento){ 
return (elemento.title)
})*/

/*films.forEach (function recorrerTitle (elemento) {
  console.log (elemento.title)
  });*/
