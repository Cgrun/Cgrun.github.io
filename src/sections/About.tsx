import { Section } from "../components/Section";
import { profile } from "../data/profile";

export function About() {
  return (
    <Section id="education" title="Education">
      <div className="about-grid">
        <div className="education-list" aria-label="Education">
          {profile.education.map((item) => (
            <article className="education-item" key={`${item.degree}-${item.institution}`}>
              <h3>{item.degree}</h3>
              <p className="education-school">
                {item.institution}, {item.location}, {item.year}
              </p>
              {"achievements" in item && item.achievements ? (
                <ul className="education-details">
                  {item.achievements.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              ) : null}
              {"relevantModules" in item && item.relevantModules ? (
                <div className="relevant-modules">
                  <span>Relevant Modules:</span>
                  <em>{item.relevantModules.join(", ")}.</em>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
