import React from 'react';
import { motion } from 'framer-motion';
import './Card.css';

const Card = ({ title, description, icon: Icon, children, className = '' }) => {
  return (
    <motion.div 
      className={`card glass-card ${className}`}
      whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {Icon && <div className="card-icon"><Icon size={32} /></div>}
      {title && <h3 className="card-title">{title}</h3>}
      {description && <p className="card-desc">{description}</p>}
      {children}
    </motion.div>
  );
};

export default Card;
