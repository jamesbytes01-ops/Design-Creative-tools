import Link from 'next/link';
import { ShieldCheck, ShieldAlert, Wifi, Building, Lock, Check, ArrowRight } from 'lucide-react';
import styles from './WebrootProductCard.module.css';

const iconMap = {
  ShieldCheck,
  ShieldAlert,
  Wifi,
  Building,
  Lock
};

export default function WebrootProductCard({ product }) {
  const IconComponent = iconMap[product.icon] || ShieldCheck;

  return (
    <div className={styles.card}>
      <div>
        {/* Top Icon & Badge */}
        <div className={styles.topRow}>
          <div className={styles.iconWrapper}>
            <IconComponent size={28} />
          </div>
          <span className="badge badge-webroot">{product.badge || product.category}</span>
        </div>

        {/* Product Title & Subtitle */}
        <h3 className={styles.name}>{product.name}</h3>
        <div className={styles.subtitle}>{product.subtitle}</div>
        <p className={styles.desc}>{product.shortDescription}</p>

        {/* Highlight Features */}
        <ul className={styles.featureList}>
          {product.highlights.map((feat, i) => (
            <li key={i} className={styles.featureItem}>
              <Check size={14} className={styles.featureIcon} />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        {/* Bottom Platform Badges & Action */}
        <div className={styles.bottomMeta}>
          <div className={styles.platforms}>
            {product.supportedPlatforms.map((plat) => (
              <span key={plat} className={styles.platformTag}>
                {plat}
              </span>
            ))}
          </div>

          <Link href={`/webroot/${product.slug}`} className="btn btn-webroot btn-sm">
            Learn More <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
