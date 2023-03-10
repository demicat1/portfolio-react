import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./styles/main.css"

import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Home from "./pages/Home"
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Project from "./pages/Project";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/project/:id" element={<Project />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
