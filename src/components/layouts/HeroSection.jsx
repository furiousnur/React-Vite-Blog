import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {Button} from "../style/Button.jsx"; 
import { useGlobalContext } from "../context/Context.jsx";
import {HeroSectionWrapper} from "../style/HeroSectionStyle.jsx";

const HeroSection = () => { 
    const { name, image } = useGlobalContext();

    return (
        <HeroSectionWrapper>
            <div className="container grid grid-two-column">
                <div className="section-hero-data">
                    <p className="hero-top-data">THIS IS ME</p>
                    <h1 className="hero-heading">{name}</h1>
                    {/*<h1 className="hero-heading">{name}</h1>*/}
                    <p className="hero-para">
                        I'm {name}. A Full stack Developer, youtuber and freelancer. A Full
                        stack Developer, youtuber and freelancer.
                    </p>
                    <Button className="btn hireme-btn">
                        <NavLink to="/contact"> hire me </NavLink>
                    </Button>
                </div>

                {/* for image  */}
                <div className="section-hero-image">
                    <picture>
                        <img src={image} alt="hero image" className="hero-img" />
                    </picture>
                </div>
            </div>
        </HeroSectionWrapper>
    );
};
 
export default HeroSection;