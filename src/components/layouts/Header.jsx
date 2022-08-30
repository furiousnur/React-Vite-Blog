import React from 'react';
import {NavLink} from "react-router-dom";
import Navbar from "./Navbar.jsx";

const Header = () => {
    return (
        <header>
            <NavLink to="/">
                <img src="../../../public/vite.svg" alt="Logo"/>
            </NavLink>
            <Navbar/>
        </header>
    );
};

export default Header;
