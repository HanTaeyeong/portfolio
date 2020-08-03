import React,{useState} from 'react';
import './PlusXIcon.scss';

const PlusXIcon=()=>{
    
    const [active,setActive]=useState(false);

    return (
        <div className={(`navTrigger ${active?"active":"deActive"}`)} onClick={()=>{setActive(!active)}}>
          <div className={"icon"}/>
          <div className={"icon"}/>
        </div>
    );

}

export default PlusXIcon;





