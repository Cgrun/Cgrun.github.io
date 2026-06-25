import { Section } from "../components/Section";
import { ResearchExperienceCard } from "../components/ResearchExperienceCard";
import { researchExperiences } from "../data/researchExperiences";

export function Research() {
  return (
    <Section
      id="research"
      title="Research Experience"
    >

      <div className="experience-list">
        {researchExperiences.map((experience, index) => (
          <ResearchExperienceCard
            experience={experience}
            index={index}
            key={`${experience.role}-${experience.period}-${experience.title ?? index}`}
          />
        ))}
      </div>
    </Section>
  );
}
