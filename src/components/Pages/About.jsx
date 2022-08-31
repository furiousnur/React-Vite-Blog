import {useEffect} from "react";
import HeroSection from "../layouts/HeroSection.jsx";
import {useGlobalContext} from "../context/Context.jsx"; 

const About = () => {
    const { updateAboutPage } = useGlobalContext();
    useEffect(() => updateAboutPage(), []);
    
    return (
        <>
            <HeroSection/>
        </>
    );
};

export default About;
