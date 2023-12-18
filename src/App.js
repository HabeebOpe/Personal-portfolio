import './App.css';
import Section from "./Section.js";
import Form from "./Form.js";
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Section />} />
        <Route path="form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
