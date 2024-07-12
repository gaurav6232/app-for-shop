import React from 'react';
import { BrowserRouter as Router, Routes,Route, Navigate } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';


const App = () => {
  const isLoggedIn = !!localStorage.getItem('token');

  const handleInvalidLogin = () => {
    alert('You are not logged in. Please login to access this page.');
    return <Navigate to="/" />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={isLoggedIn ? <Home /> : handleInvalidLogin()} />
      </Routes>
    </Router>
  );
};


export default App;
