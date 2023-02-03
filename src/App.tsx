import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './container/Home';
import Practice from './container/Practice';
import { fetchUser } from './utils/fetchUser';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = fetchUser();

    if (!user) navigate('/login');
  }, []);

  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='practice' element={<Practice />} />
      <Route path='/*' element={<Home />} />
    </Routes>
  );
}

export default App;
