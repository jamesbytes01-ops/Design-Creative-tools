import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ShieldCheck, Check, ArrowRight, ChevronRight, HelpCircle, Laptop, Info, Cpu, Download, LogIn, UserCheck, RefreshCw, Key, ShieldAlert, Shield, Smartphone, Wifi, Building, Globe, GraduationCap, Cloud, Lock } from 'lucide-react';
import { webrootProducts } from '@/data/webrootData';
import styles from '../Webroot.module.css';

const iconMap = {
  ShieldCheck,
  ShieldAlert,
  Shield,
  Smartphone,
  Wifi,
  Building,
  Globe,
  GraduationCap,
  Cloud,
  Lock
};

export function generateStaticParams() {
  return webrootProducts.map((product) => ({
    productId: product.slug,
  }));
}

export default async function WebrootProductDetailPage({ params }) {
  const { productId } = await params;
  const product = webrootProducts.find((p) => p.slug === productId || p.id === productId);

  if (!product) {
    notFound();
  }

  const IconComponent = iconMap[product.icon] || ShieldCheck;
  const relatedProducts = webrootProducts.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div>
      {/* Detail Page Header & Breadcrumb */}
      <section className={styles.detailHeader}>
        <div className="container">
          {/* Breadcrumb Navigation */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            <Link href="/" style={{ color: 'var(--text-muted)' }}>Home</Link>
            <ChevronRight size={14} />
            <Link href="/webroot" style={{ color: 'var(--text-muted)' }}>Webroot</Link>
            <ChevronRight size={14} />
            <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{product.name}</span>
          </nav>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div
              style={{
                width: '4.5rem',
                height: '4.5rem',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'var(--webroot-light)',
                border: '1px solid var(--webroot-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--webroot-primary)'
              }}
            >
              <IconComponent size={36} />
            </div>

            <div style={{ flex: 1, minWidth: '300px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <span className="badge badge-webroot">{product.category}</span>
                {product.badge && <span className="badge badge-outline">{product.badge}</span>}
              </div>

              <h1 className="h1-title" style={{ fontSize: '2.25rem', marginBottom: '0.35rem' }}>
                {product.name}
              </h1>
              <p style={{ fontSize: '1.125rem', color: 'var(--webroot-primary)', fontWeight: 600 }}>
                {product.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Detail Grid */}
      <section className="container" style={{ paddingTop: '3rem', paddingBottom: '5rem' }}>
        <div className={styles.detailGrid}>
          {/* Left Column: Comprehensive Product Details */}
          <div>
            {/* Overview */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h2 className="h2-title" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                Product Overview
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                {product.longDescription}
              </p>
            </div>

            {/* How It Works (Engine Architecture) */}
            {product.architectureExplanation && (
              <div
                style={{
                  backgroundColor: 'var(--webroot-light)',
                  border: '1px solid var(--webroot-border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.75rem',
                  marginBottom: '2.5rem'
                }}
              >
                <div style={{ fontWeight: 700, fontSize: '0.8125rem', color: 'var(--webroot-primary)', textTransform: 'uppercase', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Cpu size={16} /> How It Works Under The Hood
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                  Technical Mechanics & Engine Architecture
                </h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {product.architectureExplanation}
                </p>
              </div>
            )}

            {/* Key Features Breakdown */}
            <div style={{ marginBottom: '3rem' }}>
              <h3 className="h2-title" style={{ fontSize: '1.35rem', marginBottom: '1.25rem' }}>
                Key Technical Features
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {product.keyFeatures.map((feat, i) => (
                  <div key={i} className="card-base" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ padding: '0.5rem', borderRadius: '8px', backgroundColor: 'var(--webroot-light)', color: 'var(--webroot-primary)', flexShrink: 0 }}>
                      <Check size={20} />
                    </div>
                    <div>
                      <h4 style={{ fontWeight: 700, fontSize: '1.0625rem', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>
                        {feat.title}
                      </h4>
                      <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                        {feat.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step-by-Step Installation Instructions */}
            {product.installationGuide && (
              <div style={{ marginBottom: '3rem' }}>
                <h3 className="h2-title" style={{ fontSize: '1.35rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Download size={20} color="var(--webroot-primary)" /> Step-by-Step Installation Guide
                </h3>

                <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-lg)', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {Object.entries(product.installationGuide).map(([osKey, steps]) => (
                    <div key={osKey} style={{ marginBottom: '1rem' }}>
                      <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--webroot-primary)', textTransform: 'capitalize', marginBottom: '0.5rem' }}>
                        {osKey === 'windows' ? 'Windows Installation' : osKey === 'mac' ? 'macOS Installation' : osKey === 'mobile' ? 'Mobile Setup' : osKey === 'enterprise' ? 'Enterprise Command-Line Script' : `${osKey} Setup`}
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {steps.map((step, idx) => (
                          <div key={idx} style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                            <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{idx + 1}.</span>
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Sign Up & Sign In Process */}
            {product.accountProcess && (
              <div style={{ marginBottom: '3rem' }}>
                <h3 className="h2-title" style={{ fontSize: '1.35rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <LogIn size={20} color="var(--webroot-primary)" /> Sign Up & Sign In Account Process
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text-primary)', marginBottom: '0.35rem' }}>Account Sign-Up</div>
                    <p style={{ fontSize: '0.84375rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {product.accountProcess.signUp}
                    </p>
                  </div>

                  <div style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text-primary)', marginBottom: '0.35rem' }}>Account Sign-In & 2FA</div>
                    <p style={{ fontSize: '0.84375rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {product.accountProcess.signIn}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* New User vs Existing User Journeys */}
            {product.userJourneys && (
              <div style={{ marginBottom: '3rem' }}>
                <h3 className="h2-title" style={{ fontSize: '1.35rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <UserCheck size={20} color="var(--webroot-primary)" /> New User vs Existing User Setup Workflow
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  {/* New User */}
                  <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--webroot-primary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Check size={16} /> First-Time New User Journey
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {product.userJourneys.newUser.map((step, idx) => (
                        <div key={idx} style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'flex-start', gap: '0.4rem' }}>
                          <span style={{ fontWeight: 700, color: 'var(--webroot-primary)' }}>•</span>
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Existing User */}
                  <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--webroot-primary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <RefreshCw size={16} /> Existing / Returning User Journey
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {product.userJourneys.existingUser.map((step, idx) => (
                        <div key={idx} style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'flex-start', gap: '0.4rem' }}>
                          <span style={{ fontWeight: 700, color: 'var(--webroot-primary)' }}>•</span>
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Frequently Asked Questions */}
            {product.faqs && product.faqs.length > 0 && (
              <div style={{ marginBottom: '3rem' }}>
                <h3 className="h2-title" style={{ fontSize: '1.35rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <HelpCircle size={20} color="var(--webroot-primary)" /> Product FAQ
                </h3>
                {product.faqs.map((faq, i) => (
                  <div key={i} className={styles.faqItem}>
                    <div className={styles.faqQuestion}>{faq.question}</div>
                    <div className={styles.faqAnswer}>{faq.answer}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Sidebar: Specs & Actions */}
          <div>
            <div className={styles.sidebarCard}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                Deployment Specs
              </h3>

              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Laptop size={14} /> Compatible Operating Systems
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {product.supportedPlatforms.map((plat) => (
                    <span key={plat} className="badge badge-neutral">
                      {plat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Keycode Format Notice */}
              <div
                style={{
                  backgroundColor: 'var(--webroot-light)',
                  border: '1px solid var(--webroot-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1rem',
                  marginBottom: '1.25rem',
                  fontSize: '0.8125rem',
                  color: 'var(--text-primary)',
                  lineHeight: 1.5
                }}
              >
                <div style={{ fontWeight: 700, color: 'var(--webroot-primary)', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Key size={14} /> Standard Keycode Format
                </div>
                20-character alphanumeric key (e.g. <code>SA01-AAAA-BBBB-CCCC-DDDD</code>)
              </div>

              {/* Official Information Notice */}
              <div
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1rem',
                  marginBottom: '1.5rem',
                  fontSize: '0.8125rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.5
                }}
              >
                <div style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Info size={14} color="var(--primary-600)" /> Official Licensing Notice
                </div>
                {product.placeholderNotice}
              </div>

              <Link href="/contact" className="btn btn-webroot btn-lg" style={{ width: '100%' }}>
                Request Licensing Info <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Related Webroot Products */}
        {relatedProducts.length > 0 && (
          <div style={{ paddingTop: '3rem', borderTop: '1px solid var(--border-light)' }}>
            <h3 className="h2-title" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>
              Related Webroot Security Solutions
            </h3>
            <div className="grid-3">
              {relatedProducts.map((rel) => (
                <div key={rel.id} className="card-base card-webroot" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <span className="badge badge-webroot" style={{ marginBottom: '0.5rem' }}>{rel.category}</span>
                    <h4 style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.25rem' }}>{rel.name}</h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>{rel.subtitle}</p>
                  </div>
                  <Link href={`/webroot/${rel.slug}`} className="btn btn-webroot btn-sm" style={{ alignSelf: 'flex-start' }}>
                    View Product <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
