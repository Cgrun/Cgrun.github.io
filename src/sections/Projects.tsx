import { Section } from "../components/Section";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";

export function Projects() {
  return (
    <Section
      id="projects"
      title="Selected Projects"
    >
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.title} />
        ))}
      </div>
    </Section>
  );
}
