import { ArrowUpRight, MoveUpRight } from 'lucide-react';

export default function ProjectCard({ project, onOpen, index }) {
  return (
    <button className={`project-card project-card--${project.id}`} type="button" onClick={onOpen}>
      <span className="project-card__topline">
        <span className="project-card__number">{project.number} / 02</span>
        <span className="project-card__type">{project.type}</span>
      </span>
      <span className="project-card__visual" aria-hidden="true">
        {project.id === 'portfolio' ? (
          <span className="portfolio-visual">
            <span className="portfolio-visual__bar"><i /><i /><i /></span>
            <span className="portfolio-visual__body">
              <span className="portfolio-visual__portrait">G<span>.</span></span>
              <span className="portfolio-visual__lines"><i /><i /><i /></span>
            </span>
            <span className="portfolio-visual__caption">PERSONAL / WEB</span>
          </span>
        ) : (
          <span className="algorithm-visual">
            <span className="algorithm-visual__label">TIME / SPACE</span>
            <span className="algorithm-visual__nodes"><i /><i /><i /><i /><i /></span>
            <span className="algorithm-visual__code">[ 01, 05, 12, 50+ ]</span>
          </span>
        )}
      </span>
      <span className="project-card__content">
        <span className="project-card__year">{project.period}</span>
        <span className="project-card__title-row">
          <span className="project-card__title">{project.title}</span>
          <span className="project-card__open"><MoveUpRight size={18} /></span>
        </span>
        <span className="project-card__description">{project.description}</span>
        <span className="tag-list">
          {project.technologies.map((technology) => <span className="tag" key={technology}>{technology}</span>)}
        </span>
        <span className="project-card__details">View details <ArrowUpRight size={15} /></span>
      </span>
    </button>
  );
}
