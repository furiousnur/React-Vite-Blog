import React from 'react';
import Header from "./components/layouts/Header.jsx";
import Footer from "./components/layouts/Footer.jsx";
import RoutesIndex from "./components/layouts/RoutesIndex.jsx";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import {GlobalStyle} from "./components/style/GlobalStyle";
import GoToTop from "./components/style/GoToTop.jsx";
import {theme} from "./components/style/ThemeStyle.jsx";

const App = () => {
    
    return (<>
            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <GoToTop/>
                <BrowserRouter>
                    <Header/>
                    <RoutesIndex/>
                    <Footer/>
                </BrowserRouter>
            </ThemeProvider>
        </>);
};

export default App;
