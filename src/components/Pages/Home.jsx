import {useEffect} from "react";
import HeroSection from "../layouts/HeroSection.jsx";
import {useGlobalContext} from "../context/Context.jsx";
import Services from "./Services.jsx";
import Contact from "./Contact.jsx";

const Home = () => {
    const { updateHomePage } = useGlobalContext();
    useEffect(() => updateHomePage(), []);
    const emptyMt = {
        marginTop15: "5rem"
    }
    return (
        <>
            <HeroSection />
            <Services emptyMt={emptyMt}/>
            <Contact emptyMt={emptyMt} />
        </>
    );
};

export default Home;
