import { Award, Trophy } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';

const achievements = [
  {
    icon: Award,
    type: 'Academic recognition',
    title: 'School First Rank',
    detail: 'Class X Board Examinations',
    year: '2022',
    number: '01',
  },
  {
    icon: Trophy,
    type: 'Competition',
    title: 'District Level Chess Competition',
    detail: 'Participant',
    year: '',
    number: '02',
  },
];

export default function Achievements() {
  return (
    <section className="section section-achievements" id="achievements" aria-labelledby="achievements-title">
      <div className="section-wrap">
        <Reveal><SectionHeading id="achievements-title" index="05" eyebrow="Milestones" title="A couple of proud moments." /></Reveal>
        <div className="achievement-grid">
          {achievements.map(({ icon: Icon, ...item }, index) => (
            <Reveal className="achievement-item" key={item.number} delay={index * 0.08}>
              <div className="achievement-top"><span>{item.type}</span><span>{item.number}</span></div>
              <span className="achievement-icon"><Icon size={21} strokeWidth={1.6} /></span>
              <div className="achievement-copy">
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
              {item.year && <span className="achievement-year">{item.year}</span>}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
