import React from 'react';
import './PlusXIcon.scss';

//
const PlusXIcon=({active, onClickFunction}:{active:boolean,onClickFunction:Function})=>{
  
    return (
        <div className={(`navTrigger ${active?"active":"deActive"}`)} onClick={()=>onClickFunction()}>
          <div className={"icon"}/>
          <div className={"icon"}/>
        </div>
    );

}

export default PlusXIcon;





