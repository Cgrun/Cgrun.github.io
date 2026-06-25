import { ExternalLink } from "lucide-react";
import type { Publication } from "../data/publications";

type PublicationItemProps = {
  publication: Publication;
};

export function PublicationItem({ publication }: PublicationItemProps) {
  return (
    <article className="publication-item">
      <div className="publication-main">
        <h3>{publication.title}</h3>
        <p className="publication-authors">{publication.authors.join(", ")}</p>
        <p className="publication-meta">
          {publication.venue} · {publication.year} · {publication.status}
        </p>
      </div>
      <div className="publication-side">
        <ul className="tag-list compact" aria-label={`${publication.title} keywords`}>
          {publication.keywords.map((keyword) => (
            <li key={keyword}>{keyword}</li>
          ))}
        </ul>
        {publication.links.length > 0 ? (
          <div className="publication-links" aria-label={`${publication.title} links`}>
            {publication.links.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
                <ExternalLink aria-hidden="true" size={14} />
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
