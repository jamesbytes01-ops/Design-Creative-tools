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
  Sliders,
  MousePointer,
  PenTool,
  Box,
  Check,
  Star
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
              <div className={styles.heroBadge}>
                <span className={styles.pulseDot} />
                <span>Premium Creative & Webroot Security Platform</span>
              </div>

              <h1 className={styles.heroHeadline}>
                Build & Protect Your <span className="text-gradient-creative">Creative Digital Ecosystem</span>
              </h1>

              <p className={styles.heroSubtext}>
                Explore purpose-built design, 3D rendering, AI creation software, and enterprise-grade Webroot protection — curated for high-performing creators.
              </p>

              {/* Hero Action Buttons */}
              <div className={styles.heroCTAGroup}>
                <Link href="/explore" className="btn btn-primary btn-lg">
                  Explore Software Suite <ArrowRight size={18} />
                </Link>
                <Link href="/webroot" className="btn btn-secondary btn-lg" style={{ borderColor: 'var(--webroot-border)', backgroundColor: '#FFFFFF' }}>
                  <ShieldCheck size={18} color="var(--webroot-primary)" /> Webroot Products
                </Link>
              </div>

              {/* Trust Metrics */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.75rem',
                  marginTop: '2.5rem',
                  fontSize: '0.875rem',
                  color: 'var(--text-muted)',
                  borderTop: '1px solid var(--border-light)',
                  paddingTop: '1.25rem',
                  width: '100%'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontWeight: 600 }}>
                  <CheckCircle2 size={16} color="var(--primary-600)" /> 100+ Verified Software Tools
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontWeight: 600 }}>
                  <CheckCircle2 size={16} color="var(--webroot-primary)" /> Cloud Threat Shield 100%
                </div>
              </div>
            </div>            {/* Hero Right Composition - Commercial Enterprise Software & Security Showcase */}
            <div className={styles.heroVisualWrapper}>
              <div className={styles.heroGlowBackdrop} />

              <div className={styles.commercialStage}>
                {/* 2x2 Product Showcase Grid */}
                <div className={styles.commercialCardGrid}>
                  {/* Card 1: Figma */}
                  <Link href="/explore?search=Figma" className={styles.productShowcaseCard}>
                    <div>
                      <div className={styles.cardHeaderRow}>
                        <div className={`${styles.brandIconWrapper} ${styles.iconFigma}`}>
                          <Layers size={22} />
                        </div>
                        <span className="badge badge-primary" style={{ fontSize: '0.65rem' }}>
                          Industry Standard
                        </span>
                      </div>
                      <div className={styles.productName}>Figma</div>
                      <div className={styles.productCategory}>UI/UX Design & Prototyping</div>
                    </div>

                    <div className={styles.productMetaFooter}>
                      <div className={styles.ratingTag}>
                        <Star size={13} fill="#F59E0B" /> 4.9 (3.4k)
                      </div>
                      <span style={{ fontWeight: 700, color: 'var(--primary-600)' }}>Freemium</span>
                    </div>
                  </Link>

                  {/* Card 2: Adobe Photoshop */}
                  <Link href="/explore?search=Photoshop" className={styles.productShowcaseCard}>
                    <div>
                      <div className={styles.cardHeaderRow}>
                        <div className={`${styles.brandIconWrapper} ${styles.iconAdobe}`}>
                          <Sparkles size={22} />
                        </div>
                        <span className="badge badge-secondary" style={{ fontSize: '0.65rem' }}>
                          Pro Choice
                        </span>
                      </div>
                      <div className={styles.productName}>Adobe Photoshop</div>
                      <div className={styles.productCategory}>Photo Editing & AI Compositing</div>
                    </div>

                    <div className={styles.productMetaFooter}>
                      <div className={styles.ratingTag}>
                        <Star size={13} fill="#F59E0B" /> 4.9 (8.9k)
                      </div>
                      <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>Paid</span>
                    </div>
                  </Link>

                  {/* Card 3: Blender */}
                  <Link href="/explore?search=Blender" className={styles.productShowcaseCard}>
                    <div>
                      <div className={styles.cardHeaderRow}>
                        <div className={`${styles.brandIconWrapper} ${styles.iconBlender}`}>
                          <Box size={22} />
                        </div>
                        <span className="badge badge-primary" style={{ fontSize: '0.65rem' }}>
                          3D Standard
                        </span>
                      </div>
                      <div className={styles.productName}>Blender 3D</div>
                      <div className={styles.productCategory}>3D Modeling & Cycles Render</div>
                    </div>

                    <div className={styles.productMetaFooter}>
                      <div className={styles.ratingTag}>
                        <Star size={13} fill="#F59E0B" /> 4.9 (4.2k)
                      </div>
                      <span style={{ fontWeight: 700, color: 'var(--primary-600)' }}>Free</span>
                    </div>
                  </Link>

                  {/* Card 4: Midjourney */}
                  <Link href="/explore?search=Midjourney" className={styles.productShowcaseCard}>
                    <div>
                      <div className={styles.cardHeaderRow}>
                        <div className={`${styles.brandIconWrapper} ${styles.iconAI}`}>
                          <Zap size={22} />
                        </div>
                        <span className="badge badge-secondary" style={{ fontSize: '0.65rem' }}>
                          AI Leader
                        </span>
                      </div>
                      <div className={styles.productName}>Midjourney</div>
                      <div className={styles.productCategory}>AI Image & Concept Generator</div>
                    </div>

                    <div className={styles.productMetaFooter}>
                      <div className={styles.ratingTag}>
                        <Star size={13} fill="#F59E0B" /> 4.7 (2.1k)
                      </div>
                      <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>Paid</span>
                    </div>
                  </Link>
                </div>

                {/* Webroot Dedicated Security Feature Banner */}
                <Link href="/webroot/antivirus" className={styles.webrootShowcaseBanner}>
                  <div>
                    <div className={styles.webrootBannerTitle}>
                      Webroot® SecureAnywhere Threat Shield
                    </div>
                    <div className={styles.webrootBannerSub}>
                      Real-time cloud endpoint defense with zero CPU rendering overhead.
                    </div>
                  </div>

                  <div className={styles.webrootShieldBadge}>
                    <ShieldCheck size={18} /> Active Defense
                  </div>
                </Link>
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
