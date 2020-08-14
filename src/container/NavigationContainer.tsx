import React, { useState } from 'react';
import styled from 'styled-components';
import NavButton from '../components/svg/NavButton';
import PlusXIcon from '../components/svg/PlusXIcon';


const NavBox = styled.div`

position:fixed;
flex-direction:column;
width:15rem;
z-index:9;


@media (max-width:1024px){
    
    &.active{
        background:rgba(151, 151, 151, 0.95);
}   

}

`;

type NavContainerType={
active:boolean,
toggleNavActive:Function,
}

const NavigationContainer = ({active,toggleNavActive}:NavContainerType) => {
   
    const [currentPage, setCurrentPage] = useState("intro");


    return <NavBox className={active?"active":""}>
        <PlusXIcon active={active} onClickFunction={() => { toggleNavActive(); }} />
        <NavButton to="intro" active={active} selected={currentPage==="intro"} title="Intro" onClickFunction={() => setCurrentPage("intro")} />
        <NavButton to="stack" active={active} selected={currentPage==="stack"} title="Stack" onClickFunction={() => setCurrentPage("stack")} />
        <NavButton to="career" active={active} selected={currentPage==="career"} title="Career" onClickFunction={() => setCurrentPage("career")} />
        <NavButton to="contact" active={active} selected={currentPage==="contact"} title="Contact" onClickFunction={() => setCurrentPage("contact")} />
    </NavBox>

}

export default NavigationContainer;
