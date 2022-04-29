import Home from "./Pages/Home";
import Focus from "./Pages/Focus";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/styles.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/focus" element={<Focus />} />
      </Routes>
    </Router>
  );
}

export default App;
