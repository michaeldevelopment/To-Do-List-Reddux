import RouterMock from "../mocks/RouterMock";
import ReduxProvider from "../mocks/ReduxProvider";

import Todos from "../Components/Todos";
import TodosCompleted from "../Components/TodosCompleted";
import Home from "../Pages/Home";

import Form from "react-bootstrap/Form";

import { mount } from "enzyme";

describe("Handling Events", () => {
  const wrapper = mount(
    <ReduxProvider>
      <RouterMock>
        <Home />
      </RouterMock>
    </ReduxProvider>
  );

  const inputValue = "New Task";

  const fakeEvent = { preventDefault: jest.fn() };

  it("Adding a new todo", () => {
    wrapper
      .find(Form)
      .find(Form.Control)
      .simulate("change", { target: { value: inputValue } })
      .simulate("submit", fakeEvent);

    const toDos = wrapper.find("span");

    console.log(wrapper.debug());

    expect(toDos.at(toDos.length - 1).text()).toBe(inputValue);
  });

  it("Delete a todo", () => {
    const toDosButtons = wrapper.find("button");

    toDosButtons.at(toDosButtons.length - 1).simulate("click");

    console.log(wrapper.debug());

    expect(wrapper.find("span").length).toBe(2);
    expect(
      wrapper
        .find("span")
        .at(wrapper.find("span").length - 1)
        .text()
    ).toBe("Buy bread");
    expect(
      wrapper.find("span").at(wrapper.find("span").length).exists()
    ).toBeFalsy();
  });

  it("Adding a new todo to todosCompleted", () => {
    wrapper
      .find(Todos)
      .find({ type: "checkbox" })
      .at(0)
      .simulate("change", { target: { checked: true } });

    expect(wrapper.find(TodosCompleted).find("li").length).toBe(1);
    expect(wrapper.find(TodosCompleted).find("li").at(0).text()).toBe(
      "Buy milk"
    );
  });

  it.only("Check if a task is deleted in Todos and TodosCompleted components", () => {
    wrapper
      .find(Todos)
      .find({ type: "checkbox" })
      .at(0)
      .simulate("change", { target: { checked: true } });

    wrapper.find(Todos).find("button").at(0).simulate("click");

    expect(wrapper.find("span").length).toBe(2);
    expect(wrapper.find(TodosCompleted).find("li").length).toBe(0);

    expect(wrapper.find("span").at(0).text()).toBe("Buy bread");
    expect(wrapper.find(TodosCompleted).find("p").text()).toBe(
      "Hurry up and finish your tasks lazy!"
    );
  });
});
