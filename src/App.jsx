import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router} from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Workout from './Components/Workout';
import Gallery from './Components/Gallery';
import Pricing from './Components/Pricing';
import Contact from './Components/Contact';
import BMICal from './Components/BMICal';
import Footer from './Components/Footer';

const App = () => {
  return (
    <Router>
        <Navbar/>
        <Hero/>
        <Workout/>
        <Gallery/>
        <Pricing/>
        <Contact/>
        <BMICal/>
        <Footer/>
        <ToastContainer theme='dark' position='top-center'/>
    </Router>
  )
}

export default App
