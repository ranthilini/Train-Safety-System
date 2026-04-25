// import React from 'react';
// import SectionHeader from '../components/SectionHeader';
// import { Presentation, PlayCircle, ExternalLink } from 'lucide-react';
// import './Documents.css'; // Reusing doc styles
// import progress1 from "../assets/presentations/progress1.pptx";
// import progress2 from "../assets/presentations/progress2.pptx";

// const Presentations = () => {
//   const presentations = [
//     { title: 'Proposal Presentation', date: 'June 2025' },
//     { title: 'Progress Presentation 1', date: 'Sept 2025' },
//     { title: 'Progress Presentation 2', date: 'Dec 2025' },
//     { title: 'Final Presentation', date: 'Feb 2026' }
//   ];

//   return (
//     <div className="presentations-page pt-nav">
//       <div className="container">
//         <SectionHeader 
//           title="Presentations" 
//           subtitle="View and download our research presentations."
//           centered
//         />

//         <div className="docs-grid">
//           {presentations.map((p, i) => (
//             <div key={i} className="doc-card glass-card">
//               <div className="doc-icon">
//                 <Presentation size={40} />
//               </div>
//               <div className="doc-info">
//                 <h3>{p.title}</h3>
//                 <span className="doc-meta">{p.date}</span>
//               </div>
//               <div className="doc-actions">
//                 <button className="icon-btn" title="Watch"><PlayCircle size={20} /></button>
//                 <button className="icon-btn primary" title="View"><ExternalLink size={20} /></button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Presentations;


import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { Presentation, PlayCircle, ExternalLink, Download } from 'lucide-react';
import './Documents.css';


import progress1 from "../assets/presentations/Progress Presentation 1.pptx";
import progress2 from "../assets/presentations/Progress Presentation 2.pptx";
import proposal from "../assets/presentations/Proposal Presentation.pptx";


const Presentations = () => {

  const presentations = [
    { title: 'Proposal Presentation',file:proposal },
    { title: 'Progress Presentation 1', file: progress1 },
    { title: 'Progress Presentation 2',  file: progress2 },
    { title: 'Final Presentation', date: ' 04 April 2026' }
  ];

  return (
    <div className="presentations-page pt-nav">
      <div className="container">
        
        <SectionHeader 
          title="Presentations" 
          subtitle="View and download our research presentations."
          centered
        />

        <div className="docs-grid">
          {presentations.map((p, i) => (
            <div key={i} className="doc-card glass-card">
              
              {/* <div className="doc-icon">
                <Presentation size={40} />
              </div> */}

              <div className="doc-info">
                <h3>{p.title}</h3>
                <span className="doc-meta">{p.date}</span>
              </div>

              <div className="doc-actions">
                
                {/* View Button */}
                {p.file && (
                  <a 
                    href={p.file} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="icon-btn"
                    title="View"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}

                {/* Download Button */}
                {p.file && (
                  <a 
                    href={p.file} 
                    download 
                    className="icon-btn primary"
                    title="Download"
                  >
                    <Download size={20} />
                  </a>
                )}

                {/* Optional Watch Button (for future online links) */}
                {!p.file && (
                  <button className="icon-btn disabled" title="Not Available">
                    <PlayCircle size={20} />
                  </button>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Presentations;