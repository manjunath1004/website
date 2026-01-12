import React from 'react';

const PresentTab = () => {
  // Mock data - in real app, fetch from backend
  const insights = [
    "Evening meals are often heavy.",
    "Oil-rich foods appeared frequently this week.",
    "Meals are happening late on most days."
  ];

  const trends = [
    "Late dinners ↓ compared to last week",
    "Balanced meals ↑ over 14 days",
    "Oil-heavy meals → unchanged"
  ];

  const guidance = [
    "If evening meals stay lighter, sleep quality may improve."
  ];

  return (
    <div>
      <div style={{ marginBottom: '25px', padding: '25px', backgroundColor: '#D7CCC8', borderRadius: '15px', border: '4px solid #A1887F', boxShadow: '0 6px 18px rgba(0,0,0,0.2)' }}>
        <h3 style={{ color: '#795548', fontSize: '1.5rem', marginBottom: '15px', fontWeight: 'bold' }}>Insights</h3>
        {insights.map((insight, index) => (
          <p key={index} style={{ margin: '10px 0', color: '#795548', fontSize: '1.1rem', lineHeight: '1.4' }}>{insight}</p>
        ))}
      </div>
      <div style={{ marginBottom: '25px', padding: '25px', backgroundColor: '#A1887F', borderRadius: '15px', border: '4px solid #795548', boxShadow: '0 6px 18px rgba(0,0,0,0.2)' }}>
        <h3 style={{ color: '#D7CCC8', fontSize: '1.5rem', marginBottom: '15px', fontWeight: 'bold' }}>Trends</h3>
        {trends.map((trend, index) => (
          <p key={index} style={{ margin: '10px 0', color: '#D7CCC8', fontSize: '1.1rem', lineHeight: '1.4' }}>{trend}</p>
        ))}
      </div>
      <div style={{ padding: '25px', backgroundColor: '#D7CCC8', borderRadius: '15px', border: '4px solid #A1887F', boxShadow: '0 6px 18px rgba(0,0,0,0.2)' }}>
        <h3 style={{ color: '#795548', fontSize: '1.5rem', marginBottom: '15px', fontWeight: 'bold' }}>Guidance</h3>
        {guidance.map((guide, index) => (
          <p key={index} style={{ margin: '10px 0', color: '#795548', fontSize: '1.1rem', lineHeight: '1.4' }}>{guide}</p>
        ))}
      </div>
    </div>
  );
};

export default PresentTab;
