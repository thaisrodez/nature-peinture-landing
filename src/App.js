import React from "react";
import "./stylesheets/App.css";
import Navbar from "./components/navbar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Page/home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
