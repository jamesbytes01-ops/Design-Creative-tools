'use client';

import { ShieldCheck, Cpu, Cloud, Globe, Zap } from 'lucide-react';

export default function WebrootLiveThreatBanner() {
  return (
    <div
      style={{
        backgroundColor: '#0F172A',
        backgroundImage: 'radial-gradient(ellipse at top, #1E293B 0%, #0F172A 100%)',
        border: '1px solid var(--border-light)',
        borderRadius: 'var(--radius-xl)',
        padding: '1.75rem 2rem',
        boxShadow: 'var(--shadow-md)',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Subtle Background Accent */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}
      />

      <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
        {/* Left Column: Architecture Overview */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <div
            style={{
              width: '3.25rem',
              height: '3.25rem',
              borderRadius: 'var(--radius-lg)',
              backgroundColor: 'rgba(16, 185, 129, 0.12)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#10B981'
            }}
          >
            <Cloud size={28} />
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.2rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#10B981', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                BrightCloud® Threat Intelligence Infrastructure
              </span>
            </div>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#FFFFFF', margin: 0, lineHeight: 1.2 }}>
              Webroot Real-Time Threat Intelligence Cloud
            </h3>
            <div style={{ fontSize: '0.85rem', color: '#94A3B8', marginTop: '0.2rem' }}>
              Sub-15MB memory agent backed by continuous global threat rep analysis.
            </div>
          </div>
        </div>

        {/* Right Column: Verified Enterprise Benchmarks */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          {/* Benchmark 1 */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: 'var(--radius-md)',
              padding: '0.65rem 1rem',
              minWidth: '130px'
            }}
          >
            <div style={{ fontSize: '0.7rem', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <Zap size={12} color="#10B981" /> Cloud Sync
            </div>
            <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#10B981', marginTop: '0.15rem' }}>
              &lt; 12ms Avg Latency
            </div>
          </div>

          {/* Benchmark 2 */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: 'var(--radius-md)',
              padding: '0.65rem 1rem',
              minWidth: '130px'
            }}
          >
            <div style={{ fontSize: '0.7rem', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <Cpu size={12} color="#38BDF8" /> Agent Footprint
            </div>
            <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#38BDF8', marginTop: '0.15rem' }}>
              14.2 MB RAM
            </div>
          </div>

          {/* Benchmark 3 */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: 'var(--radius-md)',
              padding: '0.65rem 1rem',
              minWidth: '160px'
            }}
          >
            <div style={{ fontSize: '0.7rem', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <Globe size={12} color="#C084FC" /> Threat Database
            </div>
            <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#C084FC', marginTop: '0.15rem' }}>
              95 Billion+ Objects
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
