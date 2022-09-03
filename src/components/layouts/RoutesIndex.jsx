import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "../Pages/Home.jsx";
import About from "../Pages/About.jsx";
import Contact from "../Pages/Contact.jsx";
import Services from "../Pages/Services.jsx";
import Error from "../Pages/Error.jsx";
import Service from "../Pages/Service.jsx";

const RoutesIndex = () => {
    const emptyMt = {
        marginTop15: "13rem"
    }
    
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/contact" element={<Contact emptyMt={emptyMt}/>}/>
                <Route path="/services" element={<Services emptyMt={emptyMt}/>}/>
                <Route path="/services/:title" element={<Service emptyMt={emptyMt}/>}/>
                <Route path="*" element={<Error />}/>
            </Routes>
        </>
    );
};

export default RoutesIndex;
