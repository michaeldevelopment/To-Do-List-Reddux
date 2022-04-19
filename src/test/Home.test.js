import RouterMock from "../mocks/RouterMock";
import ReduxProvider from "../mocks/ReduxProvider";
import Todos from "../Components/Todos";
import TodoForm from "../Components/TodoForm";
import TodosCompleted from "../Components/TodosCompleted";
import Container from "react-bootstrap/Container";
import Home from "../Pages/Home";
import { mount } from "enzyme";

describe("<Home /> Page", () => {
  const wrapper = mount(
    <ReduxProvider>
      <RouterMock>
        <Home />
      </RouterMock>
    </ReduxProvider>
  );
  it("Check whether all the Components renders in Home Page", () => {
    expect(wrapper.find(Todos).exists()).toBeTruthy();
    expect(wrapper.find(TodoForm).exists()).toBeTruthy();
    expect(wrapper.find(TodosCompleted).exists()).toBeTruthy();
  });

  it("Check whether Components are inside of a Container", () => {
    const container = wrapper.find(Container);
    expect(container.find(Todos).parent().is("div")).toBe(true);
    expect(container.find(TodoForm).parent().is("div")).toBe(true);
    expect(container.find(TodosCompleted).parent().is("div")).toBe(true);

    // Testeando el atributo -length- tambien se puede conocer si el componente esta dentro de otro o renderizado.
    // expect(container.find(Todos).length).toEqual(1);
  });

  it.only("Check if h3 tag exists -ToDo List with Redux- ", () => {
    expect(wrapper.find("h3").at(0).text()).toBe("ToDo List with Redux");
  });
});
