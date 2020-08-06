import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


type StateType = {
  scrollY: number,
  innerHeight: number,
}


type ActionType = {

  type: string,
  payload: StateType,
}


const reducer = (state: StateType, action: ActionType) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_SCROLL_Y": {
      return {
        ...state, scrollY: payload,
      }
    }
    case 'SET_INNER_HEIGHT': {
      return {
        ...state, innerHeight: payload,
      }
    }

  }

}



const store = createStore(state => state);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
