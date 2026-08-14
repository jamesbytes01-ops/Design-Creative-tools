'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, ShieldCheck, Sparkles, Check, ArrowRight, Star } from 'lucide-react';
import { toolsData } from '@/data/toolsData';
import { webrootProducts } from '@/data/webrootData';
import ToolDetailModal from '@/components/ui/ToolDetailModal';
import WebrootProductCard from '@/components/ui/WebrootProductCard';

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTool, setSelectedTool] = useState(null);

  // Combine creative software tools & Webroot products into a unified marketplace list
  const creativeProducts = toolsData.map((t) => ({
    id: t.id,
    type: 'creative',
    name: t.name,
    tagline: t.tagline,
    description: t.description,
    category: t.category,
    pricing: t.pricing,
    pricingDetails: t.pricingDetails,
    logo: t.logo,
    rating: t.rating,
    featured: t.featured,
    features: t.features,
    originalTool: t
  }));

  const webrootMarketplaceProducts = webrootProducts.map((wp) => ({
    id: wp.id,
    type: 'webroot',
    slug: wp.slug,
    name: wp.name,
    tagline: wp.subtitle,
    description: wp.shortDescription,
    category: wp.category,
    pricing: 'Security Tier',
    pricingDetails: 'Webroot Cloud License',
    logo: '🛡️',
    rating: 4.9,
    featured: wp.featured,
    highlights: wp.highlights,
    originalWebroot: wp
  }));

  const allProducts = [...webrootMarketplaceProducts, ...creativeProducts];

  const filteredProducts = allProducts.filter((p) => {
    const matchesSearch =
      searchQuery === '' ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());

    if (activeTab === 'featured') return matchesSearch && p.featured;
    if (activeTab === 'creative') return matchesSearch && p.type === 'creative';
    if (activeTab === 'webroot') return matchesSearch && p.type === 'webroot';
    return matchesSearch;
  });

  return (
    <div>
      {/* Header */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-light)', paddingTop: '3.5rem', paddingBottom: '3rem' }}>
        <div className="container">
          <div className="badge badge-primary" style={{ marginBottom: '0.75rem' }}>
            Product Catalog & Ecosystem
          </div>
          <h1 className="h1-title" style={{ fontSize: '2.5rem' }}>Software Products Marketplace</h1>
          <p className="sub-text" style={{ fontSize: '1rem', marginTop: '0.5rem', maxWidth: '640px' }}>
            Explore premier digital tools and Webroot cybersecurity suites available for individuals, teams, and enterprises.
          </p>

          {/* Search & Tabs */}
          <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ position: 'relative', maxWidth: '560px' }}>
              <Search size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input
                type="text"
                className="form-input"
                style={{ paddingLeft: '2.75rem', borderRadius: 'var(--radius-lg)' }}
                placeholder="Search software catalog & security products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              {[
                { id: 'all', label: 'All Products' },
                { id: 'featured', label: '⭐ Featured Products' },
                { id: 'creative', label: '🎨 Design & Creative Tools' },
                { id: 'webroot', label: '🛡️ Webroot Security Products' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: '0.5rem 1.25rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    border: '1px solid var(--border-light)',
                    backgroundColor: activeTab === tab.id ? 'var(--primary-600)' : '#ffffff',
                    color: activeTab === tab.id ? '#ffffff' : 'var(--text-secondary)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="container" style={{ paddingTop: '3.5rem', paddingBottom: '5rem' }}>
        <div className="grid-3">
          {filteredProducts.map((p) => {
            if (p.type === 'webroot') {
              return <WebrootProductCard key={p.id} product={p.originalWebroot} />;
            }
            return (
              <div key={p.id} className="card-base" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <div style={{ fontSize: '2rem' }}>{p.logo}</div>
                    <span className="badge badge-primary">{p.category}</span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem', color: 'var(--text-primary)' }}>
                    {p.name}
                  </h3>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                    {p.tagline}
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                    {p.description}
                  </p>
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--primary-600)' }}>
                      {p.pricing}
                    </span>
                    <span style={{ fontSize: '0.8125rem', color: '#D97706', display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: 600 }}>
                      <Star size={14} fill="#F59E0B" /> {p.rating}
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedTool(p.originalTool)}
                    className="btn btn-secondary btn-sm"
                    style={{ width: '100%' }}
                  >
                    Product Details <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Tool Detail Modal */}
      {selectedTool && (
        <ToolDetailModal tool={selectedTool} onClose={() => setSelectedTool(null)} />
      )}
    </div>
  );
}
