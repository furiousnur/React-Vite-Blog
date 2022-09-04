import React, {useState} from 'react';
import {NavLink} from "react-router-dom"; 
import { CgMenu, CgCloseR } from "react-icons/cg";
import {Nav} from "../style/NavWrapper.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import {Button} from "../style/Button.jsx";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const {loginWithRedirect, logout, isAuthenticated} = useAuth0();
    
    return (
        <>
            <Nav>
                <div className={openMenu ? "menuIcon active" : "menuIcon"}>
                    <ul className="navbar-list">
                        <li>
                            <NavLink
                                className="navbar-link"
                                onClick={() => setOpenMenu(false)}
                                to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="navbar-link"
                                onClick={() => setOpenMenu(false)}
                                to="/about">
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="navbar-link"
                                onClick={() => setOpenMenu(false)}
                                to="/services">
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="navbar-link"
                                onClick={() => setOpenMenu(false)}
                                to="/contact">
                                Contact
                            </NavLink>
                        </li>
                        { isAuthenticated ? <li>
                                <Button onClick={() => logout({ returnTo: window.location.origin })}>
                                    Log Out
                                </Button>
                            </li>
                                :
                            <li>
                                return <Button onClick={() => loginWithRedirect()}>Log In</Button>;
                            </li>    
                        }
                    </ul>
                    {/* //nav icon */}
                    <div className="mobile-navbar-btn">
                        <CgMenu
                            name="menu-outline"
                            className="mobile-nav-icon"
                            onClick={() => setOpenMenu(true)}
                        />
                        <CgCloseR
                            name="close-outline"
                            className="close-outline mobile-nav-icon"
                            onClick={() => setOpenMenu(false)}
                        />
                    </div>
                </div>
            </Nav>
        </>
    );
};



export default Navbar;
