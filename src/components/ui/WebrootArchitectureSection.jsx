'use client';

import { useState } from 'react';
import { Cloud, ShieldCheck, RefreshCw, Lock, Globe, Cpu, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

export default function WebrootArchitectureSection() {
  const [activeTab, setActiveTab] = useState('cloud');

  const architecturePillars = [
    {
      id: 'cloud',
      title: 'Cloud Threat Intelligence',
      short: 'No Huge Definitions',
      icon: Cloud,
      badge: 'Real-Time Cloud',
      headline: 'Sub-15MB Memory Footprint with Instant Global Threat Sync',
      summary: 'Traditional antivirus tools force users to download massive virus signature files daily. Webroot offloads file reputation analysis to the BrightCloud® threat intelligence cloud.',
      steps: [
        'Local agent computes cryptographic hash of files during scan or execution.',
        'Hash is queried against global BrightCloud cloud database in sub-milliseconds.',
        'Threat verdict returned instantly without consuming local RAM or CPU render cycles.',
        'New threats detected anywhere on Earth instantly protect all connected Webroot users.'
      ],
      impact: 'Zero impact on Photoshop, 3D rendering in Blender, or intense compilation tasks.'
    },
    {
      id: 'journaling',
      title: 'Behavioral Journaling & Rollback',
      short: 'Zero-Day Ransomware Defense',
      icon: RefreshCw,
      badge: 'Ransomware Shield',
      headline: 'Behavioral Monitoring with Instant System State Restoration',
      summary: 'When Webroot encounters a brand-new, unclassified program, it allows it to run in a contained state while recording every single system modification.',
      steps: [
        'Unclassified program is monitored and assigned a temporary behavioral sandbox.',
        'Webroot Journals all file changes, registry edits, and memory writes in real-time.',
        'If program performs malicious actions (e.g. encrypting files), it is instantly terminated.',
        'Webroot executes Rollback, undoing all file edits and restoring original uncorrupted files.'
      ],
      impact: 'Ransomware cannot permanently encrypt or hold client files hostage.'
    },
    {
      id: 'dns',
      title: 'DNS Layer Perimeter Guard',
      short: 'Port 53 Network Shield',
      icon: Globe,
      badge: 'Network Defense',
      headline: 'Blocking Web Threats Before Connections Reach Your Machine',
      summary: 'Webroot DNS Protection intercepts traffic at the domain resolution phase, keeping malicious payloads away from client network interfaces.',
      steps: [
        'Domain requests (port 53) are routed to Webroot Anycast DNS resolvers.',
        'BrightCloud checks domain age, risk category, and command-and-control (C2) status.',
        'Malicious links or phishing sites are redirected to a secure block page instantly.',
        'Protects against drive-by downloads, cryptomining scripts, and botnet callouts.'
      ],
      impact: 'Stops cyber attacks at the perimeter before any executable payload is downloaded.'
    },
    {
      id: 'identity',
      title: 'Identity & Browser Sandbox',
      short: 'Credential Protection',
      icon: Lock,
      badge: 'Memory Vault',
      headline: 'Encapsulating Web Sessions Against Keyloggers & Screen Scrapers',
      summary: 'Webroot Identity Shield creates a protective memory bubble around web browsers and active applications during sensitive logins.',
      steps: [
        'Detects active browser sessions accessing banking, SaaS apps, or client portals.',
        'Intercepts keystrokes to prevent background keylogging malware from recording credentials.',
        'Blocks screen-grabber spyware from capturing screen buffer snapshots during entry.',
        'Prevents Man-in-the-Middle (MitM) scripts from hijacking browser authentication cookies.'
      ],
      impact: 'Ensures cloud login passwords and financial details remain 100% confidential.'
    }
  ];

  const currentPillar = architecturePillars.find((p) => p.id === activeTab) || architecturePillars[0];
  const IconComponent = currentPillar.icon;

  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid var(--webroot-border)',
        borderRadius: 'var(--radius-xl)',
        padding: '2.5rem',
        boxShadow: 'var(--shadow-md)',
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)'
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2.5rem' }}>
        <span className="badge badge-webroot" style={{ marginBottom: '0.75rem' }}>
          <Cpu size={14} /> Technical Mechanics
        </span>
        <h2 className="h2-title" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
          How Webroot Works Under the Hood
        </h2>
        <p className="sub-text" style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>
          Discover how Webroot delivers enterprise protection without the heavy system slowdowns typical of legacy antivirus software.
        </p>
      </div>

      {/* Navigation Pills */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '0.75rem',
          marginBottom: '2rem'
        }}
      >
        {architecturePillars.map((p) => {
          const PIcon = p.icon;
          const isActive = p.id === activeTab;
          return (
            <button
              key={p.id}
              onClick={() => setActiveTab(p.id)}
              style={{
                padding: '1rem 0.85rem',
                borderRadius: 'var(--radius-lg)',
                border: isActive ? '2px solid var(--webroot-primary)' : '1px solid var(--border-light)',
                backgroundColor: isActive ? 'var(--webroot-light)' : '#FFFFFF',
                color: isActive ? 'var(--webroot-primary)' : 'var(--text-secondary)',
                fontWeight: isActive ? 700 : 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                fontSize: '0.875rem',
                textAlign: 'center'
              }}
            >
              <PIcon size={18} />
              <span>{p.title}</span>
            </button>
          );
        })}
      </div>

      {/* Pillar Content Panel */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid var(--webroot-border)',
          borderRadius: 'var(--radius-lg)',
          padding: '2rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2.5rem',
          alignItems: 'center'
        }}
      >
        {/* Left Column: Explanation */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <span className="badge badge-webroot">{currentPillar.badge}</span>
          </div>

          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem', lineHeight: 1.3 }}>
            {currentPillar.headline}
          </h3>

          <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
            {currentPillar.summary}
          </p>

          <div
            style={{
              backgroundColor: 'var(--webroot-light)',
              borderLeft: '4px solid var(--webroot-primary)',
              padding: '1rem',
              borderRadius: '0 var(--radius-md) var(--radius-md) 0'
            }}
          >
            <div style={{ fontWeight: 700, fontSize: '0.8125rem', color: 'var(--webroot-primary)', textTransform: 'uppercase', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Zap size={14} /> Direct Workflow Impact
            </div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-primary)', fontWeight: 600 }}>
              {currentPillar.impact}
            </div>
          </div>
        </div>

        {/* Right Column: Execution Flow */}
        <div style={{ backgroundColor: '#F8FAFC', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
          <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <IconComponent size={20} color="var(--webroot-primary)" /> Step-by-Step Architecture Process
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {currentPillar.steps.map((step, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <div
                  style={{
                    width: '1.5rem',
                    height: '1.5rem',
                    borderRadius: '50%',
                    backgroundColor: 'var(--webroot-primary)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    flexShrink: 0
                  }}
                >
                  {idx + 1}
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {step}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
