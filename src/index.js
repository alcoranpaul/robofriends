import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore } from 'redux'
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { searchRobots } from './reducers';
import './index.css';
import App from './container/App';
import 'tachyons'

const store = legacy_createStore(searchRobots)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
