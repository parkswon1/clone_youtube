import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './component/AuthContext';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;