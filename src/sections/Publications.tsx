import { Section } from "../components/Section";
import { PublicationItem } from "../components/PublicationItem";
import { publications } from "../data/publications";

export function Publications() {
  return (
    <Section
      id="publications"
      title="Publications"
    >
      <div className="publication-list">
        {publications.map((publication) => (
          <PublicationItem publication={publication} key={publication.title} />
        ))}
      </div>
    </Section>
  );
}
