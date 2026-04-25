import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page pt-nav">
      <div className="container">
        <SectionHeader 
          title="Get In Touch" 
          subtitle="Have questions about our research? Contact us below."
          centered
        />

        <div className="contact-container">
          <div className="contact-info-side">
            <div className="contact-item glass-card">
              <Mail className="contact-icon" />
              <div className="contact-text">
                <h4>Email Us</h4>
                {/* <p>it22283412@my.sliit.lk</p> */}
                <p>it22283412@my.sliit.lk</p>

              </div>
            </div>
            <div className="contact-item glass-card">
              <MapPin className="contact-icon" />
              <div className="contact-text">
                <h4>Visit Us</h4>
                <p>SLIIT, New Kandy Rd, Malabe</p>
              </div>
            </div>
            <div className="contact-item glass-card">
              <Phone className="contact-icon" />
              <div className="contact-text">
                <h4>Call Us</h4>
                <p>+94 11 234 5678</p>
              </div>
            </div>
          </div>

          {/* <form className="contact-form glass-card">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Your message here..." rows="5"></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message <Send size={18} />
            </button>
          </form> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
