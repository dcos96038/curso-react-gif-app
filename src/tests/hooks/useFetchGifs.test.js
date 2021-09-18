import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe("Pruebas del custom hook useFetchGifs", () => {
  test("Debe retornar el estado inicial", async () => {
    // const { data, loading } = useFetchGifs('messi');
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs(""));
    const { data, loading } = result.current;
    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toEqual(true);
  });

  test("Debe retornar un arreglo de 10 gifs y el loading en false", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("messi")
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;
    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
});
