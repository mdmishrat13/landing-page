import React from 'react';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import Roadmaps from '../../components/Roadmap/Roadmaps';
import Team from '../../components/Team/Team';
import './home.css'

const Home = () => {
    return (
        <div>
            <Hero/>
            <div className="team">
            <Team/>
            </div>
            <div className="roadmap">
                <Roadmaps/>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    );
};

export default Home;