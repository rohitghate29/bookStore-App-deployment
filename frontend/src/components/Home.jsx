import React from 'react'
import Navbar from './navbar/Navbar';
import Banner from './banner/Banner';
import FreeBook from './books/FreeBook';
import Footer from './footer/Footer'

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <FreeBook />
      <Footer />
    </>
  );
}

export default Home