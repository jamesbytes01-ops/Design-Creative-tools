'use client';

import { useState } from 'react';
import { Download, UserPlus, LogIn, UserCheck, RefreshCw, Key, ShieldCheck, CheckCircle2, ChevronRight, HelpCircle, Laptop, Smartphone, Building } from 'lucide-react';

export default function WebrootSetupGuide() {
  const [activeGuideTab, setActiveGuideTab] = useState('install');
  const [selectedPlatform, setSelectedPlatform] = useState('windows');
  const [userJourneyType, setUserJourneyType] = useState('newUser');

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
      {/* Header Title */}
      <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2.5rem' }}>
        <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--webroot-primary)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          Deployment & Documentation
        </div>
        <h2 className="h2-title" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
          Installation & Account Management Guide
        </h2>
        <p className="sub-text" style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>
          Step-by-step instructions for endpoint deployment, account sign-in, keycode activation, and device seat transfers.
        </p>
      </div>

      {/* Main Category Tabs */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.5rem',
          marginBottom: '2rem',
          borderBottom: '1px solid var(--border-light)',
          paddingBottom: '0.75rem'
        }}
      >
        <button
          onClick={() => setActiveGuideTab('install')}
          style={{
            padding: '0.75rem 1.25rem',
            borderRadius: 'var(--radius-md)',
            border: 'none',
            backgroundColor: activeGuideTab === 'install' ? 'var(--webroot-primary)' : 'transparent',
            color: activeGuideTab === 'install' ? '#FFFFFF' : 'var(--text-secondary)',
            fontWeight: 700,
            fontSize: '0.9375rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <Download size={18} /> Installation Steps
        </button>

        <button
          onClick={() => setActiveGuideTab('account')}
          style={{
            padding: '0.75rem 1.25rem',
            borderRadius: 'var(--radius-md)',
            border: 'none',
            backgroundColor: activeGuideTab === 'account' ? 'var(--webroot-primary)' : 'transparent',
            color: activeGuideTab === 'account' ? '#FFFFFF' : 'var(--text-secondary)',
            fontWeight: 700,
            fontSize: '0.9375rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <LogIn size={18} /> Sign Up & Sign In Process
        </button>

        <button
          onClick={() => setActiveGuideTab('journeys')}
          style={{
            padding: '0.75rem 1.25rem',
            borderRadius: 'var(--radius-md)',
            border: 'none',
            backgroundColor: activeGuideTab === 'journeys' ? 'var(--webroot-primary)' : 'transparent',
            color: activeGuideTab === 'journeys' ? '#FFFFFF' : 'var(--text-secondary)',
            fontWeight: 700,
            fontSize: '0.9375rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <UserCheck size={18} /> New vs Existing User Workflows
        </button>
      </div>

      {/* TAB 1: INSTALLATION GUIDE */}
      {activeGuideTab === 'install' && (
        <div>
          {/* OS Selector */}
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <button
              onClick={() => setSelectedPlatform('windows')}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: 'var(--radius-md)',
                border: selectedPlatform === 'windows' ? '2px solid var(--webroot-primary)' : '1px solid var(--border-light)',
                backgroundColor: selectedPlatform === 'windows' ? 'var(--webroot-light)' : '#FFFFFF',
                color: selectedPlatform === 'windows' ? 'var(--webroot-primary)' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.875rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}
            >
              <Laptop size={16} /> Windows PC
            </button>

            <button
              onClick={() => setSelectedPlatform('mac')}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: 'var(--radius-md)',
                border: selectedPlatform === 'mac' ? '2px solid var(--webroot-primary)' : '1px solid var(--border-light)',
                backgroundColor: selectedPlatform === 'mac' ? 'var(--webroot-light)' : '#FFFFFF',
                color: selectedPlatform === 'mac' ? 'var(--webroot-primary)' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.875rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}
            >
              <Laptop size={16} /> macOS
            </button>

            <button
              onClick={() => setSelectedPlatform('mobile')}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: 'var(--radius-md)',
                border: selectedPlatform === 'mobile' ? '2px solid var(--webroot-primary)' : '1px solid var(--border-light)',
                backgroundColor: selectedPlatform === 'mobile' ? 'var(--webroot-light)' : '#FFFFFF',
                color: selectedPlatform === 'mobile' ? 'var(--webroot-primary)' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.875rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}
            >
              <Smartphone size={16} /> iOS / Android Mobile
            </button>

            <button
              onClick={() => setSelectedPlatform('msp')}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: 'var(--radius-md)',
                border: selectedPlatform === 'msp' ? '2px solid var(--webroot-primary)' : '1px solid var(--border-light)',
                backgroundColor: selectedPlatform === 'msp' ? 'var(--webroot-light)' : '#FFFFFF',
                color: selectedPlatform === 'msp' ? 'var(--webroot-primary)' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.875rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}
            >
              <Building size={16} /> Silent Enterprise / MSP
            </button>
          </div>

          {/* Installation Steps Box */}
          <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-lg)', padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
              {selectedPlatform === 'windows' && 'Windows PC Installation Guide'}
              {selectedPlatform === 'mac' && 'macOS Installation Guide'}
              {selectedPlatform === 'mobile' && 'Android & iOS Mobile Setup'}
              {selectedPlatform === 'msp' && 'Enterprise & MSP Silent Command-Line Deployment'}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {selectedPlatform === 'windows' && [
                'Download executable: Log into my.webrootanywhere.com or use your purchase receipt link to download wsainstall.exe (~15MB file).',
                'Run Setup File: Double-click wsainstall.exe. Windows User Account Control (UAC) will prompt for administrator authorization.',
                'Enter Keycode: Input your 20-character keycode (Format: SA01-AAAA-BBBB-CCCC-DDDD) when requested.',
                'Select Preferences: Choose desktop shortcut creation or leave optional email registration enabled.',
                'Complete Setup: Click Agree & Install. Setup takes ~30 seconds and requires NO computer reboot.',
                'Baseline Cloud Scan: Webroot automatically runs its first baseline scan in under 20 seconds.'
              ].map((step, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <span style={{ width: '1.75rem', height: '1.75rem', borderRadius: '50%', backgroundColor: 'var(--webroot-light)', color: 'var(--webroot-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.8125rem', flexShrink: 0 }}>
                    {idx + 1}
                  </span>
                  <span style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{step}</span>
                </div>
              ))}

              {selectedPlatform === 'mac' && [
                'Download DMG: Download WebrootSecureAnywhere.dmg file from your Webroot user portal.',
                'Install App: Open WebrootSecureAnywhere.dmg and drag the Webroot icon directly into your Applications folder.',
                'Launch & Enter Keycode: Open Webroot from Applications or Launchpad. Paste your 20-character keycode.',
                'Grant System Permissions: macOS Ventura / Sonoma require enabling "Full Disk Access" and approving the Webroot System Extension in System Settings -> Privacy & Security.',
                'Complete Baseline: Webroot links with BrightCloud and executes its fast macOS file scan.'
              ].map((step, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <span style={{ width: '1.75rem', height: '1.75rem', borderRadius: '50%', backgroundColor: 'var(--webroot-light)', color: 'var(--webroot-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.8125rem', flexShrink: 0 }}>
                    {idx + 1}
                  </span>
                  <span style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{step}</span>
                </div>
              ))}

              {selectedPlatform === 'mobile' && [
                'Download App: Search for "Webroot Mobile Security" in Google Play Store (Android) or Apple App Store (iOS).',
                'Launch & Register: Open the app and tap "Register Keycode" or "Log In".',
                'Enter Credentials: Input your Webroot Account credentials or paste your multi-device product keycode.',
                'Enable Permissions: Enable Accessibility services for real-time app scanning on Android, or approve the Web Shield VPN profile on iOS to enable web filtering.'
              ].map((step, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <span style={{ width: '1.75rem', height: '1.75rem', borderRadius: '50%', backgroundColor: 'var(--webroot-light)', color: 'var(--webroot-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.8125rem', flexShrink: 0 }}>
                    {idx + 1}
                  </span>
                  <span style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{step}</span>
                </div>
              ))}

              {selectedPlatform === 'msp' && [
                'Access Management Portal: Log into console.webrootanywhere.com as IT Administrator.',
                'Generate Site Keycode: Copy your site-specific 20-character Keycode from Site Settings.',
                'Execute Command-Line Script: Deploy via Active Directory GPO, Microsoft Intune, or RMM command:',
                'wsainstall.exe /GPO /cmd /key=YOUR_20_CHAR_KEYCODE /silent',
                'Verify Telemetry: Endpoints check in instantly on the management console within 30 seconds.'
              ].map((step, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <span style={{ width: '1.75rem', height: '1.75rem', borderRadius: '50%', backgroundColor: 'var(--webroot-light)', color: 'var(--webroot-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.8125rem', flexShrink: 0 }}>
                    {idx + 1}
                  </span>
                  <span style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: SIGN UP & SIGN IN PROCESS */}
      {activeGuideTab === 'account' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          {/* Sign Up Section */}
          <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-lg)', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--webroot-primary)' }}>
              <UserPlus size={24} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>Webroot Account Sign Up</h3>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Creating a Webroot Account centralizes license keycodes, subscription renewals, multi-device management, and cloud backup files.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="var(--webroot-primary)" />
                <span>Visit <strong>my.webrootanywhere.com</strong> and click <em>Create an Account</em>.</span>
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="var(--webroot-primary)" />
                <span>Enter your valid email address and create a strong master password.</span>
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="var(--webroot-primary)" />
                <span>Enter your 20-character Product Keycode (e.g. <code>SA01-AAAA-BBBB-CCCC-DDDD</code>).</span>
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="var(--webroot-primary)" />
                <span>Set your Personal Security Code (used for account authorization and password resets).</span>
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="var(--webroot-primary)" />
                <span>Confirm your account via email activation link.</span>
              </div>
            </div>
          </div>

          {/* Sign In Section */}
          <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-lg)', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--webroot-primary)' }}>
              <LogIn size={24} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>Webroot Account Sign In</h3>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Sign in to manage active devices, issue remote scans, renew expired keycodes, or recover credentials.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="var(--webroot-primary)" />
                <span>Navigate to <strong>my.webrootanywhere.com</strong> (Consumer) or <strong>console.webrootanywhere.com</strong> (Business/MSP).</span>
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="var(--webroot-primary)" />
                <span>Input registered Email address and Password.</span>
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="var(--webroot-primary)" />
                <span>Provide requested Security Code characters (e.g. 1st and 4th character of your security answer).</span>
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="var(--webroot-primary)" />
                <span>For Business Users: Authenticate via 2FA authenticator code or Single Sign-On (SSO / Azure AD).</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: NEW USER VS EXISTING USER WORKFLOWS */}
      {activeGuideTab === 'journeys' && (
        <div>
          {/* Journey Toggle */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <button
              onClick={() => setUserJourneyType('newUser')}
              style={{
                padding: '0.65rem 1.5rem',
                borderRadius: 'var(--radius-lg)',
                border: userJourneyType === 'newUser' ? '2px solid var(--webroot-primary)' : '1px solid var(--border-light)',
                backgroundColor: userJourneyType === 'newUser' ? 'var(--webroot-light)' : '#FFFFFF',
                color: userJourneyType === 'newUser' ? 'var(--webroot-primary)' : 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: '0.9375rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <UserPlus size={18} /> New User Setup Journey
            </button>

            <button
              onClick={() => setUserJourneyType('existingUser')}
              style={{
                padding: '0.65rem 1.5rem',
                borderRadius: 'var(--radius-lg)',
                border: userJourneyType === 'existingUser' ? '2px solid var(--webroot-primary)' : '1px solid var(--border-light)',
                backgroundColor: userJourneyType === 'existingUser' ? 'var(--webroot-light)' : '#FFFFFF',
                color: userJourneyType === 'existingUser' ? 'var(--webroot-primary)' : 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: '0.9375rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <RefreshCw size={18} /> Existing / Old User Workflow
            </button>
          </div>

          <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-lg)', padding: '1.75rem' }}>
            {userJourneyType === 'newUser' ? (
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                  First-Time New User Onboarding (3-Minute Setup)
                </h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                  If you just purchased Webroot or are starting a free 14-day trial, follow this seamless setup path:
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                  <div style={{ backgroundColor: '#FFFFFF', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--webroot-primary)', marginBottom: '0.35rem' }}>Step 1: Obtain Keycode</div>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      Copy your 20-character keycode sent to your confirmation email or printed on your retail box card.
                    </p>
                  </div>

                  <div style={{ backgroundColor: '#FFFFFF', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--webroot-primary)', marginBottom: '0.35rem' }}>Step 2: Run Installer</div>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      Download and launch the light setup file (`wsainstall.exe`). Paste keycode & click Agree & Install.
                    </p>
                  </div>

                  <div style={{ backgroundColor: '#FFFFFF', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--webroot-primary)', marginBottom: '0.35rem' }}>Step 3: Account Linking</div>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      Create your Webroot account at my.webrootanywhere.com to register your device and keycode.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                  Existing User Management (Device Adding, Keycode Renewal & Transfer)
                </h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                  If you already have a Webroot account or are upgrading/transferring your software to a new computer:
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={{ backgroundColor: '#FFFFFF', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text-primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Laptop size={16} color="var(--webroot-primary)" /> Adding New Device / Replacing Computer
                    </div>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      Do NOT buy a new subscription. Sign in at my.webrootanywhere.com, download Webroot on the new device, and activate using your existing keycode. Deactivate old PC in portal if seat limit reached.
                    </p>
                  </div>

                  <div style={{ backgroundColor: '#FFFFFF', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text-primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Key size={16} color="var(--webroot-primary)" /> Renewing Keycode Without Re-Installing
                    </div>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      When you purchase a renewal keycode, open Webroot client on your PC &rarr; Gear Icon next to My Account &rarr; Paste new keycode in &apos;Activate a new keycode&apos; field. Software automatically updates remaining days.
                    </p>
                  </div>

                  <div style={{ backgroundColor: '#FFFFFF', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text-primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <HelpCircle size={16} color="var(--webroot-primary)" /> Lost Keycode Recovery
                    </div>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      If keycode is lost, click &apos;Forgot Keycode&apos; on my.webrootanywhere.com sign-in page or right-click Webroot tray icon &rarr; System Information &rarr; View registered product key.
                    </p>
                  </div>

                  <div style={{ backgroundColor: '#FFFFFF', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text-primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Building size={16} color="var(--webroot-primary)" /> Multi-Seat Console Administration
                    </div>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      MSP and Enterprise admins log into console.webrootanywhere.com to view all endpoint health, trigger remote malware isolation, or push policy updates silently.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
