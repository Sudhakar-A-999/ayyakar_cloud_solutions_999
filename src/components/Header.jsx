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
      background: 'radial-gradient(circle at 50% -20px, rgba(0, 240, 255, 0.15), transparent 400px), radial-gradient(circle at 0% 50%, rgba(176, 38, 255, 0.1), transparent 300px), linear-gradient(90deg, rgba(8,8,12,0.95), rgba(15,15,22,0.98), rgba(8,8,12,0.95))',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.8), inset 0 -1px 0 rgba(0, 240, 255, 0.2)'
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
