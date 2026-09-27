import { ArrowUpRight } from 'lucide-react';

export default function SkillCard({ group, Icon, index }) {
  return (
    <article className="skill-card">
      <div className="skill-card__top">
        <span className="skill-card__icon"><Icon size={20} strokeWidth={1.6} aria-hidden="true" /></span>
        <span className="skill-card__index">0{index + 1}</span>
      </div>
      <p className="skill-card__summary">{group.summary}</p>
      <h3>{group.title}</h3>
      <ul className="skill-list">
        {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
      </ul>
      <ArrowUpRight className="skill-card__arrow" size={17} strokeWidth={1.5} aria-hidden="true" />
    </article>
  );
}
