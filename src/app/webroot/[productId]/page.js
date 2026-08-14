import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ShieldCheck, Check, ArrowRight, ChevronRight, HelpCircle, Laptop, Info } from 'lucide-react';
import { webrootProducts } from '@/data/webrootData';
import styles from '../Webroot.module.css';

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

  const relatedProducts = webrootProducts.filter((p) => p.id !== product.id).slice(0, 2);

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
              <ShieldCheck size={36} />
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
      <section className="container">
        <div className={styles.detailGrid}>
          {/* Left Column: Long Description & Core Features */}
          <div>
            <div style={{ marginBottom: '2.5rem' }}>
              <h2 className="h2-title" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                Product Overview
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                {product.longDescription}
              </p>
            </div>

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

          {/* Right Sidebar: Platform Specs & Official Notice */}
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

              {/* Official Placeholder Notice */}
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
                  <Info size={14} color="var(--primary-600)" /> Official Information Notice
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
          <div style={{ paddingTop: '3rem', paddingBottom: '5rem', borderTop: '1px solid var(--border-light)' }}>
            <h3 className="h2-title" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>
              Related Webroot Security Solutions
            </h3>
            <div className="grid-2">
              {relatedProducts.map((rel) => (
                <div key={rel.id} className="card-base card-webroot" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.25rem' }}>{rel.name}</h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{rel.subtitle}</p>
                  </div>
                  <Link href={`/webroot/${rel.slug}`} className="btn btn-webroot btn-sm">
                    View <ArrowRight size={14} />
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
