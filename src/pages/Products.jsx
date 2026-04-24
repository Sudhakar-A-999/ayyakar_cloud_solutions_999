import { Box, Sparkles } from 'lucide-react';
import { useEffect } from 'react';

export default function Products() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="products-page animate-fade-in" style={{ padding: '60px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }} className="text-gradient">Our Ecosystem</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            Discover our flagship innovations designed to revolutionize the way you interact with the digital world.
          </p>
        </div>

        {/* Hero Product Card */}
        <div className="glass-panel" style={{ 
          padding: '60px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '40px',
          background: 'linear-gradient(to right, rgba(20,20,30,0.8), rgba(0,240,255,0.1))',
          marginBottom: '60px'
        }}>
          <div style={{ flex: '1 1 400px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(176,38,255,0.2)', borderRadius: '20px', color: 'var(--accent-purple)', fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '24px' }}>
              <Sparkles size={16} /> LIVE NOW
            </div>
            <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>Aszetingo.com</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '32px', lineHeight: 1.8 }}>
              Aszetingo is a powerful web platform designed to provide clear, real-time insights into cryptocurrency markets. Built with a focus on accuracy, speed, and user-friendly design, it helps traders, analysts, and enthusiasts access data without clutter. From price tracking and analytics to risk management insights, Aszetingo delivers a clean, junk-free interface that makes complex crypto information simple and actionable.
            </p>
            <a href="https://www.aszetingo.com" target="_blank" rel="noopener noreferrer" className="btn-primary">Visit Aszetingo</a>
          </div>
          <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img 
              src="/assets/aszetingo_logo.png" 
              alt="Aszetingo Logo" 
              className="animate-float"
              style={{ 
                maxWidth: '300px', 
                width: '100%', 
                height: 'auto', 
                objectFit: 'contain', 
                filter: 'drop-shadow(0 0 25px rgba(255,215,0,0.5))' 
              }} 
            />
          </div>
        </div>

        {/* Future Products Section */}
        <div style={{ textAlign: 'center', padding: '60px 0' }}>
          <h3 style={{ fontSize: '2rem', marginBottom: '16px' }}>Many more products on the way.</h3>
          <div style={{ width: '40px', height: '3px', background: 'var(--text-muted)', margin: '0 auto 24px', borderRadius: '2px' }} />
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>We are continuously researching and developing the next generation of cloud tools. Stay tuned.</p>
        </div>
      </div>
    </div>
  );
}
