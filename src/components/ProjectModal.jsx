import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, ExternalLink, Github, X } from 'lucide-react';
import Button from './Button.jsx';

export default function ProjectModal({ project, onClose, returnFocusRef }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!project) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleDialogKeys = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key !== 'Tab') return;
      const dialog = closeButtonRef.current?.closest('[role="dialog"]');
      const focusable = dialog?.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', handleDialogKeys);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleDialogKeys);
      returnFocusRef?.current?.focus();
    };
  }, [project, onClose, returnFocusRef]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.section
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, y: 20, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.99 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="modal-topline">
              <span><span className="modal-dot" /> PROJECT / {project.number}</span>
              <button className="icon-button modal-close" ref={closeButtonRef} type="button" onClick={onClose} aria-label="Close project details">
                <X size={19} />
              </button>
            </div>
            <div className="modal-content">
              <p className="eyebrow">{project.type} <span>/</span> {project.period}</p>
              <h2 id="project-modal-title">{project.title}</h2>
              <p className="modal-overview">{project.overview}</p>

              <div className="modal-columns">
                <div>
                  <h3>What I worked on</h3>
                  <ul className="modal-list">
                    {project.contributions.map((item) => <li key={item}><ArrowDownRight size={15} />{item}</li>)}
                  </ul>
                </div>
                <div className="modal-focus">
                  <h3>Learning & focus</h3>
                  <p>{project.focus}</p>
                  <h3>Technologies</h3>
                  <div className="tag-list">
                    {project.technologies.map((technology) => <span className="tag" key={technology}>{technology}</span>)}
                  </div>
                </div>
              </div>

              <div className="modal-actions">
                {project.github && <Button href={project.github} variant="secondary" target="_blank" rel="noreferrer"><Github size={16} /> GitHub</Button>}
                {project.demo && <Button href={project.demo} variant="secondary" target="_blank" rel="noreferrer"><ExternalLink size={16} /> Live demo</Button>}
                {!project.github && !project.demo && <span className="modal-unavailable">Project links not provided</span>}
              </div>
            </div>
            <span className="modal-watermark" aria-hidden="true"><ArrowUpRight /></span>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
