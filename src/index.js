import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import UserContextProvider from './globalContext/Context';



ReactDOM.render(
  <BrowserRouter>
  <UserContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </UserContextProvider>
  
  </BrowserRouter>,
  document.getElementById('root')
);



