import React from 'react';
import { Link } from 'react-router-dom';
import './NavButton.scss';
import styled from 'styled-components';


const Nav = styled(Link)`
    display:block;
    width:23rem;
    text-align:left;
`;


type NavButtonType = { title: String, active: boolean, to: string, onClickFunction: Function, selected: boolean }


const NavButton = ({ title, active, to, onClickFunction, selected }: NavButtonType) => {
    return <Nav to={`/${to}`} className={`nav-button ${active ? "active" : "deActive"}${selected ? " selected" : " unselected"}`} onClick={() => onClickFunction()}>{title}
    </Nav>
}

export default NavButton;