import React from 'react';
import './App.css';
import './components/PlusXIcon';

import NavigationContainer from './container/NavigationContainer';
import PageContainer from './container/PageContainer';

import { Route, BrowserRouter } from 'react-router-dom';
import { CareerPage, ContactPage, IntroPage, StackPage } from './pages';


// 


function App() {

  return (
    <BrowserRouter>
    <div className="App">
    
        <NavigationContainer />
        <PageContainer />

     
    </div>
    </BrowserRouter>
  );
}

export default App;
