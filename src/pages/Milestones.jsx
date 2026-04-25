// import React from 'react';
// import SectionHeader from '../components/SectionHeader';
// import { CheckCircle2, Circle } from 'lucide-react';
// import './Milestones.css';

// const Milestones = () => {
//   const milestones = [
//     {
//       title: 'Proposal Presentation',
//       // date: 'May 2025',
//       // desc: 'Formulation of research problem, objectives, and initial system architecture. Approved by the faculty panel.',
//       marks: '6%',
//       status: 'completed'
//     },
//      {
//       title: 'Proposal Report ',
//       // date: 'May 2025',
//       // desc: 'Formulation of research problem, objectives, and initial system architecture. Approved by the faculty panel.',
//       marks: '6%',
//       status: 'completed'
//     },
//     {
//       title: 'Progress Presentation 1 (50%)',
//       // date: 'August 2025',
//       // desc: 'Demonstration of core AI modules: Crowd density classification and facial analysis for driver fatigue.',
//       marks: '15%',
//       status: 'completed'
//     },
//     {
//       title: 'Progress Presentation 2(90%)',
//       // date: 'November 2025',
//       // desc: 'Integration of obstacle detection and Arduino sensor fusion. Initial testing on simulated environments.',
//       marks: '18%',
//       status: 'completed'
//     },

//     {
//       title: 'Final Report ',
//       marks: '15%',
//       status: 'completed'
//     },
//       {
//       title: 'Final Report (Group) ',
//       marks: '4%',
//       status: 'completed'
//     },
//  {
//       title: 'Research Paper',
//       marks: '10%',
//       status: 'completed'
//     },
//     {
//       title: 'Final presentation',
//       marks: '10%',
//       status: 'Not Yet Completed'
//     },
//      {
//       title: 'Viva',
//       marks: '10%',
//       status: 'Ongoing'
//     }
//   ,
//   {
//       title: 'Website',
//       marks: '2%',
//       status: 'Completed'
//     },
//     {
//       title: 'Checklists',
//       marks: '10%',
//       status: 'Ongoing'
//     },
//     {
//       title: 'Logbook',
//       marks: '10%',
//       status: 'Completed'
//     }
//   ];

//   return (
//     <div className="milestones-page pt-nav">
//       <div className="container">
//         <SectionHeader 
//           title="Project Milestones" 
//           subtitle="Tracking our progress through the academic year."
//           centered
//         />

//         <div className="timeline">
//           {milestones.map((m, i) => (
//             <div key={i} className={`timeline-item ${m.status}`}>
//               <div className="timeline-marker">
//                 {m.status === 'completed' ? <CheckCircle2 size={24} /> : <Circle size={24} />}
                
//               </div>
//               <div className="timeline-content glass-card">
//                 <div className="timeline-header">
//                   <h3>{m.title}</h3>
//                   <span className="milestone-date">{m.date}</span>
//                 </div>
//                 <p className="milestone-desc">{m.desc}</p>
//                 <div className="milestone-footer">
//                   <span className="milestone-marks">Weight: {m.marks}</span>
//                   <span className={`status-badge ${m.status}`}>{m.status}</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Milestones;
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { CheckCircle2, Circle, Clock, AlertCircle } from 'lucide-react';
import './Milestones.css';

const Milestones = () => {
  const milestones = [
    {
      title: 'Proposal Presentation',
      marks: '6%',
      status: 'completed'
    },
    {
      title: 'Proposal Report',
      marks: '6%',
      status: 'completed'
    },
    {
      title: 'Progress Presentation 1 (50%)',
      marks: '15%',
      status: 'completed'
    },
    {
      title: 'Progress Presentation 2 (90%)',
      marks: '18%',
      status: 'completed'
    },
    {
      title: 'Final Report',
      marks: '15%',
      status: 'completed'
    },
    {
      title: 'Final Report (Group)',
      marks: '4%',
      status: 'completed'
    },
    {
      title: 'Research Paper',
      marks: '10%',
      status: 'ongoing'
    },
    {
      title: 'Final presentation',
      marks: '10%',
      status: 'not-yet-completed'
    },
    {
      title: 'Viva',
      marks: '10%',
      status: 'ongoing'
    },
    {
      title: 'Website',
      marks: '2%',
      status: 'completed'
    },
    {
      title: 'Checklists',
      marks: '10%',
      status: 'ongoing'
    },
    {
      title: 'Logbook',
      marks: '10%',
      status: 'completed'
    }
  ];

  const renderIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 size={24} />;
      case 'ongoing':
        return <Clock size={24} />;
      case 'not-yet-completed':
        return <AlertCircle size={24} />;
      default:
        return <Circle size={24} />;
    }
  };

  return (
    <div className="milestones-page pt-nav">
      <div className="container">
        <SectionHeader
          title="Project Milestones"
          subtitle="Tracking our progress through the academic year."
          centered
        />

        <div className="timeline">
          {milestones.map((m, i) => (
            <div key={i} className={`timeline-item ${m.status}`}>
              <div className="timeline-marker">
                {renderIcon(m.status)}
              </div>

              <div className="timeline-content glass-card">
                <div className="timeline-header">
                  <h3>{m.title}</h3>
                </div>

                <div className="milestone-footer">
                  <span className="milestone-marks">Weight: {m.marks}</span>
                  <span className={`status-badge ${m.status}`}>
                    {m.status.replace('-', ' ')}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Milestones;