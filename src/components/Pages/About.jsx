import React from 'react';
import HeroSection from "../layouts/HeroSection.jsx";

const About = () => {
    const data = {
        name: "Nur Alam",
        image: "../../../public/images/about1.svg"
    }
    return (
        <>
            <HeroSection {...data}/>
        </>
    );
};

export default About;
