import { Database, Cpu, Layers, Zap, BookX, Lightbulb, AlertTriangle, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home animate-fade-in" style={{
        position: 'relative',
        background: 'linear-gradient(160deg, #0b0f1e 0%, #101628 35%, #0e1530 65%, #110e24 100%)',
        minHeight: '100vh',
      }}>
      {/* Soft bg blobs */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '8%', left: '5%',
          width: '520px', height: '520px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.13) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }} />
        <div style={{
          position: 'absolute', top: '40%', right: '3%',
          width: '600px', height: '600px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14,165,233,0.10) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }} />
        <div style={{
          position: 'absolute', bottom: '10%', left: '30%',
          width: '480px', height: '480px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168,85,247,0.09) 0%, transparent 70%)',
          filter: 'blur(70px)',
        }} />
        {/* Subtle dot grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        }} />
      </div>
      {/* Page content sits above blobs */}
      <div style={{ position: 'relative', zIndex: 1 }}>
      {/* Hero Section - Modern Professional */}
      <section className="hero" style={{ 
        minHeight: '92vh', 
        display: 'flex', 
        alignItems: 'center', 
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0A0E1A 0%, #0D1321 40%, #0F172A 70%, #1A0A2E 100%)',
      }}>
        {/* Cloudscape background image */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: 'url(/assets/hero_cloudscape.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.35,
          mixBlendMode: 'luminosity'
        }} />
        {/* Dark overlay for text contrast */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          background: 'linear-gradient(to bottom, rgba(10,14,26,0.4) 0%, rgba(10,14,26,0.65) 100%)'
        }} />
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes floatOrb1 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(60px, -40px) scale(1.1); }
            66% { transform: translate(-40px, 30px) scale(0.9); }
          }
          @keyframes floatOrb2 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(-80px, 50px) scale(1.15); }
            66% { transform: translate(50px, -30px) scale(0.95); }
          }
          @keyframes floatOrb3 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(40px, 60px) scale(1.2); }
          }
          @keyframes shimmerLine {
            0% { opacity: 0; transform: translateX(-100%); }
            50% { opacity: 1; }
            100% { opacity: 0; transform: translateX(100%); }
          }
          @keyframes pulseGlow {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.7; }
          }
          @keyframes slideBadge {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes gradientShift {
            0%   { background-position: 0% 50%; }
            50%  { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes shimmerSweep {
            0%   { left: -100%; opacity: 0; }
            20%  { opacity: 1; }
            80%  { opacity: 1; }
            100% { left: 150%; opacity: 0; }
          }
          @keyframes pulseRing {
            0%   { transform: scale(1);   opacity: 0.6; }
            70%  { transform: scale(1.55); opacity: 0; }
            100% { transform: scale(1.55); opacity: 0; }
          }
          @keyframes btnFloat {
            0%, 100% { transform: translateY(0px); }
            50%       { transform: translateY(-5px); }
          }
          .explore-btn {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            padding: 18px 52px;
            border-radius: 100px;
            background: linear-gradient(270deg, #6366f1, #a855f7, #00f0ff, #FFD700, #f97316, #6366f1);
            background-size: 400% 400%;
            animation: gradientShift 5s ease infinite, btnFloat 3s ease-in-out infinite;
            color: #fff;
            font-weight: 800;
            font-size: 1.05rem;
            letter-spacing: 0.5px;
            text-decoration: none;
            position: relative;
            overflow: hidden;
            box-shadow: 0 8px 40px rgba(99,102,241,0.5), 0 0 0 0 rgba(99,102,241,0.4);
            transition: box-shadow 0.3s ease, transform 0.3s ease;
            border: none;
            cursor: pointer;
          }
          .explore-btn::before {
            content: '';
            position: absolute;
            top: 0; left: -100%;
            width: 60%; height: 100%;
            background: linear-gradient(120deg, transparent 20%, rgba(255,255,255,0.35) 50%, transparent 80%);
            animation: shimmerSweep 2.8s ease-in-out infinite;
          }
          .explore-btn-ring {
            position: absolute;
            inset: 0;
            border-radius: 100px;
            border: 2px solid rgba(255,255,255,0.5);
            animation: pulseRing 2s ease-out infinite;
            pointer-events: none;
          }
          .explore-btn:hover {
            animation-play-state: paused;
            transform: translateY(-4px) scale(1.04) !important;
            box-shadow: 0 20px 60px rgba(99,102,241,0.7), 0 0 40px rgba(0,240,255,0.3) !important;
          }
        `}} />

        {/* Background gradient orbs */}
        <div style={{
          position: 'absolute', top: '-10%', right: '-5%',
          width: '600px', height: '600px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(220, 38, 38, 0.15) 0%, transparent 70%)',
          filter: 'blur(40px)', animation: 'floatOrb1 18s ease-in-out infinite',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute', bottom: '-15%', left: '-8%',
          width: '700px', height: '700px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%)',
          filter: 'blur(50px)', animation: 'floatOrb2 22s ease-in-out infinite',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute', top: '30%', left: '50%',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 215, 0, 0.07) 0%, transparent 70%)',
          filter: 'blur(60px)', animation: 'floatOrb3 14s ease-in-out infinite',
          pointerEvents: 'none'
        }} />

        {/* Subtle grid overlay */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)'
        }} />

        {/* Shimmer accent line */}
        <div style={{
          position: 'absolute', top: '0', left: '0', right: '0', height: '2px',
          background: 'linear-gradient(90deg, transparent, #DC2626, #FFD700, #6366F1, transparent)',
          animation: 'pulseGlow 3s ease-in-out infinite'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '900px', textAlign: 'center', margin: '0 auto', padding: '0 20px' }}>



            {/* Main Heading */}
            <h1 style={{
              fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: '900', lineHeight: 1.05,
              marginBottom: '24px', letterSpacing: '-1.5px',
              animation: 'slideUp 0.9s ease-out 0.1s both'
            }}>
              <span style={{ color: '#FFD700' }}>Ayyakar</span>{' '}
              <span style={{ color: '#FFFFFF' }}>Cloud Solutions</span>
            </h1>

            {/* Divider accent */}
            <div style={{
              width: '80px', height: '3px', margin: '0 auto 28px',
              background: 'linear-gradient(90deg, #DC2626, #FFD700)',
              borderRadius: '10px', animation: 'slideUp 0.9s ease-out 0.2s both'
            }} />

            {/* Subtitle */}
            <p style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
              color: 'rgba(255,255,255,0.75)',
              marginBottom: '48px',
              fontWeight: '400', lineHeight: 1.7, letterSpacing: '0.3px',
              animation: 'slideUp 0.9s ease-out 0.3s both'
            }}>
              Engineering Intelligent Systems
            </p>

            {/* CTA Buttons */}
            <div style={{
              display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap',
              animation: 'slideUp 0.9s ease-out 0.4s both'
            }}>
              <button className="btn-primary" style={{
                fontSize: '1rem', padding: '16px 40px', borderRadius: '100px',
                background: 'linear-gradient(135deg, #DC2626, #991B1B)',
                border: 'none', color: '#fff', fontWeight: '700',
                boxShadow: '0 8px 32px rgba(220, 38, 38, 0.35)',
                cursor: 'pointer', transition: 'all 0.3s ease', letterSpacing: '0.5px'
              }}
                onClick={() => {
                  document.getElementById('vision-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(220,38,38,0.5)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(220,38,38,0.35)'; }}
              >
                Explore Our Vision
              </button>
              <Link
                to="/products"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '1rem',
                  padding: '16px 40px',
                  borderRadius: '100px',
                  background: 'linear-gradient(270deg, #e0f2fe, #f0abfc, #fde68a, #bfdbfe, #e0f2fe)',
                  backgroundSize: '400% 400%',
                  animation: 'gradientShift 5s ease infinite, btnFloat 3s ease-in-out infinite',
                  color: '#1e1b4b',
                  fontWeight: '800',
                  letterSpacing: '0.5px',
                  textDecoration: 'none',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 8px 32px rgba(224,242,254,0.35)',
                  border: 'none',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px) scale(1.04)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(224,242,254,0.55), 0 0 40px rgba(240,171,252,0.35)';
                  e.currentTarget.style.animationPlayState = 'paused';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(224,242,254,0.35)';
                  e.currentTarget.style.animationPlayState = 'running';
                }}
              >
                <div className="explore-btn-ring" />
                <span>✦</span>
                View Products
                <span style={{ fontSize: '1.3rem', lineHeight: 1 }}>→</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── VISION BANNER ── */}
      <section id="vision-section" style={{
        padding: '110px 24px',
        textAlign: 'center',
        position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(135deg, #07090f 0%, #0c1020 50%, #07090f 100%)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}>
        {/* Big soft orb behind text */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px', height: '700px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.085) 0%, transparent 65%)',
          filter: 'blur(40px)', pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '780px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: '900', lineHeight: 1.1,
            letterSpacing: '-1.5px', color: '#ffffff', marginBottom: '28px',
          }}>
            We Don't Just Build Cloud.{' '}
            <br />
            <span style={{
              background: 'linear-gradient(90deg, #FFD700 0%, #f97316 40%, #a855f7 80%, #00f0ff 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundSize: '200% auto',
            }}>We Engineer the Future.</span>
          </h2>

          <p style={{
            color: 'rgba(255,255,255,0.45)', fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            lineHeight: 1.8, maxWidth: '620px', margin: '0 auto 48px',
          }}>
            To create extraordinary, automated cloud solutions that simplify and elevate everyday life and work by delivering clean, high quality, junk free digital experiences. We aim to build futuristic cloud infrastructure that powers analytics, risk management, education, journaling, and beyond, enabling seamless automation across industries and daily assets.
          </p>

          <div className="responsive-flex">
            {['India-First Innovation', 'Global-Scale Infrastructure', 'Human-Centered Tech'].map((tag, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '8px', height: '8px', borderRadius: '50%',
                  background: ['#6366f1', '#FFD700', '#00f0ff'][i],
                  boxShadow: `0 0 10px ${['#6366f1', '#FFD700', '#00f0ff'][i]}`,
                }} />
                <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', fontWeight: '500' }}>{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems & Solutions Section - 3D Printed Bright Beach Theme */}
      {/* Problems & Solutions Section - Curvy Futuristic Light Theme */}
      <section className="solutions mobile-padding-y" style={{ padding: '100px 0', background: 'linear-gradient(160deg, #07090f 0%, #0b0f1e 40%, #0d1225 70%, #080c18 100%)', overflow: 'hidden', position: 'relative', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        {/* Dark Background Blobs */}
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '450px', height: '450px', background: 'radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(80px)', opacity: 1, zIndex: 0 }} />
        <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(14,165,233,0.14) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(100px)', opacity: 1, zIndex: 0 }} />
        <div style={{ position: 'absolute', top: '40%', left: '40%', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(168,85,247,0.10) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(70px)', opacity: 1, zIndex: 0 }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.8rem', marginBottom: '16px', color: '#ffffff', fontWeight: '800', letterSpacing: '-0.5px' }}>Challenges & Solutions</h2>
            <div style={{ width: '60px', height: '6px', background: 'linear-gradient(90deg, #38BDF8, #818CF8)', margin: '0 auto', borderRadius: '10px' }} />
          </div>

          <div className="responsive-grid-2" style={{ marginBottom: '20px', padding: '0 20px' }}>
            <h3 style={{ fontSize: '1.8rem', color: '#FB7185', textAlign: 'center', fontWeight: '700', textShadow: '0 4px 20px rgba(244, 63, 94, 0.4)' }}>The Problem</h3>
            <h3 style={{ fontSize: '1.8rem', color: '#38BDF8', textAlign: 'center', fontWeight: '700', textShadow: '0 4px 20px rgba(14, 165, 233, 0.4)' }}>Ayyakar Cloud Solution</h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {/* Row 1 - Analytics */}
            <div className="responsive-grid-2">
              <div style={{ 
                padding: '40px', transition: 'all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)', 
                border: '1px solid rgba(251, 113, 133, 0.2)', borderRadius: '40px 10px 40px 10px',
                background: 'linear-gradient(135deg, rgba(251,113,133,0.06) 0%, rgba(15,23,42,0.7) 100%)',
                backdropFilter: 'blur(16px)', boxShadow: '0 15px 35px rgba(0,0,0,0.3)', color: '#e2e8f0'
              }} 
                   onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)'; e.currentTarget.style.borderRadius = '20px 30px 20px 30px'; e.currentTarget.style.boxShadow = '0 25px 45px rgba(244, 63, 94, 0.25)'; e.currentTarget.style.borderColor = 'rgba(251,113,133,0.45)'; }}
                   onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.borderRadius = '40px 10px 40px 10px'; e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.3)'; e.currentTarget.style.borderColor = 'rgba(251,113,133,0.2)'; }}>
                <div style={{ 
                  width: '60px', height: '60px', borderRadius: '50% 20% 50% 20%', transition: 'all 0.5s',
                  background: 'linear-gradient(135deg, #FB7185, #E11D48)', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', 
                  boxShadow: '0 10px 20px rgba(225, 29, 72, 0.4)', marginBottom: '25px'
                }}>
                  <Database size={28} strokeWidth={2} />
                </div>
                <h4 style={{ fontSize: '1.5rem', marginBottom: '12px', color: '#f1f5f9', fontWeight: '800' }}>Fragmented Analytics</h4>
                <p style={{ color: 'rgba(226,232,240,0.65)', lineHeight: '1.7', fontWeight: '500' }}>Traditional data tools lack predictive power and fail to process real-time enterprise information efficiently, resulting in data silos and missed opportunities.</p>
              </div>

              <div style={{ 
                padding: '40px', transition: 'all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)', 
                border: '1px solid rgba(56, 189, 248, 0.2)', borderRadius: '40px 10px 40px 10px',
                background: 'linear-gradient(135deg, rgba(56,189,248,0.06) 0%, rgba(15,23,42,0.7) 100%)',
                backdropFilter: 'blur(16px)', boxShadow: '0 15px 35px rgba(0,0,0,0.3)', color: '#e2e8f0'
              }}
                   onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)'; e.currentTarget.style.borderRadius = '20px 30px 20px 30px'; e.currentTarget.style.boxShadow = '0 25px 45px rgba(14, 165, 233, 0.25)'; e.currentTarget.style.borderColor = 'rgba(56,189,248,0.45)'; }}
                   onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.borderRadius = '40px 10px 40px 10px'; e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.3)'; e.currentTarget.style.borderColor = 'rgba(56,189,248,0.2)'; }}>
                <div style={{ 
                  width: '60px', height: '60px', borderRadius: '50% 20% 50% 20%', transition: 'all 0.5s',
                  background: 'linear-gradient(135deg, #38BDF8, #0284C7)', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', 
                  boxShadow: '0 10px 20px rgba(2, 132, 199, 0.4)', marginBottom: '25px'
                }}>
                  <Cpu size={28} strokeWidth={2} />
                </div>
                <h4 style={{ fontSize: '1.5rem', marginBottom: '12px', color: '#f1f5f9', fontWeight: '800' }}>Quantum-Ready Infrastructure</h4>
                <p style={{ color: 'rgba(226,232,240,0.65)', lineHeight: '1.7', fontWeight: '500' }}>Deep, predictive data insights powered by our unified architecture to help you make precise, automated decisions in real time.</p>
              </div>
            </div>

            {/* Row 2 - Knowledge Management */}
            <div className="responsive-grid-2">
              <div style={{ 
                padding: '40px', transition: 'all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)', 
                border: '1px solid rgba(232, 121, 249, 0.2)', borderRadius: '10px 40px 10px 40px',
                background: 'linear-gradient(135deg, rgba(232,121,249,0.06) 0%, rgba(15,23,42,0.7) 100%)',
                backdropFilter: 'blur(16px)', boxShadow: '0 15px 35px rgba(0,0,0,0.3)', color: '#e2e8f0'
              }}
                   onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)'; e.currentTarget.style.borderRadius = '30px 20px 30px 20px'; e.currentTarget.style.boxShadow = '0 25px 45px rgba(217, 70, 239, 0.25)'; e.currentTarget.style.borderColor = 'rgba(232,121,249,0.45)'; }}
                   onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.borderRadius = '10px 40px 10px 40px'; e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.3)'; e.currentTarget.style.borderColor = 'rgba(232,121,249,0.2)'; }}>
                <div style={{ 
                  width: '60px', height: '60px', borderRadius: '20% 50% 20% 50%', transition: 'all 0.5s',
                  background: 'linear-gradient(135deg, #E879F9, #A21CAF)', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', 
                  boxShadow: '0 10px 20px rgba(162, 28, 175, 0.4)', marginBottom: '25px'
                }}>
                  <Layers size={28} strokeWidth={2} />
                </div>
                <h4 style={{ fontSize: '1.5rem', marginBottom: '12px', color: '#f1f5f9', fontWeight: '800' }}>Inefficient Knowledge Management</h4>
                <p style={{ color: 'rgba(226,232,240,0.65)', lineHeight: '1.7', fontWeight: '500' }}>Enterprise thoughts, logs, and critical notes are scattered across multiple platforms, making it nearly impossible to contextually retrieve key insights.</p>
              </div>

              <div style={{ 
                padding: '40px', transition: 'all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)', 
                border: '1px solid rgba(192, 132, 252, 0.2)', borderRadius: '10px 40px 10px 40px',
                background: 'linear-gradient(135deg, rgba(192,132,252,0.06) 0%, rgba(15,23,42,0.7) 100%)',
                backdropFilter: 'blur(16px)', boxShadow: '0 15px 35px rgba(0,0,0,0.3)', color: '#e2e8f0'
              }}
                   onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)'; e.currentTarget.style.borderRadius = '30px 20px 30px 20px'; e.currentTarget.style.boxShadow = '0 25px 45px rgba(168, 85, 247, 0.25)'; e.currentTarget.style.borderColor = 'rgba(192,132,252,0.45)'; }}
                   onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.borderRadius = '10px 40px 10px 40px'; e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.3)'; e.currentTarget.style.borderColor = 'rgba(192,132,252,0.2)'; }}>
                <div style={{ 
                  width: '60px', height: '60px', borderRadius: '20% 50% 20% 50%', transition: 'all 0.5s',
                  background: 'linear-gradient(135deg, #C084FC, #7E22CE)', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', 
                  boxShadow: '0 10px 20px rgba(126, 34, 206, 0.4)', marginBottom: '25px'
                }}>
                  <Zap size={28} strokeWidth={2} />
                </div>
                <h4 style={{ fontSize: '1.5rem', marginBottom: '12px', color: '#f1f5f9', fontWeight: '800' }}>AI-Assisted Infinite Memory</h4>
                <p style={{ color: 'rgba(226,232,240,0.65)', lineHeight: '1.7', fontWeight: '500' }}>Secure journaling systems that automatically document, contextualize, and retrieve your most important insights instantly utilizing advanced AI.</p>
              </div>
            </div>

            {/* Row 3 - Education / Learning */}
            <div className="responsive-grid-2">
              <div style={{ 
                padding: '40px', transition: 'all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)', 
                border: '1px solid rgba(148, 163, 184, 0.15)', borderRadius: '40px 10px 40px 10px',
                background: 'linear-gradient(135deg, rgba(100,116,139,0.08) 0%, rgba(15,23,42,0.7) 100%)',
                backdropFilter: 'blur(16px)', boxShadow: '0 15px 35px rgba(0,0,0,0.3)', color: '#e2e8f0'
              }}
                   onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)'; e.currentTarget.style.borderRadius = '20px 30px 20px 30px'; e.currentTarget.style.boxShadow = '0 25px 45px rgba(100,116,139,0.2)'; e.currentTarget.style.borderColor = 'rgba(148,163,184,0.35)'; }}
                   onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.borderRadius = '40px 10px 40px 10px'; e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.3)'; e.currentTarget.style.borderColor = 'rgba(148,163,184,0.15)'; }}>
                <div style={{ 
                  width: '60px', height: '60px', borderRadius: '50% 20% 50% 20%', transition: 'all 0.5s',
                  background: 'linear-gradient(135deg, #CBD5E1, #64748B)', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', 
                  boxShadow: '0 10px 20px rgba(100, 116, 139, 0.4)', marginBottom: '25px'
                }}>
                  <BookX size={28} strokeWidth={2} />
                </div>
                <h4 style={{ fontSize: '1.5rem', marginBottom: '12px', color: '#f1f5f9', fontWeight: '800' }}>Outdated Educational Tools</h4>
                <p style={{ color: 'rgba(226,232,240,0.65)', lineHeight: '1.7', fontWeight: '500' }}>Standard learning platforms offer generic curriculums that fail to engage users or adequately prepare workforces for rapidly emerging technologies.</p>
              </div>

              <div style={{ 
                padding: '40px', transition: 'all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)', 
                border: '1px solid rgba(110, 231, 183, 0.2)', borderRadius: '40px 10px 40px 10px',
                background: 'linear-gradient(135deg, rgba(16,185,129,0.07) 0%, rgba(15,23,42,0.7) 100%)',
                backdropFilter: 'blur(16px)', boxShadow: '0 15px 35px rgba(0,0,0,0.3)', color: '#e2e8f0'
              }}
                   onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)'; e.currentTarget.style.borderRadius = '20px 30px 20px 30px'; e.currentTarget.style.boxShadow = '0 25px 45px rgba(16, 185, 129, 0.25)'; e.currentTarget.style.borderColor = 'rgba(110,231,183,0.45)'; }}
                   onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.borderRadius = '40px 10px 40px 10px'; e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.3)'; e.currentTarget.style.borderColor = 'rgba(110,231,183,0.2)'; }}>
                <div style={{ 
                  width: '60px', height: '60px', borderRadius: '50% 20% 50% 20%', transition: 'all 0.5s',
                  background: 'linear-gradient(135deg, #6EE7B7, #059669)', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', 
                  boxShadow: '0 10px 20px rgba(5, 150, 105, 0.4)', marginBottom: '25px'
                }}>
                  <Lightbulb size={28} strokeWidth={2} />
                </div>
                <h4 style={{ fontSize: '1.5rem', marginBottom: '12px', color: '#f1f5f9', fontWeight: '800' }}>Immersive Learning Environments</h4>
                <p style={{ color: 'rgba(226,232,240,0.65)', lineHeight: '1.7', fontWeight: '500' }}>Hyper-personalized education platforms designed from the ground up to equip your team with futuristic, engaging, and dynamic learning tools.</p>
              </div>
            </div>

            {/* Row 4 - Risk Management */}
            <div className="responsive-grid-2">
              <div style={{ 
                padding: '40px', transition: 'all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)', 
                border: '1px solid rgba(252, 211, 77, 0.2)', borderRadius: '10px 40px 10px 40px',
                background: 'linear-gradient(135deg, rgba(217,119,6,0.07) 0%, rgba(15,23,42,0.7) 100%)',
                backdropFilter: 'blur(16px)', boxShadow: '0 15px 35px rgba(0,0,0,0.3)', color: '#e2e8f0'
              }}
                   onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)'; e.currentTarget.style.borderRadius = '30px 20px 30px 20px'; e.currentTarget.style.boxShadow = '0 25px 45px rgba(245, 158, 11, 0.25)'; e.currentTarget.style.borderColor = 'rgba(252,211,77,0.45)'; }}
                   onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.borderRadius = '10px 40px 10px 40px'; e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.3)'; e.currentTarget.style.borderColor = 'rgba(252,211,77,0.2)'; }}>
                <div style={{ 
                  width: '60px', height: '60px', borderRadius: '20% 50% 20% 50%', transition: 'all 0.5s',
                  background: 'linear-gradient(135deg, #FCD34D, #D97706)', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', 
                  boxShadow: '0 10px 20px rgba(217, 119, 6, 0.4)', marginBottom: '25px'
                }}>
                  <AlertTriangle size={28} strokeWidth={2} />
                </div>
                <h4 style={{ fontSize: '1.5rem', marginBottom: '12px', color: '#f1f5f9', fontWeight: '800' }}>Unpredictable Volatility & Risk</h4>
                <p style={{ color: 'rgba(226,232,240,0.65)', lineHeight: '1.7', fontWeight: '500' }}>Reactive strategies leave your network and assets vulnerable to sudden market shifts and unseen operational threats, causing catastrophic business delays.</p>
              </div>

              <div style={{ 
                padding: '40px', transition: 'all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)', 
                border: '1px solid rgba(147, 197, 253, 0.2)', borderRadius: '10px 40px 10px 40px',
                background: 'linear-gradient(135deg, rgba(37,99,235,0.07) 0%, rgba(15,23,42,0.7) 100%)',
                backdropFilter: 'blur(16px)', boxShadow: '0 15px 35px rgba(0,0,0,0.3)', color: '#e2e8f0'
              }}
                   onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)'; e.currentTarget.style.borderRadius = '30px 20px 30px 20px'; e.currentTarget.style.boxShadow = '0 25px 45px rgba(59, 130, 246, 0.25)'; e.currentTarget.style.borderColor = 'rgba(147,197,253,0.45)'; }}
                   onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.borderRadius = '10px 40px 10px 40px'; e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.3)'; e.currentTarget.style.borderColor = 'rgba(147,197,253,0.2)'; }}>
                <div style={{ 
                  width: '60px', height: '60px', borderRadius: '20% 50% 20% 50%', transition: 'all 0.5s',
                  background: 'linear-gradient(135deg, #93C5FD, #2563EB)', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', 
                  boxShadow: '0 10px 20px rgba(37, 99, 235, 0.4)', marginBottom: '25px'
                }}>
                  <ShieldCheck size={28} strokeWidth={2} />
                </div>
                <h4 style={{ fontSize: '1.5rem', marginBottom: '12px', color: '#f1f5f9', fontWeight: '800' }}>Proactive Risk Management Tools</h4>
                <p style={{ color: 'rgba(226,232,240,0.65)', lineHeight: '1.7', fontWeight: '500' }}>Next-generation algorithms that proactively identify, model, and mitigate critical threats long before they can impact your cloud infrastructure.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TECH DNA ── */}
      <section className="mobile-padding-y" style={{ padding: '100px 0', position: 'relative', overflow: 'hidden', background: 'linear-gradient(160deg, #0b0f1e 0%, #0d1225 40%, #080c18 70%, #0b0f1e 100%)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        {/* Background blobs */}
        <div style={{ position: 'absolute', top: '-5%', right: '-5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(99,102,241,0.14) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-5%', left: '-5%', width: '450px', height: '450px', background: 'radial-gradient(circle, rgba(0,240,255,0.10) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '40%', left: '45%', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(168,85,247,0.09) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(70px)', pointerEvents: 'none' }} />
        {/* Subtle dot grid */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '28px 28px', maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)', pointerEvents: 'none' }} />

        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span style={{
              display: 'inline-block', padding: '6px 20px', borderRadius: '100px',
              background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.3)',
              color: '#818cf8', fontSize: '0.82rem', fontWeight: '700', letterSpacing: '2px',
              textTransform: 'uppercase', marginBottom: '20px',
            }}>Our Technology DNA</span>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '900', color: '#ffffff',
              letterSpacing: '-1px', lineHeight: 1.1, marginBottom: '16px',
            }}>
              Built on Pillars of{' '}
              <span style={{
                background: 'linear-gradient(90deg, #6366f1, #00f0ff)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>Next-Gen Technology</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto' }}>
              Every layer of the Ayyakar stack is engineered to be faster, safer, and smarter than what came before.
            </p>
          </div>

          <div className="responsive-grid-3">
            {[
              {
                icon: '🤖', title: 'AI-Native Architecture',
                desc: 'Every service is infused with machine intelligence — from predictive autoscaling to anomaly detection that thinks ahead.',
                grad: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                glow: 'rgba(99,102,241,0.25)',
                border: 'rgba(99,102,241,0.3)',
              },
              {
                icon: '🔐', title: 'Zero Trust Security',
                desc: 'Identity-first, never-trust-always-verify security posture baked into every request, session, and data transaction.',
                grad: 'linear-gradient(135deg, #ef4444, #f97316)',
                glow: 'rgba(239,68,68,0.2)',
                border: 'rgba(239,68,68,0.3)',
              },
              {
                icon: '⚡', title: 'Edge-First Computing',
                desc: 'Milliseconds matter. Our distributed edge fabric processes workloads closer to your users — globally, instantly.',
                grad: 'linear-gradient(135deg, #FFD700, #f59e0b)',
                glow: 'rgba(255,215,0,0.18)',
                border: 'rgba(255,215,0,0.3)',
              },
              {
                icon: '☁️', title: 'Multi-Cloud Orchestration',
                desc: 'Seamlessly manage AWS, GCP, Azure, and private cloud under one intelligent control plane without vendor lock-in.',
                grad: 'linear-gradient(135deg, #00f0ff, #0ea5e9)',
                glow: 'rgba(0,240,255,0.15)',
                border: 'rgba(0,240,255,0.3)',
              },
              {
                icon: '♾️', title: 'Autonomous DevOps',
                desc: 'CI/CD pipelines, infrastructure-as-code, and self-healing deployments — engineered to ship faster with zero downtime.',
                grad: 'linear-gradient(135deg, #10b981, #059669)',
                glow: 'rgba(16,185,129,0.18)',
                border: 'rgba(16,185,129,0.3)',
              },
              {
                icon: '📡', title: 'Real-Time Observability',
                desc: 'Full-spectrum telemetry, distributed tracing, and live dashboards that surface insight before problems arise.',
                grad: 'linear-gradient(135deg, #a855f7, #ec4899)',
                glow: 'rgba(168,85,247,0.2)',
                border: 'rgba(168,85,247,0.3)',
              },
            ].map((card, i) => (
              <div key={i} style={{
                padding: '36px 30px',
                borderRadius: '24px',
                background: 'rgba(255,255,255,0.03)',
                border: `1px solid ${card.border}`,
                backdropFilter: 'blur(16px)',
                transition: 'all 0.35s cubic-bezier(0.25,0.8,0.25,1)',
                cursor: 'default',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = `0 24px 60px ${card.glow}`;
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                }}
              >
                {/* Icon badge */}
                <div style={{
                  width: '56px', height: '56px', borderRadius: '16px',
                  background: card.grad,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.6rem', marginBottom: '24px',
                  boxShadow: `0 8px 24px ${card.glow}`,
                }}>{card.icon}</div>

                {/* Gradient title */}
                <h3 style={{
                  fontSize: '1.15rem', fontWeight: '800', marginBottom: '12px',
                  background: card.grad,
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  letterSpacing: '-0.3px',
                }}>{card.title}</h3>

                <p style={{ color: 'rgba(255,255,255,0.50)', lineHeight: '1.75', fontSize: '0.93rem' }}>{card.desc}</p>

                {/* Bottom accent bar */}
                <div style={{
                  marginTop: '24px', height: '2px', borderRadius: '10px',
                  background: card.grad, opacity: 0.4,
                }} />
              </div>
            ))}
          </div>

          {/* ── CTA strip ── */}
          <div style={{
            marginTop: '72px',
            padding: '56px 40px',
            borderRadius: '28px',
            background: 'linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(0,240,255,0.05) 50%, rgba(168,85,247,0.08) 100%)',
            border: '1px solid rgba(99,102,241,0.2)',
            backdropFilter: 'blur(20px)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* glow orb */}
            <div style={{
              position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '500px', height: '200px', borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(99,102,241,0.10) 0%, transparent 70%)',
              filter: 'blur(40px)', pointerEvents: 'none',
            }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <p style={{
                fontSize: '0.8rem', fontWeight: '700', letterSpacing: '3px',
                textTransform: 'uppercase', color: '#818cf8', marginBottom: '16px',
              }}>Sounds like it suits you?</p>
              <h3 style={{
                fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: '900',
                color: '#ffffff', lineHeight: 1.15, letterSpacing: '-0.5px', marginBottom: '16px',
              }}>
                Check out what we've{' '}
                <span style={{
                  background: 'linear-gradient(90deg, #6366f1, #00f0ff)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}>built for you.</span>
              </h3>
              <p style={{
                color: 'rgba(255,255,255,0.45)', fontSize: '1rem',
                maxWidth: '480px', margin: '0 auto 36px', lineHeight: 1.7,
              }}>
                Explore our full suite of cloud products — each engineered to automate, accelerate, and elevate your operations.
              </p>
              <Link
                to="/products"
                className="explore-btn"
              >
                <div className="explore-btn-ring" />
                <span>✦</span>
                Explore Our Products
                <span style={{ fontSize: '1.3rem', lineHeight: 1 }}>→</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      </div>{/* end zIndex:1 wrapper */}
    </div>
  );
}
