import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate
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
      <Route path="/" element={ <Login />} />
      <Route path="/dashboard" element={ <Dashboard />} />
      <Route path="register" element={<Register />} />
      {/* <Route path="users" element={<Users />} /> */}
      <Route path="users/:id" element={<UserDetail isProfile={false}/>} />
      <Route path="profile" element={<UserDetail isProfile={true}/>} />
      <Route  exact path="*" element={<Navigate to="/" replace={true} />} />;
    </Routes>
  </BrowserRouter>
  );
};

export default App;
