import { Link, useLocation } from 'react-router-dom';
import { Cloud } from 'lucide-react';

export default function Header() {
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Announcements', path: '/announcements' },
    { name: 'About', path: '/about' },
    { name: 'Career', path: '/career' }
  ];

  return (
    <header className="header glass-panel" style={{ borderRadius: 0, borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}>
      <div className="container header-inner">
        <Link to="/" className="logo">
          <img src="/assets/logo.png" alt="Ayyakar Cloud Solutions Logo" />
          <span><span style={{ color: '#FFD700' }}>Ayyakar</span> <span style={{ color: '#FFFFFF' }}>Cloud Solutions</span></span>
        </Link>
        <nav className="nav-links">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
