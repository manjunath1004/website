import React from 'react';

const HistoryTab = () => {
  // Mock data - in real app, fetch from backend
  const weeklyPatterns = [
    "Week 1: Evening meals heavy ↑",
    "Week 2: Oil-rich foods ↓",
    "Week 3: Late dinners → stable",
    "Week 4: Balanced meals ↑ improving"
  ];

  const biWeeklyTrends = [
    "Overall: Gradual shift towards lighter evenings",
    "Patterns show consistent improvement in meal timing"
  ];

  return (
    <div>
      <div style={{ marginBottom: '25px', padding: '25px', backgroundColor: '#A1887F', borderRadius: '15px', border: '4px solid #795548', boxShadow: '0 6px 18px rgba(0,0,0,0.2)' }}>
        <h3 style={{ color: '#D7CCC8', fontSize: '1.5rem', marginBottom: '15px', fontWeight: 'bold' }}>Weekly Patterns</h3>
        {weeklyPatterns.map((pattern, index) => (
          <p key={index} style={{ margin: '10px 0', color: '#D7CCC8', fontSize: '1.1rem', lineHeight: '1.4' }}>{pattern}</p>
        ))}
      </div>
      <div style={{ padding: '25px', backgroundColor: '#D7CCC8', borderRadius: '15px', border: '4px solid #A1887F', boxShadow: '0 6px 18px rgba(0,0,0,0.2)' }}>
        <h3 style={{ color: '#795548', fontSize: '1.5rem', marginBottom: '15px', fontWeight: 'bold' }}>Bi-weekly Trends</h3>
        {biWeeklyTrends.map((trend, index) => (
          <p key={index} style={{ margin: '10px 0', color: '#795548', fontSize: '1.1rem', lineHeight: '1.4' }}>{trend}</p>
        ))}
      </div>
    </div>
  );
};

export default HistoryTab;
