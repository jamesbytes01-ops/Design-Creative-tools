import Link from 'next/link';
import { Sparkles, ShieldCheck, Layers, CheckCircle2, ArrowRight, Target, Shield, HeartHandshake } from 'lucide-react';

export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-light)', paddingTop: '4rem', paddingBottom: '3.5rem' }}>
        <div className="container">
          <div className="badge badge-primary" style={{ marginBottom: '0.75rem' }}>
            About The Platform
          </div>
          <h1 className="h1-title" style={{ fontSize: '2.75rem', maxWidth: '800px' }}>
            Helping creators and businesses discover the right digital, creative, and productivity tools.
          </h1>
          <p className="sub-text" style={{ fontSize: '1.125rem', marginTop: '1rem', maxWidth: '680px' }}>
            Design & Creative Tools is an enterprise platform dedicated to curating top-tier creative software while integrating Webroot cybersecurity to safeguard digital assets.
          </p>
        </div>
      </section>

      {/* Mission & Core Pillars */}
      <section className="container" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="grid-2" style={{ gap: '3rem', alignItems: 'center' }}>
          <div>
            <div className="badge badge-primary" style={{ marginBottom: '0.75rem' }}>
              <Target size={14} /> Platform Mission
            </div>
            <h2 className="h2-title" style={{ marginBottom: '1rem' }}>
              Elevating Creative Execution Through Curated Software Infrastructure
            </h2>
            <p className="sub-text" style={{ fontSize: '0.9375rem', marginBottom: '1.25rem', lineHeight: 1.65 }}>
              The modern software landscape is vast and fragmented. Creatives spend hours evaluating tool compatibility, pricing structures, system performance impact, and asset security.
            </p>
            <p className="sub-text" style={{ fontSize: '0.9375rem', marginBottom: '1.5rem', lineHeight: 1.65 }}>
              Our platform bridges this gap by providing structured software discovery alongside essential Webroot digital threat protection, ensuring your creative pipeline remains unhindered and secure.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                <CheckCircle2 size={18} color="var(--primary-600)" /> Transparent, objective tool evaluations
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                <CheckCircle2 size={18} color="var(--primary-600)" /> Multi-platform support breakdown (Web, macOS, Windows, iPadOS)
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--webroot-primary)' }}>
                <ShieldCheck size={18} color="var(--webroot-primary)" /> Native Webroot cybersecurity integration for asset defense
              </div>
            </div>
          </div>

          <div
            className="card-base"
            style={{
              padding: '2.5rem',
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-light)'
            }}
          >
            <h3 className="h3-title" style={{ fontSize: '1.35rem', marginBottom: '1.25rem' }}>
              What The Platform Delivers
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                  1. Discovery & Comparison Hub
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  Detailed specifications for vector engines, 3D renderers, prototyping apps, and AI image generators.
                </div>
              </div>

              <div>
                <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--webroot-dark)', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <ShieldCheck size={16} color="var(--webroot-primary)" /> 2. Webroot Cybersecurity Ecosystem
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  Integrated Webroot threat shield preventing ransomware locking of unreleased project assets and client IP.
                </div>
              </div>

              <div>
                <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                  3. Scalable Enterprise Readiness
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  Data architecture designed to easily connect with enterprise authentication and future Admin Panel APIs.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)', paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '640px' }}>
          <h2 className="h2-title" style={{ marginBottom: '0.75rem' }}>Ready to Explore Creative & Security Tools?</h2>
          <p className="sub-text" style={{ fontSize: '1rem', marginBottom: '2rem' }}>
            Jump into our software marketplace or explore Webroot security solutions tailored for your workstation.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/explore" className="btn btn-primary btn-lg">
              Explore Tools <ArrowRight size={18} />
            </Link>
            <Link href="/webroot" className="btn btn-webroot btn-lg">
              View Webroot Suite <ShieldCheck size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
