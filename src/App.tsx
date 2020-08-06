import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import "./components/PlusXIcon";


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


  const [scrollY, setScrollY] = useState(0);
  const [innerHeight, setInnerHeight] = useState(0);


  const onScroll = () => {
    setScrollY(window.scrollY);
    setInnerHeight(window.innerHeight);

  };

  useEffect(() => { window.addEventListener('scroll', onScroll); }, []);


  return (
    <BrowserRouter>
      <div className="App">
        <Header>HanTaeyeong</Header>
        <NavigationContainer />
        <PageContainer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
