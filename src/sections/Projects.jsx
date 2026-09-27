import { useRef, useState } from 'react';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import ProjectModal from '../components/ProjectModal.jsx';
import { projects } from '../data/projects.js';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const triggerRef = useRef(null);

  const openProject = (project, event) => {
    triggerRef.current = event.currentTarget;
    setSelectedProject(project);
  };
  const closeProject = () => setSelectedProject(null);

  return (
    <section className="section section-projects" id="projects" aria-labelledby="projects-title">
      <div className="section-wrap">
        <Reveal><SectionHeading id="projects-title" index="03" eyebrow="Selected work" title="Projects in practice." description="A small collection of work and deliberate problem-solving practice." /></Reveal>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.08}>
              <ProjectCard project={project} index={index} onOpen={(event) => openProject(project, event)} />
            </Reveal>
          ))}
        </div>
        <div className="projects-footnote"><span>MORE TO COME</span><span>Building foundations one project at a time.</span></div>
      </div>
      <ProjectModal project={selectedProject} onClose={closeProject} returnFocusRef={triggerRef} />
    </section>
  );
}
