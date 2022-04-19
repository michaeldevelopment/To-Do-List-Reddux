import { createBrowserHistory } from "history";
import { BrowserRouter } from "react-router-dom";

const history = createBrowserHistory();

const RouterMock = ({ children }) => {
  return <BrowserRouter history={history}>{children}</BrowserRouter>;
};

export default RouterMock;
