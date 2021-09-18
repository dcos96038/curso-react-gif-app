import { GifGrid } from "../../components/GifGrid";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Pruebas en el componente GifGrid", () => {
  test("El componente debe renderizar correctamente", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category="messi" />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar la misma cantidad de componentes GifGridItem que gifs obtenidos por useFetchGifs", () => {
    const gifs = [
      {
        id: "123",
        url: "https://asd.com/img.jpg",
        title: "hola",
      },
      {
        id: "456",
        url: "https://asd.com/img.jpg",
        title: "asd",
      },
    ];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category="messi" />);

    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
