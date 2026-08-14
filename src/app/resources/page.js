'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BookOpen, Clock, User, Tag, ArrowRight, ShieldCheck } from 'lucide-react';
import { resourcesData } from '@/data/resourcesData';

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Design', 'Cybersecurity', 'Creativity', 'Technology', 'Productivity'];

  const filteredPosts = resourcesData.filter(
    (post) => selectedCategory === 'All' || post.category.toLowerCase() === selectedCategory.toLowerCase()
  );

  return (
    <div>
      {/* Header */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-light)', paddingTop: '3.5rem', paddingBottom: '3rem' }}>
        <div className="container">
          <div className="badge badge-primary" style={{ marginBottom: '0.75rem' }}>
            Knowledge & Insights
          </div>
          <h1 className="h1-title" style={{ fontSize: '2.5rem' }}>Resources & Engineering Blog</h1>
          <p className="sub-text" style={{ fontSize: '1rem', marginTop: '0.5rem', maxWidth: '640px' }}>
            In-depth guides on modern design systems, 3D rendering workflows, AI integration, and Webroot digital security practices.
          </p>

          {/* Category Filter Tabs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            {categories.map((cat) => {
              const isActive = selectedCategory.toLowerCase() === cat.toLowerCase();
              const isCyber = cat === 'Cybersecurity';
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '0.5rem 1.25rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    border: '1px solid var(--border-light)',
                    backgroundColor: isActive ? (isCyber ? 'var(--webroot-primary)' : 'var(--primary-600)') : '#ffffff',
                    color: isActive ? '#ffffff' : 'var(--text-secondary)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}
                >
                  {isCyber && <ShieldCheck size={14} />}
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="container" style={{ paddingTop: '3.5rem', paddingBottom: '5rem' }}>
        <div className="grid-3">
          {filteredPosts.map((post) => {
            const isCyber = post.category === 'Cybersecurity';
            return (
              <article
                key={post.id}
                className={`card-base ${isCyber ? 'card-webroot' : ''}`}
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <span className={isCyber ? 'badge badge-webroot' : 'badge badge-primary'}>
                      {isCyber && <ShieldCheck size={12} />} {post.category}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.1875rem', fontWeight: 700, marginBottom: '0.75rem', lineHeight: 1.4, color: 'var(--text-primary)' }}>
                    {post.title}
                  </h3>

                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                    {post.summary}
                  </p>
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <User size={14} /> {post.author}
                    </div>
                    <div>{post.date}</div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
