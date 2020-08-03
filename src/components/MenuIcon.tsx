import React from 'react';
import './MenuIcon.scss';

function MenuIcon() {
  const [active,setActive]=React.useState(false);
  return (
      <div className={(`navTrigger ${active?"active":""}`)} onClick={()=>{setActive(!active)}}>
        <i></i><i></i><i></i>
      </div>
  );
}

export default MenuIcon;
