import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Skills from './sections/Skills.jsx';
import Projects from './sections/Projects.jsx';
import Education from './sections/Education.jsx';
import Achievements from './sections/Achievements.jsx';
import Contact from './sections/Contact.jsx';

function getInitialTheme() {
  try {
    return window.localStorage.getItem('portfolio-theme') || 'dark';
  } catch {
    return 'dark';
  }
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#111816' : '#f3f3ed');
    try {
      window.localStorage.setItem('portfolio-theme', theme);
    } catch {
      // The theme still works when storage is unavailable.
    }
  }, [theme]);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar theme={theme} onToggleTheme={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')} />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
