import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import './app.css'
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import Users from './components/Users';
import UserDetail from './components/Users/UserDetail';
import { PrivateRoute } from './utils/PrivateRoute';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="users" element={
          <PrivateRoute path={"users"}>
              <Users />
            </PrivateRoute>
          }
        />
      <Route path="users/:id" element={
          <PrivateRoute path={"users/:id"}>
              <UserDetail isProfile={false}/>
            </PrivateRoute>
          }
        />
        
         <Route path="profile" element={
          <PrivateRoute path={"profile"}>
              <UserDetail isProfile={true}/>
            </PrivateRoute>
          }
        />
        <Route path="dashboard" element={
          <PrivateRoute path={"dashboard"}>
              <Dashboard/>
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Login/>}/>
         <Route path="register" element={
          <PrivateRoute path={"register"}>
              <Register/>
            </PrivateRoute>
          }
        />
      <Route  exact path="*" element={<Navigate to="/" replace={true} />} />;
    </Routes>
  </BrowserRouter>
  );
};

export default App;
