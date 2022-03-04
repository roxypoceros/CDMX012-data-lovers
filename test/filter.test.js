
import { filtroDirectores } from "../src/data.js";
import { data} from "./data/ghibli/ghibli.js";



describe('Todas las peliculas en pantalla', ()=>{
    test('Comprobar que es una funcion', ()=>{
        expect(typeof filtroDirectores).toBe('function');
    })
})

describe("filtroDirectores", () => {
    it("is a function", () => {
      expect(typeof filtroDirectores).toBe("function");
    });
    const filtroDirectores = [
      {
        tags: ["Hayao Miyazaki", "Isao Takahata", "Yoshifumi Kondō"],
      },
      {
        tags: ["Hayao Miyazaki", "Isao Takahata"],
      },
      {
        tags: ["Hayao Miyazaki"],
      },
      {
        tags: ["otra cosa"],
      },
    ];
    it("filtra por Director Hayao Miyazaki", () => {
        const result = filtroDirectores(data, "Hayao Miyazaki");
        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBe(3);
      });
      it("filtra por Director Isao Takahata", () => {
        const result = filtroDirectores(data, "Isao Takahata");
        expect(result.length).toBe(2);
      });
    });