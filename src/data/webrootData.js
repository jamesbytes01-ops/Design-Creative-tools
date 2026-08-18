export const webrootSuiteInfo = {
  brandName: "Webroot",
  headline: "Next-Generation Cloud Endpoint Security & Threat Intelligence",
  tagline: "Ultra-lightweight protection that secures devices, networks, identity, and confidential data in real-time.",
  description: "Webroot delivers cloud-native cybersecurity solutions designed for individuals, growing teams, and MSP enterprise environments. Shield endpoints against zero-day ransomware, phishing exploits, DNS vectors, and identity threats with virtually zero system overhead.",
  badge: "Cloud Security Solutions",
  keyMetrics: [
    { label: "Cloud Threat Intelligence", value: "Real-Time Querying" },
    { label: "Agent Memory Footprint", value: "< 15 MB RAM" },
    { label: "Scan Execution Overhead", value: "Sub-Second Response" },
    { label: "Global Threat Cloud", value: "95 Billion+ Objects" }
  ]
};

export const webrootProducts = [
  {
    id: "webroot-antivirus",
    slug: "antivirus",
    name: "Webroot SecureAnywhere AntiVirus",
    subtitle: "Cloud-powered real-time protection for PCs and Macs",
    category: "Consumer Security",
    icon: "ShieldCheck",
    badge: "Most Popular",
    featured: true,
    shortDescription: "Blazing fast antivirus software that scans in seconds, blocks malware in real-time, and uses virtually zero system resources.",
    longDescription: "Webroot SecureAnywhere AntiVirus delivers advanced real-time threat protection against viruses, malware, ransomware, and phishing attacks. Designed with a revolutionary cloud-based architecture, Webroot scans your machine in seconds without consuming RAM or interrupting demanding software applications.",
    architectureExplanation: "Webroot AntiVirus replaces heavy local virus definitions with BrightCloud® real-time cloud threat intelligence. When an unclassified binary attempts execution, Webroot places it in a virtualized behavioral sandbox and logs all system modifications (Journaling). If the file is determined to be malicious, Webroot automatically rolls back system state and restores encrypted or modified files.",
    highlights: [
      "Real-time cloud threat intelligence scanning",
      "Ransomware protection with behavioral rollback defense",
      "Identity shield for online banking and browsing",
      "Scans take under 20 seconds with sub-15MB memory footprint"
    ],
    supportedPlatforms: ["Windows", "macOS"],
    keyFeatures: [
      {
        title: "Cloud-Based Threat Engine",
        description: "Scans files against a global cloud database of threat definitions in real-time, keeping your device updated instantly without huge signature downloads."
      },
      {
        title: "Behavioral Journaling & Ransomware Rollback",
        description: "Monitors suspicious file modifications and automatically backs up uncompromised files before ransomware can encrypt your digital work."
      },
      {
        title: "Phishing & Malicious Web Shield",
        description: "Warns you before clicking dangerous links or visiting counterfeit websites designed to steal credentials and design assets."
      },
      {
        title: "Lightning Fast Scans",
        description: "Complete full system scans in under 20 seconds so you can continue working, rendering, and browsing without lag."
      }
    ],
    installationGuide: {
      windows: [
        "Download the lightweight executable (`wsainstall.exe`) from the official Webroot portal.",
        "Double-click `wsainstall.exe` to initiate the lightning installer.",
        "Enter your 20-character Keycode (format: `XXXX-XXXX-XXXX-XXXX-XXXX`) when prompted.",
        "Click 'Agree and Install'. The setup completes in less than 60 seconds with no computer restart required.",
        "Webroot automatically conducts its initial deep cloud baseline scan."
      ],
      mac: [
        "Download `WebrootSecureAnywhere.dmg` for macOS.",
        "Open the `.dmg` file and drag Webroot SecureAnywhere into your Applications folder.",
        "Launch Webroot and enter your 20-character Keycode.",
        "Grant necessary macOS System Permissions (Full Disk Access & System Extension under Security & Privacy).",
        "The agent synchronizes with BrightCloud and completes the initial baseline scan."
      ]
    },
    accountProcess: {
      signUp: "Create your Webroot account at my.webrootanywhere.com using a valid email address and secure password. Register your 20-character Keycode to link software licenses.",
      signIn: "Access your dashboard at my.webrootanywhere.com. Authenticate with your email, password, and personal Security Code (or 2FA verification).",
      keycodeFormat: "20-character alphanumeric key (e.g., SA01-AAAA-BBBB-CCCC-DDDD)."
    },
    userJourneys: {
      newUser: [
        "Purchase or acquire a 20-character keycode.",
        "Go to my.webrootanywhere.com and click 'Create an Account'.",
        "Download the installer file (`wsainstall.exe` or `.dmg`).",
        "Run the installer, paste your keycode, and click 'Agree & Install'.",
        "Allow the initial 20-second scan to complete and verify system status."
      ],
      existingUser: [
        "Sign in to my.webrootanywhere.com using your credentials and security code.",
        "To add a new device: Download the agent on the new PC/Mac and activate using your existing keycode.",
        "To renew keycode: Click 'Activate New Keycode' inside your installed software client or Webroot Account settings.",
        "To recover keycode: Use the 'Forgot Keycode' link on the account sign-in page to resend your active keycode via email."
      ]
    },
    faqs: [
      {
        question: "Will Webroot impact workstation CPU performance or battery life?",
        answer: "No. Webroot operates with a sub-15MB memory agent that offloads threat calculation to the BrightCloud threat intelligence cloud, ensuring zero background lag during intensive local computing tasks."
      },
      {
        question: "Does Webroot work offline?",
        answer: "Yes. Webroot maintains local behavioral shields to block threats offline and automatically syncs with the global threat cloud once reconnected to the internet."
      },
      {
        question: "How is Webroot installed and managed?",
        answer: "Webroot installs in under one minute via a streamlined installer with no system reboot required."
      }
    ],
    placeholderNotice: "Official pricing tier and promotional details available upon deployment integration."
  },
  {
    id: "webroot-internet-security-plus",
    slug: "internet-security-plus",
    name: "Webroot Internet Security Plus",
    subtitle: "Multi-device protection with password management & mobile security",
    category: "Consumer Security",
    icon: "ShieldAlert",
    badge: "Best Value",
    featured: true,
    shortDescription: "Protects PCs, Macs, smartphones, and tablets while securely managing your online passwords and sensitive login credentials.",
    longDescription: "Webroot Internet Security Plus extends top-rated malware defense across all your devices. It features integrated password encryption powered by LastPass, safeguarding banking logins, SaaS accounts, and mobile workflows from keyloggers and identity theft.",
    architectureExplanation: "Combines Webroot's cloud threat engine with encrypted identity sandboxing and cross-device password vaulting. Browser extension hooks intercept web forms to prevent malicious script injection, phishing domain redirects, and credential harvesting.",
    highlights: [
      "Multi-device coverage for up to 3 or 5 PCs, Macs, or Mobile devices",
      "Integrated secure password manager for logins & credit card data",
      "Advanced identity shield against keyloggers and browser hijackers",
      "Seamless cross-platform mobile security for Android & iOS"
    ],
    supportedPlatforms: ["Windows", "macOS", "Android", "iOS"],
    keyFeatures: [
      {
        title: "Multi-Device License Shield",
        description: "Protect up to 5 family or workspace devices under a single unified Webroot subscription portal."
      },
      {
        title: "Encrypted Password Manager",
        description: "Generates, encrypts, and auto-fills complex passwords across browser and mobile apps securely."
      },
      {
        title: "Real-Time Anti-Phishing",
        description: "Analyzes URL structures dynamically to block fake login forms before credentials can be stolen."
      },
      {
        title: "Smartphone & Tablet Defense",
        description: "Protects mobile operating systems against malicious apps, dangerous SMS links, and battery-draining spyware."
      }
    ],
    installationGuide: {
      windows: [
        "Download `wsainstall.exe` from your Webroot account dashboard.",
        "Run installer, input your 20-character Internet Security Plus keycode.",
        "Follow on-screen prompt to enable the Password Manager browser extension."
      ],
      mac: [
        "Download and install `WebrootSecureAnywhere.dmg`.",
        "Input keycode and authorize System Permissions in macOS System Preferences."
      ],
      mobile: [
        "Download Webroot Mobile Security from Google Play Store or Apple App Store.",
        "Launch app, select 'Register Keycode', and log into your Webroot account."
      ]
    },
    accountProcess: {
      signUp: "Create account on my.webrootanywhere.com, enter your product keycode, and authorize Password Manager sync.",
      signIn: "Log into account dashboard to view all connected PCs, Macs, and smartphones.",
      keycodeFormat: "20-character keycode supporting up to 5 concurrent device seats."
    },
    userJourneys: {
      newUser: [
        "Purchase Internet Security Plus keycode.",
        "Create Webroot Account at my.webrootanywhere.com.",
        "Download installers on PC, Mac, or mobile devices using your single keycode.",
        "Set up Password Vault to import existing web logins securely."
      ],
      existingUser: [
        "Sign into Webroot Account portal.",
        "Select 'Add Device' to generate download links for mobile or secondary laptops.",
        "To upgrade seats: Click 'Upgrade License' in account setting to increase coverage from 3 to 5 devices."
      ]
    },
    faqs: [
      {
        question: "Can I manage passwords across both PC and mobile phones?",
        answer: "Yes, passwords automatically sync securely across Windows, macOS, Android, and iOS through your Webroot account credentials."
      }
    ],
    placeholderNotice: "Multi-device subscription terms governed by authorized Webroot licensing portal."
  },
  {
    id: "webroot-internet-security",
    slug: "internet-security",
    name: "Webroot Internet Security Complete",
    subtitle: "All-in-one protection with identity shield, password manager & 25GB cloud backup",
    category: "Consumer Security",
    icon: "Shield",
    badge: "Complete Suite",
    featured: true,
    shortDescription: "Complete security suite combining malware protection, identity shield, password security, automated cloud backup, and system optimizer.",
    longDescription: "Webroot Internet Security Complete safeguards your digital life across all devices. It protects personal files, design assets, and financial credentials with advanced multi-layered security, system optimization tools, and automated encrypted cloud backup.",
    architectureExplanation: "Combines Webroot's sub-15MB threat agent with automated background file backup encryption (256-bit AES) and system kernel cleanup. Scans temporary caches, registry entries, and track histories without system degradation.",
    highlights: [
      "Multi-device protection for PC, Mac, Android, and iOS",
      "Includes 25GB secure cloud storage with automated folder sync",
      "System Optimizer to clear tracking cookies and boost workstation performance",
      "Encrypted password manager & identity protection"
    ],
    supportedPlatforms: ["Windows", "macOS", "Android", "iOS"],
    keyFeatures: [
      {
        title: "Multi-Layered Device Shield",
        description: "Extends top-tier antivirus, firewall, and anti-phishing protection across all your family or team devices."
      },
      {
        title: "25GB Secure Cloud Backup",
        description: "Automatically backs up key documents, project files, and photos to an encrypted cloud repository."
      },
      {
        title: "System Performance Optimizer",
        description: "Removes junk files, browser caches, and temporary data to keep your workstation running at peak performance."
      },
      {
        title: "Identity & Credential Shield",
        description: "Prevents keyloggers and spyware from intercepting login credentials and sensitive client data."
      }
    ],
    installationGuide: {
      windows: [
        "Download full installer package from my.webrootanywhere.com.",
        "Execute `wsainstall.exe` and provide Internet Security Complete Keycode.",
        "Configure Cloud Backup folders (Documents, Desktop, Custom Folders) during initial wizard."
      ],
      mac: [
        "Install Webroot for macOS via `.dmg` file.",
        "Authenticate keycode and grant System Extensions & Full Disk Access.",
        "Enable Webroot Backup & Sync in top menu bar."
      ]
    },
    accountProcess: {
      signUp: "Register at my.webrootanywhere.com with email, 20-character keycode, and set security questions.",
      signIn: "Log into portal to manage Backup Vault files, clean up old PC seats, or view threat history."
    },
    userJourneys: {
      newUser: [
        "Register keycode at my.webrootanywhere.com.",
        "Install client on primary workstation and secondary laptop.",
        "Enable 25GB Cloud Backup for key project directories."
      ],
      existingUser: [
        "Log into web portal to download backed-up files on a newly formatted PC.",
        "Use System Optimizer inside Webroot agent UI to wipe residual browser tracking data."
      ]
    },
    faqs: [
      {
        question: "Is the cloud backup secure for confidential client files?",
        answer: "Yes, cloud backups are encrypted using enterprise-grade 256-bit AES encryption standards before being transmitted."
      }
    ],
    placeholderNotice: "Official multi-device subscription plans available via authorized sales portal."
  },
  {
    id: "webroot-mobile-security",
    slug: "mobile-security",
    name: "Webroot Mobile Security",
    subtitle: "Advanced threat defense & Wi-Fi protection for Android and iOS",
    category: "Mobile & Privacy",
    icon: "Smartphone",
    badge: "Mobile Shield",
    featured: false,
    shortDescription: "Shield smartphones and tablets from malicious apps, rogue Wi-Fi networks, mobile phishing scams, and web threats.",
    longDescription: "Webroot Mobile Security protects iOS and Android smartphones from modern mobile threats. It automatically scans app downloads, blocks dangerous mobile websites, prevents SMS phishing (smishing), and alerts you to unsecured Wi-Fi hotspots.",
    architectureExplanation: "Leverages mobile operating system security APIs to run real-time background checks on application APKs/binaries, inspect incoming web URLs against BrightCloud Threat Database, and monitor network routing protocols.",
    highlights: [
      "Real-time app scanner detects trojans, spyware, and adware",
      "Safe web browser blocks SMS phishing and fraudulent links",
      "Unsecured Wi-Fi alert system protects data on public networks",
      "Low battery and system resource consumption"
    ],
    supportedPlatforms: ["Android", "iOS"],
    keyFeatures: [
      {
        title: "Real-Time App Inspection",
        description: "Scans new application installs and updates before execution to stop mobile malware in its tracks."
      },
      {
        title: "Anti-Smishing & Web Shield",
        description: "Blocks SMS phishing messages containing malicious download links or phishing pages."
      },
      {
        title: "Wi-Fi Security Alert",
        description: "Warns you instantly when connecting to unencrypted or suspicious public Wi-Fi networks."
      }
    ],
    installationGuide: {
      android: [
        "Open Google Play Store, search for 'Webroot Mobile Security'.",
        "Tap Install and launch the app.",
        "Select 'Activate with Keycode' and enter your 20-character keycode.",
        "Enable Accessibility and Device Admin permissions for real-time app scanning."
      ],
      ios: [
        "Open Apple App Store, download 'Webroot Mobile Security'.",
        "Open app and enter active keycode.",
        "Enable Web Protection VPN profile when prompted to filter malicious websites."
      ]
    },
    accountProcess: {
      signUp: "Create account or log into existing Webroot Account inside mobile app.",
      signIn: "Sign in using email/password or biometric authentication (Touch ID / Face ID)."
    },
    userJourneys: {
      newUser: [
        "Install mobile app from official store.",
        "Enter product keycode or purchase mobile subscription directly.",
        "Run initial full device storage scan."
      ],
      existingUser: [
        "Log into mobile app with Webroot account to link license from multi-device plan."
      ]
    },
    faqs: [
      {
        question: "Does Webroot Mobile Security drain phone battery?",
        answer: "No, threat scanning is offloaded to the cloud engine, consuming negligible CPU and battery power."
      }
    ],
    placeholderNotice: "Mobile subscription features vary slightly by mobile operating system platform."
  },
  {
    id: "webroot-wifi-security",
    slug: "wifi-security",
    name: "Webroot WiFi Security & VPN",
    subtitle: "Bank-grade encryption for public Wi-Fi & online privacy",
    category: "Mobile & Privacy",
    icon: "Wifi",
    badge: "Privacy Focus",
    featured: false,
    shortDescription: "Secure your connection, encrypt your traffic, and preserve your privacy anywhere you work—at coffee shops, airports, or remote locations.",
    longDescription: "Webroot WiFi Security & VPN protects your online privacy by encrypting your internet connection. Prevent hackers, ISPs, and malicious network snoopers from tracking your physical location or intercepting unencrypted data transfers.",
    architectureExplanation: "Creates an encrypted OpenVPN / IKEv2 tunnel using 256-bit AES encryption between your device and secure global gateway servers. Routes all network traffic securely, hiding your origin IP address.",
    highlights: [
      "Bank-grade 256-bit AES Wi-Fi encryption",
      "Automatic activation on untrusted public Wi-Fi networks",
      "Strict zero-logging privacy policy for online activities",
      "High-speed servers optimized for streaming and file transfer"
    ],
    supportedPlatforms: ["Windows", "macOS", "Android", "iOS"],
    keyFeatures: [
      {
        title: "Automatic Wi-Fi Auto-Shield",
        description: "Instantly connects to secure VPN tunnels whenever your device detects unsecured public Wi-Fi networks."
      },
      {
        title: "No-Log Privacy Guarantee",
        description: "Ensures your browsing history, bandwidth, and IP addresses are never recorded or monitored."
      },
      {
        title: "Cross-Platform Mobility",
        description: "Protection seamlessly moves with your laptop, phone, or tablet as you travel."
      }
    ],
    installationGuide: {
      windows: [
        "Download Webroot WiFi Security VPN client from Webroot downloads page.",
        "Run setup, sign in with your Webroot VPN account credentials.",
        "Turn on 'Auto-Connect on Public Wi-Fi' in app settings."
      ],
      mac: [
        "Install `WebrootWiFiSecurity.dmg` on macOS.",
        "Allow VPN Configuration in macOS System Settings when prompted."
      ]
    },
    accountProcess: {
      signUp: "Register account during purchase or link VPN keycode to existing my.webrootanywhere.com profile.",
      signIn: "Log into VPN app with registered email and password."
    },
    userJourneys: {
      newUser: [
        "Download Webroot WiFi Security app.",
        "Sign in and select desired VPN server location.",
        "Toggle VPN switch to 'ON'."
      ],
      existingUser: [
        "Re-authenticate on new laptop or smartphone to extend VPN encrypted protection."
      ]
    },
    faqs: [
      {
        question: "Can I use Webroot VPN while transferring large media files?",
        answer: "Yes, Webroot VPN utilizes optimized high-speed routing servers to maintain fast upload and download bandwidth."
      }
    ],
    placeholderNotice: "Official VPN bandwidth specifications subject to service tier selection."
  },
  {
    id: "webroot-business-endpoint",
    slug: "business-endpoint",
    name: "Webroot Business Endpoint Protection",
    subtitle: "Cloud-driven security console for business teams, SMBs & MSPs",
    category: "Business Security",
    icon: "Building",
    badge: "Enterprise Ready",
    featured: true,
    shortDescription: "Centralized cloud management console providing rapid threat remediation, script analysis, and zero-day protection across team endpoints.",
    longDescription: "Designed specifically for businesses, Managed Service Providers (MSPs), and IT teams. Webroot Business Endpoint Protection gives administrators full visibility and control over endpoints through an intuitive cloud administration dashboard.",
    architectureExplanation: "Deployed via light agent (MSI/EXE script) managed centrally through Webroot Management Console (console.webrootanywhere.com). Features automated threat remediation, script execution analysis, and multi-tenant site administration.",
    highlights: [
      "Centralized cloud-based management portal",
      "Real-time automated threat remediation & rollback",
      "Evolving threat protection via BrightCloud Intelligence",
      "Fast silent deployment across remote workstations via RMM or GPO"
    ],
    supportedPlatforms: ["Windows", "macOS", "Windows Server"],
    keyFeatures: [
      {
        title: "Central Cloud Console",
        description: "Deploy, manage, and monitor security policies across all company laptops, servers, and remote endpoints from one web portal."
      },
      {
        title: "BrightCloud AI Threat Intelligence",
        description: "Uses machine learning to continuously analyze millions of domain IPs, URLs, and file behavior vectors."
      },
      {
        title: "Automated Journaling & Rollback",
        description: "Tracks changes made by unclassified programs so any malicious file changes can be seamlessly reverted without rebooting."
      }
    ],
    installationGuide: {
      enterprise: [
        "Log into console.webrootanywhere.com as IT Administrator.",
        "Create a Site/Group policy and obtain your unique Site Keycode.",
        "Deploy silent agent via Active Directory GPO or RMM script: `wsainstall.exe /GPO /cmd /key=YOUR_SITE_KEYCODE /silent`",
        "Endpoints automatically register in the central cloud portal within 30 seconds."
      ]
    },
    accountProcess: {
      signUp: "Business IT admins register at console.webrootanywhere.com with company credentials, setting up Multi-Factor Authentication (MFA) or SSO (SAML 2.0 / Okta / Azure AD).",
      signIn: "Log into console.webrootanywhere.com with MFA verification."
    },
    userJourneys: {
      newUser: [
        "Administrator signs up for MSP / Enterprise Webroot Console.",
        "Configures security policies (Scan frequency, Shield enforcement, Email alerts).",
        "Deploys silent agent to 10 to 10,000 workstations remotely."
      ],
      existingUser: [
        "IT admin logs into portal to review threat detection telemetry.",
        "Isolate infected remote laptop with single click from admin dashboard.",
        "Issue remote rollback command to restore compromised endpoints instantly."
      ]
    },
    faqs: [
      {
        question: "Can IT administrators remotely manage remote staff laptops?",
        answer: "Yes. The cloud management console enables remote policy deployment, scan scheduling, and immediate threat isolation anywhere in the world."
      }
    ],
    placeholderNotice: "Official business licensing structure available through Webroot enterprise reseller network."
  },
  {
    id: "webroot-dns-protection",
    slug: "dns-protection",
    name: "Webroot SecureAnywhere DNS Protection",
    subtitle: "Cloud DNS filtering & network perimeter security against web threats",
    category: "Business Security",
    icon: "Globe",
    badge: "Network Guard",
    featured: false,
    shortDescription: "Blocks web threats at the DNS layer before malicious traffic enters your network, filtering malware, botnets, and inappropriate content.",
    longDescription: "Webroot DNS Protection safeguards users by enforcing domain-level security policies. Operating at port 53 DNS layer, it halts malware execution, command-and-control botnet callbacks, and malicious phishing sites before network packets reach client endpoints.",
    architectureExplanation: "Directs device/router DNS queries to Webroot Anycast DNS resolver IP addresses. Incoming domain requests are cross-checked in sub-milliseconds against BrightCloud's real-time domain reputation database. Malicious domains receive a blocked IP redirection response.",
    highlights: [
      "Domain and URL filtering at the DNS protocol layer",
      "Blocks C2 botnet callbacks, phishing sites, and cryptomining domains",
      "Granular category filtering (80+ web content categories)",
      "Zero agent latency with global Anycast DNS infrastructure"
    ],
    supportedPlatforms: ["Windows", "macOS", "iOS", "Android", "Network Routers"],
    keyFeatures: [
      {
        title: "DNS-Layer Interception",
        description: "Filters malicious web traffic before HTTP/HTTPS connections are established."
      },
      {
        title: "80+ Content Categories",
        description: "Enforce corporate internet compliance policies across workplace and guest Wi-Fi networks."
      },
      {
        title: "Roaming User Protection",
        description: "Deploys lightweight DNS agent to laptops so security policies remain active off-network."
      }
    ],
    installationGuide: {
      router: [
        "Log into router/firewall gateway settings.",
        "Change primary and secondary DNS IPv4/IPv6 addresses to Webroot Anycast DNS IP resolvers.",
        "Link static IP or Dynamic DNS hostname inside console.webrootanywhere.com."
      ],
      roamingAgent: [
        "Deploy Webroot DNS agent to workstations via cloud console for off-network protection."
      ]
    },
    accountProcess: {
      signUp: "Provisioned through Webroot Management Console account.",
      signIn: "Access DNS Protection policies under Site Management in administrative portal."
    },
    userJourneys: {
      newUser: [
        "Set up Anycast DNS IPs on corporate network firewall.",
        "Define policy rules blocking malware, botnets, and adult content.",
        "Test domain resolution using Webroot test block page."
      ],
      existingUser: [
        "View DNS traffic report log to identify blocked malicious outbound requests in real time."
      ]
    },
    faqs: [
      {
        question: "Does Webroot DNS Protection work for remote workers?",
        answer: "Yes, installing the lightweight Webroot DNS agent ensures roaming laptops remain protected on public Wi-Fi or home networks."
      }
    ],
    placeholderNotice: "Enterprise network filtering plans configured based on network user volume."
  },
  {
    id: "webroot-security-awareness",
    slug: "security-awareness",
    name: "Webroot Security Awareness Training (SAT)",
    subtitle: "Automated phishing simulations & cybersecurity education for employees",
    category: "Business Security",
    icon: "GraduationCap",
    badge: "Human Defense",
    featured: false,
    shortDescription: "Transform employees into your strongest cybersecurity defense with automated phishing simulation campaigns and interactive training modules.",
    longDescription: "Human error accounts for over 90% of cyber breaches. Webroot Security Awareness Training equips organizations with simulated phishing attacks, brief interactive security courses, and tracking compliance analytics to build a security-first workforce.",
    architectureExplanation: "SaaS-based training portal managed via Webroot Console. Uses automated campaign scheduling, phishing template customization, AD/Azure user syncing, and automated failure-triggered re-education modules.",
    highlights: [
      "Automated realistic phishing simulation templates",
      "Interactive 5-to-10 minute micro-learning security modules",
      "Detailed employee vulnerability reporting & compliance tracking",
      "Integration with Active Directory for automatic employee onboarding"
    ],
    supportedPlatforms: ["Web App", "Cross-Platform Web Browsers"],
    keyFeatures: [
      {
        title: "Simulated Phishing Campaigns",
        description: "Send benign phishing emails to test employee readiness and track click rates."
      },
      {
        title: "Bite-Sized Security Training",
        description: "Engaging video courses covering passwords, spear-phishing, social engineering, and remote work safety."
      },
      {
        title: "Automated Compliance Reporting",
        description: "Generate audit-ready reports demonstrating HIPAA, PCI-DSS, and GDPR security awareness compliance."
      }
    ],
    installationGuide: {
      cloudSetup: [
        "Log into console.webrootanywhere.com and navigate to Security Awareness Training.",
        "Import employee directory via CSV or sync with Microsoft Azure AD / Google Workspace.",
        "Whitelist Webroot sending IP addresses in your corporate email gateway (Exchange / O365 / Gmail).",
        "Launch your first baseline phishing simulation campaign."
      ]
    },
    accountProcess: {
      signUp: "Add SAT subscription module inside Webroot Business Admin Portal.",
      signIn: "Administrators log into Webroot Console; employees access assigned modules via unique email links."
    },
    userJourneys: {
      newUser: [
        "Import company employee list.",
        "Launch baseline phishing campaign to calculate company click risk score.",
        "Enroll high-risk employees in targeted phishing defense courses."
      ],
      existingUser: [
        "Review monthly campaign report to verify reduction in employee click rates."
      ]
    },
    faqs: [
      {
        question: "How long do employee training courses take?",
        answer: "Courses are structured as interactive 5-to-10 minute micro-learning modules designed not to disrupt daily work productivity."
      }
    ],
    placeholderNotice: "Security awareness licensing billed per active employee seat per year."
  },
  {
    id: "webroot-brightcloud",
    slug: "brightcloud-threat-intelligence",
    name: "Webroot BrightCloud® Threat Intelligence",
    subtitle: "AI-driven cyber threat database & API security intelligence",
    category: "Business Security",
    icon: "Cloud",
    badge: "AI Core",
    featured: false,
    shortDescription: "Powers enterprise security vendors and Webroot products with real-time predictive threat intelligence covering URLs, IPs, files, and mobile apps.",
    longDescription: "Webroot BrightCloud® Threat Intelligence is the advanced cloud engine behind the entire Webroot security portfolio. Utilizing contextual machine learning, BrightCloud continuously analyzes millions of IP addresses, domain reputational vectors, file hashes, and active zero-day exploits globally.",
    architectureExplanation: "Massive distributed cloud database receiving telemetry from tens of millions of endpoints. Uses deep neural network classifiers and contextual correlation to rate safety vectors of URLs, IPs, domain names, file execution behavior, and mobile APKs.",
    highlights: [
      "Monitors 95 Billion+ URLs, IPs, and file reputations globally",
      "Predictive machine learning rates threat severity in sub-milliseconds",
      "RESTful API integration for enterprise SIEM, firewalls, and SOAR tools",
      "Contextual Threat Analysis cross-referencing domain age, ownership, and payload behaviors"
    ],
    supportedPlatforms: ["REST API", "Cloud API Integrations", "Security Appliances"],
    keyFeatures: [
      {
        title: "Real-Time URL & IP Classification",
        description: "Categorizes and rates internet domains across risk levels and content categories dynamically."
      },
      {
        title: "File Reputation Service",
        description: "Provides instant lookup for executable hashes to determine clean, malicious, or unclassified status."
      },
      {
        title: "RESTful API Access",
        description: "Enables custom integration into Palo Alto, Cisco, F5, or custom enterprise SIEM software."
      }
    ],
    installationGuide: {
      apiIntegration: [
        "Request API Developer credentials from Webroot Enterprise Sales.",
        "Log into BrightCloud API portal to generate your unique OAuth API keys.",
        "Configure RESTful query endpoints (`https://api.brightcloud.com/v2/...`) inside your SIEM or custom security pipeline."
      ]
    },
    accountProcess: {
      signUp: "Enterprise API provisioning through Webroot OEM & Partner portal.",
      signIn: "Access API usage telemetry and key management via developer portal."
    },
    userJourneys: {
      newUser: [
        "Generate BrightCloud API token.",
        "Integrate IP Reputation endpoint into perimeter firewall for automated IP blocking."
      ],
      existingUser: [
        "Monitor API query metrics and analyze automated threat feed reports."
      ]
    },
    faqs: [
      {
        question: "Is BrightCloud embedded in all Webroot products?",
        answer: "Yes, BrightCloud is the core cloud intelligence engine powering every Webroot desktop, mobile, DNS, and business product."
      }
    ],
    placeholderNotice: "BrightCloud API pricing based on monthly query volume and integration tier."
  }
];
