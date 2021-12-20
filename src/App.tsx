import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { AddHomes } from "./pages/AddHomes/AddHomes";
import { Home } from "./pages/Home/Home";
import { House } from "./pages/House/House";
import { Market } from "./pages/Market/Market";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<Market />} />
        <Route path="/add" element={<AddHomes />} />
        <Route path="/houses/:id" element={<House />} />
      </Routes>
    </div>
  );
}

export default App;
