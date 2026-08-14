'use client';

import { Star, ExternalLink, ArrowRight } from 'lucide-react';
import styles from './ToolCard.module.css';

export default function ToolCard({ tool, onViewDetails }) {
  const getPricingBadgeClass = (pricing) => {
    switch (pricing) {
      case 'Free': return 'badge-webroot';
      case 'Freemium': return 'badge-primary';
      case 'Paid': return 'badge-neutral';
      default: return 'badge-outline';
    }
  };

  return (
    <div className={styles.card}>
      <div>
        {/* Card Top Icon & Badges */}
        <div className={styles.cardTop}>
          <div className={styles.iconWrapper}>{tool.logo}</div>
          <div className={styles.badges}>
            <span className={`badge ${getPricingBadgeClass(tool.pricing)}`}>
              {tool.pricing}
            </span>
            {tool.badge && (
              <span className="badge badge-outline" style={{ fontSize: '0.7rem' }}>
                {tool.badge}
              </span>
            )}
          </div>
        </div>

        {/* Title & Tagline */}
        <div className={styles.titleArea}>
          <h3 className={styles.name}>{tool.name}</h3>
          <div className={styles.tagline}>{tool.category}</div>
        </div>

        {/* Short Description */}
        <p className={styles.desc}>{tool.description}</p>
      </div>

      <div>
        {/* Platforms & Ratings */}
        <div className={styles.metaRow}>
          <div className={styles.platforms}>
            {tool.platform.slice(0, 3).map((p) => (
              <span key={p} className={styles.platformPill}>
                {p}
              </span>
            ))}
            {tool.platform.length > 3 && <span>+{tool.platform.length - 3}</span>}
          </div>

          {tool.rating && (
            <div className={styles.rating}>
              <Star size={14} fill="#F59E0B" color="#F59E0B" />
              <span>{tool.rating}</span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className={styles.actions}>
          <button
            onClick={() => onViewDetails && onViewDetails(tool)}
            className="btn btn-secondary btn-sm"
            style={{ width: '100%' }}
          >
            View Details <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
