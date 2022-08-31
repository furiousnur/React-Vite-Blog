import {useEffect} from "react";
import HeroSection from "../layouts/HeroSection.jsx";
import {useGlobalContext} from "../context/Context.jsx";
import Services from "./Services.jsx";
import Contact from "./Contact.jsx";

const Home = () => {
    const { updateHomePage } = useGlobalContext();
    useEffect(() => updateHomePage(), []);
    
    return (
        <>
            <HeroSection />
            <Services/>
            <Contact/>
        </>
    );
};

export default Home;
