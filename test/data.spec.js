import { filtroDirectores, mostrarFilm } from "../src/data.js";
import { data} from "../src/data/ghibli/ghibli.js";


describe('Todas las peliculas en pantalla', () => {
  it('Comprobar que es una función', () => {
    expect(typeof mostrarFilm).toBe('function');
  });

  describe('filtroDirectores', () => {
    it('Comprobar que es una función', () => {
      expect(typeof filtroDirectores).toBe('function');
    });

});
    let director = [
      {
        director: 'Hayao Miyazaki',
      },
      {
        director: 'Isao Takahata',
      },
      {
        director: 'Yoshifumi Kondō',
      },
    ];
    
      describe('filtro por director', () => {
      test('Filtro Directores', () => {
        expect  (data.array (filtroDirectores('Hayao Miyazaki', director).length).toStrictEqual(director));
      
      });
    });
  });