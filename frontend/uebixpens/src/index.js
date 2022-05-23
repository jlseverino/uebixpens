import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import Login from './Login';
import { Constantes } from './Constantes';

const root = ReactDOM.createRoot(document.getElementById('root'));

console.log(Constantes.api_gastos)

root.render(
  <React.StrictMode>
    <Auth0Provider domain={Constantes.domain} clientId={Constantes.clientid} redirectUri={window.location.origin} >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
