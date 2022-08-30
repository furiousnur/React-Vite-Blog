import React from 'react';
import Header from "./components/layouts/Header.jsx";
import Footer from "./components/layouts/Footer.jsx";
import RoutesIndex from "./components/layouts/RoutesIndex.jsx";
import {BrowserRouter} from "react-router-dom";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <RoutesIndex/>  
                <Footer/>
            </BrowserRouter> 
        </>
    );
};

export default App;
