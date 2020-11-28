import React from 'react';
import Albums from './Albums';
import Biography from './Biography';
import Contact from './Contact';
import './Home.css';
import Intro from './Intro';
import Newsletter from './Newsletter';
import Schedule from './Schedule';
import Tickets from './Tickets';
import Footer from './Footer';
import Navigation from './Navigation';

const Home = () => {
    return (
        <div className="home">
            {/* <Navigation /> */}
            <Intro />
            <Tickets />
            <Biography />
            <Schedule />
            <Albums />
            <Contact />
            <Newsletter />
            <Footer />
        </div>
        
    )
}

export default Home;
