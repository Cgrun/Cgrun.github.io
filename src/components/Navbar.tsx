const navItems = [
  { label: "Education", href: "#education" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="site-header">
      <nav className="nav" aria-label="Primary navigation">
        <a className="nav-brand" href="#home" aria-label="Changrun Jia home">
          CrJia
        </a>
        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
