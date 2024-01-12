import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

const root = createRoot(document.getElementById('root'));


const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const REACTNAME = process.env.REACT_APP_NAME;

///console.log("credentials env",REACTNAME,domain,clientId)
root.render(
     <React.StrictMode>
    <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
