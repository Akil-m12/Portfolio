export const PERSONAL = {
  name: "AKIL THANVEER M",
  role: "DevOps Engineer",
  title: "DevOps Engineer with 4+ Years Supporting Production Cloud & Server Infrastructure",
  summary: "DevOps Engineer with 4+ years of experience supporting production cloud and server infrastructure across AWS, Azure, and VPS environments. Hands-on with AWS, Terraform, Kubernetes, Docker, CI/CD, Linux, networking, IAM, reverse proxies, monitoring, and production troubleshooting. Owned delivery and day-to-day operations for 15+ production platforms spanning blockchain, gaming, RWA/IDO, and backend services, with a focus on reliable deployments, secure access, automation, and incident resolution.",
  location: "Coimbatore, India (Open to relocation)",
  experienceYears: "4+",
  email: "akilthanveer.98@gmail.com",
  phone: "+91 9092934234",
  github: "https://github.com/Akil-m12",
  githubHandle: "Akil-m12",
  linkedin: "https://www.linkedin.com/in/akil-thanveer-71b8a827b/",
  linkedinHandle: "akil-thanveer-71b8a827b",
  resumePath: "/Akil_Thanveer_Resume.pdf",
  availability: "Available for DevOps / SRE / Cloud Architect Roles",
  status: "OPERATIONAL // 0 CRITICAL INCIDENTS",
  uptime: "99.98% SLA",
  region: "ap-south-1 // AWS, Azure & VPS",
  education: {
    degree: "B.E. Computer Science",
    institution: "Park College of Engineering and Technology",
    graduation: "Apr 2021",
    cgpa: "7.10"
  },
  certification: {
    name: "AWS & DevOps Certification",
    institution: "Yuva Sakthi Academy"
  }
};

export const TELEMETRY_METRICS = [
  { value: "15+", label: "Production Platforms Supported", detail: "Blockchain, Gaming, RWA/IDO, APIs" },
  { value: "80%", label: "WebSocket Latency Cut", detail: "Lambda/API Gateway → EC2 Migration" },
  { value: "60%", label: "Faster Deployment Workflows", detail: "GitHub Actions & GitLab CI/CD" },
  { value: "Full Nodes", label: "Bitcoin & Dogecoin", detail: "Pruning, Indexing, Localhost-only RPC" },
  { value: "99.98%", label: "High Availability SLA", detail: "Zero Unplanned Major Outages" },
  { value: "4+ Yrs", label: "Production Experience", detail: "AWS, Azure, Linux & VPS/Contabo" }
];

export const OPERATING_TENETS = [
  {
    id: "01",
    title: "Reproducible Infrastructure as Code",
    summary: "Debugged and hardened multi-cloud Terraform deployments by replacing hardcoded subnets with module outputs and enforcing strict NSGs.",
    detail: "Eliminated plaintext credentials from tracked configurations, declared reproducible VPC network topologies, and attached zero-trust network security groups to all cloud VM interfaces."
  },
  {
    id: "02",
    title: "Latency & Stateful Workload Optimization",
    summary: "Diagnosed WebSocket statelessness and cold starts, migrating real-time Unity WebGL backends from Lambda to EC2.",
    detail: "Maintained RDS PostgreSQL and S3 securely within the VPC while slashing connection latency by 80% and eliminating player disconnects during peak traffic."
  },
  {
    id: "03",
    title: "Defense-in-Depth & Node Security",
    summary: "Restricted inter-service communication to approved CIDR ranges and hardened blockchain node RPCs.",
    detail: "Operated Bitcoin and Dogecoin full nodes with localhost-only RPC binding and wallet management, while isolating databases behind private IP subnets and UFW firewall rules."
  }
];

