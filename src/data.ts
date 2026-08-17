import { PortfolioData } from './types';

export const DEFAULT_PORTFOLIO: PortfolioData = {
  personalInfo: {
    name: "Hyorim (Miro) Kim",
    title: "Full-Lifecycle Software Engineer • Desktop & Native Systems",
    tagline: "Bridging people with technology, connecting engineering with creativity.",
    bio: "Full-Lifecycle Software Engineer with 4.5 years of experience solving complex problems through engineering—from intuitive user experience (UX) to robust desktop applications and low-level native systems across Windows and macOS. Proven track record of spearheading 0-to-1 SDLC initiatives at Nexon—architecting Nexon’s first-ever macOS game launcher platform (Swift with Objective-C, C++), building native SDKs & cross-platform desktop clients (Electron, N-API), and maintaining live operations for 1.2M+ MAU.",
    email: "hyormdev@gmail.com",
    github: "https://github.com/hyorm",
    linkedin: "https://linkedin.com/in/hyorim-kim",
    location: "Seoul, South Korea (Relocating to Canada)",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300&h=300",
    resumeUrl: "../resume/master_resume.html"
  },
  skills: [
    { name: "C++", level: 95, category: "Languages", iconName: "Code2" },
    { name: "Swift (with Objective-C)", level: 90, category: "Languages", iconName: "Apple" },
    { name: "Python", level: 88, category: "Languages", iconName: "Terminal" },
    { name: "JavaScript / TypeScript", level: 90, category: "Languages", iconName: "Code2" },
    { name: "Windows Internals & Win32 IPC", level: 94, category: "Systems & Native SDK", iconName: "Cpu" },
    { name: "macOS Internals & Apple XPC", level: 92, category: "Systems & Native SDK", iconName: "Shield" },
    { name: "Full SDLC & OOP Architecture", level: 95, category: "Architecture & Patterns", iconName: "Layers" },
    { name: "Electron + N-API (Native Addons)", level: 90, category: "Desktop & UI Layer", iconName: "Layout" },
    { name: "Node.js (Express.js) & REST APIs", level: 85, category: "Platform & Tooling", iconName: "Server" },
    { name: "Docker & GitLab CI/CD", level: 86, category: "DevOps & Tooling", iconName: "Container" },
    { name: "Google Test (GTest) & Sentry", level: 88, category: "Quality & Observability", iconName: "CheckCircle" },
    { name: "AI Tools (Claude, Gemini, MCP)", level: 90, category: "DevOps & Tooling", iconName: "Sparkles" }
  ],
  projects: [
    {
      id: "global-unified-launcher",
      title: "1. Global Platform",
      shortDesc: "Ongoing global cross-platform desktop initiative decoupling native OS subsystems via Electron, C++ Native Addons (N-API), and non-blocking telemetry.",
      longDesc: "Ongoing global cross-platform desktop engineering initiative.",
      category: "Cross-Platform / C++",
      status: "In Progress (Nov 2025 – Present)",
      isClickable: false,
      techStack: ["C++", "Electron", "N-API", "macOS XPC", "In-house Analytics/Logging Tools", "Sentry"],
      features: [
        "Electron + N-API C++ Native Addon cross-platform bridge decoupling OS subsystems",
        "Non-blocking Producer-Consumer telemetry engine (In-house Analytics/Logging Tools, Sentry) guaranteeing timestamp accuracy",
        "Phase 1.5 macOS platform expansion & Launcher Helper XPC service porting"
      ],
      githubUrl: "https://github.com/hyorm",
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800&h=500"
    },
    {
      id: "gamescale-native-sdk",
      title: "2. Gamescale Windows Native SDK – High-Performance IPC",
      shortDesc: "High-performance C++ multi-process SDK library with zero-copy Shared Memory IPC and complete crash isolation.",
      longDesc: "Unified decoupled core system dependencies into a singular C++ static/dynamic SDK library. Applied C++ Object-Oriented Design (OOP) to engineer zero-copy Shared Memory IPC and Child Process Watchers in C++, isolating telemetry/HTTP modules to achieve 100% main game crash protection. Built robust libcurl abstraction with connection pooling, SSL validation, and automated GTest mock regression suites.",
      category: "Native SDK / C++",
      techStack: ["C++", "Object-Oriented Design Pattern", "Win32 API", "Shared Memory IPC", "libcurl", "Google Test", "Visual Studio"],
      features: [
        "C++ Object-Oriented Architecture with zero-copy Shared Memory IPC & Child Process Watchers",
        "100% main game process crash isolation from background HTTP/logging telemetry routines",
        "Thread-safe libcurl abstraction layer under in-house protocols with connection pooling & SSL validation",
        "Automated mock regression test suites built with Google Test (GTest)"
      ],
      githubUrl: "https://github.com/hyorm",
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800&h=500"
    },
    {
      id: "macos-game-launcher",
      title: "3. Nexon’s First macOS Game Launcher & Distribution Platform",
      shortDesc: "0-to-1 SDLC tech lead delivering Nexon's first macOS game distribution platform for MapleStory Worlds.",
      longDesc: "Spearheaded full 0-to-1 SDLC from initial technical feasibility PoC to global live release within 10 months, successfully launching MapleStory Worlds on macOS. Encapsulated core installation and delta patching algorithms into reusable C++ Object-Oriented modules shared concurrently between Windows and macOS. Decoupled execution into 2 tiers via Apple XPC protocols to achieve rootless privilege isolation without admin password popups, while resolving APFS file locking collisions.",
      category: "macOS Systems / Swift",
      techStack: ["Swift (with Obj-C)", "C++", "Object-Oriented Design Pattern", "Apple XPC Protocol", "APFS Internals", "App Sandbox", "GitLab CI/CD"],
      features: [
        "0-to-1 Full SDLC ownership as Tech Lead & Core Architect delivering global live release in 10 months",
        "Cross-platform shared C++ core for installation & delta patching algorithms shared between Win/macOS",
        "3-Tier execution decoupling (Shortcut App, GUI & Daemon) via rootless Apple XPC protocols",
        "APFS file system collision analysis & atomic write constraints ensuring zero-corruption game updates"
      ],
      githubUrl: "https://github.com/hyorm",
      liveUrl: "https://maplestoryworlds.nexon.com",
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=800&h=500"
    },
    {
      id: "deployment-platform-obd",
      title: "4. Core Live Launcher Platforms & One Build and Deploy (Delta Patch) Systems",
      shortDesc: "Client patch operations, cross-platform CLI developer tools, and 99.9%+ uptime live launcher maintenance for 1.2M+ MAU.",
      longDesc: "Engineered Node.js (Express.js) backend services for Plug launcher workflows and developed REST APIs for One Build and Deploy mobile version enforcement and storage validation. Developed cross-platform Python CLI tools tailored to game studio development environments across Windows, macOS, and Linux. Maintained 99.9%+ availability for 1.2M+ MAU across 10+ major live titles (MapleStory, FC Online).",
      category: "Platform & Tooling",
      techStack: ["C++", "Node.js (Express.js)", "Python CLI", "MySQL", "AWS (EC2/S3)", "Docker", "GitLab CI/CD"],
      features: [
        "Node.js (Express.js) backend services for Plug launcher workflows",
        "REST APIs for One Build and Deploy mobile version enforcement and device storage validation",
        "Cross-platform Python CLI tools for game studio packaging on Windows, macOS, and Linux",
        "99.9%+ live platform uptime for 1.2M+ MAU across 10+ major live titles (MapleStory, FC Online)"
      ],
      githubUrl: "https://github.com/hyorm",
      liveUrl: "https://nexonplug.nexon.com",
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800&h=500"
    }
  ],
  experiences: [
    {
      id: "exp-nexon",
      role: "Full-Lifecycle Software Engineer",
      company: "NEXON KOREA",
      location: "Seongnam, South Korea",
      period: "Nov 2021 – Present (4.5 Years)",
      description: "Spearheading native desktop applications, low-level C++ SDKs, macOS platform distribution, and deployment tooling.",
      bulletPoints: [
        "Architected next-gen Global Unified Launcher bridging Electron web UI with C++ Native Addons (N-API) and non-blocking telemetry engine (In-house Analytics & Logging Tools, Sentry)",
        "Engineered Gamescale Windows Native SDK with zero-copy Shared Memory IPC and Child Process Watchers, isolating telemetry crashes from the main game loop",
        "Led 0-to-1 SDLC for Nexon's first macOS Game Distribution Platform (MapleStory Worlds) using Swift (with Objective-C wrappers), C++, Object-Oriented Design, and rootless Apple XPC protocols",
        "Maintained 99.9%+ uptime for 1.2M+ MAU across 10+ major AAA titles (MapleStory, FC Online) and developed One Build and Deploy Mobile REST APIs"
      ],
      skillsUsed: ["C++", "Swift (with Obj-C)", "Electron", "N-API", "Win32 IPC", "Apple XPC", "Node.js", "Python CLI", "Docker", "GitLab CI/CD"]
    },
    {
      id: "exp-handong",
      role: "B.S. of Computer Science and Engineering & Academic Researcher",
      company: "Handong University",
      location: "Pohang, South Korea",
      period: "2022",
      description: "Co-authored KCI-indexed academic research in automated software verification.",
      bulletPoints: [
        "Co-authored Research Paper: 'CRESTIVE-DX: Distributed Concolic Testing for Embedded Software' (KCI Indexed, Excellence Award at KCSE 2020)",
        "Researched automated test-case generation pipelines using concolic testing techniques to optimize code path coverage and improve embedded software verification efficiency"
      ],
      skillsUsed: ["C/C++", "Concolic Testing", "Software Verification", "Linux", "Algorithms"]
    }
  ]
};
