import React from 'react';
import Nav from '../components/Nav'
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';

function Home() {
    return (
        <>
            <Nav />
            <Hero />
            <Features />
            <Testimonial />
            <Footer />            
            <h1>I am Home. Please welcome me.</h1>
        </>
    )
};

export default Home