export const EXPERIENCES = [
  {
    id: "shamla",
    company: "ShamlaTech Solutions",
    role: "DevOps Engineer",
    period: "AUG 2023 — JUN 2026",
    location: "Coimbatore, India",
    type: "Full-time",
    summary: "DevOps Engineer managing delivery and day-to-day operations for 15+ production platforms spanning blockchain exchanges, gaming, RWA/IDO, and backend services.",
    achievements: [
      "Owned production infrastructure and deployment operations for 15+ platforms spanning blockchain exchanges, gaming, RWA/IDO, and backend services.",
      "Designed multi-server network topologies with private segmentation, private IP addressing, hostname-based service discovery, and UFW rules restricting inter-service traffic to approved CIDR ranges.",
      "Built and maintained CI/CD pipelines using GitHub Actions and GitLab CI/CD for production deployments, automating build, test, and deployment workflows.",
      "Containerized multi-service applications with Docker and Docker Compose and supported Kubernetes-based workloads, improving deployment consistency across environments.",
      "Migrated production backends from a hosting control panel to Nginx/Apache with Cloudflare Origin certificates for TLS termination and edge routing; served Unity WebGL workloads from EC2.",
      "Debugged and hardened Azure Terraform deployments by replacing hardcoded subnet references with module outputs, removing plaintext admin credentials from tracked configuration, attaching NSGs to VM NICs, and updating legacy VM resources.",
      "Diagnosed a real-time WebGL backend issue involving WebSocket statelessness and cold-start latency, then migrated the workload from Lambda/API Gateway to EC2 while retaining RDS PostgreSQL and S3 within a VPC.",
      "Operated Bitcoin and Dogecoin full nodes with pruning, indexing, localhost-only RPC and wallet management; integrated Ethereum/TON via external RPC and administered MongoDB/PostgreSQL with automated Docker/mongodump backups."
    ],
    techStack: [
      "AWS (EC2, S3, RDS, Lambda, API Gateway)",
      "Azure (VMs, NSGs, Terraform)",
      "Terraform",
      "Kubernetes & Docker",
      "Docker Compose",
      "GitHub Actions",
      "GitLab CI/CD",
      "Nginx & Apache",
      "Cloudflare Origin SSL",
      "Bitcoin & Dogecoin Core",
      "Ethereum & TON RPC",
      "PostgreSQL & MongoDB",
      "UFW & Private Subnets"
    ]
  },
  {
    id: "smik",
    company: "SMIK Systems Pvt Ltd",
    role: "DevOps Engineer",
    period: "MAR 2022 — JUN 2023",
    location: "Coimbatore, India",
    type: "Full-time",
    summary: "DevOps Engineer responsible for configuring Jenkins CI/CD automation, cloud provisioning across AWS/Azure, and authoring Linux operations tooling.",
    achievements: [
      "Designed and configured Jenkins CI/CD jobs to automate build, test, and deployment workflows across release cycles.",
      "Provisioned and supported application infrastructure across AWS and Azure, including EC2, VPC, Security Groups, and Lightsail.",
      "Built Bash automation for scheduled backups, service restarts, and cron-driven maintenance, reducing manual operational effort.",
      "Worked with development and QA teams to troubleshoot deployment and integration issues and support reliable releases."
    ],
    techStack: [
      "AWS (EC2, VPC, Security Groups, Lightsail)",
      "Azure",
      "Jenkins CI/CD",
      "Bash / Shell Scripting",
      "Cron Maintenance",
      "Linux (Ubuntu, Debian, CentOS)",
      "Docker",
      "Git"
    ]
  }
];

