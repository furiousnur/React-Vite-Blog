import React from 'react';
import HeroSection from "../layouts/HeroSection.jsx";

const Home = () => {
    const data = {
        name: "React Blog",
        image: "../../../public/images/hero.svg"
    }
    return (
        <>
            <HeroSection {...data} />
        </>
    );
};

export default Home;
