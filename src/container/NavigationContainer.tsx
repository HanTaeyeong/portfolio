import React,{useState} from 'react';
import NavButton from '../components/NavButton';
import PlusXIcon from '../components/PlusXIcon';

const NavigationContainer = () => {
    const [active,setActive]=useState(true);
    
    return <div>
        <PlusXIcon active={active} onClickFunction={()=>{setActive(!active)}}/>
        <NavButton active={active} title="Intro"/>
        <NavButton active={active} title="Stack"/>
        <NavButton active={active} title="Career"/>
        <NavButton active={active} title="Contact"/>
    </div>

}

export default NavigationContainer;
