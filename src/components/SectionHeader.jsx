import React from 'react';
import './SectionHeader.css';

const SectionHeader = ({ title, subtitle, centered = false }) => {
  return (
    <div className={`section-header ${centered ? 'centered' : ''}`}>
      <h2 className="section-title gradient-text">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      <div className="section-divider"></div>
    </div>
  );
};

export default SectionHeader;
