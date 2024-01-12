import React, { Suspense } from 'react';

// import { createRoutesFromElements, createBrowserRouter, Route} from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const SignUp = React.lazy(() => import('./components/SignUp/SignUp'));
const Login = React.lazy(() => import('./components/Login/Login'));
const Home = React.lazy(() => import('./components/Home/Home'));
const Layout = React.lazy(() => import('./components/Layout/Layout'));
const Contact = React.lazy(() => import('./components/Contact/Contact'));
const Page404 = React.lazy(() => import('./components/Page404/Page404'));
const ForgotPassword = React.lazy(() => import('./components/ForgotPassword/ForgotPassword'));

const RouterComponent = () => {
  return (
    <Suspense fallback={<div>Loading..</div>}>
      <Router>
        <Routes>
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </Suspense>
  )
}

export default RouterComponent;