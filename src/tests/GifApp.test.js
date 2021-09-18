import { shallow } from "enzyme";
import { GifApp } from "../GifApp";

describe("Pruebas en el componente GifApp", () => {
  test("El componente debe mostrarse correctamente", () => {
    const wrapper = shallow(<GifApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test("El componente GifGrid debe aparecer en una cantidad igual a la longitud de la lista de categorias", () => {
    const categories = ["messi", "ronaldo"];
    const wrapper = shallow(<GifApp defaultCategories={categories} />);

    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
