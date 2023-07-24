
import React from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './Components/Global/Header/Header.jsx';
import Footer from './Components/Global/Footer/Footer.jsx'
import App from './Components/App/App.jsx'
import App2 from './Components/App2'
import HeroBnrV1 from './Components/Global/HeroBnrV1/HeroBnrV1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <HeroBnrV1 />
    <App />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
