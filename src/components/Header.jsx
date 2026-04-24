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
    <header className="header" style={{ 
      background: 'rgba(10, 10, 15, 0.85)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)'
    }}>
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
