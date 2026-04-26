import { Link } from 'react-router-dom';
import { Globe, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <Link to="/" className="logo" style={{ marginBottom: '20px' }}>
            <img src="/assets/logo.png" alt="Ayyakar Cloud Solutions Logo" style={{ flexShrink: 0 }} />
            <span><span style={{ color: '#FFD700' }}>Ayyakar</span> <span style={{ color: '#FFFFFF' }}>Cloud Solutions</span></span>
          </Link>
          <p style={{ color: 'var(--text-muted)', marginBottom: '20px', maxWidth: '300px', margin: '0 auto 20px' }}>
            Engineering Intelligent Systems
          </p>
          <div className="social-links">
            <a href="#" className="social-icon" aria-label="X (Twitter)">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l11.733 16h4.267l-11.733 -16z"/>
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/>
              </svg>
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="social-icon" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" className="social-icon" aria-label="Website"><Globe size={20} /></a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/announcements">Announcements</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/career">Career</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact Us</h4>
          <ul className="footer-links">
            <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <MapPin size={20} style={{ color: 'var(--accent-cyan)', flexShrink: 0, marginTop: '2px' }} />
              <span>Building Bearing No.19/35, FD 24,<br />First Floor, Mount Road, Little Mount,<br />Chennai – 600015</span>
            </li>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <Mail size={20} style={{ color: 'var(--accent-cyan)', flexShrink: 0 }} />
              <a href="mailto:support@ayyakarcloudsolutions.com" style={{ color: 'inherit', textDecoration: 'none' }}>support@ayyakarcloudsolutions.com</a>
            </li>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <Phone size={20} style={{ color: 'var(--accent-cyan)', flexShrink: 0 }} />
              <a href="tel:+919443550837" style={{ color: 'inherit', textDecoration: 'none' }}>+91 9443550837</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} Ayyakar Cloud Solutions Private Limited. All rights reserved.</p>
      </div>
    </footer>
  );
}
