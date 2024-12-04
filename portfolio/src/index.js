import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/nav';
import Hero from './components/hero';
import CardReg from './components/card-rg';
import CardRegStack from './components/card-rg-stack';
import CardLong from './components/card-long';
import CardWide from './components/card-wide';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <body>
      <main className='main'>
        <NavBar></NavBar>
        <Hero></Hero>
        <div className='card-holder'>
          <CardReg></CardReg><CardRegStack></CardRegStack><CardLong></CardLong><CardWide></CardWide>
        </div>
        
      </main>
    </body>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
