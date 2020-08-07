import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import "./components/PlusXIcon";
import $ from 'jquery';

import NavigationContainer from "./container/NavigationContainer";
import PageContainer from "./container/PageContainer";
import { BrowserRouter } from "react-router-dom";

const Header = styled.div`
  width: 100%;
  font-size: 5rem;
  display:block;
  margin: 2rem;
 
`;

function App() {

  const [active, setActive] = useState(false);
  const [currentY, setCurrentY] = useState(0);

  const toggleNavActive = () => {
    setActive(!active);
  }





  useEffect(() => {


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
