import { getGifs } from "../../helpers/getGifs";

describe("Pruebas en el helper getGifs", () => {
  test("Debe traer 10 elementos", async () => {
    const gifs = await getGifs("messi");

    expect(gifs.length).toBe(10);
  });

  test("Al enviar por parametro un string vacio debe devolver un arreglo vacio", async () => {
    const gifs = await getGifs("");

    expect(gifs.length).toBe(0);
  });
});
