'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Menu, X, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar({ onOpenSearch }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { label: 'Explore Tools', href: '/explore' },
    { label: 'Categories', href: '/categories' },
    { label: 'Products', href: '/products' },
    { label: 'Webroot', href: '/webroot' },
    { label: 'Resources', href: '/resources' },
    { label: 'About', href: '/about' },
  ];

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        {/* Brand Logo */}
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <Sparkles size={20} />
          </div>
          <div className={styles.logoText}>
            Design <span>& Creative</span> Tools
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav>
          <ul className={styles.navLinks}>
            {navItems.map((item) => (
              <li key={item.href} className={styles.navItem}>
                <Link
                  href={item.href}
                  className={`
                    ${styles.navLink}
                    ${isActive(item.href) ? styles.navLinkActive : ''}
                  `}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Section Actions */}
        <div className={styles.rightSection}>
          <button
            onClick={onOpenSearch}
            className={styles.searchBtn}
            aria-label="Open search dialog"
          >
            <Search size={16} />
            <span style={{ display: 'var(--search-text-display, inline)' }}>Search tools...</span>
            <kbd className={styles.searchKbd}>⌘K</kbd>
          </button>

          <Link href="/contact" className="btn btn-primary btn-sm" style={{ display: 'inline-flex' }}>
            Get Started <ArrowRight size={14} />
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={styles.mobileToggle}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileNavList}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={styles.mobileNavLink}
                >
                  <span>{item.label}</span>
                  <ArrowRight size={16} />
                </Link>
              </li>
            ))}
            <li style={{ paddingTop: '0.5rem' }}>
              <Link href="/contact" className="btn btn-primary" style={{ width: '100%' }}>
                Contact & Support
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
