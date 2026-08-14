'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, UserCheck, Users, Cpu, Laptop, ArrowRight, Check } from 'lucide-react';
import { webrootProducts } from '@/data/webrootData';

export default function WebrootSecurityAdvisor() {
  const [activePersona, setActivePersona] = useState('freelancer');

  const personas = [
    {
      id: 'freelancer',
      title: 'Solo Designer / Freelancer',
      icon: UserCheck,
      desc: 'Individual creatives managing confidential client assets on laptop and mobile.',
      recommendedSlug: 'internet-security'
    },
    {
      id: 'agency',
      title: 'Creative Agency / Studio',
      icon: Users,
      desc: 'Design teams & studios requiring central endpoint security management.',
      recommendedSlug: 'business-endpoint'
    },
    {
      id: 'motion3d',
      title: '3D & Motion Specialist',
      icon: Cpu,
      desc: 'Artists needing zero CPU render overhead and fast cloud scans.',
      recommendedSlug: 'antivirus'
    },
    {
      id: 'remote',
      title: 'Remote Digital Nomad',
      icon: Laptop,
      desc: 'Designers working from coffee shops, airports, and public Wi-Fi.',
      recommendedSlug: 'wifi-security'
    }
  ];

  const currentPersona = personas.find((p) => p.id === activePersona) || personas[0];
  const recommendedProduct = webrootProducts.find((wp) => wp.slug === currentPersona.recommendedSlug) || webrootProducts[0];

  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid var(--webroot-border)',
        borderRadius: 'var(--radius-xl)',
        padding: '2.5rem',
        boxShadow: 'var(--shadow-md)',
        background: 'linear-gradient(135deg, #FFFFFF 0%, #F0FDF4 100%)'
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 2rem' }}>
        <span className="badge badge-webroot" style={{ marginBottom: '0.75rem' }}>
          <ShieldCheck size={14} /> Interactive Security Advisor
        </span>
        <h3 className="h2-title" style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>
          Find the Right Webroot Protection for Your Creative Workflow
        </h3>
        <p className="sub-text" style={{ fontSize: '0.9375rem' }}>
          Select your work profile to see custom security recommendation.
        </p>
      </div>

      {/* Profile Selector Buttons */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1rem',
          marginBottom: '2rem'
        }}
      >
        {personas.map((p) => {
          const Icon = p.icon;
          const isSelected = p.id === activePersona;
          return (
            <button
              key={p.id}
              onClick={() => setActivePersona(p.id)}
              style={{
                padding: '1.25rem 1rem',
                borderRadius: 'var(--radius-lg)',
                border: isSelected ? '2px solid var(--webroot-primary)' : '1px solid var(--border-light)',
                backgroundColor: isSelected ? 'var(--webroot-light)' : '#FFFFFF',
                color: isSelected ? 'var(--webroot-primary)' : 'var(--text-secondary)',
                textAlign: 'center',
                transition: 'all 0.2s ease',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <Icon size={24} />
              <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: isSelected ? 'var(--webroot-primary)' : 'var(--text-primary)' }}>
                {p.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Recommended Output Box */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid var(--webroot-border)',
          borderRadius: 'var(--radius-lg)',
          padding: '1.75rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2rem',
          flexWrap: 'wrap'
        }}
      >
        <div style={{ flex: 1, minWidth: '280px' }}>
          <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--webroot-primary)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
            Recommended Solution for {currentPersona.title}
          </div>
          <h4 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
            {recommendedProduct.name}
          </h4>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.5 }}>
            {recommendedProduct.shortDescription}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {recommendedProduct.highlights.slice(0, 2).map((h, i) => (
              <span key={i} style={{ fontSize: '0.8125rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Check size={14} color="var(--webroot-primary)" /> {h}
              </span>
            ))}
          </div>
        </div>

        <div>
          <Link href={`/webroot/${recommendedProduct.slug}`} className="btn btn-webroot btn-lg">
            Explore Solution <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
