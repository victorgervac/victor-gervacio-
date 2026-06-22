import React, { useMemo, useState } from "react";
import {
  faReact,
  faSwift,
  faSquareJs,
  faHtml5,
  faCss3Alt,
  faNodeJs,
  faGitAlt,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import { faGem, faWind, faDatabase, faFire, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { projects, techStack } from "../data";
import { useInView } from "../Hooks/useInView";
import "../styles/PastWork.css";

const checkModule = (index) => index % 2 === 0;

const TACOS = {
  ruby: faGem,
  js: faSquareJs,
  react: faReact,
  swift: faSwift,
  html: faHtml5,
  css: faCss3Alt,
  tailwind: faWind,
  node: faNodeJs,
  postgres: faDatabase,
  git: faGitAlt,
  firebase: faFire,
  figma: faFigma,
};

const projectStack = (project) => [
  ...(project.frontTechSatck || []),
  ...(project.backTechStack || []),
];

const TechBadge = ({ icon, label, accent, description, index, isActive, onSelect }) => {
  const iconObject = TACOS[icon];
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <button
      ref={ref}
      type="button"
      onClick={() => onSelect(label)}
      className={`tech-badge${inView ? " in-view" : ""}${isActive ? " active" : ""}`}
      style={{ "--accent": accent, transitionDelay: `${index * 0.05}s` }}
      aria-pressed={isActive}
    >
      <FontAwesomeIcon icon={iconObject} className="tech-badge-icon" style={{ color: accent }} />
      <div className="tech-badge-text">
        <span className="tech-badge-label">{label}</span>
        <small className="tech-badge-description">{description}</small>
      </div>
    </button>
  );
};

const ProjectCard = ({ project, fromLeft }) => {
  const [ref, inView] = useInView({ threshold: 0.15 });
  const stack = projectStack(project);

  return (
    <article
      ref={ref}
      className={`project-card ${fromLeft ? "from-left" : "from-right"}${inView ? " in-view" : ""}`}
    >
      <div className={`${fromLeft ? "card-meta" : "card-meta-rev"} shadow`}>
        <div className="project-images">
          <div className="project-images-inner">
            {project.imageUrl.map((img, i) => (
              <a key={i} href={project.link} target="_blank" rel="noreferrer">
                <img src={img} alt={`${project.title} screenshot`} />
              </a>
            ))}
          </div>
        </div>

        <div className="work-description">
          <h4 className="title">
            <a href={project.link} target="_blank" rel="noreferrer">
              {project.title}
            </a>
          </h4>
          <div className="subtitle">{project.subTitle}</div>

          {project.impact && project.impact.length > 0 && (
            <ul className="impact-list">
              {project.impact.map((item, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          )}

          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: project.description }}
          />

          {stack.length > 0 && (
            <div className="stack-tags">
              {stack.map((tech) => (
                <span key={tech} className="stack-tag">
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

const PastWork = () => {
  const [activeTech, setActiveTech] = useState(null);

  const handleSelect = (label) => {
    setActiveTech((current) => (current === label ? null : label));
  };

  const visibleProjects = useMemo(() => {
    if (!activeTech) return projects;
    return projects.filter((project) =>
      projectStack(project).some(
        (tech) => tech.toLowerCase() === activeTech.toLowerCase()
      )
    );
  }, [activeTech]);

  return (
    <section id="past-work" className="past-work-section">
      <h2 className="component-header">Work</h2>

      {/* Tech Stack Section */}
      <div className="tech-stack-section">
        <h3 className="tech-stack-header">Tech Stack</h3>
        <p className="tech-stack-hint">Tap a skill to see projects that use it</p>
        <div className="tech-stack-collage">
          {techStack.map((tech, index) => (
            <TechBadge
              key={tech.label}
              {...tech}
              index={index}
              isActive={activeTech === tech.label}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="projects-header-row">
        <h3 className="tech-stack-header">
          {activeTech ? `Projects using ${activeTech}` : "Projects"}
        </h3>
        {activeTech && (
          <button type="button" className="clear-filter" onClick={() => setActiveTech(null)}>
            <FontAwesomeIcon icon={faXmark} /> Clear filter
          </button>
        )}
      </div>

      {visibleProjects.length > 0 ? (
        <div className="projects-grid">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} fromLeft={checkModule(index)} />
          ))}
        </div>
      ) : (
        <p className="no-projects">
          No projects to show for {activeTech} yet — but it's part of my toolkit!
        </p>
      )}
    </section>
  );
};

export default PastWork;
