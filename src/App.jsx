import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import "./styles/components/app.sass";

function App() {
  return (
    <div id="portfolio">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
