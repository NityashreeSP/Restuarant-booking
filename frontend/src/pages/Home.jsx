import React from 'react'
import HeroSection from '../components/HeroSection.jsx';
import About from '../components/About.jsx';
import Qualities from '../components/Qualities.jsx';
import Menu from '../components/Menu.jsx';
import WhoAreWe from '../components/WhoAreWe.jsx';
import Team from '../components/Team.jsx';
import Reservations from '../components/Reservations.jsx';
import Footer from '../components/Footer.jsx';

const Home = () => {
  return (
    <>
    <HeroSection/>
    <About />
    <Qualities/>
    <Menu/>
    <WhoAreWe/>
    <Team/>
    <Reservations/>
    <Footer />
    </>
  )
}

export default Home;
