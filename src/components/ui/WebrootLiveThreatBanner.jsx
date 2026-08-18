'use client';

import { useState, useEffect } from 'react';
import { ShieldCheck, Activity, Cpu, Cloud, Zap, RefreshCw, Lock, Globe, CheckCircle2 } from 'lucide-react';

export default function WebrootLiveThreatBanner() {
  const [urlCount, setUrlCount] = useState(95420180410);

  // Dynamic live threat count increment simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setUrlCount((prev) => prev + Math.floor(Math.random() * 5) + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        backgroundColor: '#0F172A',
        backgroundImage: 'radial-gradient(ellipse at top, #1E293B 0%, #0F172A 100%)',
        border: '1px solid rgba(16, 185, 129, 0.3)',
        borderRadius: 'var(--radius-xl)',
        padding: '1.75rem 2rem',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25), 0 0 20px rgba(16, 185, 129, 0.1)',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Cyber Grid lines */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          pointerEvents: 'none'
        }}
      />

      <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
        {/* Left Column: Live Status */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <div
            style={{
              width: '3.5rem',
              height: '3.5rem',
              borderRadius: 'var(--radius-lg)',
              backgroundColor: 'rgba(16, 185, 129, 0.15)',
              border: '1px solid rgba(16, 185, 129, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#10B981',
              boxShadow: '0 0 15px rgba(16, 185, 129, 0.3)'
            }}
          >
            <ShieldCheck size={32} />
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981', boxShadow: '0 0 8px #10B981' }} />
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#10B981', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                BrightCloud® Active Telemetry
              </span>
            </div>

            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#FFFFFF', margin: 0, lineHeight: 1.2 }}>
              Webroot Real-Time Threat Intelligence Cloud
            </h3>
            <div style={{ fontSize: '0.85rem', color: '#94A3B8', marginTop: '0.2rem' }}>
              Zero-day ransomware protection & sub-15MB memory agent active.
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Live Metrics */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          {/* Metric 1 */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 'var(--radius-md)',
              padding: '0.65rem 1rem',
              minWidth: '130px'
            }}
          >
            <div style={{ fontSize: '0.7rem', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <Activity size={12} color="#10B981" /> Cloud Sync Latency
            </div>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#10B981', marginTop: '0.15rem' }}>
              &lt; 12ms
            </div>
          </div>

          {/* Metric 2 */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 'var(--radius-md)',
              padding: '0.65rem 1rem',
              minWidth: '130px'
            }}
          >
            <div style={{ fontSize: '0.7rem', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <Cpu size={12} color="#38BDF8" /> Agent Footprint
            </div>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#38BDF8', marginTop: '0.15rem' }}>
              14.2 MB RAM
            </div>
          </div>

          {/* Metric 3 */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 'var(--radius-md)',
              padding: '0.65rem 1rem',
              minWidth: '170px'
            }}
          >
            <div style={{ fontSize: '0.7rem', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <Globe size={12} color="#C084FC" /> URLs & Hashes Rated
            </div>
            <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#C084FC', marginTop: '0.15rem', fontFamily: 'monospace' }}>
              {urlCount.toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
