'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, X, ArrowRight, ShieldCheck, Cpu, Globe, Smartphone, Lock, Building } from 'lucide-react';

export default function WebrootSecurityAdvisor() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const comparisonFeatures = [
    { name: 'Real-Time Cloud AntiVirus & Malware Shield', av: true, plus: true, complete: true, biz: true },
    { name: 'Behavioral Journaling & Ransomware Rollback', av: true, plus: true, complete: true, biz: true },
    { name: 'Identity Shield & Keylogger Encapsulation', av: true, plus: true, complete: true, biz: true },
    { name: 'Sub-15MB Lightweight Memory Agent', av: true, plus: true, complete: true, biz: true },
    { name: 'Multi-Device Support (PC, Mac, Android, iOS)', av: false, plus: true, complete: true, biz: true },
    { name: 'Encrypted Password Manager Vault', av: false, plus: true, complete: true, biz: false },
    { name: '25GB Automated Encrypted Cloud Backup', av: false, plus: false, complete: true, biz: false },
    { name: 'System Optimizer & Cache Cleaner', av: false, plus: false, complete: true, biz: false },
    { name: 'Central Cloud Administration Console', av: false, plus: false, complete: false, biz: true },
    { name: 'Silent Deployment (GPO / RMM Scripting)', av: false, plus: false, complete: false, biz: true }
  ];

  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid var(--webroot-border)',
        borderRadius: 'var(--radius-xl)',
        padding: '2.5rem',
        boxShadow: 'var(--shadow-md)'
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2.5rem' }}>
        <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--webroot-primary)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          Product Feature Comparison
        </div>
        <h2 className="h2-title" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
          Compare Webroot Security Solutions
        </h2>
        <p className="sub-text" style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>
          Evaluate core protection layers across consumer suites, multi-device packages, and enterprise endpoint management.
        </p>
      </div>

      {/* Comparison Table */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '700px' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid var(--border-light)' }}>
              <th style={{ padding: '1rem 0.75rem', fontSize: '0.9375rem', fontWeight: 700, color: 'var(--text-primary)', width: '38%' }}>
                Protection Features
              </th>
              <th style={{ padding: '1rem 0.5rem', textAlign: 'center', width: '15.5%' }}>
                <div style={{ fontSize: '0.9375rem', fontWeight: 800, color: 'var(--text-primary)' }}>AntiVirus</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 500, marginTop: '0.15rem' }}>1 PC or Mac</div>
              </th>
              <th style={{ padding: '1rem 0.5rem', textAlign: 'center', width: '15.5%', backgroundColor: 'var(--webroot-light)', borderRadius: 'var(--radius-md) var(--radius-md) 0 0' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--webroot-primary)', textTransform: 'uppercase', marginBottom: '0.1rem' }}>Most Popular</div>
                <div style={{ fontSize: '0.9375rem', fontWeight: 800, color: 'var(--text-primary)' }}>Security Plus</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 500, marginTop: '0.15rem' }}>3-5 Devices</div>
              </th>
              <th style={{ padding: '1rem 0.5rem', textAlign: 'center', width: '15.5%' }}>
                <div style={{ fontSize: '0.9375rem', fontWeight: 800, color: 'var(--text-primary)' }}>Complete</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 500, marginTop: '0.15rem' }}>5 Devices + Backup</div>
              </th>
              <th style={{ padding: '1rem 0.5rem', textAlign: 'center', width: '15.5%' }}>
                <div style={{ fontSize: '0.9375rem', fontWeight: 800, color: 'var(--text-primary)' }}>Business</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 500, marginTop: '0.15rem' }}>MSP / Enterprise</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonFeatures.map((feat, idx) => (
              <tr
                key={idx}
                style={{
                  borderBottom: '1px solid var(--border-light)',
                  backgroundColor: idx % 2 === 0 ? 'transparent' : 'rgba(248, 250, 252, 0.6)'
                }}
              >
                <td style={{ padding: '0.9rem 0.75rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  {feat.name}
                </td>
                <td style={{ padding: '0.9rem 0.5rem', textAlign: 'center' }}>
                  {feat.av ? <Check size={18} color="var(--webroot-primary)" style={{ margin: '0 auto' }} /> : <X size={18} color="#94A3B8" style={{ margin: '0 auto' }} />}
                </td>
                <td style={{ padding: '0.9rem 0.5rem', textAlign: 'center', backgroundColor: 'var(--webroot-light)' }}>
                  {feat.plus ? <Check size={18} color="var(--webroot-primary)" style={{ margin: '0 auto' }} /> : <X size={18} color="#94A3B8" style={{ margin: '0 auto' }} />}
                </td>
                <td style={{ padding: '0.9rem 0.5rem', textAlign: 'center' }}>
                  {feat.complete ? <Check size={18} color="var(--webroot-primary)" style={{ margin: '0 auto' }} /> : <X size={18} color="#94A3B8" style={{ margin: '0 auto' }} />}
                </td>
                <td style={{ padding: '0.9rem 0.5rem', textAlign: 'center' }}>
                  {feat.biz ? <Check size={18} color="var(--webroot-primary)" style={{ margin: '0 auto' }} /> : <X size={18} color="#94A3B8" style={{ margin: '0 auto' }} />}
                </td>
              </tr>
            ))}
            <tr>
              <td style={{ padding: '1.25rem 0.75rem' }}></td>
              <td style={{ padding: '1.25rem 0.5rem', textAlign: 'center' }}>
                <Link href="/webroot/antivirus" className="btn btn-webroot btn-sm" style={{ width: '100%', fontSize: '0.78125rem' }}>
                  Details
                </Link>
              </td>
              <td style={{ padding: '1.25rem 0.5rem', textAlign: 'center', backgroundColor: 'var(--webroot-light)', borderRadius: '0 0 var(--radius-md) var(--radius-md)' }}>
                <Link href="/webroot/internet-security-plus" className="btn btn-webroot btn-sm" style={{ width: '100%', fontSize: '0.78125rem' }}>
                  Details
                </Link>
              </td>
              <td style={{ padding: '1.25rem 0.5rem', textAlign: 'center' }}>
                <Link href="/webroot/internet-security" className="btn btn-webroot btn-sm" style={{ width: '100%', fontSize: '0.78125rem' }}>
                  Details
                </Link>
              </td>
              <td style={{ padding: '1.25rem 0.5rem', textAlign: 'center' }}>
                <Link href="/webroot/business-endpoint" className="btn btn-webroot btn-sm" style={{ width: '100%', fontSize: '0.78125rem' }}>
                  Details
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
