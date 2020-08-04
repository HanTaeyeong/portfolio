import React from 'react';
import './App.css';
import './components/PlusXIcon';

import NavigationContainer from './container/NavigationContainer';


import {Route,BrowserRouter} from 'react-router-dom';
import {CareerPage, ContactPage, IntroPage, StackPage} from './pages';


// 
     

function App() {

  return (
    <div className="App">
     
      <NavigationContainer/>
      <BrowserRouter>
        <Route path="/" component={IntroPage}/>
        <Route path="/stack" component={StackPage}/>
        <Route path="/career" component={CareerPage}/>
        <Route path="/contact" component={ContactPage}/>
      </BrowserRouter>

      

    </div>
  );
}

export default App;
