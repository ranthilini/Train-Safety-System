import React from 'react';
import { TrainFront, Mail, MapPin, Globe } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-info">
          <div className="footer-logo">
            <TrainFront className="logo-icon" size={24} />
            {/* <span>AI Rail Safety</span> */}
          </div>
          <p className="footer-desc">
            Enhancing Railway Safety with AI-powered Real-Time Monitoring. 
            {/* A research project by SLIIT Faculty of Computing students. */}
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/domain">Domain</a></li>
            <li><a href="/milestones">Milestones</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Info</h4>
          <ul>
            <li><Mail size={16} /> <span>it22283412@my.sliit.lk</span></li>
            <li><MapPin size={16} /> <span>SLIIT, Malabe, Sri Lanka</span></li>
            <li><Globe size={16} /> <span>Faculty of Computing Specializing in Data Science.</span></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Group 25-26J-134 | SLIIT Faculty of Computing .</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
