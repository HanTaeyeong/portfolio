import React from 'react';
import './App.css';
import './components/PlusXIcon';

import NavigationContainer from './container/NavigationContainer';
import PageContainer from './container/PageContainer';
import { Route, BrowserRouter } from 'react-router-dom';
import { LifeStoryPage, ContactPage, IntroPage, StackPage } from './pages';

function App() {

  return (
    <BrowserRouter>
    <div className="App">
         <div style={{width:"100%",fontSize:"5rem", display:"block"}}>HanTaeyeong</div>
        <NavigationContainer />
        <PageContainer />

     
    </div>
    </BrowserRouter>
  );
}

export default App;
