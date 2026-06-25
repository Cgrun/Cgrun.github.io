import { profile } from "../data/profile";

export function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript, and Vite.
      </p>
    </footer>
  );
}
