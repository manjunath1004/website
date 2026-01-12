import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PresentTab from './PresentTab';
import HistoryTab from './HistoryTab';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('present');
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif', backgroundColor: '#D7CCC8', minHeight: '100vh' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', backgroundColor: '#795548', padding: '20px', borderRadius: '15px', color: '#D7CCC8', boxShadow: '0 6px 20px rgba(0,0,0,0.4)' }}>
        <h2 style={{ margin: 0, fontSize: '2rem', fontWeight: 'bold' }}>Welcome to Your Eating Insights</h2>
        <button onClick={handleLogout} style={{ padding: '12px 24px', backgroundColor: '#A1887F', color: '#D7CCC8', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem', transition: 'background-color 0.3s' }}>
          Logout
        </button>
      </header>
      <nav style={{ marginBottom: '30px', textAlign: 'center' }}>
        <button
          onClick={() => setActiveTab('present')}
          style={{ padding: '15px 30px', marginRight: '15px', backgroundColor: activeTab === 'present' ? '#795548' : '#A1887F', color: '#D7CCC8', border: 'none', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1.1rem', boxShadow: '0 4px 12px rgba(0,0,0,0.3)', transition: 'all 0.3s' }}
        >
          Present
        </button>
        <button
          onClick={() => setActiveTab('history')}
          style={{ padding: '15px 30px', backgroundColor: activeTab === 'history' ? '#795548' : '#A1887F', color: '#D7CCC8', border: 'none', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1.1rem', boxShadow: '0 4px 12px rgba(0,0,0,0.3)', transition: 'all 0.3s' }}
        >
          History
        </button>
      </nav>
      <div>
        {activeTab === 'present' && <PresentTab />}
        {activeTab === 'history' && <HistoryTab />}
      </div>
    </div>
  );
};

export default Dashboard;
