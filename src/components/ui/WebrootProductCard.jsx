import Link from 'next/link';
import { ShieldCheck, ShieldAlert, Shield, Smartphone, Wifi, Building, Globe, GraduationCap, Cloud, Lock, Check, ArrowRight } from 'lucide-react';
import WebrootVisualPreview from './WebrootVisualPreview';
import styles from './WebrootProductCard.module.css';

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

export default function WebrootProductCard({ product }) {
  const IconComponent = iconMap[product.icon] || ShieldCheck;

  return (
    <Link
      href={`/webroot/${product.slug}`}
      className={styles.card}
      style={{
        textDecoration: 'none',
        color: 'inherit',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 0,
        overflow: 'hidden'
      }}
    >
      <div>
        {/* High-Tech Visual Banner Preview Header */}
        <WebrootVisualPreview productId={product.id} category={product.category} name={product.name} />

        {/* Card Content Area */}
        <div style={{ padding: '1.25rem' }}>
          {/* Top Row Icon & Category Badge */}
          <div className={styles.topRow} style={{ marginBottom: '0.75rem' }}>
            <div className={styles.iconWrapper}>
              <IconComponent size={24} />
            </div>
            <span className="badge badge-webroot">{product.badge || product.category}</span>
          </div>

          {/* Product Title & Subtitle */}
          <h3 className={styles.name}>{product.name}</h3>
          <div className={styles.subtitle}>{product.subtitle}</div>
          <p className={styles.desc}>{product.shortDescription}</p>

          {/* Highlight Features */}
          <ul className={styles.featureList}>
            {product.highlights.slice(0, 3).map((feat, i) => (
              <li key={i} className={styles.featureItem}>
                <Check size={14} className={styles.featureIcon} />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div style={{ padding: '0 1.25rem 1.25rem 1.25rem' }}>
        {/* Bottom Platform Badges & Action */}
        <div className={styles.bottomMeta}>
          <div className={styles.platforms}>
            {product.supportedPlatforms.map((plat) => (
              <span key={plat} className={styles.platformTag}>
                {plat}
              </span>
            ))}
          </div>

          <span className="btn btn-webroot btn-sm">
            Learn More <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
}
