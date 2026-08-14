'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ShieldCheck,
  ArrowRight,
  Search,
  CheckCircle2,
  Layers,
  Cpu,
  Zap,
  Globe,
  Sliders
} from 'lucide-react';
import ToolCard from '@/components/ui/ToolCard';
import CategoryCard from '@/components/ui/CategoryCard';
import ToolDetailModal from '@/components/ui/ToolDetailModal';
import WebrootSecurityAdvisor from '@/components/ui/WebrootSecurityAdvisor';
import { toolsData } from '@/data/toolsData';
import { categoriesData } from '@/data/categoriesData';
import { webrootProducts } from '@/data/webrootData';
import styles from './Home.module.css';

export default function HomePage() {
  const [selectedTool, setSelectedTool] = useState(null);

  const featuredTools = toolsData.filter((t) => t.featured).slice(0, 6);
  const mainCategories = categoriesData.slice(0, 8);
  const webrootFeatured = webrootProducts.slice(0, 3);

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            {/* Hero Left Text & Actions */}
            <div className={styles.heroLeft}>
              <div
                className="badge badge-primary"
                style={{ marginBottom: '1.25rem', padding: '0.35rem 0.85rem' }}
              >
                <Sparkles size={14} /> Premier Creative & Software Hub
              </div>

              <h1 className="h1-title" style={{ marginBottom: '1.25rem' }}>
                Powerful Tools for <span className="text-gradient-creative">Creative Professionals</span>
              </h1>

              <p className="sub-text" style={{ marginBottom: '1.5rem', maxWidth: '560px' }}>
                Discover design, creative, productivity and digital tools that help individuals and businesses create better work, faster.
              </p>

              {/* Hero Action Buttons */}
              <div className={styles.heroCTAGroup}>
                <Link href="/explore" className="btn btn-primary btn-lg">
                  Explore Tools <ArrowRight size={18} />
                </Link>
                <Link href="/webroot" className="btn btn-secondary btn-lg" style={{ borderColor: 'var(--webroot-border)' }}>
                  <ShieldCheck size={18} color="var(--webroot-primary)" /> Explore Webroot
                </Link>
              </div>

              {/* Trust Metrics */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  marginTop: '2.5rem',
                  fontSize: '0.875rem',
                  color: 'var(--text-muted)',
                  borderTop: '1px solid var(--border-light)',
                  paddingTop: '1.25rem',
                  width: '100%'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <CheckCircle2 size={16} color="var(--primary-600)" /> Curated Software Suite
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <CheckCircle2 size={16} color="var(--webroot-primary)" /> Webroot Integrated Security
                </div>
              </div>
            </div>

            {/* Hero Right Composition - Abstract Software UI Visual */}
            <div className={styles.heroVisualWrapper}>
              <div className={styles.heroComposition}>
                {/* Simulated App Header */}
                <div className={styles.uiHeaderBar}>
                  <div className={styles.windowDots}>
                    <div className={`${styles.dot} ${styles.redDot}`} />
                    <div className={`${styles.dot} ${styles.yellowDot}`} />
                    <div className={`${styles.dot} ${styles.greenDot}`} />
                  </div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                    Creative Workstation 2026
                  </div>
                  <div className="badge badge-webroot" style={{ fontSize: '0.65rem' }}>
                    <ShieldCheck size={10} /> Protected
                  </div>
                </div>

                {/* Main UI Workspace Layout Simulation */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', height: '100%' }}>
                  <div className={styles.floatingCard} style={{ animationDelay: '0s' }}>
                    <div style={{ fontSize: '1.75rem' }}>🎨</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.9375rem' }}>Figma Studio</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>UI/UX Vector Engine</div>
                    </div>
                  </div>

                  <div className={styles.floatingCard} style={{ animationDelay: '0.6s' }}>
                    <div style={{ fontSize: '1.75rem' }}>🧊</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.9375rem' }}>Blender 3D</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Cycles Ray-Trace</div>
                    </div>
                  </div>

                  <div className={styles.floatingCard} style={{ animationDelay: '1.2s', gridColumn: 'span 2', backgroundColor: '#F0FDF4', borderColor: 'var(--webroot-border)' }}>
                    <div style={{ fontSize: '1.5rem', color: 'var(--webroot-primary)' }}>
                      <ShieldCheck size={28} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--webroot-dark)' }}>
                        Webroot SecureAnywhere Agent
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--webroot-primary)' }}>
                        Real-time threat shield active • 0% CPU impact
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORIES SECTION */}
      <section className={`container ${styles.sectionPadding}`}>
        <div className={styles.sectionHeader}>
          <div>
            <div className="badge badge-primary" style={{ marginBottom: '0.5rem' }}>
              Structured Discovery
            </div>
            <h2 className="h2-title">Explore Tools by Category</h2>
            <p className="sub-text" style={{ fontSize: '1rem', marginTop: '0.35rem' }}>
              Find purpose-built software engineered for your precise creative discipline.
            </p>
          </div>
          <Link href="/categories" className="btn btn-secondary">
            View All Categories <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid-4">
          {mainCategories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </section>

      {/* 3. FEATURED TOOLS SHOWCASE */}
      <section className={styles.sectionPadding} style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <div className="badge badge-primary" style={{ marginBottom: '0.5rem' }}>
                Handpicked Tools
              </div>
              <h2 className="h2-title">Featured Design & Creative Software</h2>
              <p className="sub-text" style={{ fontSize: '1rem', marginTop: '0.35rem' }}>
                Top-rated graphic, vector, 3D, and AI applications trusted by world-class creators.
              </p>
            </div>
            <Link href="/explore" className="btn btn-primary">
              Explore All Tools ({toolsData.length}) <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid-3">
            {featuredTools.map((tool) => (
              <ToolCard
                key={tool.id}
                tool={tool}
                onViewDetails={(t) => setSelectedTool(t)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. IMPORTANT WEBROOT INTEGRATION SECTION */}
      <section className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className={styles.webrootSection}>
          <div className={styles.webrootGrid}>
            {/* Left: Copy & Branding */}
            <div className={styles.webrootText}>
              <div className="badge badge-webroot" style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', color: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.3)', marginBottom: '1rem' }}>
                <ShieldCheck size={16} /> Dedicated Security Integration
              </div>

              <h2 style={{ fontSize: '2.25rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '1rem' }}>
                Protection That Works in the Background
              </h2>

              <p style={{ fontSize: '1.0625rem', color: '#E2E8F0', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                Webroot provides cloud-driven cybersecurity built to shield digital creators, design studios, and intellectual property without slowing down intensive rendering or heavy software suites.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9375rem', color: '#F1F5F9' }}>
                  <CheckCircle2 size={18} color="#A7F3D0" /> Lightweight agent installs in seconds with zero CPU drag
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9375rem', color: '#F1F5F9' }}>
                  <CheckCircle2 size={18} color="#A7F3D0" /> Real-time cloud threat intelligence against ransomware & phishing
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9375rem', color: '#F1F5F9' }}>
                  <CheckCircle2 size={18} color="#A7F3D0" /> Multi-device protection across PC, Mac, tablets, and smartphones
                </div>
              </div>

              <Link href="/webroot" className="btn btn-webroot btn-lg">
                Explore Webroot Products <ArrowRight size={18} />
              </Link>
            </div>

            {/* Right: Selected Webroot Product Previews */}
            <div className={styles.webrootCardsPreview}>
              {webrootFeatured.map((wp) => (
                <Link
                  key={wp.id}
                  href={`/webroot/${wp.slug}`}
                  className={styles.webrootPreviewCard}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ padding: '0.5rem', borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                      <ShieldCheck size={24} color="#A7F3D0" />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '1rem' }}>{wp.name}</div>
                      <div style={{ fontSize: '0.8125rem', color: '#CBD5E1' }}>{wp.subtitle}</div>
                    </div>
                  </div>
                  <ArrowRight size={18} color="#A7F3D0" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE SECURITY ADVISOR */}
      <section className={`container ${styles.sectionPadding}`}>
        <WebrootSecurityAdvisor />
      </section>

      {/* TOOL DETAIL MODAL */}
      {selectedTool && (
        <ToolDetailModal tool={selectedTool} onClose={() => setSelectedTool(null)} />
      )}
    </div>
  );
}
