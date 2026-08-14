'use client';

import { X, ExternalLink, Star, CheckCircle, ShieldCheck, Tag, Laptop } from 'lucide-react';

export default function ToolDetailModal({ tool, onClose }) {
  if (!tool) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="card-base"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '680px',
          maxHeight: '88vh',
          overflowY: 'auto',
          backgroundColor: '#FFFFFF',
          padding: '2rem',
          animation: 'fadeIn 0.25s ease-out'
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div
              style={{
                width: '4rem',
                height: '4rem',
                borderRadius: '12px',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2.25rem'
              }}
            >
              {tool.logo}
            </div>
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>{tool.name}</h2>
              <div style={{ fontSize: '0.9375rem', color: 'var(--text-muted)', fontWeight: 500 }}>{tool.tagline}</div>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{ padding: '0.5rem', color: 'var(--text-muted)', cursor: 'pointer', borderRadius: '6px' }}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Badges & Category */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
          <span className="badge badge-primary">{tool.category}</span>
          <span className="badge badge-outline"><Tag size={12} /> {tool.pricing}</span>
          {tool.rating && (
            <span className="badge badge-neutral" style={{ color: '#D97706' }}>
              <Star size={12} fill="#F59E0B" /> {tool.rating} ({tool.reviewsCount} reviews)
            </span>
          )}
        </div>

        {/* Full Overview */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h4 style={{ fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
            Software Overview
          </h4>
          <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{tool.description}</p>
        </div>

        {/* Key Features */}
        {tool.features && tool.features.length > 0 && (
          <div style={{ marginBottom: '1.75rem' }}>
            <h4 style={{ fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
              Key Core Capabilities
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.625rem' }}>
              {tool.features.map((feat, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                  <CheckCircle size={16} color="var(--primary-600)" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Platform & Pricing Specs */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', backgroundColor: 'var(--bg-secondary)', padding: '1.25rem', borderRadius: '12px', marginBottom: '1.75rem' }}>
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Laptop size={14} /> Platforms Supported
            </div>
            <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>
              {tool.platform.join(', ')}
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
              Pricing Model
            </div>
            <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>
              {tool.pricingDetails}
            </div>
          </div>
        </div>

        {/* Actions Footer */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
          <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <ShieldCheck size={16} color="var(--webroot-primary)" /> Security Verified Platform
          </div>

          <button
            onClick={onClose}
            className="btn btn-primary btn-sm"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
