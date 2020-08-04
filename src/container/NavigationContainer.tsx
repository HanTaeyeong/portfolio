import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavButton from '../components/NavButton';
import PlusXIcon from '../components/PlusXIcon';


const NavBox = styled.div`
display:flex;
flex-direction:column;
width:20rem;
background:red;
`;


const NavigationContainer = () => {
    const [active, setActive] = useState(true);

    return <NavBox>
        <PlusXIcon active={active} onClickFunction={() => { setActive(!active) }} />
        <NavButton to="intro" active={active} title="Intro" />
        <NavButton to="stack" active={active} title="Stack" />
        <NavButton to="career" active={active} title="Career" />
        <NavButton to="contact" active={active} title="Contact" />
    </NavBox>

}

export default NavigationContainer;
