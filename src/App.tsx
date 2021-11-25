import React, { Fragment } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Show from "./pages/Show";
import About from "./pages/About";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";


const App: React.FC = () => {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:id" element={<Show />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
      <Footer />
    </Fragment>
  ) 
}

export default App;




