import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { Mail, Globe, Code } from 'lucide-react';
import './About.css';

import prarthana from '../assets/images/it22291578.jpg';
import heshani from '../assets/images/it22597342.jpeg';
import sasmitha from '../assets/images/IT22283412.jpeg';
import ishini from '../assets/images/IT22250988.jpeg';

const About = () => {
  const members = [
    {
      name: 'Udaya Sri A L S',
      id: "IT22283412",
      role: 'Crowd Density Detection',
      email: 'it22283412@my.sliit.lk',
      image: sasmitha,
      github: 'https://github.com/SasmithaUdaya/'
    },
    {
      name: 'Bandara I K',
      id: "IT22250988",
      role: 'Platform Alignment',
      email: 'it22250988@my.sliit.lk',
      image: ishini,
      github:'https://github.com/Ishini-Kaveesha'
    },
    {
      name: 'Prarthana L D R',
      id: "IT22291578",
      role: 'Obstacle Detection',
      email: 'it22291578@my.sliit.lk',
      image: prarthana,
      github:'https://github.com/ranthilini'
    },
    {
      name: 'Jayasinghe J M H C',
      id: "IT22597342",
      role: 'Driver Support System',
      email: 'it22597342@my.sliit.lk',
      image: heshani,
      github:'https://github.com/heshaniC'
    }
  ];

  return (
    <div className="about-page pt-nav">
      <div className="container">

        <SectionHeader
          title="About Our Team"
          subtitle="The researchers behind the AI Rail Safety project."
          centered
        />

        <div className="members-grid">
          {members.map((m, i) => (
            <div key={i} className="member-card glass-card">

              <div className="member-img">
                <img src={m.image} alt={m.name} />
              </div>

              <div className="member-info">
                <h3>{m.name}</h3>
                <h4>{m.id}</h4>

                <span className="member-role">{m.role}</span>

                <p className="member-desc">
                  Final Year Student at SLIIT Faculty of Computing, specializing in Data Science.
                </p>

                <div className="member-social">

                  <a href={`mailto:${m.email}`} className="social-link">
                    <Mail size={18} />
                  </a>

                  {m.github && (
                    <a
                      href={m.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      style={{ fontSize: '14px', fontWeight: 'bold' }}
                    >
                      GH
                    </a>
                  )}

                  <a href="#" className="social-link">
                    <Code size={18} />
                  </a>

                </div>
              </div>

            </div>
          ))}
        </div>

        <section className="faculty-info glass-card">
          <div className="faculty-content">
            <h3>Our Department</h3>
            <p>
              SLIIT Faculty of Computing is dedicated to excellence in education and research.
              Our project is mentored by industry experts and academic scholars committed
              to advancing the frontiers of AI and safety systems.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;


// import React from 'react';
// import SectionHeader from '../components/SectionHeader';
// import { Mail, Globe } from 'lucide-react';
// import './About.css';

// import prarthana from '../assets/images/it22291578.jpg';
// import heshani from '../assets/images/it22597342.jpeg';
// import sasmitha from '../assets/images/IT22283412.jpeg';
// import ishini from '../assets/images/IT22250988.jpeg';

// const About = () => {
//   const members = [
//     {
//       name: 'Udaya Sri A L S',
//       id: "IT22283412",
//       role: 'Crowd Density Detection',
//       email: 'it22283412@my.sliit.lk',
//       image: sasmitha,
//       github: 'https://github.com/SasmithaUdaya/',
//       website: 'https://example.com'
//     },
//     {
//       name: 'Bandara I K',
//       id: "IT22250988",
//       role: 'Platform Alignment',
//       email: 'it22250988@my.sliit.lk',
//       image: ishini,
//       github: 'https://github.com/yourusername'
//     },
//     {
//       name: 'Prarthana L D R',
//       id: "IT22291578",
//       role: 'Obstacle Detection',
//       email: 'it22291578@my.sliit.lk',
//       image: prarthana,
//       github: 'https://github.com/yourusername'
//     },
//     {
//       name: 'Jayasinghe J M H C',
//       id: "IT22597342",
//       role: 'Driver Support System',
//       email: 'it22597342@my.sliit.lk',
//       image: heshani,
//       github: 'https://github.com/yourusername'
//     }
//   ];

//   return (
//     <div className="about-page pt-nav">
//       <div className="container">

//         <SectionHeader
//           title="About Our Team"
//           subtitle="The researchers behind the AI Rail Safety project."
//           centered
//         />

//         <div className="members-grid">
//           {members.map((m, i) => (
//             <div key={i} className="member-card glass-card">

//               <div className="member-img">
//                 <img src={m.image} alt={m.name} />
//               </div>

//               <div className="member-info">
//                 <h3>{m.name}</h3>
//                 <h4>{m.id}</h4>

//                 <span className="member-role">{m.role}</span>

//                 <p className="member-desc">
//                   Final Year Student at SLIIT Faculty of Computing, specializing in Data Science.
//                 </p>

//                 <div className="member-social">

//                   {/* Email */}
//                   <a href={`mailto:${m.email}`} className="social-link">
//                     <Mail size={18} />
//                   </a>

//                   {/* Website */}
//                   {m.website && (
//                     <a
//                       href={m.website}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="social-link"
//                     >
//                       <Globe size={18} />
//                     </a>
//                   )}

//                   {/* GitHub - using text fallback */}
//                   {m.github && (
//                     <a
//                       href={m.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="social-link"
//                       style={{ fontSize: '18px', fontWeight: 'bold' }}
//                     >
//                       GH
//                     </a>
//                   )}

//                 </div>
//               </div>

//             </div>
//           ))}
//         </div>

//         <section className="faculty-info glass-card">
//           <div className="faculty-content">
//             <h3>Our Department</h3>
//             <p>
//               SLIIT Faculty of Computing is dedicated to excellence in education and research.
//               Our project is mentored by industry experts and academic scholars committed
//               to advancing the frontiers of AI and safety systems.
//             </p>
//           </div>
//         </section>

//       </div>
//     </div>
//   );
// };

// export default About;