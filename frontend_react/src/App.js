import React from "react";
import {
  About,
  Footer,
  Header,
  Skills,
  Testimonial,
  Works,
} from "./container";
import { NavBar } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Header />
      <About />
      <Works />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
