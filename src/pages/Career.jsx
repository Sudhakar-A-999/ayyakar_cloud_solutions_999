import { Briefcase } from 'lucide-react';

export default function Career() {
  return (
    <div className="career-page animate-fade-in" style={{ padding: '100px 0', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ textAlign: 'center' }}>

        <div style={{
          width: '120px', height: '120px', borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.03)', border: 'var(--glass-border)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 40px'
        }}>
          <Briefcase size={50} style={{ color: 'var(--text-muted)', opacity: 0.5 }} />
        </div>

        <h1 style={{ fontSize: '3.5rem', marginBottom: '24px' }}>Careers</h1>

        <div className="glass-panel" style={{ display: 'inline-block', padding: '16px 40px', marginBottom: '40px' }}>
          <span style={{ fontSize: '1.2rem', color: 'var(--accent-cyan)', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>
            Currently Not Hiring
          </span>
        </div>

        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.8 }}>
          Our core architecture team is currently at full capacity as we focus entirely on the rollout of Aszetingo and our initial product ecosystem.
          <br /><br />
          Please check back in the future as we scale from India to Globe.
        </p>

        <div style={{ marginTop: '40px' }}>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '15px' }}>For future opportunities, you can reach us at:</p>
          <a
            href="mailto:hiring@vanakkam.ayyakarcloudsolutions.com"
            style={{
              display: 'inline-block',
              fontSize: '1.1rem',
              color: 'var(--accent-cyan)',
              textDecoration: 'none',
              border: '1px solid var(--accent-cyan)',
              padding: '10px 25px',
              borderRadius: '25px',
              fontWeight: '500',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.background = 'rgba(0, 255, 204, 0.1)';
              e.target.style.boxShadow = '0 0 15px rgba(0, 255, 204, 0.3)';
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.boxShadow = 'none';
            }}
          >
            hiring@vanakkam.ayyakarcloudsolutions.com
          </a>
        </div>

      </div>
    </div>
  );
}
