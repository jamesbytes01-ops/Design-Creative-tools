import Link from 'next/link';
import { ShieldCheck, Shield, Cpu, Lock, CheckCircle2, ArrowRight, Zap, RefreshCw } from 'lucide-react';
import WebrootProductCard from '@/components/ui/WebrootProductCard';
import WebrootSecurityAdvisor from '@/components/ui/WebrootSecurityAdvisor';
import { webrootSuiteInfo, webrootProducts } from '@/data/webrootData';
import styles from './Webroot.module.css';

export default function WebrootPage() {
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
                <ShieldCheck size={16} /> Integrated Security Ecosystem
              </div>

              <h1 className="h1-title" style={{ color: '#ffffff', fontSize: '3rem', marginBottom: '1rem' }}>
                {webrootSuiteInfo.headline}
              </h1>

              <p style={{ fontSize: '1.125rem', color: '#E2E8F0', lineHeight: 1.6, maxWidth: '600px', marginBottom: '2rem' }}>
                {webrootSuiteInfo.description}
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#products" className="btn btn-webroot btn-lg">
                  Explore Webroot Suite <ArrowRight size={18} />
                </a>
                <Link href="/contact" className="btn btn-secondary btn-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                  Enterprise Sales
                </Link>
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

      {/* 2. WHY WEBROOT FOR CREATIVE WORKFLOWS */}
      <section className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3rem' }}>
          <div className="badge badge-webroot" style={{ marginBottom: '0.5rem' }}>
            Unobtrusive Architecture
          </div>
          <h2 className="h2-title">Engineered Specifically for High-Performance Creators</h2>
          <p className="sub-text" style={{ fontSize: '1rem', marginTop: '0.35rem' }}>
            Unlike bloated antivirus tools that consume render threads, Webroot offloads heavy threat processing to the cloud.
          </p>
        </div>

        <div className="grid-3">
          <div className="card-base card-webroot">
            <div style={{ color: 'var(--webroot-primary)', marginBottom: '1rem' }}>
              <Zap size={32} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              Light-Speed Cloud Scanning
            </h3>
            <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Agent installs in seconds with a tiny memory footprint under 15MB, ensuring Photoshop and Blender perform at peak speeds.
            </p>
          </div>

          <div className="card-base card-webroot">
            <div style={{ color: 'var(--webroot-primary)', marginBottom: '1rem' }}>
              <ShieldCheck size={32} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              Zero-Day Ransomware Rollback
            </h3>
            <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Protects unreleased client designs and proprietary project files with real-time behavioral journaling and rollback defense.
            </p>
          </div>

          <div className="card-base card-webroot">
            <div style={{ color: 'var(--webroot-primary)', marginBottom: '1rem' }}>
              <Lock size={32} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              Identity & Keylogger Shield
            </h3>
            <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Encapsulates browser sessions to prevent malware from logging financial details or cloud SaaS passwords.
            </p>
          </div>
        </div>
      </section>

      {/* 3. WEBROOT PRODUCTS GRID */}
      <section id="products" className={styles.productsSection} style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ marginBottom: '3rem' }}>
            <div className="badge badge-webroot" style={{ marginBottom: '0.5rem' }}>
              Product Portfolio
            </div>
            <h2 className="h2-title">Webroot Security Product Suite</h2>
            <p className="sub-text" style={{ fontSize: '1rem', marginTop: '0.35rem' }}>
              Select from individual antivirus protection to enterprise multi-endpoint security solutions.
            </p>
          </div>

          <div className="grid-3">
            {webrootProducts.map((product) => (
              <WebrootProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE SECURITY ADVISOR */}
      <section className="container" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <WebrootSecurityAdvisor />
      </section>
    </div>
  );
}
