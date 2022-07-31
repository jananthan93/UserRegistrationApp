import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import './app.css'
import Login from './components/Login';
import Register from './components/Register';
import Users from './components/Users';
import UserDetail from './components/Users/UserDetail';
import { PrivateRoute } from './utils/PrivateRoute';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="users" element={<Users />} />
      <Route path="users/:id" element={<UserDetail isEdit={true}/>} />
      <Route path="profile" element={<UserDetail isEdit={false}/>} />
      <Route  exact path="*" element={<Navigate to="/" replace={true} />} />;
    </Routes>
  </BrowserRouter>
  );
};

export default App;
