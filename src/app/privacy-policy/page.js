import Link from 'next/link';
import { ShieldCheck, Lock, Eye, FileText, UserCheck, Bell } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | Design & Creative Tools Platform',
  description: 'Learn how Design & Creative Tools protects your privacy, manages user data, and safeguards platform telemetry.',
};

export default function PrivacyPolicyPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '80vh' }}>
      {/* Header Section */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-light)', paddingTop: '4rem', paddingBottom: '3.5rem' }}>
        <div className="container">
          <div className="badge badge-primary" style={{ marginBottom: '0.75rem' }}>
            Legal & Compliance
          </div>
          <h1 className="h1-title" style={{ fontSize: '2.5rem', maxWidth: '800px' }}>
            Privacy Policy
          </h1>
          <p className="sub-text" style={{ fontSize: '1.0625rem', marginTop: '0.75rem', maxWidth: '680px' }}>
            Last updated: August 18, 2026. Your privacy and data security are fundamental to how we curate software and integrate Webroot protection.
          </p>
        </div>
      </section>

      {/* Main Legal Content Container - Detached from footer with ample bottom spacing */}
      <main className="container" style={{ paddingTop: '3.5rem', paddingBottom: '6rem' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          
          <div className="card-base" style={{ padding: '2.5rem', marginBottom: '2.5rem', border: '1px solid var(--border-light)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--primary-600)' }}>
              <Lock size={22} />
              <h2 style={{ fontSize: '1.35rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                1. Data Collection & Overview
              </h2>
            </div>
            <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
              Design & Creative Tools collects limited operational data to provide software discovery, comparative analysis, and Webroot cybersecurity feature recommendations. We process information only when necessary to fulfill tool search queries or user-initiated inquiries.
            </p>
            <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.7 }}>
              <li><strong>Usage Analytics:</strong> Anonymous page views, search keywords, category browsing, and software filter selection.</li>
              <li><strong>Contact & Inquiry Submissions:</strong> Information provided voluntarily via our support form (Name, Email, Organization).</li>
              <li><strong>Webroot Endpoint Preferences:</strong> Security feature choices selected within our Security Advisor preview module.</li>
            </ul>
          </div>

          <div className="card-base" style={{ padding: '2.5rem', marginBottom: '2.5rem', border: '1px solid var(--border-light)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--primary-600)' }}>
              <Eye size={22} />
              <h2 style={{ fontSize: '1.35rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                2. How We Use Information
              </h2>
            </div>
            <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
              Information collected across our platform is utilized strictly to enhance digital asset protection and optimize creative software discovery:
            </p>
            <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.7 }}>
              <li>To recommend relevant creative applications based on pricing models, platforms, and category tags.</li>
              <li>To assess cybersecurity protection requirements through our Webroot Security Integration engine.</li>
              <li>To respond to enterprise licensing inquiries and partner technical support requests.</li>
              <li>To maintain infrastructure stability, performance optimization, and prevent unauthorized security threats.</li>
            </ul>
          </div>

          <div className="card-base card-webroot" style={{ padding: '2.5rem', marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--webroot-primary)' }}>
              <ShieldCheck size={24} />
              <h2 style={{ fontSize: '1.35rem', fontWeight: 700, margin: 0, color: 'var(--webroot-dark)' }}>
                3. Webroot Integration & Telemetry Protection
              </h2>
            </div>
            <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
              Our partnership with Webroot provides integrated threat detection for creative workflows. When interacting with Webroot software modules, security assessment telemetry is handled in compliance with OpenText / Webroot privacy specifications. No proprietary artwork or design source files are transmitted to external servers.
            </p>
          </div>

          <div className="card-base" style={{ padding: '2.5rem', marginBottom: '2.5rem', border: '1px solid var(--border-light)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--primary-600)' }}>
              <FileText size={22} />
              <h2 style={{ fontSize: '1.35rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                4. Data Sharing & Third-Party Vendors
              </h2>
            </div>
            <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              We do not sell, rent, or trade personal data to third parties. Outbound links to external design tool vendors (e.g., Adobe, Serif, Figma) direct users to official vendor domains governed by their respective privacy policies.
            </p>
          </div>

          <div className="card-base" style={{ padding: '2.5rem', marginBottom: '2.5rem', border: '1px solid var(--border-light)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--primary-600)' }}>
              <UserCheck size={22} />
              <h2 style={{ fontSize: '1.35rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                5. User Rights & Data Retention
              </h2>
            </div>
            <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Users retain rights to access, amend, or request deletion of personal inquiry data logged through platform forms. Data collected for support inquiries is retained only as long as necessary for administrative verification and security auditing.
            </p>
          </div>

          <div className="card-base" style={{ padding: '2.5rem', border: '1px solid var(--border-light)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--primary-600)' }}>
              <Bell size={22} />
              <h2 style={{ fontSize: '1.35rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                6. Contact Privacy Team
              </h2>
            </div>
            <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              If you have questions regarding this Privacy Policy or platform security practices, please submit an inquiry through our contact portal.
            </p>
            <Link href="/contact" className="btn btn-secondary">
              Contact Privacy Officer
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}
