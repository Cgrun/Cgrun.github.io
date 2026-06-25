import type { ResearchExperience } from "../data/researchExperiences";
import { researchImages } from "../data/cardImages";
import { useHoverBackground } from "../useHoverBackground";

type ResearchExperienceCardProps = {
  experience: ResearchExperience;
  index: number;
};

export function ResearchExperienceCard({ experience, index }: ResearchExperienceCardProps) {
  const images = researchImages[index] ?? [];
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
      <article className="experience-card interactive-card" tabIndex={0}>
        <div className="experience-number">0{index + 1}</div>
        <div className="experience-content">
          <div className="experience-meta">
            <span>{experience.period}</span>
            <span>{experience.role}</span>
          </div>

          {experience.title ? <h3>{experience.title}</h3> : null}
          {experience.organization ? (
            <p className="experience-organization">{experience.organization}</p>
          ) : null}

          <div className="card-details" aria-label={`${experience.title ?? experience.role} details`}>
            {experience.highlights ? (
              <ul className="experience-highlights">
                {experience.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            ) : null}

            {experience.subprojects ? (
              <div className="experience-subprojects">
                {experience.subprojects.map((project) => (
                  <div className="experience-subproject" key={project.title}>
                    <h4>{project.title}</h4>
                    <ul className="experience-highlights">
                      {project.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <ul className="tag-list" aria-label={`${experience.role} ${experience.period} keywords`}>
            {experience.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
}
