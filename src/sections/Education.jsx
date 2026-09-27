import { GraduationCap } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';

const education = [
  {
    period: '2026 — Present',
    level: 'Undergraduate',
    title: 'B.Tech — Information Technology',
    institution: 'PSG College of Technology',
    location: 'Coimbatore',
    detail: '3rd Year · 5th Semester',
    result: 'CGPA 8.30 · through 4th semester',
    current: true,
  },
  {
    period: '2024',
    level: 'Higher Secondary · Class XII',
    title: 'Higher Secondary',
    institution: 'Tiruvannamalai District Govt Model School',
    location: '',
    detail: 'Class XII',
    result: '92.5%',
  },
  {
    period: '2022',
    level: 'Secondary · Class X',
    title: 'Secondary',
    institution: 'V R C K S Govt Hr Sec School',
    location: 'Kovilur',
    detail: 'Class X',
    result: '92% · School First Rank',
  },
];

export default function Education() {
  return (
    <section className="section section-education" id="education" aria-labelledby="education-title">
      <div className="section-wrap">
        <Reveal><SectionHeading id="education-title" index="04" eyebrow="The learning path" title="Education." description="Academic milestones and the foundations behind my work." /></Reveal>
        <div className="education-layout">
          <div className="education-timeline">
            {education.map((item, index) => (
              <Reveal className={`education-item${item.current ? ' is-current' : ''}`} key={item.period} delay={index * 0.07}>
                <span className="education-marker">{item.current ? <GraduationCap size={17} /> : `0${index + 1}`}</span>
                <div className="education-content">
                  <div className="education-meta"><span>{item.period}</span><span>{item.level}</span></div>
                  <h3>{item.title}</h3>
                  <p className="education-school">{item.institution}{item.location && <><i />{item.location}</>}</p>
                  <div className="education-result"><span>{item.detail}</span><strong>{item.result}</strong></div>
                </div>
              </Reveal>
            ))}
          </div>
          <aside className="education-aside">
            <span className="education-aside__index">ACADEMIC NOTE / 01</span>
            <p>Learning the principles behind the tools, not just the tools themselves.</p>
            <span className="education-aside__line" />
            <span className="education-aside__caption">INFORMATION TECHNOLOGY<br />PSG COLLEGE OF TECHNOLOGY</span>
          </aside>
        </div>
      </div>
    </section>
  );
}
