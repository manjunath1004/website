import React from 'react';

const PresentTab = () => {
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
      <Card title="Current Insights" items={insights} />
      <Card title="Recent Trends" items={trends} bgColor="#f1f3f4" />
      <Card title="Gentle Guidance" items={guidance} />
    </div>
  );
};

export default PresentTab;
