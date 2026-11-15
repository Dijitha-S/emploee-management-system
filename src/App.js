import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Employees from "./components/Employees";
import Home from "./components/Home";
import Manage from "./components/Manage";

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/manage" element={<Manage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;