import React from 'react';
import { Link } from 'react-router-dom';
import './NavButton.scss';
import styled from 'styled-components';


const Nav=styled(Link)`
    display:block;
    width:23rem;
    text-align:left;
    

`;

// <svg viewBox="0 0 40 2" preserveAspectRatio="none" className="svg">
// <path d="M0 1 L40 1" className="path" />
// </svg>


const NavButton = ({ title, active, to }: { title: String, active: boolean, to: string }) => {


    return <Nav to={`/${to}`} className={`nav-button ${active ? "active" : "deActive"}`}>{title}
      
    </Nav>

}

export default NavButton;