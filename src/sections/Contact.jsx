import { ArrowUpRight, Mail, MoveUpRight } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { socialLinks } from '../data/socialLinks.js';

export default function Contact() {
  return (
    <section className="section section-contact" id="contact" aria-labelledby="contact-title">
      <div className="section-wrap">
        <Reveal><SectionHeading id="contact-title" index="06" eyebrow="Start a conversation" title="Let’s build something meaningful." description="I’m interested in internship and software engineering opportunities." /></Reveal>
        <Reveal className="contact-panel" delay={0.08}>
          <div className="contact-main">
            <span className="contact-overline"><span className="contact-status" /> CURRENTLY OPEN TO OPPORTUNITIES</span>
            <h3>Good work starts<br />with a conversation.</h3>
            <a className="contact-email" href={`mailto:${socialLinks.email}`}>
              <span><Mail size={17} />{socialLinks.email}</span><ArrowUpRight size={20} />
            </a>
          </div>
          <div className="contact-aside">
            <span className="contact-aside__label">ELSEWHERE</span>
            <div className="contact-socials">
              {socialLinks.linkedin && <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn <MoveUpRight size={15} /></a>}
              {socialLinks.github && <a href={socialLinks.github} target="_blank" rel="noreferrer">GitHub <MoveUpRight size={15} /></a>}
              {socialLinks.instagram && <a href={socialLinks.instagram} target="_blank" rel="noreferrer">Instagram <MoveUpRight size={15} /></a>}
              {!socialLinks.linkedin && !socialLinks.github && !socialLinks.instagram && <span className="contact-not-listed">Email is the best way to reach me for now.</span>}
            </div>
            <span className="contact-location">Tiruvannamalai, Tamil Nadu</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
