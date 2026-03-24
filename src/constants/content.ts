export const NAV_ITEMS = [
  {
    label: 'Capabilities',
    anchor: '#capabilities',
    dropdown: [
      { label: 'Agentic Systems', desc: 'Autonomous reasoning layers', anchor: '#capabilities' },
      { label: 'Semantic Intelligence', desc: 'Vector search & RAG', anchor: '#capabilities' },
      { label: 'Cognitive Data', desc: 'Agentic-ready data platform', anchor: '#capabilities' },
      { label: 'Cloud & FinOps', desc: 'DevOps for the AI era', anchor: '#capabilities' },
      { label: 'Digital Product Engineering', desc: 'AI-native applications', anchor: '#capabilities' },
    ],
  },
  {
    label: 'Platform',
    anchor: '#platform',
    dropdown: [
      { label: 'Cymonic Crew', desc: 'The Execution Engine', anchor: '#platform' },
      { label: 'Cymonic Pulse', desc: 'The Vision Engine', anchor: '#platform' },
      { label: 'Cymonic Lens', desc: 'The Integrity Engine', anchor: '#platform' },
      { label: 'Cymonic Orbit', desc: 'The Efficiency Engine', anchor: '#platform' },
      { label: 'Cymonic Sentinel', desc: 'The Oversight Engine', anchor: '#platform' },
    ],
  },
  {
    label: 'CCO Model',
    anchor: '#cco-model',
    dropdown: [
      { label: 'Consult', desc: 'Strategic blueprinting', anchor: '#cco-model' },
      { label: 'Construct', desc: 'Engineering & orchestration', anchor: '#cco-model' },
      { label: 'Operate', desc: 'Managed evolution', anchor: '#cco-model' },
    ],
  },
  {
    label: 'Why Cymonic',
    anchor: '#why-cymonic',
    dropdown: null,
  },
  {
    label: 'Our Values',
    anchor: '#values',
    dropdown: null,
  },
];

export const CAPABILITIES = [
  {
    icon: 'cpu',
    title: 'Agentic Systems',
    subtitle: 'Architecting Autonomous Reasoning Layers',
    description:
      'We move beyond static, chat-based interfaces to engineer multi-step reasoning agents — Digital Workers that autonomously plan, execute, and refine complex enterprise tasks with human-like precision.',
  },
  {
    icon: 'brain',
    title: 'Semantic Intelligence',
    subtitle: 'Bridging the AI Context Gap',
    description:
      'We build high-fidelity semantic foundations — utilizing advanced Vector Search and Graph-enhanced RAG — to ensure your AI understands the deep, nuanced business context of your enterprise.',
  },
  {
    icon: 'database',
    title: 'Cognitive Data',
    subtitle: 'Engineering the Agentic-Ready Data Platform',
    description:
      'We modernize fragmented legacy data into governed, enterprise-grade data platforms — clean pipelines, unified architectures, and Golden Records your AI can trust. From data engineering and lake house design to real-time ingestion and data quality frameworks, we build the foundation that turns raw enterprise data into high-velocity, structured intelligence ready for autonomous systems.',
  },
  {
    icon: 'cloud',
    title: 'Cloud & FinOps',
    subtitle: 'DevOps Excellence for the AI Era',
    description:
      'High-performance AI requires cost-optimized, elastic infrastructure. We apply rigorous FinOps and automated DevOps principles to minimize latency and maximize ROI.',
  },
  {
    icon: 'layers',
    title: 'Digital Product Engineering',
    subtitle: 'Building AI-Native Applications',
    description:
      'We don\'t just add AI — we build around it. From high-performance intuitive interfaces to seamless backend integrations, we develop products where AI is the core engine.',
  },
];

export const CCO_STEPS = [
  {
    number: '01',
    title: 'Consult',
    subtitle: 'Strategic Blueprinting',
    description:
      'Defining the path to Agentic Maturity. We align your business objectives with an AI-First infrastructure, evaluating your organisation\'s Cognitive Readiness beyond simple data storage.',
    bullets: [
      'Agentic Roadmap — identifying high-friction workflows for autonomous reasoning',
      'Semantic Audits — mapping knowledge silos for high-fidelity intelligent retrieval',
      'FinOps Strategy — architecting for cost-efficiency and measurable AI ROI',
      'Governance Framework — data sovereignty and compliance structures',
    ],
  },
  {
    number: '02',
    title: 'Construct',
    subtitle: 'Engineering & Orchestration',
    description:
      'Building the engines of Autonomous Intelligence. Our engineering teams transition from blueprint to production, building resilient, AI-native applications.',
    bullets: [
      'Cognitive Data Ecosystems — modernizing legacy stacks into governed architectures',
      'Reasoning Layers — multi-step agentic frameworks for complex action execution',
      'Semantic Integration — advanced indexing, vector search, and discovery pipelines',
      'Automated Infrastructure — DevOps excellence for secure, elastic environments',
    ],
  },
  {
    number: '03',
    title: 'Operate',
    subtitle: 'Managed Evolution',
    description:
      'AI is a living system — not a set-and-forget utility. Our Operate phase focuses on proactive observability and refinement of your digital workers.',
    bullets: [
      'Agentic Observability — monitoring reasoning layers for logic drift and accuracy',
      'FinOps Management — ongoing cost-optimization of cloud compute and model-serving',
      'Semantic Refinement — dynamically updating knowledge foundations as context evolves',
      'Managed Intelligence — 24/7 oversight for secure, high-performing AI applications',
    ],
  },
];

