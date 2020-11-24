import React from 'react';
import Albums from './Albums';
import Biography from './Biography';
import './Home.css';
import Intro from './Intro';
import Schedule from './Schedule';
import Tickets from './Tickets';

const Home = () => {
    return (
        <div className="home">
            {/* Intro */}
            <Intro />
            <Tickets />
            <Biography />
            <Schedule />
            <Albums />
        </div>
        
    )
}

export default Home;
