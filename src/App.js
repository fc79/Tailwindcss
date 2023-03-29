import React, { useState } from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Support from "./components/Support";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Support/>
    </>
  );
};

export default App;
