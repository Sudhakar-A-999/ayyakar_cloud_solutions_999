import { 
  Target, 
  Eye, 
  Users, 
  Cpu, 
  Award, 
  TrendingUp, 
  Rocket, 
  ShieldCheck, 
  Mail,
  CheckCircle2,
  Settings,
  Zap,
  Layers,
  Heart,
  Lightbulb,
  Globe
} from 'lucide-react';

export default function About() {
  return (
    <div className="about-page animate-fade-in" style={{ padding: '60px 0' }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }} className="text-gradient">About Us</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            Solving complex digital challenges with simplicity.
          </p>
        </div>

        {/* Who We Are & What We Do */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px', marginBottom: '60px' }}>
          <div className="glass-panel" style={{ padding: '50px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Users style={{ color: 'var(--accent-cyan)', marginBottom: '20px' }} size={40} />
            <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>
              Who We Are
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8, textAlign: 'center' }}>
              Ayyakar Cloud Solutions is a Chennai based technology company dedicated to solving complex digital challenges with simplicity. We design software, websites, and cloud platforms that empower people and businesses to thrive in a fast changing digital world.
            </p>
          </div>
          
          <div className="glass-panel" style={{ padding: '50px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Cpu style={{ color: 'var(--accent-purple)', marginBottom: '20px' }} size={40} />
            <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>
              What We Do
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8, textAlign: 'center' }}>
              We create innovative SaaS platforms, websites, and automated cloud solutions. Our products span across analytics, education, journaling, risk management, and trading — all designed to offer clarity, speed, and reliability.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="glass-panel" style={{ padding: '50px', marginBottom: '60px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
           <Eye size={40} style={{ color: 'var(--accent-cyan)', marginBottom: '20px' }} />
           <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Our Vision</h2>
           <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.8, maxWidth: '900px', textAlign: 'center' }}>
             To pioneer extraordinary cloud infrastructure that simplifies everyday life and work — delivering clean, high quality, junk free digital experiences. We aim to build futuristic solutions that power analytics, risk management, education, journaling, trading, and beyond.
           </p>
        </div>

        {/* Mission */}
        <div style={{ marginBottom: '80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
             <Target size={40} style={{ color: 'var(--accent-purple)', marginBottom: '20px' }} />
             <h2 style={{ fontSize: '2.5rem' }}>Mission</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {[
              { title: 'Simplify Complexity', desc: 'Provide software, websites, and cloud platforms that solve digital challenges with clarity and ease.', icon: <Settings size={24} style={{ color: 'var(--accent-cyan)' }} /> },
              { title: 'Automate Daily Assets', desc: 'Build intelligent, real time systems for home, travel, work, communication, and trading sectors.', icon: <Zap size={24} style={{ color: '#FFD700' }} /> },
              { title: 'Advance Key Domains', desc: 'Innovate in analytics, education, journaling, and risk management with robust cloud infrastructure.', icon: <Layers size={24} style={{ color: 'var(--accent-purple)' }} /> },
              { title: 'User Centric Design', desc: 'Deliver junk free, intuitive interfaces that ensure straightforward, high quality solutions.', icon: <Heart size={24} style={{ color: '#ff4d4d' }} /> },
              { title: 'Drive R&D', desc: 'Continuously explore futuristic technologies to create people centric, data driven products.', icon: <Lightbulb size={24} style={{ color: '#00ffcc' }} /> },
              { title: 'Shape the Future', desc: 'Extend cloud automation into agriculture, marine systems, and space exploration to support civilization’s progress.', icon: <Globe size={24} style={{ color: '#4da6ff' }} /> },
            ].map((item, index) => (
              <div key={index} className="glass-panel" style={{ padding: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ marginBottom: '15px', padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '0.95rem', textAlign: 'center' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us & Quality */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px', marginBottom: '60px' }}>
          <div className="glass-panel" style={{ padding: '50px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Award style={{ color: '#FFD700', marginBottom: '20px' }} size={40} />
            <h2 style={{ fontSize: '2rem', marginBottom: '30px' }}>
              Why Choose Us
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '20px' }}>
              {[
                'Clean, junk free interfaces',
                'High quality, professional digital experiences',
                'Compliance driven operations with trust and transparency',
                'Futuristic, people centric automation'
              ].map((text, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.5, textAlign: 'left' }}>
                  <CheckCircle2 size={24} style={{ color: 'var(--accent-cyan)', flexShrink: 0, marginTop: '2px' }} />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="glass-panel" style={{ padding: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <ShieldCheck style={{ color: '#00ffcc', marginBottom: '20px' }} size={40} />
            <h2 style={{ fontSize: '2rem', marginBottom: '30px' }}>Commitment to Quality</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8, textAlign: 'center' }}>
              Every product we build reflects our promise: clean, high quality, user friendly digital experiences that empower people without unnecessary complexity.
            </p>
          </div>
        </div>

        {/* Journey & Future Focus */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px', marginBottom: '60px' }}>
          <div className="glass-panel" style={{ padding: '50px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <TrendingUp style={{ color: 'var(--accent-purple)', marginBottom: '20px' }} size={40} />
            <h2 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>Our Journey</h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.7, textAlign: 'center' }}>
              Founded with a vision to transform cloud technology, Ayyakar Cloud Solutions has grown from an idea into a company building extraordinary infrastructure. Our journey reflects innovation, resilience, and a commitment to excellence.
            </p>
          </div>
          <div className="glass-panel" style={{ padding: '50px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Rocket style={{ color: '#ff4d4d', marginBottom: '20px' }} size={40} />
            <h2 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>Future Focus</h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.7, textAlign: 'center' }}>
              We are actively researching and developing digital products to solve complexity in travel, aerospace, marine, and space — extending cloud solutions into every aspect of life, from home and work to civilization and beyond.
            </p>
          </div>
        </div>

        {/* Get in Touch CTA */}
        <div className="glass-panel" style={{ padding: '60px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'linear-gradient(135deg, rgba(0, 255, 204, 0.05) 0%, rgba(138, 43, 226, 0.05) 100%)' }}>
          <Mail size={40} style={{ color: 'var(--accent-cyan)', marginBottom: '20px' }} />
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Get in Touch</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.8, maxWidth: '800px', margin: '0 auto 30px auto', textAlign: 'center' }}>
            We welcome collaborations, partnerships, and opportunities to innovate together. Connect with us to explore how Ayyakar Cloud Solutions can transform your digital journey.
          </p>
          <a 
            href="mailto:start@connect.ayyakarcloudsolutions.com" 
            style={{ 
              display: 'inline-block',
              fontSize: '1.2rem', 
              color: 'var(--accent-cyan)', 
              textDecoration: 'none',
              border: '1px solid var(--accent-cyan)',
              padding: '12px 30px',
              borderRadius: '30px',
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
            start@connect.ayyakarcloudsolutions.com
          </a>
        </div>

      </div>
    </div>
  );
}
