'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, X, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { toolsData } from '@/data/toolsData';
import { webrootProducts } from '@/data/webrootData';
import { categoriesData } from '@/data/categoriesData';
import styles from './SearchModal.module.css';

export default function SearchModal({ isOpen, onClose, onSelectTool }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        isOpen ? onClose() : null;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredTools = query.trim()
    ? toolsData.filter(
        (t) =>
          t.name.toLowerCase().includes(query.toLowerCase()) ||
          t.category.toLowerCase().includes(query.toLowerCase()) ||
          t.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
      )
    : toolsData.slice(0, 4);

  const filteredWebroot = query.trim()
    ? webrootProducts.filter(
        (wp) =>
          wp.name.toLowerCase().includes(query.toLowerCase()) ||
          wp.shortDescription.toLowerCase().includes(query.toLowerCase()) ||
          wp.category.toLowerCase().includes(query.toLowerCase())
      )
    : webrootProducts.slice(0, 2);

  const filteredCategories = query.trim()
    ? categoriesData.filter((c) => c.name.toLowerCase().includes(query.toLowerCase()))
    : categoriesData.slice(0, 3);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {/* Search Header Input */}
        <div className={styles.searchHeader}>
          <Search size={20} color="var(--text-muted)" />
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search creative tools, Webroot products, categories..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close search">
            <X size={20} />
          </button>
        </div>

        {/* Search Results List */}
        <div className={styles.resultsArea}>
          {/* Creative Tools */}
          {filteredTools.length > 0 && (
            <div>
              <div className={styles.sectionTitle}>Creative & Design Tools ({filteredTools.length})</div>
              <ul className={styles.resultList}>
                {filteredTools.map((tool) => (
                  <li key={tool.id}>
                    <div
                      className={styles.resultItem}
                      onClick={() => {
                        onClose();
                        if (onSelectTool) onSelectTool(tool);
                      }}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className={styles.itemLeft}>
                        <div className={styles.itemIcon}>{tool.logo}</div>
                        <div>
                          <div className={styles.itemName}>{tool.name}</div>
                          <div className={styles.itemDesc}>{tool.tagline}</div>
                        </div>
                      </div>
                      <span className="badge badge-primary">{tool.category}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Webroot Products */}
          {filteredWebroot.length > 0 && (
            <div>
              <div className={styles.sectionTitle}>Webroot Cybersecurity Products</div>
              <ul className={styles.resultList}>
                {filteredWebroot.map((wp) => (
                  <li key={wp.id}>
                    <Link
                      href={`/webroot/${wp.slug}`}
                      className={`${styles.resultItem} ${styles.webrootResultItem}`}
                      onClick={onClose}
                    >
                      <div className={styles.itemLeft}>
                        <div className={styles.itemIcon} style={{ color: 'var(--webroot-primary)' }}>
                          <ShieldCheck size={20} />
                        </div>
                        <div>
                          <div className={styles.itemName}>{wp.name}</div>
                          <div className={styles.itemDesc}>{wp.subtitle}</div>
                        </div>
                      </div>
                      <span className="badge badge-webroot">{wp.category}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Categories */}
          {filteredCategories.length > 0 && (
            <div>
              <div className={styles.sectionTitle}>Explore Categories</div>
              <ul className={styles.resultList}>
                {filteredCategories.map((cat) => (
                  <li key={cat.id}>
                    <Link
                      href={`/explore?category=${encodeURIComponent(cat.name)}`}
                      className={styles.resultItem}
                      onClick={onClose}
                    >
                      <div className={styles.itemLeft}>
                        <div className={styles.itemIcon} style={{ fontSize: '1rem', fontWeight: 'bold' }}>
                          <Sparkles size={16} />
                        </div>
                        <div>
                          <div className={styles.itemName}>{cat.name}</div>
                          <div className={styles.itemDesc}>{cat.description}</div>
                        </div>
                      </div>
                      <ArrowRight size={16} color="var(--text-muted)" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {filteredTools.length === 0 && filteredWebroot.length === 0 && filteredCategories.length === 0 && (
            <div className={styles.emptyState}>
              No matching tools or security products found for &quot;{query}&quot;.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
