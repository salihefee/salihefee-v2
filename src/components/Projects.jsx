import "./Projects.css";

const ProjectCard = ({ title, lang, desc, date, projectLink }) => {
  return (
    <a
      href={projectLink}
      className="project-link"
      target="_blank"
      rel="noreferrer"
    >
      <div className="project-card">
        <div className="project-header">
          <h3 className="project-title">{title}</h3>
          <span className="project-lang">{lang}</span>
        </div>
        <p className="project-desc">{desc}</p>
        <span className="project-date">{date}</span>
      </div>
    </a>
  );
};

const Projects = ({ projects }) => {
  return (
    <div className="projects-grid">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
};

export default Projects;
