import React, { useState } from 'react';
import styled from 'styled-components';
import NavButton from '../components/NavButton';
import PlusXIcon from '../components/PlusXIcon';


const NavBox = styled.div`

position:fixed;
flex-direction:column;
width:15rem;
z-index:9;
`;

const NavigationContainer = () => {
    const [active, setActive] = useState(true);
    const [currentPage, setCurrentPage] = useState("intro");


    return <NavBox>
        <PlusXIcon active={active} onClickFunction={() => { setActive(!active) }} />
        <NavButton to="intro" active={active} selected={currentPage==="intro"} title="Intro" onClickFunction={() => setCurrentPage("intro")} />
        <NavButton to="stack" active={active} selected={currentPage==="stack"} title="Stack" onClickFunction={() => setCurrentPage("stack")} />
        <NavButton to="career" active={active} selected={currentPage==="career"} title="Career" onClickFunction={() => setCurrentPage("career")} />
        <NavButton to="contact" active={active} selected={currentPage==="contact"} title="Contact" onClickFunction={() => setCurrentPage("contact")} />
    </NavBox>

}

export default NavigationContainer;
