import Link from 'next/link';
import { ShieldCheck, Shield, Cpu, Lock, CheckCircle2, ArrowRight, Zap, RefreshCw, Layers, BookOpen, Download, UserCheck } from 'lucide-react';
import WebrootProductCard from '@/components/ui/WebrootProductCard';
import WebrootSecurityAdvisor from '@/components/ui/WebrootSecurityAdvisor';
import WebrootArchitectureSection from '@/components/ui/WebrootArchitectureSection';
import WebrootSetupGuide from '@/components/ui/WebrootSetupGuide';
import WebrootLiveThreatBanner from '@/components/ui/WebrootLiveThreatBanner';
import { webrootSuiteInfo, webrootProducts } from '@/data/webrootData';
import styles from './Webroot.module.css';

export default function WebrootPage() {
  const consumerProducts = webrootProducts.filter((p) => p.category === 'Consumer Security');
  const mobilePrivacyProducts = webrootProducts.filter((p) => p.category === 'Mobile & Privacy');
  const businessProducts = webrootProducts.filter((p) => p.category === 'Business Security');

  return (
    <div>
      {/* 1. WEBROOT HERO SECTION */}
      <section className={styles.webrootHero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div>
              <div
                className="badge badge-webroot"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  color: '#ffffff',
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  marginBottom: '1.25rem'
                }}
              >
                <ShieldCheck size={16} /> Cloud Endpoint Security
              </div>

              <h1 className="h1-title" style={{ color: '#ffffff', fontSize: '3rem', marginBottom: '1rem' }}>
                {webrootSuiteInfo.headline}
              </h1>

              <p style={{ fontSize: '1.125rem', color: '#E2E8F0', lineHeight: 1.6, maxWidth: '640px', marginBottom: '2rem' }}>
                {webrootSuiteInfo.description}
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#products" className="btn btn-webroot btn-lg">
                  View Solutions ({webrootProducts.length}) <ArrowRight size={18} />
                </a>
                <a href="#architecture" className="btn btn-secondary btn-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                  Architecture Overview
                </a>
                <a href="#setup-guide" className="btn btn-secondary btn-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                  Deployment & User Guides
                </a>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className={styles.heroMetricsGrid}>
              {webrootSuiteInfo.keyMetrics.map((metric, i) => (
                <div key={i} className={styles.metricCard}>
                  <div className={styles.metricValue}>{metric.value}</div>
                  <div className={styles.metricLabel}>{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. REAL-TIME THREAT TELEMETRY BANNER */}
      <section className="container" style={{ marginTop: '-2.5rem', position: 'relative', zIndex: 10, marginBottom: '3rem' }}>
        <WebrootLiveThreatBanner />
      </section>

      {/* 3. CORE ARCHITECTURE HIGHLIGHTS */}
      <section className="container" style={{ paddingTop: '1rem', paddingBottom: '4rem' }}>
        <div style={{ textAlign: 'left', maxWidth: '720px', marginBottom: '2.5rem' }}>
          <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--webroot-primary)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            Lightweight Cloud Defense
          </div>
          <h2 className="h2-title" style={{ fontSize: '2.25rem' }}>High-Performance Protection Architecture</h2>
          <p className="sub-text" style={{ fontSize: '1.05rem', marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
            Traditional security tools rely on massive local virus signature databases. Webroot offloads heavy file analysis to the BrightCloud threat intelligence cloud for instant protection without device lag.
          </p>
        </div>

        <div className="grid-3">
          <div className="card-base card-webroot">
            <div style={{ color: 'var(--webroot-primary)', marginBottom: '1rem' }}>
              <Zap size={28} />
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              Sub-15MB Cloud Agent
            </h3>
            <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Installs in seconds with an average RAM footprint under 15MB, ensuring full workstation CPU/GPU rendering resources remain dedicated to active applications.
            </p>
          </div>

          <div className="card-base card-webroot">
            <div style={{ color: 'var(--webroot-primary)', marginBottom: '1rem' }}>
              <ShieldCheck size={28} />
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              Ransomware Journaling & Rollback
            </h3>
            <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Monitors unclassified binaries in a behavioral sandbox, automatically logging system changes and restoring original files if malicious encryption is attempted.
            </p>
          </div>

          <div className="card-base card-webroot">
            <div style={{ color: 'var(--webroot-primary)', marginBottom: '1rem' }}>
              <Lock size={28} />
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              Identity & Browser Sandbox
            </h3>
            <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Encapsulates browser sessions and sensitive portals to prevent background keyloggers and screen-grabbers from compromising passwords or financial credentials.
            </p>
          </div>
        </div>
      </section>

      {/* 4. TECHNICAL MECHANICS ("HOW IT WORKS") SECTION */}
      <section id="architecture" className="container" style={{ paddingTop: '1rem', paddingBottom: '5rem' }}>
        <WebrootArchitectureSection />
      </section>

      {/* 5. WEBROOT PRODUCTS GRID */}
      <section id="products" className={styles.productsSection} style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--webroot-primary)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              Solutions Portfolio ({webrootProducts.length} Products)
            </div>
            <h2 className="h2-title">Webroot Security Product Lineup</h2>
            <p className="sub-text" style={{ fontSize: '1rem', marginTop: '0.35rem' }}>
              Explore desktop antivirus, multi-device complete security, mobile privacy, and enterprise cloud management.
            </p>
          </div>

          {/* Consumer Security */}
          <div style={{ marginBottom: '3.5rem' }}>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Shield size={20} color="var(--webroot-primary)" /> Consumer & Individual Security
            </div>
            <div className="grid-3">
              {consumerProducts.map((product) => (
                <WebrootProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* Mobile & Privacy */}
          <div style={{ marginBottom: '3.5rem' }}>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Lock size={20} color="var(--webroot-primary)" /> Mobile Protection & Privacy VPN
            </div>
            <div className="grid-2">
              {mobilePrivacyProducts.map((product) => (
                <WebrootProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* Business & Enterprise Security */}
          <div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Layers size={20} color="var(--webroot-primary)" /> Business, MSP & Enterprise Intelligence
            </div>
            <div className="grid-2">
              {businessProducts.map((product) => (
                <WebrootProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE SETUP, ACCOUNT & USER GUIDES */}
      <section id="setup-guide" className="container" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <WebrootSetupGuide />
      </section>

      {/* 7. INTERACTIVE SECURITY ADVISOR */}
      <section className="container" style={{ paddingBottom: '5rem' }}>
        <WebrootSecurityAdvisor />
      </section>
    </div>
  );
}
