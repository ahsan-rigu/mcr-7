import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Continents from "./pages/Continents";
import Continent from "./pages/Continent";
import Country from "./pages/Country";
import Location from "./pages/Location";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Continents />} />
        <Route path="/continent/:continent" element={<Continent />} />
        <Route path="/:continent/:country" element={<Country />} />
        <Route path="/:continent/:country/:location" element={<Location />} />
      </Routes>
    </div>
  );
}

export default App;
