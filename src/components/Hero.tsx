import { ArrowRight } from "lucide-react";
import { profile } from "../data/profile";
import { primaryLinks } from "../data/links";

export function Hero() {
  return (
    <section id="home" className="hero section-shell" aria-labelledby="hero-title">
      <div className="hero-content">
        <p className="eyebrow">Medical AI / Computer Vision / Biomedical Representation Learning</p>
        <div className="hero-name-row">
          <img className="hero-headshot" src={profile.headshot} alt={profile.headshotAlt} />
          <h1 id="hero-title">{profile.name}</h1>
        </div>
        <p className="hero-tagline">{profile.tagline}</p>
        {profile.description ? <p className="hero-description">{profile.description}</p> : null}

        <div className="hero-actions" aria-label="Quick links">
          {primaryLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a
                className="button"
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
              >
                <Icon aria-hidden="true" size={18} />
                <span>{link.label}</span>
                <ArrowRight aria-hidden="true" className="button-arrow" size={16} />
              </a>
            );
          })}
        </div>
      </div>

      <div className="hero-statement-card" aria-label="Profile statement">
        <span>Profile</span>
        <p>{profile.profileStatement}</p>
      </div>
    </section>
  );
}
