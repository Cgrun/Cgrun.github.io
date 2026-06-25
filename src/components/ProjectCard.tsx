import type { Project } from "../data/projects";
import { projectImages } from "../data/cardImages";
import { useHoverBackground } from "../useHoverBackground";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const images = projectImages[index] ?? [];
  const { activateBackground, clearBackground, hasBackground } = useHoverBackground(images);

  return (
    <div
      className={`interactive-card-frame ${hasBackground ? "has-hover-background" : ""}`}
      onBlur={clearBackground}
      onFocus={activateBackground}
      onPointerEnter={activateBackground}
      onPointerLeave={clearBackground}
    >
      {hasBackground ? (
        <>
          <div className="perspective-wing left" aria-hidden="true" />
          <div className="perspective-wing right" aria-hidden="true" />
        </>
      ) : null}
      <article className="project-card interactive-card" tabIndex={0}>
        <div className="project-index">0{index + 1}</div>
        <div className="project-content">
          <h3>{project.title}</h3>
          <div className="card-details" aria-label={`${project.title} details`}>
            <p>{project.description}</p>
          </div>
          <ul className="tag-list" aria-label={`${project.title} tags`}>
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
}
