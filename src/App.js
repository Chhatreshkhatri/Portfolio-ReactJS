import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Skills from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
