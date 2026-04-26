import React from 'react';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import { BookOpen, Search, AlertCircle, Target, Wrench, Cpu, Code, Activity } from 'lucide-react';
import './Domain.css';
import archiImg from "../assets/images/archi.png";

const Domain = () => {
  return (
    <div className="domain-page pt-nav">
      <div className="container">
        <SectionHeader 
          title="Domain Research" 
          subtitle="Understanding the challenges and our approach to solving them."
        />

        <div className="domain-grid">
          {/* Literature Survey */}
          <section id="literature" className="domain-section">
            <div className="section-icon-header">
              {/* <BookOpen className="accent-icon" /> */}
              <h3>Literature Survey</h3>
            </div>
            <div className="glass-card domain-content-card">
              <p>
                Explores existing research and technologies in crowd detection, obstacle detection, driver fatigue monitoring, and platform alignment within railway systems. It highlights current methods, their strengths and limitations, and helps identify research gaps, forming the foundation for the proposed AI-powered integrated solution.
              </p>
              <ul>
                <li><strong>Crowd Detection:</strong> Previous methods relied on simple pixel change analysis, which is prone to errors in changing lighting conditions.</li>
                <li> <strong>Platform compartment Alignment: </strong>uses crowd analysis to optimize train stopping positions and reduce overcrowding.</li>
                <li><strong>Obstacle Detection:</strong> Most current systems are radar-based but lack the visual confirmation provided by modern computer vision.</li>
                <li><strong>Driver Fatigue:</strong> Existing train driver fatigue and drowsiness detection systems mainly rely on single-method monitoring, limiting detection accuracy and reliability.</li>
              </ul>
            </div>
          </section>

          {/* Research Gap & Problem */}
          <div className="two-col-grid">

            <Card title="Research Problem" icon={AlertCircle}>
              <p>Unsafe boarding due to overcrowding, frequent delays caused by track obstacles, and high accident risks from undetected driver fatigue.</p>
            </Card>
            <Card title="Research Gap" icon={Search}>
              <p>Lack of integrated multi-modal systems that combine passenger safety with operational efficiency. Most current solutions are reactive rather than predictive.</p>
            </Card>
            
          </div>

          {/* Objectives */}
          <section id="objectives" className="domain-section">
            <div className="section-icon-header">
              {/* <Target className="accent-icon" /> */}
              <h3>Research Objectives</h3>
            </div>
            <div className="objectives-grid">
              <div className="obj-item">
                <span className="obj-num">01</span>
                <p>To detect and classify train compartment crowd levels in real time for improving passenger safety and boarding efficiency.</p>
              </div>
              <div className="obj-item">
                <span className="obj-num">02</span>
                <p>To optimize train stopping positions using real-time platform crowd analysis to ensure balanced passenger distribution.</p>
              </div>
              <div className="obj-item">
                <span className="obj-num">03</span>
                <p>To detect obstacles on railway tracks in real time and provide early alerts to prevent collisions and delays.</p>
              </div>
              <div className="obj-item">
                <span className="obj-num">04</span>
                <p> To detect driver fatigue and drowsiness using AI and sensor data to improve driving safety and prevent accidents.</p>
              </div>
            </div>
          </section>

          {/* Methodology */}
          <section id="methodology" className="domain-section">
            <div className="section-icon-header">
              {/* <Wrench className="accent-icon" /> */}
              <h3>Methodology</h3>
            </div>
            <div className="glass-card methodology-card">
              <div className="method-step">
                <h4>Data Acquisition</h4>
                <p>High-resolution video streams from station CCTVs and onboard cameras, supplemented by Arduino-based sensors.</p>
              </div>
              <div className="method-step">
                <h4>AI Processing</h4>
                <p>Utilization of YOLOv8 for object detection and MediaPipe for facial landmark tracking. Processing handled on edge devices for low latency.</p>
              </div>
              <div className="method-step">
                <h4>Decision Logic</h4>
                <p>Integration of ML models (Random Forest, Custom models, MLP) to classify risk levels and trigger real-time alerts via REST APIs.</p>
              </div>
            </div>
          </section>

          {/* System Architecture */}
          <section id="architecture" className="domain-section">
            <div className="section-icon-header">
              {/* <Cpu className="accent-icon" /> */}
              <h3>System Architecture & Integration</h3>
            </div>
            <div className="glass-card architecture-card">

             <div className="arch-placeholder">
  <img 
    src={archiImg} 
    alt="System Architecture Diagram" 
    className="arch-image"
  />
</div>


              {/* <div className="arch-details">
                <div className="arch-item">
                  <h4>Processing</h4>
                  <p>Edge processing for low latency, local server for data aggregation.</p>
                </div>
                <div className="arch-item">
                  <h4>Communication</h4>
                  <p>REST APIs with JSON data format for seamless module integration.</p>
                </div>
              </div> */}
            </div>
          </section>

          {/* Demo Plan */}
          <section id="demo" className="domain-section">
            <div className="section-icon-header">
              {/* <Wrench className="accent-icon" /> */}
              <h3>Demo Plan</h3>
            </div>
            <div className="demo-steps">
              <div className="demo-step-card glass-card">
                <span className="step-num">Step 1</span>
                <h4>Crowd Detection</h4>
                <p>Live stream analysis of station platforms showing occupancy levels.</p>
              </div>
              <div className="demo-step-card glass-card">
                <span className="step-num">Step 2</span>
                <h4>Platform Alignment</h4>
                <p>Simulated train arrival with optimized stopping position display.</p>
              </div>
              <div className="demo-step-card glass-card">
                <span className="step-num">Step 3</span>
                <h4>Obstacle Detection</h4>
                <p>Detection of objects on track with automated braking alerts.</p>
              </div>
              <div className="demo-step-card glass-card">
                <span className="step-num">Step 4</span>
                <h4>Driver Monitoring</h4>
                <p>Real-time fatigue alerts triggered by eye closure and heart rate spikes.</p>
              </div>
            </div>
          </section>

          {/* Commercialization */}
          <section id="commercialization" className="domain-section">
            <div className="section-icon-header">
              {/* <Target className="accent-icon" /> */}
              <h3>Commercialization</h3>
            </div>
            <div className="commercial-grid">
              <Card title="Value Proposition">
                <p>Integrated AI system using existing CCTV infrastructure to reduce safety risks and operational delays with minimal hardware costs.</p>
              </Card>
              <Card title="Target Market">
                <p>Railway authorities, train operating companies, and urban metro systems worldwide seeking smart infrastructure solutions.</p>
              </Card>
              <Card title="Uniqueness">
                <p>Combines AI, sensor fusion, and multi-objective optimization in a single cohesive unit focused on holistic safety.</p>
              </Card>
            </div>
          </section>

          {/* Technologies */}
          <section id="technologies" className="domain-section">
             <div className="section-icon-header">
              {/* <Cpu className="accent-icon" /> */}
              <h3>Technologies Used</h3>
            </div>
            <div className="tech-tags">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">OpenCV</span>
              <span className="tech-tag">YOLO v8</span>
              <span className="tech-tag">Arduino</span>
              <span className="tech-tag">MediaPipe</span>
              <span className="tech-tag">React</span>
              <span className="tech-tag">REST APIs</span>
              <span className="tech-tag">Machine Learning</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Domain;
