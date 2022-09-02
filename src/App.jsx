import React from 'react';
import Header from "./components/layouts/Header.jsx";
import Footer from "./components/layouts/Footer.jsx";
import RoutesIndex from "./components/layouts/RoutesIndex.jsx";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import {GlobalStyle} from "./components/style/GlobalStyle";
import GoToTop from "./components/style/GoToTop.jsx";

const App = () => {
    const theme = {
        colors: {
            heading: "rgb(24 24 29)",
            text: "rgb(24 24 29)",
            white: "#fff",
            black: " #212529",
            helper: "#8490ff",
            // bg: "rgb(221,240,253)",
            bg: "#0a1435",
            servicesBg: "rgb(239,239,239)",
            footer_bg: "#0a1435",
            footer_box: "#e8e8e8",
            btn: "rgb(98 84 243)",
            border: "rgba(98, 84, 243, 0.5)",
            hr: "#ffffff",
            gradient:
                "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
            shadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
            shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
        },
        media: { mobile: "768px", tab: "998px" },
    }
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
