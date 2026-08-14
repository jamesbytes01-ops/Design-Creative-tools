import Link from 'next/link';
import CategoryCard from '@/components/ui/CategoryCard';
import { categoriesData } from '@/data/categoriesData';
import { Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';

export default function CategoriesPage() {
  return (
    <div>
      {/* Page Header */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-light)', paddingTop: '3.5rem', paddingBottom: '3rem' }}>
        <div className="container">
          <div className="badge badge-primary" style={{ marginBottom: '0.75rem' }}>
            Software Classification
          </div>
          <h1 className="h1-title" style={{ fontSize: '2.5rem' }}>Creative Tool Categories</h1>
          <p className="sub-text" style={{ fontSize: '1rem', marginTop: '0.5rem', maxWidth: '640px' }}>
            Browse our curated software taxonomy designed to match your specific studio requirements, from vector illustration to Webroot threat security.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container" style={{ paddingTop: '3.5rem', paddingBottom: '5rem' }}>
        <div className="grid-3">
          {categoriesData.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>

        {/* Webroot Special Highlight Banner */}
        <div
          style={{
            marginTop: '4rem',
            backgroundColor: '#F0FDF4',
            border: '1px solid var(--webroot-border)',
            borderRadius: 'var(--radius-xl)',
            padding: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            flexWrap: 'wrap'
          }}
        >
          <div style={{ maxWidth: '600px' }}>
            <div className="badge badge-webroot" style={{ marginBottom: '0.5rem' }}>
              <ShieldCheck size={14} /> Integrated Category
            </div>
            <h3 className="h3-title" style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--webroot-dark)' }}>
              Looking for Webroot Digital Security & Antivirus?
            </h3>
            <p className="sub-text" style={{ fontSize: '0.9375rem' }}>
              Protect your workstations, server render nodes, and creative IP with lightweight Webroot cybersecurity.
            </p>
          </div>

          <Link href="/webroot" className="btn btn-webroot btn-lg">
            Visit Webroot Hub <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
