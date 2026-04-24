import { Bell } from 'lucide-react';

export default function Announcements() {
  return (
    <div className="announcements-page animate-fade-in" style={{ padding: '100px 0', textAlign: 'center' }}>
      <div className="container">
        <div style={{
          width: '100px', height: '100px', borderRadius: '30px', 
          background: 'rgba(0, 240, 255, 0.05)', border: 'var(--glass-border)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 40px'
        }}>
          <Bell size={40} style={{ color: 'var(--accent-cyan)' }} className="animate-float" />
        </div>
        <h1 style={{ fontSize: '3rem', marginBottom: '24px' }}>Latest Announcements</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 60px' }}>
          Stay updated with the latest news, releases, and milestones from Ayyakar Cloud Solutions.
        </p>
        
        <div className="glass-panel" style={{ padding: '60px', maxWidth: '800px', margin: '0 auto', borderStyle: 'dashed' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--text-muted)' }}>No recent announcements</h3>
          <p style={{ color: 'var(--text-muted)', opacity: 0.7 }}>
            We're hard at work building our core infrastructure. Check back soon for exciting updates regarding Aszetingo and our upcoming product line.
          </p>
        </div>
      </div>
    </div>
  );
}