export const PROJECTS = [
  {
    id: "incident-automation",
    title: "Security Incident Response Automation",
    subtitle: "Containerized Incident-Response Pipeline with Python & Wazuh",
    category: "Reliability & SRE",
    impact: "Automated Threat Containment & Alerting",
    summary: "Built a containerized incident-response pipeline using Wazuh, Fail2Ban, Prometheus, Alertmanager, and Python remediation, with Grafana dashboards and Telegram alerts on AWS EC2.",
    problem: "Automating threat detection and mitigation across production servers without manual on-call delay during brute-force or CPU pressure events.",
    solution: "Integrated Wazuh and Fail2Ban for intrusion detection and IP banning, paired with Prometheus and Alertmanager triggering custom Python remediation playbooks and instant Telegram dispatch.",
    architecture: [
      "Wazuh SIEM & Fail2Ban → Real-time Threat & Intrusion Log Analysis",
      "Prometheus & Alertmanager → Host & Container Health Monitoring",
      "Custom Python Remediation Daemon → Automated Recovery Actions & IP Bans",
      "Grafana Dashboards → Centralized Telemetry & Visual Analytics",
      "Telegram Bot API → Instant Alert Notifications to On-Call Engineers"
    ],
    tags: ["Wazuh", "Fail2Ban", "Prometheus", "Alertmanager", "Python", "Grafana", "Telegram Alerts", "AWS EC2"]
  },
  {
    id: "blockchain-nodes",
    title: "Bitcoin & Dogecoin Full Node Clustering",
    subtitle: "High-Availability Node Infrastructure with Localhost RPC",
    category: "Web3 & Distributed Systems",
    impact: "100% Secure RPC Access & Zero Desyncs",
    summary: "Operated Bitcoin and Dogecoin full nodes with pruning, indexing, localhost-only RPC and wallet management; integrated Ethereum/TON via external RPC and administered MongoDB/PostgreSQL.",
    problem: "Managing high-throughput transaction verification and wallet synchronization without exposing sensitive RPC ports to the public internet.",
    solution: "Hardened full node compute on private VPC subnets with custom systemd service daemons, automated state verification, and automated Docker/mongodump database backups.",
    architecture: [
      "Bitcoin Core (bitcoind) & Dogecoin Core with Pruning & Transaction Indexing",
      "Localhost-only RPC Binding (127.0.0.1) with Strict Credential Isolation",
      "Ethereum & TON External RPC Connectors for Multi-Chain Transaction Monitoring",
      "Private VPC Subnet with Non-Routable Internal IP Addressing",
      "Automated Docker & mongodump / pg_dump Snapshot Routines"
    ],
    tags: ["Bitcoin Core", "Dogecoin", "Ethereum RPC", "TON", "MongoDB", "PostgreSQL", "Systemd", "AWS VPC"]
  },
  {
    id: "gaming-migration",
    title: "Real-time WebGL Backend Architecture & Migration",
    subtitle: "Lambda/API Gateway to EC2 WebSocket Cluster Migration",
    category: "High Performance Architecture",
    impact: "80% Latency Drop & Resolved Statelessness",
    summary: "Diagnosed a real-time WebGL backend issue involving WebSocket statelessness and cold-start latency, then migrated the workload from Lambda/API Gateway to EC2 while retaining RDS PostgreSQL and S3 within a VPC.",
    problem: "Serverless WebSocket cold starts and stateless disconnects degraded player experience during high-concurrency multiplayer Unity WebGL sessions.",
    solution: "Re-architected WebSocket handling onto containerized EC2 instances with persistent socket connections, serving Unity WebGL assets with Cloudflare Origin SSL certificates.",
    architecture: [
      "Unity WebGL Frontend → Cloudflare Origin TLS Edge Routing",
      "AWS Application Load Balancer → Sticky WebSocket Connections",
      "Dedicated EC2 Compute → Persistent Stateful WebSocket Workers",
      "VPC Peered Storage → Amazon RDS PostgreSQL & S3 Assets",
      "Nginx / Apache → Reverse Proxy & Sub-millisecond Local Routing"
    ],
    tags: ["AWS EC2", "WebSockets", "Unity WebGL", "RDS PostgreSQL", "AWS S3", "Nginx", "Apache", "Cloudflare"]
  },
  {
    id: "terraform-factory",
    title: "Multi-Cloud Terraform Hardening & Azure IaC",
    subtitle: "Security Hardening, Module Refactoring & Zero-Trust NSGs",
    category: "Cloud Architecture & Security",
    impact: "Eliminated Plaintext Secrets & Standardized State",
    summary: "Debugged and hardened Azure Terraform deployments by replacing hardcoded subnet references with module outputs, removing plaintext admin credentials from tracked configuration, attaching NSGs to VM NICs, and updating legacy VM resources.",
    problem: "Legacy Azure configurations with hardcoded subnets, unattached NSGs on VM NICs, and plaintext credentials in version control created security risks.",
    solution: "Refactored Terraform code into clean modular HCL with dynamic subnet outputs, moved secrets into secure environment variables, and bound zero-trust NSGs to all VM network interfaces.",
    architecture: [
      "Modular Terraform HCL with Dynamic Subnet Output References",
      "Zero Plaintext Credentials in Git (Env-variable & KeyVault injection)",
      "Zero-Trust Network Security Groups (NSGs) attached directly to VM NICs",
      "Updated AzureRM Legacy Resources to Modern Provider Schemas",
      "Automated Plan Validation & State Locking"
    ],
    tags: ["Terraform", "Azure RM", "NSGs", "AWS CloudWatch", "GitLab CI/CD", "GitHub Actions", "Bash"]
  }
];

export const SKILL_CATEGORIES = [
  {
    title: "Cloud & Infrastructure",
    icon: "Cloud",
    skills: ["AWS (EC2, S3, VPC, RDS, IAM)", "Security Groups & CloudWatch", "Lambda & API Gateway", "Lightsail", "Azure", "VPS / Contabo"]
  },
  {
    title: "IaC, Containers & CI/CD",
    icon: "Boxes",
    skills: ["Terraform", "Serverless Framework", "Docker & Docker Compose", "Kubernetes", "GitHub Actions", "GitLab CI/CD", "Jenkins", "Git"]
  },
  {
    title: "Networking, Monitoring & Security",
    icon: "ShieldCheck",
    skills: ["Private Network Segmentation", "UFW & CIDR Access Control", "DNS & SSL/TLS", "Cloudflare Origin TLS", "Nginx & Apache", "Prometheus & Grafana", "Wazuh & Fail2Ban", "Incident Response"]
  },
  {
    title: "Systems, Databases & Blockchain",
    icon: "Cpu",
    skills: ["Linux (Ubuntu, Debian, CentOS)", "Windows", "Bash & Shell Scripting", "Python & Cron", "PM2 Process Manager", "MongoDB & PostgreSQL", "MySQL", "Bitcoin & Dogecoin Nodes", "Ethereum & TON RPC"]
  }
];

