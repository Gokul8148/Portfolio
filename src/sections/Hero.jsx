import { ArrowDown, ArrowDownToLine, ArrowRight, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/Button.jsx';

export default function Hero() {
  return (
    <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <motion.div className="hero-kicker" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
          <span className="status-mark" />
          <span>Information Technology <i /> PSG College of Technology</span>
        </motion.div>
        <motion.h1 id="hero-title" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.58, delay: 0.08 }}>
          Gokul <span>D<span className="hero-period">.</span></span>
        </motion.h1>
        <motion.p className="hero-role" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.16 }}>
          B.Tech Information Technology Student
        </motion.p>
        <motion.p className="hero-description" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.23 }}>
          Building strong foundations in programming and problem solving. Interested in backend and software engineering internships.
        </motion.p>
        <motion.div className="hero-ctas" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
          <Button href="#projects" icon="arrow">View projects</Button>
          <Button href="#contact" variant="secondary" icon="mail">Contact me</Button>
          <a className="resume-link" href="/RESUME.pdf" target="_blank" rel="noreferrer" aria-label="Open resume PDF in a new tab">
            <ArrowDownToLine size={16} /> <span>Resume</span>
          </a>
        </motion.div>
        <motion.div className="hero-location" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
          <MapPin size={14} strokeWidth={1.7} /> <span>Tiruvannamalai, Tamil Nadu</span>
          <a href="#about" className="hero-scroll" aria-label="Scroll to about section"><ArrowDown size={15} /></a>
        </motion.div>
      </div>

      <motion.div className="hero-portrait-wrap" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
        <div className="portrait-frame">
          <img className="hero-portrait" src="/profile.png" alt="Portrait of Gokul D" />
          <div className="portrait-index"><span>01</span><span>PROFILE</span></div>
          <div className="portrait-caption"><span>GOKUL D</span><span>IT / STUDENT</span></div>
        </div>
        <div className="hero-coordinate" aria-hidden="true">11°00' N<br />76°58' E</div>
        <div className="hero-side-note" aria-hidden="true">LEARN <i /> BUILD <i /> REPEAT</div>
      </motion.div>

      <div className="hero-bottomline" aria-hidden="true">
        <span>OPEN TO INTERNSHIP OPPORTUNITIES</span>
        <span>01 — 07</span>
      </div>
    </section>
  );
}
