import React from 'react';
import {NavLink} from "react-router-dom";
import Navbar from "./Navbar.jsx";
import styled from "styled-components";

const Header = () => {
    return (
        <MainHeader>
            <NavLink to="/">
                <img src="../../../public/images/logo.png" alt="Logo" className="logo"/>
            </NavLink>
            <Navbar/>
        </MainHeader>
    );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  position:fixed;
  width:100%; 
  z-index: 999;
  .logo {
    height: auto;
    max-width: 30%;
  }
`;

export default Header;
