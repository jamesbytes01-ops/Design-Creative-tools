export const webrootSuiteInfo = {
  brandName: "Webroot",
  headline: "Smart Protection for Your Digital World",
  tagline: "Lightweight, cloud-driven cybersecurity that guards your creative workflow without slowing down your system.",
  description: "Webroot provides advanced cybersecurity and digital protection solutions built to shield creatives, professionals, and enterprise workflows against real-time malware, phishing, identity theft, and ransomware threats.",
  badge: "Dedicated Security Partner",
  keyMetrics: [
    { label: "Cloud Threat Intelligence", value: "Real-Time Cloud Scanning" },
    { label: "Install Footprint", value: "Lightweight & Fast Execution" },
    { label: "Workflow Impact", value: "Zero Distraction Background Protection" },
    { label: "Platform Support", value: "PC, Mac, Android, iOS" }
  ]
};

export const webrootProducts = [
  {
    id: "webroot-antivirus",
    slug: "antivirus",
    name: "Webroot SecureAnywhere Antivirus",
    subtitle: "Cloud-powered real-time protection for PCs and Macs",
    category: "Consumer Security",
    icon: "ShieldCheck",
    badge: "Most Popular",
    featured: true,
    shortDescription: "Blazing fast antivirus software that scans in seconds, blocks malware in real-time, and uses virtually zero system resources.",
    longDescription: "Webroot SecureAnywhere Antivirus delivers advanced real-time threat protection against viruses, malware, ransomware, and phishing attacks. Designed with a revolutionary cloud-based architecture, Webroot scans your machine in seconds without consuming RAM or interrupting your creative software apps.",
    highlights: [
      "Real-time cloud threat intelligence scanning",
      "Ransomware protection and rollback defense",
      "Identity shield for online banking and browsing",
      "Scans take seconds with light memory footprint"
    ],
    supportedPlatforms: ["Windows", "macOS"],
    keyFeatures: [
      {
        title: "Cloud-Based Threat Engine",
        description: "Scans files against a global cloud database of threat definitions in real-time, keeping your device updated instantly without huge signature downloads."
      },
      {
        title: "Ransomware Defense",
        description: "Monitors suspicious file modifications and automatically backs up uncompromised files before ransomware can encrypt your digital work."
      },
      {
        title: "Phishing & Malicious Web Shield",
        description: "Warns you before clicking dangerous links or visiting counterfeit websites designed to steal credentials and design assets."
      },
      {
        title: "Lightning Fast Scans",
        description: "Complete full system scans in under 20 seconds so you can continue rendering, designing, and working without lag."
      }
    ],
    faqs: [
      {
        question: "Will Webroot slow down high-performance creative software like Photoshop or Blender?",
        answer: "No. Webroot is specifically engineered with a lightweight agent (under 15MB) that offloads heavy threat processing to the cloud, allowing your CPU and GPU to dedicate full power to your creative applications."
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
    id: "webroot-internet-security",
    slug: "internet-security",
    name: "Webroot Internet Security Complete",
    subtitle: "All-in-one protection with identity shield and cloud backup",
    category: "Consumer Security",
    icon: "ShieldAlert",
    badge: "Complete Suite",
    featured: true,
    shortDescription: "Complete security suite combining malware protection, identity theft shield, password security, and automated cloud backup for essential creative files.",
    longDescription: "Webroot Internet Security Complete safeguards your digital life across multiple devices. It protects personal files, design assets, and private financial credentials with advanced multi-layered security and automated cloud backup capabilities.",
    highlights: [
      "Multi-device protection for PC, Mac, and Mobile",
      "Includes 25GB secure cloud storage for critical files",
      "System optimizer to clean cache and boost performance",
      "Encrypted password manager integration"
    ],
    supportedPlatforms: ["Windows", "macOS", "Android", "iOS"],
    keyFeatures: [
      {
        title: "Multi-Layered Device Shield",
        description: "Extends top-tier antivirus, firewall, and anti-phishing protection across all your family or team devices."
      },
      {
        title: "25GB Secure Cloud Backup",
        description: "Automatically backs up key documents, design projects, and photos to an encrypted cloud repository."
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
    faqs: [
      {
        question: "How many devices can I protect with Internet Security Complete?",
        answer: "The complete suite supports multi-device coverage spanning PC, Mac, tablets, and smartphones under one license management portal."
      },
      {
        question: "Is the cloud backup secure for confidential client designs?",
        answer: "Yes, cloud backups are encrypted using enterprise-grade AES encryption standards before being transmitted."
      }
    ],
    placeholderNotice: "Official multi-device subscription plans available via authorized sales portal."
  },
  {
    id: "webroot-wifi-security",
    slug: "wifi-security",
    name: "Webroot WiFi Security & VPN",
    subtitle: "Bank-grade encryption for public Wi-Fi & online privacy",
    category: "Privacy & VPN",
    icon: "Wifi",
    badge: "Privacy Focus",
    featured: false,
    shortDescription: "Secure your connection, encrypt your traffic, and preserve your privacy anywhere you work—at coffee shops, airports, or remote studios.",
    longDescription: "Webroot WiFi Security & VPN protects your online privacy by encrypting your internet connection. Prevent hackers, ISPs, and malicious network snoopers from tracking your location or intercepting unencrypted design transfers.",
    highlights: [
      "Bank-grade 256-bit AES Wi-Fi encryption",
      "Automatic activation on untrusted public Wi-Fi networks",
      "Zero-logging privacy policy for user activity",
      "High-speed servers optimized for streaming and file transfer"
    ],
    supportedPlatforms: ["Windows", "macOS", "Android", "iOS"],
    keyFeatures: [
      {
        title: "Automatic Wi-Fi Encryption",
        description: "Instantly connects to secure VPN tunnels whenever your device detects unsecured public Wi-Fi networks."
      },
      {
        title: "No-Log Privacy Policy",
        description: "Ensures your browsing history, bandwidth, and IP addresses are never recorded or monitored."
      },
      {
        title: "Cross-Platform Mobility",
        description: "Protection seamlessly moves with your laptop, phone, or iPad as you work on the go."
      }
    ],
    faqs: [
      {
        question: "Can I use Webroot VPN while transferring large creative media files?",
        answer: "Yes, Webroot VPN utilizes optimized high-speed routing servers to maintain fast upload and download bandwidth."
      }
    ],
    placeholderNotice: "Official VPN bandwidth specifications subject to service tier selection."
  },
  {
    id: "webroot-business-endpoint",
    slug: "business-endpoint",
    name: "Webroot Business Endpoint Protection",
    subtitle: "Cloud-driven security console for creative teams & SMBs",
    category: "Business Security",
    icon: "Building",
    badge: "Enterprise Ready",
    featured: true,
    shortDescription: "Centralized cloud management console providing rapid threat remediation, script analysis, and zero-day protection across team endpoints.",
    longDescription: "Designed specifically for businesses, MSPs, and creative agencies. Webroot Business Endpoint Protection gives IT teams full visibility and control over team devices through a intuitive cloud administration dashboard.",
    highlights: [
      "Centralized cloud-based management portal",
      "Real-time automated threat remediation & rollback",
      "Evolving threat protection via BrightCloud Intelligence",
      "Fast silent deployment across remote workstations"
    ],
    supportedPlatforms: ["Windows", "macOS", "Windows Server"],
    keyFeatures: [
      {
        title: "Central Cloud Console",
        description: "Deploy, manage, and monitor security policies across all company laptops and servers from a single web dashboard."
      },
      {
        title: "BrightCloud AI Threat Intelligence",
        description: "Uses machine learning to continuously analyze millions of domain IPs, URLs, and file behavior vectors."
      },
      {
        title: "Automated Journaling & Rollback",
        description: "Tracks changes made by unclassified programs so any malicious file changes can be seamlessly reverted."
      }
    ],
    faqs: [
      {
        question: "Can IT administrators remotely manage remote creative staff laptops?",
        answer: "Yes. The cloud management console enables remote policy deployment, scan scheduling, and immediate threat isolation."
      }
    ],
    placeholderNotice: "Official business licensing structure available through Webroot enterprise reseller network."
  },
  {
    id: "webroot-identity-shield",
    slug: "identity-shield",
    name: "Webroot Identity Shield",
    subtitle: "Proactive browser protection & anti-phishing defense",
    category: "Endpoint Protection",
    icon: "Lock",
    badge: "Identity Defense",
    featured: false,
    shortDescription: "Isolates web browsers to block keyloggers, screen-grabbers, and man-in-the-middle attacks targeting sensitive client data.",
    longDescription: "Webroot Identity Shield creates a secure perimeter around web browser sessions, preventing malware from spying on passwords, financial details, or intellectual property when accessing cloud web applications.",
    highlights: [
      "Real-time browser session isolation",
      "Blocks keyloggers, screen scraper malware, and credential theft",
      "Zero-day phishing protection",
      "Seamless integration with major browsers"
    ],
    supportedPlatforms: ["Windows", "macOS"],
    keyFeatures: [
      {
        title: "Session Isolation",
        description: "Keeps web application data enclosed in an encrypted memory bubble away from malware sniffing."
      },
      {
        title: "Anti-Keylogger Shield",
        description: "Scrambles keystrokes to ensure passwords and sensitive copy cannot be captured by keylogging malware."
      }
    ],
    faqs: [
      {
        question: "Does Identity Shield require browser extensions?",
        answer: "It operates natively alongside standard browsers (Chrome, Edge, Safari, Firefox) for unobtrusive security."
      }
    ],
    placeholderNotice: "Official security feature suite included in Webroot SecureAnywhere licenses."
  }
];
