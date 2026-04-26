import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Announcements', path: '/announcements' },
    { name: 'About', path: '/about' },
    { name: 'Career', path: '/career' }
  ];

  return (
    <>
      <header className="header" style={{ 
        background: 'rgba(10, 10, 15, 0.92)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)'
      }}>
        <div className="container header-inner" style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', padding: '0 24px' }}>
          <Link to="/" className="logo">
            <img src="/assets/logo.png" alt="Ayyakar Cloud Solutions Logo" />
            <span><span style={{ color: '#FFD700' }}>Ayyakar</span> <span style={{ color: '#FFFFFF' }}>Cloud Solutions</span></span>
          </Link>

          {/* Desktop nav */}
          <nav className="nav-links desktop-nav">
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

          {/* Hamburger button – mobile only */}
          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile fullscreen drawer */}
      <div className={`mobile-drawer ${menuOpen ? 'mobile-drawer--open' : ''}`}>
        <nav className="mobile-nav">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
