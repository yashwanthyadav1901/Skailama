import "./App.css";
import Homepage from "./pages/Homepage";
import ProjectScreen from "./pages/ProjectScreen";
import Projects from "./pages/Projects";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/id" element={<ProjectScreen />} />
    </Routes>
  );
}

export default App;
