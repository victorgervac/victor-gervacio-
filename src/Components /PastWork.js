import React from "react";
import { Icon } from 'semantic-ui-react';
import { projects,techStack } from "../data";
import "../styles/PastWork.css";

const checkModule = (index) => index % 2 === 0;



const TechBadge = ({ icon, label, color, link, description }) => (
  <a href={link} target="_blank" rel="noreferrer" className={`tech-badge ${color}`}>
    <Icon name={icon} />
    <div className="tech-badge-text">
      <span className="tech-badge-label">{label}</span>
      <small className="tech-badge-description">{description}</small>
    </div>
  </a>
);

const PastWork = () => {



  return (
    <section id="past-work" className="past-work-section">
      <h2 className="component-header">Work</h2>

      {/* Tech Stack Section */}
      <div className="tech-stack-section">
        <h3 className="tech-stack-header">Tech Stack</h3>
        <div className="tech-stack-collage">
          {techStack.map((tech, index) => (
            <TechBadge key={index} {...tech} />
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <article key={project.id} className="project-card">
            <h4 className="title">
              <a href={project.link} target="_blank" rel="noreferrer">
                {project.title}
              </a>
            </h4>


            <div className={`${checkModule(index) ? "card-meta" : "card-meta-rev"} shadow`}>
              
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
        ))}
      </div>
    </section>
  );
};

export default PastWork;
