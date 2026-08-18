'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, ShieldCheck, Sparkles, Check, ArrowRight, Star, Layers, Palette } from 'lucide-react';
import { toolsData } from '@/data/toolsData';
import { webrootProducts } from '@/data/webrootData';
import ToolDetailModal from '@/components/ui/ToolDetailModal';
import WebrootProductCard from '@/components/ui/WebrootProductCard';
import ToolCard from '@/components/ui/ToolCard';

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

  const webrootItems = filteredProducts.filter((p) => p.type === 'webroot');
  const creativeItems = filteredProducts.filter((p) => p.type === 'creative');

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
            Explore premium digital tools with rich visual previews and Webroot cybersecurity suites available for individuals, teams, and enterprises.
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
        {/* WEBROOT PRODUCTS SECTION (if any in filter) */}
        {webrootItems.length > 0 && (
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', borderBottom: '2px solid var(--webroot-light)', paddingBottom: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <span className="badge badge-webroot"><ShieldCheck size={16} /> Webroot Suite</span>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                  Webroot Cybersecurity Products ({webrootItems.length})
                </h2>
              </div>
              <Link href="/webroot" className="btn btn-webroot btn-sm" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                View Full Webroot Suite <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid-3">
              {webrootItems.map((p) => (
                <WebrootProductCard key={p.id} product={p.originalWebroot} />
              ))}
            </div>
          </div>
        )}

        {/* CREATIVE & DESIGN TOOLS SECTION WITH RICH VISUAL PREVIEWS */}
        {creativeItems.length > 0 && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', borderBottom: '2px solid var(--primary-100)', paddingBottom: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <span className="badge badge-primary"><Palette size={16} /> Creative Tools</span>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                  Design & Creative Software ({creativeItems.length})
                </h2>
              </div>
              <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                Featuring visual interface showcases
              </span>
            </div>

            <div className="grid-3">
              {creativeItems.map((p) => (
                <ToolCard
                  key={p.id}
                  tool={p.originalTool}
                  onViewDetails={(t) => setSelectedTool(t)}
                />
              ))}
            </div>
          </div>
        )}

        {filteredProducts.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem 1rem', color: 'var(--text-muted)' }}>
            No tools or security products found matching &quot;{searchQuery}&quot;.
          </div>
        )}
      </section>

      {/* Tool Detail Modal */}
      {selectedTool && (
        <ToolDetailModal tool={selectedTool} onClose={() => setSelectedTool(null)} />
      )}
    </div>
  );
}
