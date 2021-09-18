import { AddCategory } from "../../components/AddCategory";
import { shallow } from "enzyme";

describe("Pruebas en el componente AddCategory", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("El componente debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe cambiar el valor del inputValue si la longitud del texto ingresado es mayor a 2", () => {
    const input = wrapper.find("input");
    const valueTest = "Hola mundo";

    input.simulate("change", {
      target: {
        value: valueTest,
      },
    });

    expect(wrapper.find("p").text().trim()).toBe(valueTest);
  });

  test("No se debe llamar a la funcion setCategories si no hay un string en el input", () => {
    const form = wrapper.find("form");
    form.simulate("submit", { preventDefault() {} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test("Debe llamar a setCategory y limpiar el input", () => {
    const valueTest = "Hola mundo";

    wrapper.find("input").simulate("change", { target: { value: valueTest } });

    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(wrapper.find("input").prop("value").trim()).toBe("");
  });
});
