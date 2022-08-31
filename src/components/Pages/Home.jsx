import {useEffect} from "react";
import HeroSection from "../layouts/HeroSection.jsx";
import {useGlobalContext} from "../context/Context.jsx";

const Home = () => {
    const { updateHomePage } = useGlobalContext();

    useEffect(() => updateHomePage(), []);
    return (
        <>
            <HeroSection />
        </>
    );
};

export default Home;
