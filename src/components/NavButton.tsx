import React from 'react';
import './NavButton.scss';

const NavButton=({title,active}:{title:String,active:boolean})=>{
    

    return <div  className={`nav-button ${active?"active":"deActive"}`}>{title}</div>

}

export default NavButton;