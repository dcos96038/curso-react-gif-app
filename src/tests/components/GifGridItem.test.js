import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Pruebas en el componente GifGridItem", () => {
  const title = "gif";
  const url =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Lionel_Messi_20180626.jpg/245px-Lionel_Messi_20180626.jpg";

  let wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("Se debe mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe existir un parrafo en el componente", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  describe("Las propiedades de la imagen debe ser igual a los props", () => {
    const img = wrapper.find("img");

    test("La propiedad src debe ser igual a la url que se pasa por Props", () => {
      expect(img.prop("src")).toBe(url);
    });

    test("La propiedad alt debe ser igual al titulo que se pasa por props", () => {
      expect(img.prop("alt")).toBe(title);
    });
  });

  test("El div debe tener la clase animate__fadeIn", () => {
    const div = wrapper.find("div");

    expect(div.hasClass("animate__fadeIn")).toBe(true);
  });
});
