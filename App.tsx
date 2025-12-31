
import React, { useState, useEffect } from 'react';
import Navbar from './frontend/Navbar';
import Hero from './frontend/Hero';
import About from './frontend/About';
import Community from './frontend/Community';
import Contact from './frontend/Contact';
import Footer from './frontend/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="community">
          <Community />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
