import React from "react";
import styled from "styled-components";
import "./App.css";
import "./components/PlusXIcon";

import NavigationContainer from "./container/NavigationContainer";
import PageContainer from "./container/PageContainer";
import { Route, BrowserRouter } from "react-router-dom";
import { LifeStoryPage, ContactPage, IntroPage, StackPage } from "./pages";

const Header = styled.div`
  width: 100%;
  font-size: 5rem;
  display:block;
  margin: 2rem;
 
`;

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Header>HanTaeyeong</Header>
        <NavigationContainer />
        <PageContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
