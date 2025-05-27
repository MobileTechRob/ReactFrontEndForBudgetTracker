// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import MainView from './MainView';

function AppWithLogin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          isAuthenticated ? <Navigate to="/main" /> : <Login onLogin={() => setIsAuthenticated(true)} />
        } />
        <Route path="/main" element={
          isAuthenticated ? <MainView /> : <Navigate to="/" />
        } />
      </Routes>
    </Router>
  );
}

export default AppWithLogin;