export const PLATFORM_PRODUCTS = [
  {
    id: 'crew',
    name: 'Cymonic Crew',
    badge: 'Execution Engine',
    tagline: 'Deploy Your Digital Workforce with a Single Prompt',
    description:
      'Cymonic Crew transforms natural language instructions into high-fidelity, autonomous agents — Digital Workers designed to plan, decide, and execute complex enterprise tasks.',
    features: [
      'Natural Language Orchestration',
      'Autonomous Decision-Making',
      'Integrated Semantic Memory',
      'Human-in-the-Loop Governance',
    ],
    icon: 'users',
  },
  {
    id: 'pulse',
    name: 'Cymonic Pulse',
    badge: 'Vision Engine',
    tagline: 'The Natural Language Insight & KPI Engine',
    description:
      'Cymonic Pulse allows any user to skip complex query building and generate real-time KPIs and interactive dashboards using simple, natural language.',
    features: [
      'Conversational Analytics',
      'Dynamic Dashboarding',
      'Automated KPI Discovery',
      'Actionable Context',
    ],
    icon: 'bar-chart',
  },
  {
    id: 'lens',
    name: 'Cymonic Lens',
    badge: 'Integrity Engine',
    tagline: 'Semantic Data Quality & Integrity Guard',
    description:
      'Cymonic Lens uses Semantic Intelligence to evaluate data quality through the lens of your actual business context — ensuring information is not just clean, but meaningful.',
    features: [
      'Semantic Validation',
      'Context-Aware Profiling',
      'Autonomous Remediation',
      'Integrity Observability',
    ],
    icon: 'eye',
  },
  {
    id: 'orbit',
    name: 'Cymonic Orbit',
    badge: 'Efficiency Engine',
    tagline: 'Autonomous FinOps & Cloud Economics',
    description:
      'Cymonic Orbit is an intelligent orchestration layer designed to solve the complexity of AI infrastructure costs through predictive analytics and autonomous scaling.',
    features: [
      'Predictive Cost Architecting',
      'Autonomous Scaling Intelligence',
      'Unit Economics for Agents',
      'Automated Governance',
    ],
    icon: 'zap',
  },
  {
    id: 'sentinel',
    name: 'Cymonic Sentinel',
    badge: 'Oversight Engine',
    tagline: 'Autonomous AI Observability & Guardrails',
    description:
      'Sentinel monitors the reasoning, not just the perimeter. A high-fidelity oversight layer ensuring digital workers remain reliable, accurate, and compliant.',
    features: [
      'Reasoning Traceability',
      'Logic Drift Detection',
      'Real-Time Guardrails',
      'Performance Feedback Loops',
    ],
    icon: 'shield',
  },
];

export const WHY_CYMONIC = [
  { title: 'Led by Industry Titans', desc: 'Founded and led by practitioners with 20+ years of hands-on experience solving the hardest problems in enterprise technology — not newcomers to the field.' },
  { title: 'Architectural Rigor', desc: 'Every solution is designed by seasoned architects to be production-ready, scalable, and secure from day one.' },
  { title: 'Beyond Chatbots', desc: 'We specialize in sophisticated cognitive engines and agentic workflows — not just chatbot wrappers.' },
  { title: 'Self-Executing Systems', desc: 'Our expertise lies in building AI agents that plan, decide, and act autonomously at enterprise scale.' },
  { title: 'Partner, Not Vendor', desc: 'We plug in as a senior engineering extension of your team — with skin in the game.' },
  { title: 'Deep Domain Integration', desc: 'We immerse in your data, workflows, and language so the intelligence we build fits exactly how you operate.' },
  { title: 'Accelerated Time-to-Value', desc: 'From proof-of-concept to live production faster than traditional delivery models.' },
  { title: 'Global Reach', desc: 'Headquartered in Kochi, India, serving clients across New York, Toronto, Dubai, Singapore, and Sydney.' },
];

export const TECH_PARTNERS = [
  { name: 'Databricks', abbr: 'DB' },
  { name: 'Microsoft Fabric', abbr: 'MF' },
  { name: 'Azure', abbr: 'AZ' },
  { name: 'Snowflake', abbr: 'SF' },
  { name: 'Agentic AI', abbr: 'AI' },
];

export const GLOBAL_CITIES = [
  { name: 'New York', x: 22, y: 36, hq: false },
  { name: 'Toronto', x: 20, y: 32, hq: false },
  { name: 'Dubai', x: 57, y: 42, hq: false },
  { name: 'Kochi', x: 63, y: 50, hq: true },
  { name: 'Singapore', x: 72, y: 55, hq: false },
  { name: 'Sydney', x: 80, y: 70, hq: false },
];

export const PRIDE_VALUES = [
  {
    letter: 'P',
    value: 'Passion',
    desc: 'Bring energy and commitment to everything you do — clients feel the difference.',
  },
  {
    letter: 'R',
    value: 'Reliability',
    desc: 'Do what you say. Deliver what you promise. Show up when it matters.',
  },
  {
    letter: 'I',
    value: 'Integrity',
    desc: 'Be honest — with clients, with your team, and with yourself.',
  },
  {
    letter: 'D',
    value: 'Discipline',
    desc: 'Do the hard work others skip. Detail, precision, and follow-through every time.',
  },
  {
    letter: 'E',
    value: 'Excellence',
    desc: 'Hold a high bar. Never settle for good enough when great is possible.',
  },
];
