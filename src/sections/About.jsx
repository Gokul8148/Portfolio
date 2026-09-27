import { BookOpen, Braces, Database, GraduationCap } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';

const highlights = [
  { icon: GraduationCap, label: 'Degree', value: 'B.Tech in Information Technology' },
  { icon: Braces, label: 'Foundations', value: 'Programming & data structures' },
  { icon: Database, label: 'Interests', value: 'Backend systems & databases' },
  { icon: BookOpen, label: 'Approach', value: 'Curious, structured problem solving' },
];

export default function About() {
  return (
    <section className="section section-about" id="about" aria-labelledby="about-title">
      <div className="section-wrap">
        <Reveal><SectionHeading id="about-title" index="01" eyebrow="A little about me" title="Curiosity, then code." description="A student building a thoughtful foundation for a career in software engineering." /></Reveal>
        <div className="about-layout">
          <Reveal className="about-intro" delay={0.08}>
            <p className="about-lead">I’m a third-year IT student at <em>PSG College of Technology</em>, Coimbatore, with a CGPA of <em>8.30</em> through semester four.</p>
            <p className="about-copy">I enjoy programming and working through data structure problems. My coursework and practice span programming, web technologies, and databases. I’m currently focused on growing toward backend and software engineering opportunities.</p>
            <p className="about-languages"><span>Languages</span><span>Tamil <i>Native</i><b>/</b> English <i>Professional proficiency</i></span></p>
            <span className="about-signature">Gokul D <span>— 2026</span></span>
          </Reveal>
          <div className="about-highlights">
            {highlights.map(({ icon: Icon, label, value }, index) => (
              <Reveal className="about-highlight" key={label} delay={0.06 * index}>
                <span className="about-highlight__icon"><Icon size={18} strokeWidth={1.6} /></span>
                <span className="about-highlight__text"><span>{label}</span><strong>{value}</strong></span>
                <span className="about-highlight__number">0{index + 1}</span>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="about-facts" aria-label="Profile summary">
          <div><span>8.30</span><small>CGPA / THROUGH SEM 4</small></div>
          <div><span>50+</span><small>DSA PROBLEMS SOLVED</small></div>
          <div><span>02</span><small>DOCUMENTED PROJECTS</small></div>
          <div><span>04</span><small>PROGRAMMING LANGUAGES</small></div>
        </div>
      </div>
    </section>
  );
}
