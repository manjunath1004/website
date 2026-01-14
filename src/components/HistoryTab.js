import React from 'react';

const HistoryTab = () => {
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

  const Card = ({ title, items, bgColor = '#f8f9fa' }) => (
    <div style={{
      backgroundColor: bgColor,
      borderRadius: '8px',
      padding: '1.5rem',
      marginBottom: '1.5rem',
      border: '1px solid #e9ecef'
    }}>
      <h3 style={{
        margin: '0 0 1rem 0',
        color: '#1a1a1a',
        fontSize: '1.2rem',
        fontWeight: '600'
      }}>
        {title}
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {items.map((item, index) => (
          <p key={index} style={{
            margin: 0,
            color: '#666666',
            fontSize: '1rem',
            lineHeight: '1.5'
          }}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );

  return (
    <div style={{ maxWidth: '800px' }}>
      <Card title="Weekly Patterns" items={weeklyPatterns} bgColor="#fff3cd" />
      <Card title="Bi-weekly Overview" items={biWeeklyTrends} bgColor="#d1ecf1" />
    </div>
  );
};

export default HistoryTab;
