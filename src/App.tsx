import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import "./components/svg/PlusXIcon";


import NavigationContainer from "./container/NavigationContainer";
import PageContainer from "./container/PageContainer";
import { BrowserRouter } from "react-router-dom";

const Header = styled.div`
  width: 100%;
  font-size: 3rem;
  display:block;
  margin: 2rem;
`;

function App() {

  const [active, setActive] = useState(true);
  
  const toggleNavActive = () => {
    setActive(active=>!active);
  }





  useEffect(() => {
    window.addEventListener('scroll', ()=>{
      
      
      if(window.scrollY<=(window.innerHeight/10)){
       
      setActive(true);  

      }else
      {setActive(false);}  

    })

  }, []);




  return (
    <BrowserRouter>
      <div className="App">
        <Header>HanTaeyeong</Header>
        <NavigationContainer active={active} toggleNavActive={toggleNavActive} />
        <PageContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
