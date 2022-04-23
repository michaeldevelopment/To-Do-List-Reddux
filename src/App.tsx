import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/styles.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
