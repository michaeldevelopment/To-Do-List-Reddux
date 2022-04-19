import RouterMock from "../mocks/RouterMock";
import ReduxProvider from "../mocks/ReduxProvider";
import TodosCompleted from "../Components/TodosCompleted";
import LazyGirl from "../images/lazy.gif";
import Home from "../Pages/Home";
import { mount } from "enzyme";

describe("<TodosCompleted  /> Component", () => {
  const wrapper = mount(
    <ReduxProvider>
      <RouterMock>
        <Home />
      </RouterMock>
    </ReduxProvider>
  );

  const TodosCompletedComponent = wrapper.find(TodosCompleted);

  it("Checking text tags", () => {
    expect(TodosCompletedComponent.find("p").text()).toBe(
      "Hurry up and finish your tasks lazy!"
    );

    expect(TodosCompletedComponent.find("h3").text()).toBe("Tasks Completed");
  });

  it("Checking if img tag exists", () => {
    expect(TodosCompletedComponent.find("img").exists()).toBeTruthy();

    expect(TodosCompletedComponent.find("img").prop("src")).toBe(LazyGirl);
  });
});
