import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import "./App.css";
import Skills from "./components/skills";
import Projects from "./components/Projects";
import Message from "./components/Message";
import Footer from "./components/Footer";
import { Toaster } from 'react-hot-toast';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Toaster/>
        <Navbar />
        <div className="container">
          <Hero />
        </div>
        <Skills name="Technical Skills" />
        <Projects name="My Projects"/>
        <Message name='Message Me'/>
        <Footer/>
      </Router>
    </>
  );
}

export default App;