import { ExternalLink } from "lucide-react";
import { Section } from "../components/Section";
import { contactLinks } from "../data/links";

export function Contact() {
  return (
    <Section
      id="contact"
      title="Contact"
      >
      <div className="contact-grid">
        {contactLinks.map((link) => {
          const Icon = link.icon;
          const isPlaceholder = !link.href;

          const content = (
            <>
              <Icon aria-hidden="true" size={22} />
              <span>{link.label}</span>
              {link.external ? <ExternalLink aria-hidden="true" size={15} /> : null}
            </>
          );

          return isPlaceholder ? (
            <span className="contact-card is-placeholder" key={link.label}>
              {content}
            </span>
          ) : (
            <a
              className="contact-card"
              href={link.href}
              key={link.label}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
            >
              {content}
            </a>
          );
        })}
      </div>
    </Section>
  );
}
