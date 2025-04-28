// Tech Badge Component
import React from "react";
import { Icon } from 'semantic-ui-react';


const TechBadge = ({ icon, label, color, link, description }) => (
  <a href={link} target="_blank" rel="noreferrer" className={`tech-badge ${color}`}>
    <Icon name={icon} />
    <div className="tech-badge-text">
      <span className="tech-badge-label">{label}</span>
      <small className="tech-badge-description">{description}</small>
    </div>
  </a>
);
 export default TechBadge;