'use client';

import { ShieldCheck, ShieldAlert, Wifi, Building, Globe, GraduationCap, Cloud, Lock, Smartphone, Zap, Cpu, Activity, CheckCircle2, LockKeyhole } from 'lucide-react';

export default function WebrootVisualPreview({ productId, category, name }) {
  // Theme gradients & visual configurations based on product type
  const getVisualConfig = () => {
    switch (productId) {
      case 'webroot-antivirus':
        return {
          bgGradient: 'linear-gradient(135deg, #052E16 0%, #064E3B 50%, #022C22 100%)',
          accentColor: '#10B981',
          borderColor: 'rgba(16, 185, 129, 0.3)',
          badgeText: 'Sub-15MB Cloud Agent',
          icon: Zap,
          previewType: 'antivirus'
        };
      case 'webroot-internet-security-plus':
      case 'webroot-internet-security':
        return {
          bgGradient: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 50%, #0F172A 100%)',
          accentColor: '#6366F1',
          borderColor: 'rgba(99, 102, 241, 0.3)',
          badgeText: 'Identity Vault & Backup',
          icon: LockKeyhole,
          previewType: 'suite'
        };
      case 'webroot-mobile-security':
        return {
          bgGradient: 'linear-gradient(135deg, #1E293B 0%, #0F766E 50%, #134E4A 100%)',
          accentColor: '#14B8A6',
          borderColor: 'rgba(20, 184, 166, 0.3)',
          badgeText: 'Mobile APK & SMS Guard',
          icon: Smartphone,
          previewType: 'mobile'
        };
      case 'webroot-wifi-security':
        return {
          bgGradient: 'linear-gradient(135deg, #0C4A6E 0%, #0369A1 50%, #075985 100%)',
          accentColor: '#38BDF8',
          borderColor: 'rgba(56, 189, 248, 0.3)',
          badgeText: '256-Bit AES Tunnel',
          icon: Wifi,
          previewType: 'vpn'
        };
      case 'webroot-business-endpoint':
        return {
          bgGradient: 'linear-gradient(135deg, #1E1B4B 0%, #312E81 50%, #1E1B4B 100%)',
          accentColor: '#818CF8',
          borderColor: 'rgba(129, 140, 248, 0.3)',
          badgeText: 'Central Admin Console',
          icon: Building,
          previewType: 'endpoint'
        };
      case 'webroot-dns-protection':
        return {
          bgGradient: 'linear-gradient(135deg, #14532D 0%, #166534 50%, #052E16 100%)',
          accentColor: '#4ADE80',
          borderColor: 'rgba(74, 222, 128, 0.3)',
          badgeText: 'Port 53 DNS Filter',
          icon: Globe,
          previewType: 'dns'
        };
      case 'webroot-security-awareness':
        return {
          bgGradient: 'linear-gradient(135deg, #311B92 0%, #4A148C 50%, #1A237E 100%)',
          accentColor: '#C084FC',
          borderColor: 'rgba(192, 132, 252, 0.3)',
          badgeText: 'Phishing Defense Simulator',
          icon: GraduationCap,
          previewType: 'sat'
        };
      case 'webroot-brightcloud':
      default:
        return {
          bgGradient: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0284C7 100%)',
          accentColor: '#38BDF8',
          borderColor: 'rgba(56, 189, 248, 0.3)',
          badgeText: 'BrightCloud AI Engine',
          icon: Cloud,
          previewType: 'brightcloud'
        };
    }
  };

  const config = getVisualConfig();
  const IconComponent = config.icon;

  return (
    <div
      aria-hidden="true"
      style={{
        width: '100%',
        height: '140px',
        borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0',
        background: config.bgGradient,
        position: 'relative',
        overflow: 'hidden',
        borderBottom: `1px solid ${config.borderColor}`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '1rem',
        boxSizing: 'border-box'
      }}
    >
      {/* Background Decorative Grid Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px)',
          backgroundSize: '16px 16px',
          opacity: 0.4,
          pointerEvents: 'none'
        }}
      />

      {/* Top Banner Row */}
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: config.accentColor,
              boxShadow: `0 0 8px ${config.accentColor}`,
              display: 'inline-block'
            }}
          />
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#E2E8F0', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            {config.badgeText}
          </span>
        </div>

        <div
          style={{
            padding: '0.25rem 0.5rem',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            border: `1px solid ${config.borderColor}`,
            color: '#FFFFFF',
            fontSize: '0.7rem',
            fontWeight: 600,
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem'
          }}
        >
          <Activity size={12} color={config.accentColor} /> Shield Active
        </div>
      </div>

      {/* Visual Showcase Graphic */}
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div
            style={{
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              border: `1px solid ${config.borderColor}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              backdropFilter: 'blur(6px)'
            }}
          >
            <IconComponent size={22} color={config.accentColor} />
          </div>

          <div>
            <div style={{ fontSize: '0.875rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.2 }}>
              BrightCloud® Protected
            </div>
            <div style={{ fontSize: '0.75rem', color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.15rem' }}>
              <CheckCircle2 size={12} color={config.accentColor} /> Real-Time Cloud Telemetry
            </div>
          </div>
        </div>

        {/* High-Tech Pulse Metric */}
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            border: `1px solid ${config.borderColor}`,
            borderRadius: '6px',
            padding: '0.35rem 0.6rem',
            textAlign: 'right'
          }}
        >
          <div style={{ fontSize: '0.65rem', color: '#94A3B8', textTransform: 'uppercase', fontWeight: 700 }}>Scan Overhead</div>
          <div style={{ fontSize: '0.8125rem', fontWeight: 800, color: config.accentColor }}>&lt; 15MB RAM</div>
        </div>
      </div>
    </div>
  );
}
