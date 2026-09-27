import { Binary, Code2, Database, PanelsTopLeft, Wrench } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import SkillCard from '../components/SkillCard.jsx';
import { coursework, skillGroups } from '../data/skills.js';

const icons = { Code2, Binary, PanelsTopLeft, Database, Wrench };

export default function Skills() {
  return (
    <section className="section section-skills" id="skills" aria-labelledby="skills-title">
      <div className="section-wrap">
        <Reveal><SectionHeading id="skills-title" index="02" eyebrow="Technical toolkit" title="What I work with." description="Skills built through coursework, independent practice, and projects." /></Reveal>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <Reveal key={group.id} delay={index * 0.045}>
              <SkillCard group={group} Icon={icons[group.icon]} index={index} />
            </Reveal>
          ))}
        </div>
        <Reveal className="coursework-row" delay={0.1}>
          <div className="coursework-heading"><span className="coursework-dot" /><span>Relevant coursework</span></div>
          <div className="coursework-items">
            {coursework.map((item) => <span key={item}>{item}</span>)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
