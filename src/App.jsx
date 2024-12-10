import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Services from '../Components/Services';
import Clients from '../Components/ClientsSection';
import ScrollToTop from '../Components/BackToTop';
import Booking from '../Components/Booking';
import Footer from '../Components/Footer';
import Menu from '../Components/Menu';
import MenuCategories from '../Components/MenuCategories';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the homepage */}
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Hero />
              <About />
              <Services />
              <Clients />
              <ScrollToTop />
              <Booking />
            </>
          }
        />
        {/* Route for the Menu page */}
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/:category" element={<MenuCategories />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
