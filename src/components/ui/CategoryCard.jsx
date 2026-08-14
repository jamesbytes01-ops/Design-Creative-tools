import Link from 'next/link';
import { Palette, Layout, Image, Video, PenTool, Box, Sparkles, CheckCircle2, Shield, ArrowRight } from 'lucide-react';
import { toolsData } from '@/data/toolsData';
import { webrootProducts } from '@/data/webrootData';
import styles from './CategoryCard.module.css';

const iconMap = {
  Palette,
  Layout,
  Image,
  Video,
  PenTool,
  Box,
  Sparkles,
  CheckCircle2,
  Shield
};

export default function CategoryCard({ category }) {
  const IconComponent = iconMap[category.icon] || Palette;
  const isCybersecurity = category.id === 'cybersecurity';

  // Calculate actual dynamic count from dataset
  const actualCount = isCybersecurity
    ? webrootProducts.length
    : toolsData.filter(
        (t) => t.category.toLowerCase() === category.name.toLowerCase()
      ).length;

  return (
    <Link
      href={isCybersecurity ? '/webroot' : `/explore?category=${encodeURIComponent(category.name)}`}
      className={`${styles.card} ${isCybersecurity ? 'card-webroot' : ''}`}
    >
      <div>
        <div
          className={styles.iconWrapper}
          style={{
            backgroundColor: `${category.colorAccent}15`,
            color: category.colorAccent
          }}
        >
          <IconComponent size={24} />
        </div>

        <h3 className={styles.title}>{category.name}</h3>
        <p className={styles.desc}>{category.description}</p>
      </div>

      <div className={styles.footer}>
        <span>{actualCount} {isCybersecurity ? 'Webroot Security Suites' : 'Curated Tools'}</span>
        <ArrowRight size={16} />
      </div>
    </Link>
  );
}
