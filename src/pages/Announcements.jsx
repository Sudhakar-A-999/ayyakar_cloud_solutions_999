import { useEffect, useRef } from 'react';

export default function Announcements() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.color = Math.random() > 0.5 ? 'rgba(200, 150, 255, ' : 'rgba(100, 200, 255, ';
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = this.color + this.opacity + ')';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #ffffff 0%, #f5f0ff 50%, #f0e6ff 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Particle Background */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none'
        }}
      />

      {/* Light Rays */}
      <svg
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none'
        }}
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="rayGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(200, 150, 255, 0.3)" />
            <stop offset="100%" stopColor="rgba(200, 150, 255, 0)" />
          </linearGradient>
          <linearGradient id="rayGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(100, 200, 255, 0.3)" />
            <stop offset="100%" stopColor="rgba(100, 200, 255, 0)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Light rays */}
        <line x1="600" y1="0" x2="500" y2="400" stroke="url(#rayGradient1)" strokeWidth="40" opacity="0.4" filter="url(#glow)" />
        <line x1="600" y1="0" x2="700" y2="400" stroke="url(#rayGradient2)" strokeWidth="40" opacity="0.4" filter="url(#glow)" />
        <line x1="600" y1="0" x2="400" y2="400" stroke="url(#rayGradient1)" strokeWidth="30" opacity="0.3" filter="url(#glow)" />
        <line x1="600" y1="0" x2="800" y2="400" stroke="url(#rayGradient2)" strokeWidth="30" opacity="0.3" filter="url(#glow)" />
      </svg>

      {/* Main Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        padding: '80px 40px',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        {/* Hero Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: '80px',
          paddingTop: '60px'
        }}>
          {/* Static Logo */}
          <div style={{
            marginBottom: '40px',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <img
              src="/assets/aszetingo_logo.png"
              alt="Aszetingo"
              style={{
                width: '180px',
                height: '180px',
                objectFit: 'contain',
                filter: 'drop-shadow(0 10px 40px rgba(200, 150, 255, 0.3))',
              }}
            />
          </div>

          {/* Glowing Text */}
          <h1
            style={{
              fontSize: '3.5rem',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #ffc107 0%, #ffb300 50%, #f0a000 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '2px',
              marginBottom: '12px',
              textShadow: '0 0 40px rgba(255, 193, 7, 0.4)',
              filter: 'drop-shadow(0 0 20px rgba(255, 193, 7, 0.3))',
              animation: 'textGlow 3s ease-in-out infinite'
            }}
          >
            Aszetingo
          </h1>
          <p
            style={{
              fontSize: '2rem',
              fontWeight: '600',
              color: '#6b4fcf',
              letterSpacing: '1px',
              textShadow: '0 0 20px rgba(107, 79, 207, 0.3)',
              filter: 'drop-shadow(0 0 10px rgba(107, 79, 207, 0.2))',
              animation: 'textGlow 3s ease-in-out infinite 0.3s'
            }}
          >
            Clarity for Smarter Investing
          </p>
        </div>

        {/* Announcement Content */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(10px)',
          borderRadius: '12px',
          padding: '60px 50px',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: '0 8px 32px rgba(200, 150, 255, 0.15)',
          marginBottom: '60px'
        }}>
          <div style={{ textAlign: 'left' }}>
            {/* Subject Line */}
            <p style={{
              fontSize: '0.9rem',
              fontWeight: '700',
              color: '#ffc107',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: '24px'
            }}>
              ✦ Launch Announcement
            </p>

            {/* Main Title */}
            <h2 style={{
              fontSize: '2.2rem',
              fontWeight: '700',
              marginBottom: '24px',
              color: '#1a1a1a',
              lineHeight: '1.4'
            }}>
              Introducing Aszetingo by Ayyakar Cloud Solutions
            </h2>

            {/* Opening Paragraph */}
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              marginBottom: '32px',
              color: '#404040'
            }}>
              We are excited to announce the upcoming launch of <strong style={{ color: '#ffc107' }}>Aszetingo</strong>, a flagship innovation from Ayyakar Cloud Solutions.
            </p>

            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              marginBottom: '40px',
              color: '#404040'
            }}>
              Aszetingo represents our vision to deliver extraordinary, automated cloud solutions that simplify everyday life and empower futuristic domains.
            </p>

            {/* Key Highlights */}
            <div style={{ marginBottom: '40px' }}>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: '700',
                marginBottom: '24px',
                color: '#1a1a1a'
              }}>
                Key Highlights:
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                <li style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  marginBottom: '16px',
                  color: '#404040',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px'
                }}>
                  <span style={{ color: '#ffc107', fontWeight: 'bold', marginTop: '2px' }}>◆</span>
                  <span>Built on strong, real‑time, data‑driven infrastructure</span>
                </li>
                <li style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  marginBottom: '16px',
                  color: '#404040',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px'
                }}>
                  <span style={{ color: '#ffc107', fontWeight: 'bold', marginTop: '2px' }}>◆</span>
                  <span>Designed for analytics, education, journaling, and risk management</span>
                </li>
                <li style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  marginBottom: '16px',
                  color: '#404040',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px'
                }}>
                  <span style={{ color: '#ffc107', fontWeight: 'bold', marginTop: '2px' }}>◆</span>
                  <span>Clean, user‑friendly interface with uncompromised performance</span>
                </li>
                <li style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: '#404040',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px'
                }}>
                  <span style={{ color: '#ffc107', fontWeight: 'bold', marginTop: '2px' }}>◆</span>
                  <span>A step forward in our mission to automate across home, work, travel, communication, and beyond</span>
                </li>
              </ul>
            </div>

            {/* Closing */}
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: '#404040',
              borderTop: '2px solid rgba(255, 193, 7, 0.3)',
              paddingTop: '32px',
              marginTop: '40px'
            }}>
              Join us as we unveil Aszetingo on <strong style={{ color: '#ffc107' }}>06-06-2026</strong>. Together, let's <strong style={{ color: '#6b4fcf' }}>shape the future of cloud innovation</strong>.
            </p>
          </div>
        </div>

        {/* Launch Date Box */}
        <div style={{
          textAlign: 'center',
          padding: '40px',
          border: '2px solid rgba(255, 193, 7, 0.6)',
          borderRadius: '8px',
          background: 'rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(200, 150, 255, 0.2)'
        }}>
          <p style={{
            fontSize: '0.95rem',
            color: '#6b4fcf',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            margin: '0 0 12px 0',
            fontWeight: '700'
          }}>
            🚀 Launching
          </p>
          <p style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #ffc107 0%, #ffb300 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: 0
          }}>
            06 June 2026
          </p>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes textGlow {
          0%, 100% {
            textShadow: 0 0 30px rgba(255, 193, 7, 0.5), 0 0 60px rgba(255, 193, 7, 0.3);
            filter: drop-shadow(0 0 15px rgba(255, 193, 7, 0.3));
          }
          50% {
            textShadow: 0 0 50px rgba(255, 193, 7, 0.8), 0 0 80px rgba(255, 193, 7, 0.5);
            filter: drop-shadow(0 0 25px rgba(255, 193, 7, 0.5));
          }
        }
      `}</style>
    </div>
  );
}
