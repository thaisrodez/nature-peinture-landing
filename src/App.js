import React from "react";
import "./App.css";
import Navbar from "./components/navbar.js";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
