import { it } from 'eslint/lib/rule-tester/rule-tester';
import { filtroDirectores, 
          mostrarFilm,
          filtroProductores,
          filtroFecha,
          ordenarAlfabeticamente,
          visualizarPeli,
          buscador } from '../src/data.js';
//import data from '../src/data/ghibli/ghibli.js';



describe('Todas las peliculas en pantalla', () => {
  it('Comprobar que es una función', () => {
    expect(typeof mostrarFilm).toBe('function');
  });

  let films= [
    {
      id: '2baf70d1-42bb-4437-b551-e5fed5a87abe',
      title: 'Castle in the Sky',
      director: 'Hayao Miyazaki',
      producer: 'Isao Takahata',
      poster: 'https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg',
      release_date: '1986',
    },
    
  ];  
    describe('Filtro para mostrar films', () => {
    test('Filtro Mostrar en pantalla films', () => {
      expect (mostrarFilm (films))
      
    });
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
     
    ];
    
      describe('Filtro por director', () => {
      test('Filtro Directores', () => {
        expect (filtroDirectores (director, 'Hayao Miyazaki')).toHaveLength(1)
      });
     test ('Prueba segunda filtro por director', () => {
      expect (filtroDirectores (director, 'Isao Takahata')).toEqual([{director:'Isao Takahata'}])
      } )

    });

  let producer = [
    {
      producer: 'Toshio Suzuki',
    },
    {
      producer: 'Toru Hara',
    },
    
  ];
  
    describe('Filtro por Productor', () => {
    test('Filtro Productor', () => {
      expect (filtroProductores (producer, 'Toshio Suzuki')).toHaveLength(1)
    });
   test ('Prueba segunda filtro por Productor', () => {
    expect (filtroProductores (producer, 'Toru Hara')).toEqual([{producer:'Toru Hara'}])
    } )

  });

  let  release_date = [
    {
      release_date: '1986',
    },
    {
      release_date: '1994',
    },
    
  ];
  
    describe('Filtro por Fecha', () => {
    test('Filtro Fecha', () => {
      expect (filtroFecha (release_date, '1986')).toHaveLength(1)
    });
   test ('Prueba segunda filtro fecha', () => {
    expect (filtroFecha (release_date, '1994')).toEqual([{release_date:'1994'}])
    } )

  });

  
  
    describe('Filtro por Orden Alfabetico', () => {
    test('Filtro A-Z', () => {
      const orden1 = [{'title': 'Castle in the Sky'}, {'title': 'My Neighbor Totoro'},{'title': 'Grave of the Fireflies'}];
      const orden2 = [{'title': 'Castle in the Sky'}, {'title': 'Grave of the Fireflies'}, {'title': 'My Neighbor Totoro'}];
    expect(ordenarAlfabeticamente(orden1,'Castle in the Sky')).toStrictEqual(orden2, 'Castle in the Sky');
     
    });
    test('Filtro Z-A', () => {
      const orden1 = [{'title': 'Castle in the Sky'}, {'title': 'My Neighbor Totoro'},{'title': 'Porco Rosso'}];
      const orden2 = [{'title': 'Porco Rosso'}, {'title': 'My Neighbor Totoro'}, {'title': 'Castle in the Sky' }];
    expect(ordenarAlfabeticamente(orden2, 'Porco Rosso')).toEqual(orden1, 'Porco Rosso');
    });
  });

  let  id = [
    {
      id: '2baf70d1-42bb-4437-b551-e5fed5a87abe',
    },
    {
      id: '58611129-2dbc-4a81-a72f-77ddfc1b1b49',
    },
    
  ];
  
    describe('Filtro por Id', () => {
    test('Filtro ID', () => {
      expect (visualizarPeli (id, '2baf70d1-42bb-4437-b551-e5fed5a87abe')).toHaveLength(1)
    });
   test ('Filtro ID HU2', () => {
    expect (visualizarPeli (id, '58611129-2dbc-4a81-a72f-77ddfc1b1b49')).toEqual([{id:'58611129-2dbc-4a81-a72f-77ddfc1b1b49'}])
    })
  });

  describe('buscador', () => {
    it('Función de Buscador', () => {
      expect(typeof buscador).toBe('function');
    });

    let  films = [
      {
        title: 'My Neighbor Totoro',
      },
      {
        title: 'Castle in the Sky',
      },
      
    ];
    it('totoro busqueda tot', () => {
      expect(buscador(films, 'title','Totoro')).toEqual([{title:'My Neighbor Totoro'}])
    });
});
});