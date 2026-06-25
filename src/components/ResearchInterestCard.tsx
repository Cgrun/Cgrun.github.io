import type { ResearchInterest } from "../data/researchInterests";

type ResearchInterestCardProps = {
  interest: ResearchInterest;
};

export function ResearchInterestCard({ interest }: ResearchInterestCardProps) {
  return (
    <article className="interest-card">
      <h3>{interest.title}</h3>
      <p>{interest.description}</p>
    </article>
  );
}
