import React from "react";
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
import { faGem, faWind, faDatabase, faFire } from "@fortawesome/free-solid-svg-icons";
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

const TechBadge = ({ icon, label, accent, link, description, index }) => {
  const iconObject = TACOS[icon];
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <a
      ref={ref}
      href={link}
      target="_blank"
      rel="noreferrer"
      className={`tech-badge${inView ? " in-view" : ""}`}
      style={{ "--accent": accent, transitionDelay: `${index * 0.05}s` }}
    >
      <FontAwesomeIcon icon={iconObject} className="tech-badge-icon" style={{ color: accent }} />
      <div className="tech-badge-text">
        <span className="tech-badge-label">{label}</span>
        <small className="tech-badge-description">{description}</small>
      </div>
    </a>
  );
};

const ProjectCard = ({ project, fromLeft }) => {
  const [ref, inView] = useInView({ threshold: 0.15 });

  return (
    <article
      ref={ref}
      className={`project-card ${fromLeft ? "from-left" : "from-right"}${inView ? " in-view" : ""}`}
    >
      <h4 className="title">
        <a href={project.link} target="_blank" rel="noreferrer">
          {project.title}
        </a>
      </h4>

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
          <div className="subtitle">{project.subTitle}</div>
          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: project.description }}
          />
          <div className="stack-details">
            <span className="stack-label">Frontend:</span>
            <div
              className="stack-list"
              dangerouslySetInnerHTML={{ __html: project.frontTechSatck }}
            />
          </div>
          <div className="stack-details">
            <span className="stack-label">Backend:</span>
            <div
              className="stack-list"
              dangerouslySetInnerHTML={{ __html: project.backTechStack }}
            />
          </div>
        </div>
      </div>

      <hr />
    </article>
  );
};

const PastWork = () => {
  return (
    <section id="past-work" className="past-work-section">
      <h2 className="component-header">Work</h2>

      {/* Tech Stack Section */}
      <div className="tech-stack-section">
        <h3 className="tech-stack-header">Tech Stack</h3>
        <div className="tech-stack-collage">
          {techStack.map((tech, index) => (
            <TechBadge key={tech.label} {...tech} index={index} />
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} fromLeft={checkModule(index)} />
        ))}
      </div>
    </section>
  );
};

export default PastWork;
