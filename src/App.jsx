import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import CursorFlow from "./components/CursorFlow";
import BackToTop from "./components/BackToTop";

import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import ProjectsPage from "./pages/ProjectsPage";

function Home() {
  return (
    <>
      <Navbar />

      <CursorFlow>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Journey />
        <Contact />
        <Footer />
        <BackToTop />
      </CursorFlow>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;