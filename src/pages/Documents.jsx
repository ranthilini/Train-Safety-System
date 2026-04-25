// // import React from 'react';
// // import SectionHeader from '../components/SectionHeader';
// // import { FileText, Download, Eye } from 'lucide-react';
// // import './Documents.css';
// // import taf from "../assets/documents/TAF_25-26J-134.pdf";


// // const Documents = () => {
// //   const docs = [
// //     { title: 'TAF Document', type: 'PDF', size: '1.2 MB' ,file:taf},
// //     { title: 'Proposal Document', type: 'PDF', size: '2.5 MB' },
// //     { title: 'Checklists', type: 'XLSX', size: '450 KB' },
// //     { title: 'Final Report', type: 'PDF', size: '8.4 MB' }
// //   ];

// //   return (
// //     <div className="documents-page pt-nav">
// //       <div className="container">
// //         <SectionHeader 
// //           title="Project Documents" 
// //           subtitle="Access all academic documentation and reports."
// //           centered
// //         />

// //         <div className="docs-grid">
// //           {docs.map((doc, i) => (
// //             <div key={i} className="doc-card glass-card">
// //               {/* <div className="doc-icon">
// //                 <FileText size={40} />
// //               </div> */}
// //               <div className="doc-info">
// //                 <h3>{doc.title}</h3>
// //                 <span className="doc-meta">{doc.type} </span>
// //               </div>
// //               <div className="doc-actions">
// //                 <button className="icon-btn" title="View"><Eye size={20} /></button>
// //                 <button className="icon-btn primary" title="Download"><Download size={20} /></button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Documents;


// import React from 'react';
// import SectionHeader from '../components/SectionHeader';
// import { Download, Eye } from 'lucide-react';
// import './Documents.css';

// // Import your files
// import taf from "../assets/documents/TAF_25-26J-134.pdf";
// import proposalit22291578 from "../assets/documents/25-26J-134_IT22291578.pdf";
// import proposalit22597342 from "../assets/documents/25_26J-134_IT22597342.pdf";
// import proposalit22250988 from "../assets/documents/25-26J-134_IT22250988.pdf";

// import checklist1 from "../assets/documents/25-26J-134_Checklist_1.xlsx";
// // import finalReport from "../assets/documents/final-report.pdf";

// const Documents = () => {

//   const docs = [
//     { title: 'TAF Document', type: 'PDF', size: '1.2 MB', file: taf },
//     { title: 'Proposal Document IT22291578', type: 'PDF', size: '2.5 MB',file:proposalit22291578  }, // add file later
//     { title: 'Proposal Document IT22597342', type: 'PDF', size: '2.5 MB',file:proposalit22597342  }, // add file later
//     { title: 'Proposal Document IT22250988', type: 'PDF', size: '2.5 MB',file:proposalit22250988  }, // add file later
//     { title: 'Checklist 1', type: 'XLSX',file:checklist1 },
//     { title: 'Final Report', type: 'PDF', size: '8.4 MB' }
//   ];

//   return (
//     <div className="documents-page pt-nav">
//       <div className="container">

//         <SectionHeader 
//           title="Project Documents" 
//           subtitle="Access all academic documentation and reports."
//           centered
//         />

//         <div className="docs-grid">
//           {docs.map((doc, i) => (
//             <div key={i} className="doc-card glass-card">

//               <div className="doc-info">
//                 <h3>{doc.title}</h3>
//                 <span className="doc-meta">{doc.type}</span>
//               </div>

//               <div className="doc-actions">

//                 {/* View Button */}
//                 {doc.file ? (
//                   <a
//                     href={doc.file}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="icon-btn"
//                     title="View"
//                   >
//                     <Eye size={20} />
//                   </a>
//                 ) : (
//                   <button className="icon-btn disabled" title="Not Available">
//                     <Eye size={20} />
//                   </button>
//                 )}

//                 {/* Download Button */}
//                 {doc.file ? (
//                   <a
//                     href={doc.file}
//                     download
//                     className="icon-btn primary"
//                     title="Download"
//                   >
//                     <Download size={20} />
//                   </a>
//                 ) : (
//                   <button className="icon-btn primary disabled" title="Not Available">
//                     <Download size={20} />
//                   </button>
//                 )}

//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Documents;
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { Download, Eye } from 'lucide-react';
import './Documents.css';

import taf from "../assets/documents/TAF_25-26J-134.pdf";
import proposalit22291578 from "../assets/documents/25-26J-134_IT22291578.pdf";
import proposalit22597342 from "../assets/documents/25_26J-134_IT22597342.pdf";
import proposalit22250988 from "../assets/documents/25-26J-134_IT22250988.pdf";
import proposalit22283412 from "../assets/documents/25_26J-134_IT22283412.pdf";


const Documents = () => {
  const docs = [
    {
      title: 'TAF Document',
      type: 'PDF',
      size: '1.2 MB',
      file: taf
    },
    {
      title: 'Proposal Document IT22283412',
      type: 'PDF',
      file: proposalit22283412
    },
    {
      title: 'Proposal Document IT22250988',
      type: 'PDF',
      file: proposalit22250988
    },
    {
      title: 'Proposal Document IT22291578',
      type: 'PDF',
      file: proposalit22291578
    },
    {
      title: 'Proposal Document IT22597342',
      type: 'PDF',
      file: proposalit22597342
    },
    

    
    {
      title: 'Checklist 1',
      type: 'XLSX',
      file: '/documents/25-26J-134_Checklist_1.xlsx'
    },

    {
      title: 'Final Report',
      type: 'PDF',
    }
  ];

  return (
    <div className="documents-page pt-nav">
      <div className="container">

        <SectionHeader
          title="Project Documents"
          subtitle="Access all academic documentation and reports."
          centered
        />

        <div className="docs-grid">
          {docs.map((doc, i) => (
            <div key={i} className="doc-card glass-card">

              <div className="doc-info">
                <h3>{doc.title}</h3>
                <span className="doc-meta">{doc.type}</span>
              </div>

              <div className="doc-actions">

                {/* VIEW */}
                {doc.file ? (
                  <a
                    href={doc.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-btn"
                    title="View"
                  >
                    <Eye size={20} />
                  </a>
                ) : (
                  <button className="icon-btn disabled" title="Not Available">
                    <Eye size={20} />
                  </button>
                )}

                {/* DOWNLOAD */}
                {doc.file ? (
                  <a
                    href={doc.file}
                    download
                    className="icon-btn primary"
                    title="Download"
                  >
                    <Download size={20} />
                  </a>
                ) : (
                  <button className="icon-btn primary disabled" title="Not Available">
                    <Download size={20} />
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

export default Documents;