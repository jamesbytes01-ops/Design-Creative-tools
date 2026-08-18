import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';
import BrandLogo from './BrandLogo';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <BrandLogo size="small" />
            <p className={styles.brandDesc}>
              The premier Design & Creative Tools discovery platform with integrated workflow security. Discover, evaluate, and protect your digital creative workspace.
            </p>
            <div className={styles.webrootBadge}>
              <ShieldCheck size={16} /> Integrated Creative Workflow Protection
            </div>
          </div>

          {/* Column 1: Platform */}
          <div>
            <h4 className={styles.colTitle}>Platform</h4>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}><Link href="/explore">Explore Tools</Link></li>
              <li className={styles.linkItem}><Link href="/categories">Categories</Link></li>
              <li className={styles.linkItem}><Link href="/products">Software Catalog</Link></li>
              <li className={styles.linkItem}><Link href="/explore?pricing=Free">Free Tools</Link></li>
              <li className={styles.linkItem}><Link href="/explore?pricing=Freemium">Freemium Apps</Link></li>
            </ul>
          </div>

          {/* Column 2: Webroot */}
          <div>
            <h4 className={styles.colTitle}>Webroot</h4>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}><Link href="/webroot">Webroot Hub</Link></li>
              <li className={styles.linkItem}><Link href="/webroot/antivirus">Webroot Antivirus</Link></li>
              <li className={styles.linkItem}><Link href="/webroot/internet-security">Internet Security Complete</Link></li>
              <li className={styles.linkItem}><Link href="/webroot/wifi-security">WiFi Security VPN</Link></li>
              <li className={styles.linkItem}><Link href="/webroot/business-endpoint">Business Endpoint</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className={styles.colTitle}>Resources</h4>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}><Link href="/resources">Blog & Guides</Link></li>
              <li className={styles.linkItem}><Link href="/resources?category=Design">Design Systems</Link></li>
              <li className={styles.linkItem}><Link href="/resources?category=Cybersecurity">Cybersecurity Hub</Link></li>
              <li className={styles.linkItem}><Link href="/contact">Help & Support</Link></li>
              <li className={styles.linkItem}><Link href="/contact">Developer API (Future)</Link></li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h4 className={styles.colTitle}>Company</h4>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}><Link href="/about">About Us</Link></li>
              <li className={styles.linkItem}><Link href="/about#mission">Our Mission</Link></li>
              <li className={styles.linkItem}><Link href="/contact">Contact Sales</Link></li>
              <li className={styles.linkItem}><Link href="/about#ecosystem">Partners</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className={styles.bottomBar}>
          <div>
            © {new Date().getFullYear()} Design & Creative Tools Platform with Integrated Security. All rights reserved. Webroot logos and product names are trademarks of OpenText / Webroot Inc.
          </div>
          <div className={styles.legalLinks}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
            <Link href="/contact">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
