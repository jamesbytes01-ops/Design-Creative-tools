import Link from 'next/link';
import { ShieldCheck, Scale, AlertCircle, FileCheck, CheckCircle2, Globe } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service | Design & Creative Tools Platform',
  description: 'Review the terms and conditions governing the use of Design & Creative Tools platform and Webroot protection services.',
};

export default function TermsOfServicePage() {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '80vh' }}>
      {/* Header Section */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-light)', paddingTop: '4rem', paddingBottom: '3.5rem' }}>
        <div className="container">
          <div className="badge badge-primary" style={{ marginBottom: '0.75rem' }}>
            Legal & Compliance
          </div>
          <h1 className="h1-title" style={{ fontSize: '2.5rem', maxWidth: '800px' }}>
            Terms of Service
          </h1>
          <p className="sub-text" style={{ fontSize: '1.0625rem', marginTop: '0.75rem', maxWidth: '680px' }}>
            Last updated: August 18, 2026. Please read these terms carefully before accessing or using the Design & Creative Tools platform.
          </p>
        </div>
      </section>

      {/* Main Legal Content Container - Detached from footer with ample bottom spacing */}
      <main className="container" style={{ paddingTop: '3.5rem', paddingBottom: '6rem' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          
          <div className="card-base" style={{ padding: '2.5rem', marginBottom: '2.5rem', border: '1px solid var(--border-light)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--primary-600)' }}>
              <Scale size={22} />
              <h2 style={{ fontSize: '1.35rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                1. Acceptance of Terms
              </h2>
            </div>
            <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              By accessing and utilizing the Design & Creative Tools web platform, catalog services, or Webroot security advisor modules, you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, you must discontinue platform usage immediately.
            </p>
          </div>

          <div className="card-base" style={{ padding: '2.5rem', marginBottom: '2.5rem', border: '1px solid var(--border-light)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--primary-600)' }}>
              <Globe size={22} />
              <h2 style={{ fontSize: '1.35rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                2. Platform Scope & Software Directory
              </h2>
            </div>
            <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
              Design & Creative Tools operates as an informational directory and evaluation hub for third-party creative software, vector editors, 3D suites, and asset management platforms.
            </p>
            <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.7 }}>
              <li><strong>Catalog Accuracy:</strong> Pricing, feature availability, and OS compatibility information are maintained to the best of our knowledge based on vendor publications.</li>
              <li><strong>Third-Party Vendors:</strong> Third-party product purchasing, subscriptions, and licenses are completed directly on vendor websites under vendor-specific licensing terms.</li>
            </ul>
          </div>

          <div className="card-base card-webroot" style={{ padding: '2.5rem', marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--webroot-primary)' }}>
              <ShieldCheck size={24} />
              <h2 style={{ fontSize: '1.35rem', fontWeight: 700, margin: 0, color: 'var(--webroot-dark)' }}>
                3. Webroot Security Protection & Intellectual Property
              </h2>
            </div>
            <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
              All Webroot logos, trademarks, antivirus technology references, and security solutions displayed on this site are property of OpenText / Webroot Inc. Integrated security advice is provided as an advisory framework to protect creative studio workflows against ransomware and asset loss.
            </p>
            <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              All platform design assets, UI components, code architecture, and proprietary graphics belong exclusively to Design & Creative Tools.
            </p>
          </div>

          <div className="card-base" style={{ padding: '2.5rem', marginBottom: '2.5rem', border: '1px solid var(--border-light)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--primary-600)' }}>
              <AlertCircle size={22} />
              <h2 style={{ fontSize: '1.35rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                4. Disclaimer of Warranties & Limitation of Liability
              </h2>
            </div>
            <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
              The platform and all included content are provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, whether express or implied.
            </p>
            <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Design & Creative Tools shall not be liable for any indirect, incidental, or consequential damages resulting from third-party software installation, system incompatibility, or endpoint configuration choices.
            </p>
          </div>

          <div className="card-base" style={{ padding: '2.5rem', border: '1px solid var(--border-light)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--primary-600)' }}>
              <FileCheck size={22} />
              <h2 style={{ fontSize: '1.35rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                5. Governance & Inquiries
              </h2>
            </div>
            <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              These terms are governed by standard web licensing regulations. For questions regarding enterprise compliance or platform terms, please reach out to our team.
            </p>
            <Link href="/contact" className="btn btn-secondary">
              Contact Legal Desk
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}
