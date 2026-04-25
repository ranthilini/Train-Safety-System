import React from 'react';
import { motion } from 'framer-motion';
import { Users, LayoutGrid, ShieldAlert, Activity, ArrowRight } from 'lucide-react';
import Card from '../components/Card';
import SectionHeader from '../components/SectionHeader';
import bannerImg from '../assets/images/banner.png';
import './Home.css';

const Home = () => {
  const features = [
    {
      title: 'Crowd Density Detection',
      desc: 'Real-time classification of compartment crowd levels using ML to manage passenger flow.',
     
    },
    {
      title: 'Platform Alignment',
      desc: 'Optimization of train stopping positions to balance safety and boarding efficiency.',
     
    },
    {
      title: 'Obstacle Detection',
      desc: 'Early identification of track hazards using ultrasonic ,thermal and vision fusion for automatic alerting.',
    
    },
    {
      title: 'Driver Support System',
      desc: 'Intelligent monitoring of driver fatigue and drowsiness to prevent accidents.',
   
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-tag">Group 25-26J-134 </span>
            <h1>AI Powered Train Safety System with Real-Time Crowd and Obstacle Detection</h1>
            <p>
              An integrated intelligent system designed to detect crowd density, 
              track obstacles, and driver fatigue in real time, ensuring a 
              safer and more efficient transportation experience.
            </p>
            <div className="hero-btns">
              <a href="/domain" className="btn btn-primary">Explore Domain <ArrowRight size={18} /></a>
              <a href="/about" className="btn btn-secondary">Our Team</a>
            </div>
          </motion.div>
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="image-wrapper glass-card">
              <img src={bannerImg} alt="AI Train Safety" />
              <div className="glow-effect"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <SectionHeader 
            title="Key Features" 
            subtitle="Advanced AI components working together to revolutionize railway safety."
             centered
          />
          <div className="features-grid">
            {features.map((f, i) => (
              <Card key={i} title={f.title} description={f.desc} icon={f.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="project-info">
        <div className="container">
          <div className="info-card glass-card">
            <div className="info-text">
              <h2>Project Context</h2>
              <p>
                This project is part of the final year research curriculum at 
                <strong> SLIIT Faculty of Computing Specializing in Data Science.</strong>. We focus on solving 
                critical safety and operational challenges faced by modern 
                railway systems through deep learning and IoT integration.
              </p>
              <div className="info-stats">
                <div className="stat">
                  <span className="stat-num">04</span>
                  <span className="stat-label">Core Components</span>
                </div>
                {/* <div className="stat">
                  <span className="stat-num">AI</span>
                  <span className="stat-label">Driven Tech</span>
                </div> */}
                {/* <div className="stat">
                  <span className="stat-num">24/7</span>
                  <span className="stat-label">Monitoring</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