export const TERMINAL_COMMANDS = {
  help: `Available Commands:
  whoami        - Display identity & professional summary
  skills        - List verified technical capabilities from resume
  experience    - Print verified operational career history (ShamlaTech & SMIK)
  projects      - Display major architecture blueprints & case studies
  education     - View formal academic background & certifications
  uptime        - Check operational telemetry & metrics
  contact       - Output direct transmission coordinates
  resume        - View the official resume
  clear         - Clear the terminal screen`,

  whoami: `NAME: Akil Thanveer M
ROLE: DevOps Engineer
LOCATION: Coimbatore, India | Open to relocation
SUMMARY: DevOps Engineer with 4+ years supporting production cloud and server infrastructure across AWS, Azure, and VPS environments. Hands-on with AWS, Terraform, Kubernetes, Docker, CI/CD, Linux, networking, reverse proxies, and production troubleshooting. Owned operations for 15+ production platforms spanning blockchain, gaming, RWA/IDO, and backend services.`,

  skills: `=== TECHNICAL SKILLS INVENTORY (OFFICIAL RESUME) ===
[CLOUD & INFRA]     AWS (EC2, S3, VPC, RDS, IAM, CloudWatch, Lambda, API Gateway, Lightsail), Azure, VPS/Contabo
[IAC & CONTAINERS]  Terraform, Serverless Framework, Docker, Docker Compose, Kubernetes, GitHub Actions, GitLab CI/CD, Jenkins, Git
[NETWORKING/SEC]    Private Segmentation, UFW, CIDR control, DNS, SSL/TLS, Cloudflare, Nginx, Apache, Prometheus, Grafana, Wazuh, Fail2Ban
[SYSTEMS/DB/WEB3]   Linux (Ubuntu, Debian, CentOS), Windows, Bash, Python, Cron, PM2, MongoDB, PostgreSQL, MySQL, Bitcoin & Dogecoin Nodes, Ethereum, TON`,

  experience: `=== PROFESSIONAL EXPERIENCE ===
[AUG 2023 - JUN 2026] ShamlaTech Solutions | Coimbatore, India
  Role: DevOps Engineer
  • Owned production infra and deployment operations for 15+ platforms (blockchain exchanges, gaming, RWA/IDO, APIs).
  • Designed multi-server VPC network topologies with private segmentation and UFW CIDR whitelisting.
  • Built CI/CD pipelines in GitHub Actions and GitLab CI/CD for production deployments.
  • Migrated WebGL backend from Lambda to EC2, cutting latency by 80%.
  • Debugged and hardened Azure Terraform deployments with zero-trust NSGs.
  • Operated Bitcoin and Dogecoin full nodes with localhost-only RPC and automated backups.

[MAR 2022 - JUN 2023] SMIK Systems Pvt Ltd | Coimbatore, India
  Role: DevOps Engineer
  • Configured Jenkins CI/CD jobs to automate build, test, and deployment workflows.
  • Provisioned application infrastructure across AWS and Azure (EC2, VPC, Security Groups, Lightsail).
  • Built Bash automation for scheduled backups, service restarts, and cron maintenance.`,

  projects: `=== ARCHITECTURAL BLUEPRINTS ===
1. Security Incident Response Automation (Wazuh, Fail2Ban, Prometheus, Alertmanager, Python on AWS EC2)
2. Bitcoin & Dogecoin Full Node Clustering (Pruning, Indexing, Localhost RPC, VPC Isolation)
3. Real-time WebGL Multiplayer Gaming Backend (Lambda to EC2 WebSocket Migration)
4. Multi-Cloud Terraform Hardening & Azure IaC (Modular HCL, Zero-Trust NSGs)`,

  education: `=== EDUCATION & CERTIFICATION ===
• B.E. Computer Science — Park College of Engineering and Technology | Apr 2021 | CGPA: 7.10
• AWS & DevOps Certification — Yuva Sakthi Academy`,

  uptime: `SYSTEM TELEMETRY:
  UPTIME: 99.98% SLA
  HOST: akil-infra-prod-01 (ap-south-1)
  PLATFORMS ACTIVE: 15+
  INCIDENTS UNRESOLVED: 0 // ALL SYSTEMS OPERATIONAL`,

  contact: `DIRECT TRANSMISSION COORDINATES:
  Email:    akilthanveer.98@gmail.com
  Phone:    +91 9092934234
  GitHub:   https://github.com/Akil-m12
  LinkedIn: https://www.linkedin.com/in/akil-thanveer-71b8a827b/
  Location: Coimbatore, India (Open to relocation)`
};
