import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
