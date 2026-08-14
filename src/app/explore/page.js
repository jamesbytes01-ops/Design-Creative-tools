'use client';

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, Filter, SlidersHorizontal, ArrowUpDown, ShieldCheck } from 'lucide-react';
import ToolCard from '@/components/ui/ToolCard';
import ToolDetailModal from '@/components/ui/ToolDetailModal';
import { toolsData } from '@/data/toolsData';
import { categoriesData } from '@/data/categoriesData';
import styles from './Explore.module.css';

function ExploreContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const initialPricing = searchParams.get('pricing') || 'All';
  const initialSearch = searchParams.get('search') || '';

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedPricing, setSelectedPricing] = useState(initialPricing);
  const [sortBy, setSortBy] = useState('rating');
  const [selectedTool, setSelectedTool] = useState(null);

  const categoriesList = ['All', ...categoriesData.map((c) => c.name)];
  const pricingList = ['All', 'Free', 'Freemium', 'Paid', 'Free Trial'];

  const filteredTools = useMemo(() => {
    return toolsData
      .filter((tool) => {
        const matchesSearch =
          searchQuery === '' ||
          tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tool.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

        const matchesCategory =
          selectedCategory === 'All' || tool.category.toLowerCase() === selectedCategory.toLowerCase();

        const matchesPricing =
          selectedPricing === 'All' || tool.pricing.toLowerCase() === selectedPricing.toLowerCase();

        return matchesSearch && matchesCategory && matchesPricing;
      })
      .sort((a, b) => {
        if (sortBy === 'rating') return (b.rating || 0) - (a.rating || 0);
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        if (sortBy === 'category') return a.category.localeCompare(b.category);
        return 0;
      });
  }, [searchQuery, selectedCategory, selectedPricing, sortBy]);

  return (
    <div>
      {/* Page Header */}
      <section className={styles.exploreHeader}>
        <div className="container">
          <div className="badge badge-primary" style={{ marginBottom: '0.75rem' }}>
            Software Directory
          </div>
          <h1 className="h1-title" style={{ fontSize: '2.5rem' }}>Explore Design & Creative Tools</h1>
          <p className="sub-text" style={{ fontSize: '1rem', marginTop: '0.5rem', maxWidth: '640px' }}>
            Filter and discover industry-leading applications for graphics, interface design, 3D modeling, illustration, and productivity.
          </p>

          {/* Search Bar & Filter Controls */}
          <div className={styles.controlsBar}>
            <div className={styles.searchRow}>
              <div className={styles.searchBox}>
                <Search size={20} className={styles.searchIcon} />
                <input
                  type="text"
                  className={styles.searchInput}
                  placeholder="Search by tool name, tag, or feature (e.g., Figma, Vector, Render)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <select
                className={styles.selectInput}
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="rating">Sort by Rating</option>
                <option value="name">Sort A - Z</option>
                <option value="category">Sort by Category</option>
              </select>
            </div>

            {/* Category Filter Tabs */}
            <div className={styles.filterTabs}>
              {categoriesList.map((cat) => {
                const isActive = selectedCategory.toLowerCase() === cat.toLowerCase();
                const isWebrootCat = cat === 'Cybersecurity & Safety';
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`
                      ${styles.tabBtn}
                      ${isActive ? (isWebrootCat ? styles.tabWebrootActive : styles.tabActive) : ''}
                    `}
                  >
                    {isWebrootCat && <ShieldCheck size={14} style={{ display: 'inline', marginRight: '0.35rem' }} />}
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Pricing Filter Tabs */}
            <div className={styles.secondaryFilters}>
              <div className={styles.metaCount}>
                Showing {filteredTools.length} {filteredTools.length === 1 ? 'tool' : 'tools'}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', fontWeight: 600 }}>Pricing Filter:</span>
                {pricingList.map((p) => (
                  <button
                    key={p}
                    onClick={() => setSelectedPricing(p)}
                    style={{
                      padding: '0.25rem 0.75rem',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      border: '1px solid var(--border-light)',
                      backgroundColor: selectedPricing === p ? 'var(--text-primary)' : '#ffffff',
                      color: selectedPricing === p ? '#ffffff' : 'var(--text-secondary)',
                      cursor: 'pointer'
                    }}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid Section */}
      <section className="container" style={{ paddingTop: '3rem', paddingBottom: '5rem' }}>
        {filteredTools.length > 0 ? (
          <div className="grid-3">
            {filteredTools.map((tool) => (
              <ToolCard
                key={tool.id}
                tool={tool}
                onViewDetails={(t) => setSelectedTool(t)}
              />
            ))}
          </div>
        ) : (
          <div style={{ textTransform: 'none', textAlign: 'center', padding: '4rem 1.5rem', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-light)' }}>
            <h3 className="h3-title" style={{ marginBottom: '0.5rem' }}>No matching tools found</h3>
            <p className="sub-text" style={{ fontSize: '0.9375rem', marginBottom: '1.5rem' }}>
              Try adjusting your search query or filter tags to find what you are looking for.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedPricing('All');
              }}
              className="btn btn-primary"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Tool Details Modal */}
      {selectedTool && (
        <ToolDetailModal tool={selectedTool} onClose={() => setSelectedTool(null)} />
      )}
    </div>
  );
}

export default function ExplorePage() {
  return (
    <Suspense fallback={<div className="container" style={{ padding: '4rem 1.5rem' }}>Loading Explore Directory...</div>}>
      <ExploreContent />
    </Suspense>
  );
}
