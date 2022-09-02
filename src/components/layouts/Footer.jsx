import React from 'react';
import {FooterWrapper} from "../style/FooterWrapperStyle.jsx";
import { Button } from "../style/Button";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <FooterWrapper>
                <section className="contact-short">
                    <div className="grid grid-two-column">
                        <div>
                            <h3>Ready to get started?</h3>
                            <h3>Talk to us today</h3>
                        </div>

                        <div className="contact-short-btn">
                            <NavLink to="/">
                                <Button>Get Started</Button>
                            </NavLink>
                        </div>
                    </div>
                </section>

                {/* footer section  */}

                <footer>
                    <div className="container grid grid-four-column">
                        <div className="footer-about">
                            <h3>Nur Alam</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </div>

                        {/* 2nd column */}
                        <div className="footer-subscribe">
                            <h3>Subscribe to get important updates</h3>
                            <form action="#">
                                <input
                                    type="email"
                                    required
                                    autoComplete="off"
                                    placeholder="Email"
                                />
                                <input type="submit" value="Subscribe" />
                            </form>
                        </div>

                        {/* 3rs column  */}
                        <div className="footer-social">
                            <h3>Follows Us</h3>
                            <div className="footer-social--icons">
                                <div>
                                    <FaDiscord className="icons" />
                                </div>
                                <div>
                                    <FaInstagram className="icons" />
                                </div>
                                <div>
                                    <a
                                        href="https://www.youtube.com"
                                        target="_blank">
                                        <FaYoutube className="icons" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* 4th column  */}
                        <div className="footer-contact">
                            <h3>Call Us</h3>
                            <h3>12345678978</h3>
                        </div>
                    </div>

                    {/* bottom section  */}
                    <div className="footer-bottom--section">
                        <hr />
                        <div className="container grid grid-two-column">
                            <p>
                                @{new Date().getFullYear()} NurAlam. All Rights Reserved
                            </p>
                            <div>
                                <p>PRIVACY POLICY</p>
                                <p>TERMS & CONDITIONS</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </FooterWrapper>
        </>
    );
};

export default Footer;
