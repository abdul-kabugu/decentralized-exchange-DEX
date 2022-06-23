import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {MoralisProvider} from 'react-moralis'
import "./index.css"
import ExchangeStateProvider from './components/ExchangeState';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <MoralisProvider appId='yczNJQBS8LvmmkVnIHDiEMoJf3kBHsR88BgMiPuc' serverUrl='https://db1nxmqxj2ki.usemoralis.com:2053/server'>
     <ExchangeStateProvider>
    <App />
    </ExchangeStateProvider>
    </MoralisProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

