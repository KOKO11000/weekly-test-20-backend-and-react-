import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import Seats from "./Pages/Seats";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/seats" element={<Seats />} />
      </Routes>
    </div>
  );
}

export default App;
