import React, { useEffect } from 'react';
import Router from './router/index';
import { useSelector } from 'react-redux';
// import { useNetworkState } from "react-use";
import Layout from './layout';
import UserLayout from './Dashboard/UserLayout';
import UserRouter from './Dashboard/Router';
import { useLocation } from 'react-router-dom';
function App() {
  const login = ['/login', '/signup', '/accountverification','/forgotpassword']
  const location = useLocation();
  console.log(location.pathname);
  if (login.includes(location.pathname)) {
    return (
      <Layout>
        <Router />
      </Layout>
    );
  } else {
    return (
      <UserLayout>
        <UserRouter />
      </UserLayout>
    );
  }
}

export default App;
