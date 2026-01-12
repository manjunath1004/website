import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock login
    if (username && password) {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/dashboard');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#D7CCC8' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#795548', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>Eating Behavior Insight</h1>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', width: '320px', backgroundColor: '#ffffff', padding: '25px', borderRadius: '15px', boxShadow: '0 8px 25px rgba(0,0,0,0.3)', border: '3px solid #A1887F' }}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: '12px', marginBottom: '15px', border: '2px solid #A1887F', borderRadius: '8px', backgroundColor: '#D7CCC8', fontSize: '1rem' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: '12px', marginBottom: '15px', border: '2px solid #A1887F', borderRadius: '8px', backgroundColor: '#D7CCC8', fontSize: '1rem' }}
        />
        <button type="submit" style={{ padding: '12px', backgroundColor: '#795548', color: '#D7CCC8', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1.1rem', transition: 'background-color 0.3s' }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Landing;
