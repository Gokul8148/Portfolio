import { ArrowUpRight, Github, Instagram, Linkedin, Mail } from 'lucide-react';
import { socialLinks } from '../data/socialLinks.js';

const socialItems = [
  ['linkedin', Linkedin, 'LinkedIn'],
  ['github', Github, 'GitHub'],
  ['instagram', Instagram, 'Instagram'],
];

export default function Footer() {
  const activeSocials = socialItems.filter(([key]) => socialLinks[key]);

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <a className="footer-identity" href="#home">
          <span className="footer-monogram">G<span>.</span></span>
          <span><strong>Gokul D</strong><small>B.Tech Information Technology<br />PSG College of Technology</small></span>
        </a>
        <div className="footer-note">Built with intention.<br /><span>Tamil Nadu</span></div>
        <div className="footer-socials" aria-label="Social links">
          <a href={`mailto:${socialLinks.email}`} aria-label="Email Gokul"><Mail size={17} /></a>
          {activeSocials.map(([key, Icon, label]) => (
            <a href={socialLinks[key]} key={key} target="_blank" rel="noreferrer" aria-label={label}>
              <Icon size={17} />
            </a>
          ))}
        </div>
        <a className="back-to-top" href="#home" aria-label="Back to top"><ArrowUpRight size={18} /></a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Gokul D</span>
        <span>Information Technology <i /> Software Engineering</span>
      </div>
    </footer>
  );
}
