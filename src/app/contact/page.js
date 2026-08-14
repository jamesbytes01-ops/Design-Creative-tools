'use client';

import { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Mail, Building2, User, MessageSquare, AlertCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Valid email is required';
    if (!formData.message.trim()) newErrors.message = 'Please enter a brief message';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Capture state for realistic demo response
    setSubmittedData(formData);
  };

  return (
    <div>
      {/* Header */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-light)', paddingTop: '3.5rem', paddingBottom: '3rem' }}>
        <div className="container">
          <div className="badge badge-primary" style={{ marginBottom: '0.75rem' }}>
            Get In Touch
          </div>
          <h1 className="h1-title" style={{ fontSize: '2.5rem' }}>Contact Platform Support & Licensing</h1>
          <p className="sub-text" style={{ fontSize: '1rem', marginTop: '0.5rem', maxWidth: '600px' }}>
            Have questions about software listings, enterprise Webroot security deployment, or platform partnerships? Reach out below.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="container" style={{ paddingTop: '3.5rem', paddingBottom: '5rem' }}>
        <div className="grid-2" style={{ gap: '3rem' }}>
          {/* Form */}
          <div className="card-base" style={{ padding: '2.5rem' }}>
            <h2 className="h2-title" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>
              Send Us a Message
            </h2>

            {submittedData ? (
              <div
                style={{
                  backgroundColor: '#F0FDF4',
                  border: '1px solid var(--webroot-border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2rem',
                  textAlign: 'center'
                }}
              >
                <CheckCircle2 size={48} color="var(--webroot-primary)" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--webroot-dark)', marginBottom: '0.5rem' }}>
                  Inquiry Demo Submission Received!
                </h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  Thank you, <strong>{submittedData.name}</strong>. Your message regarding <strong>{submittedData.subject}</strong> has been logged in frontend demonstration state.
                </p>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', backgroundColor: '#ffffff', padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--border-light)', marginBottom: '1.5rem' }}>
                  Note: Backend API integration is configured for future connection. No actual external email was dispatched.
                </div>
                <button
                  onClick={() => {
                    setSubmittedData(null);
                    setFormData({ name: '', email: '', company: '', subject: 'General Inquiry', message: '' });
                  }}
                  className="btn btn-primary"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    className="form-input"
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <span style={{ fontSize: '0.75rem', color: '#EF4444', marginTop: '0.25rem', display: 'block' }}>{errors.name}</span>}
                </div>

                <div>
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="alex@studio.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <span style={{ fontSize: '0.75rem', color: '#EF4444', marginTop: '0.25rem', display: 'block' }}>{errors.email}</span>}
                </div>

                <div>
                  <label className="form-label">Company / Studio (Optional)</label>
                  <input
                    type="text"
                    name="company"
                    className="form-input"
                    placeholder="e.g. Acme Design Labs"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="form-label">Inquiry Subject</label>
                  <select
                    name="subject"
                    className="form-input"
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Tool Listing Request">Submit a Tool / Software</option>
                    <option value="Webroot Security Enterprise">Webroot Enterprise Security</option>
                    <option value="API Partnership">API & Admin Panel Integration</option>
                  </select>
                </div>

                <div>
                  <label className="form-label">Message *</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="form-input"
                    placeholder="How can our team help your creative workflow..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && <span style={{ fontSize: '0.75rem', color: '#EF4444', marginTop: '0.25rem', display: 'block' }}>{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn-primary btn-lg" style={{ marginTop: '0.5rem' }}>
                  Submit Inquiry <Send size={18} />
                </button>
              </form>
            )}
          </div>

          {/* Info Side Panel */}
          <div>
            <div className="card-base card-webroot" style={{ padding: '2rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--webroot-primary)' }}>
                <ShieldCheck size={24} />
                <h3 style={{ fontWeight: 700, fontSize: '1.1875rem' }}>Webroot Security Assistance</h3>
              </div>
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
                Need specialized licensing or endpoint protection advice for creative studios, rendering nodes, or enterprise agencies?
              </p>
              <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--webroot-dark)' }}>
                Webroot Security Desk: Dedicated Endpoint Support
              </div>
            </div>

            <div className="card-base" style={{ padding: '2rem' }}>
              <h3 style={{ fontWeight: 700, fontSize: '1.1875rem', marginBottom: '1rem' }}>Admin & API Integration Ready</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Our modular state handlers are prepared for seamless backend connection (REST API / Next.js Server Actions / PostgreSQL / Supabase) when ready to deploy live database features.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
