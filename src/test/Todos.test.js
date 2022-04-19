import RouterMock from "../mocks/RouterMock";
import ReduxProvider from "../mocks/ReduxProvider";
import Todos from "../Components/Todos";
import allTodos from "../mocks/allTodos";
import Home from "../Pages/Home";
import { mount } from "enzyme";

describe("<Todos /> Component", () => {
  const wrapper = mount(
    <ReduxProvider>
      <RouterMock>
        <Home />
      </RouterMock>
    </ReduxProvider>
  );

  const TodosComponent = wrapper.find(Todos);

  it("Check if Todo Items are rendering inside a div with the their correct length", () => {
    expect(
      TodosComponent.find("ul").find("li").find("span").children()
    ).toHaveLength(allTodos.length);
  });

  it.only("Check correct names of todoItems", () => {
    TodosComponent.find("span").forEach((container, index) => {
      expect(container.text()).toBe(allTodos[index].name);
    });
  });
});
