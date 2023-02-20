import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Individual from "./pages/Individual";
import Corporate from './pages/Corporate';
import Health from './pages/Health';
import HowIWork from './pages/HowIWork';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Individual" element={<Individual />} />
      <Route path="/Corporate" element={<Corporate />} />
      <Route path="/Health" element={<Health />} />
      <Route path="/HowIWork" element={<HowIWork />} />
      <Route path="/Testimonials" element={<Testimonials />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
