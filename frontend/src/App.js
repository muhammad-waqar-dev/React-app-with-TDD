import React, {Suspense} from 'react';
import { RouterProvider} from "react-router-dom";
import './App.css';
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import RouterComponent from './Router';

function App() {

  return (
<RouterComponent/>
  );
}

export default App;
