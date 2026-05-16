import { useState, useEffect } from 'react';
import MandalaBg from './components/MandalaBg';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Services from './components/Services';
import BookingSteps from './components/BookingSteps';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

function App() {
  return (
    <div className="relative w-full">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <BookingSteps />
        <Gallery />
        <Reviews />
        <ContactForm />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
