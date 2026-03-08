import React from 'react';

const ProjectCard = ({ title, lang, desc, date }) => {
  return (
    <div className="project-card">
      <div className="project-header">
        <h3 className="project-title">{title}</h3>
        <span className="project-lang">{lang}</span>
      </div>
      <p className="project-desc">{desc}</p>
      <span className="project-date">{date}</span>
    </div>
  );
};

const Projects = ({ projects }) => {
  return (
    <div className="projects-grid">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default Projects;