import React from "react";
import { Icon } from 'semantic-ui-react';
import "../styles/PastWork.css";
import { projects } from "../data";

function createMarkup(markup) {
  return { __html: markup };
}

const checkModule = (index) => index % 2 === 0;

const PastWork = () => {
  return (
    <section id="past-work" className="past-work-section">
      <h2 className="component-header">Projects</h2>

      {/* Tech Stack */}
      <div className="techSta-component">
        <h3 id="tech-stack" className="tech-stack">Tech Stack</h3>
        <div className="stack">
          <div className="stack-item ruby">
            <Icon name="diamond" />
            Ruby on Rails
          </div>
          <div className="stack-item javascript">
            <Icon name="js" />
            JavaScript
          </div>
          <div className="stack-item react">
            <Icon name="react" />
            React
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <article key={project.id} className="project-card">
            <h4 className="tittle">
              <a href={project.link} target="_blank" rel="noreferrer">
                {project.title}
              </a>
            </h4>

            <div className={`${checkModule(index) ? "card-meta" : "card-meta-rev"} shadow`}>
              <div className="pic-cour">
                {project.imageUrl.map((img, i) => (
                  <a key={i} href={project.link} target="_blank" rel="noreferrer">
                    <img src={img} alt={`${project.title} screenshot`} />
                  </a>
                ))}
              </div>

              <div className="work-description">
                <div className="paragraph-description link">{project.subTitle}</div>
                <div
                  className="paragraph-description"
                  dangerouslySetInnerHTML={createMarkup(project.description)}
                />
                <div>
                  <span className="static">Frontend Stack:</span>
                  <div
                    className="frontend-stack-pastwork"
                    dangerouslySetInnerHTML={createMarkup(project.frontTechSatck)}
                  />
                </div>
                <div>
                  <span className="static">Backend Stack:</span>
                  <div
                    className="frontend-stack-pastwork"
                    dangerouslySetInnerHTML={createMarkup(project.backTechStack)}
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
