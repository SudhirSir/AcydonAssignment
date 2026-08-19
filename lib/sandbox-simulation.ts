export interface ExecutionResult {
  status: number;
  latencyMs: number;
  engineUsed: string;
  fingerprintMode: string;
  proxyIp: string;
  bytesReceived: number;
  headers: Record<string, string>;
  data: Array<{
    id: string;
    title: string;
    company: string;
    location: string;
    source: string;
    salary: string;
    posted: string;
  }>;
  resilienceLogs: string[];
}

export const SAMPLE_SOURCES = [
  { id: 'rss-remote-tech', name: 'Public Tech Job Feed (Low-Risk Sandbox)', type: 'rss', url: 'https://news.ycombinator.com/jobs' },
  { id: 'wellfound-sandbox', name: 'Startup Jobs Index (Demo Feed)', type: 'api', url: 'https://api.wellfound.com/v1/jobs/public' },
  { id: 'indeed-public', name: 'Remote Roles Index (Public Demo)', type: 'html', url: 'https://indeed.com/jobs?q=frontend' },
  { id: 'linkedin-public-rss', name: 'Open Job Stream (Public RSS Demo)', type: 'rss', url: 'https://linkedin.com/jobs/rss' },
];

export function runSimulatedExtraction(
  sourceId: string,
  engine: 'stealth-headless' | 'tls-camouflage' | 'rss-fallback',
  chaosMode?: 'none' | 'rate-limit-429' | 'cloudflare-challenge' | 'markup-drift'
): ExecutionResult {
  const baseLatency = engine === 'stealth-headless' ? 320 : engine === 'tls-camouflage' ? 140 : 75;
  const jitter = Math.floor(Math.random() * 30) - 15;

  let status = 200;
  const logs: string[] = [];

  logs.push(`[${new Date().toISOString().slice(11, 19)}] [SIMULATION] Initializing pipeline for target stream: "${sourceId}"`);
  logs.push(`[${new Date().toISOString().slice(11, 19)}] Applied TLS Client Hello Profile: Chrome 128 / macOS (Simulated Profile)`);
  logs.push(`[${new Date().toISOString().slice(11, 19)}] Rotated Session Gateway IP: 198.51.100.${Math.floor(Math.random() * 200) + 10}`);

  if (chaosMode === 'rate-limit-429') {
    logs.push(`[${new Date().toISOString().slice(11, 19)}] ⚠️ SIMULATED EVENT: Primary gateway returned HTTP 429 (Rate Limit)`);
    logs.push(`[${new Date().toISOString().slice(11, 19)}] 🔄 RESILIENCE TRIGGER: Exponential backoff jitter (250ms) + Gateway IP rotation`);
    logs.push(`[${new Date().toISOString().slice(11, 19)}] ✅ RECOVERY: Successful via secondary gateway pool. Status: 200 OK`);
  } else if (chaosMode === 'cloudflare-challenge') {
    logs.push(`[${new Date().toISOString().slice(11, 19)}] ⚠️ SIMULATED EVENT: Anti-bot challenge page detected`);
    logs.push(`[${new Date().toISOString().slice(11, 19)}] 🔄 RESILIENCE TRIGGER: Off-thread browser isolate challenge solver engaged`);
    logs.push(`[${new Date().toISOString().slice(11, 19)}] ✅ RECOVERY: Token resolved in 180ms. Bypass headers injected.`);
  } else if (chaosMode === 'markup-drift') {
    logs.push(`[${new Date().toISOString().slice(11, 19)}] ⚠️ SIMULATED EVENT: CSS Class Mismatch (Target HTML layout altered)`);
    logs.push(`[${new Date().toISOString().slice(11, 19)}] 🔄 RESILIENCE TRIGGER: Self-healing AST parser activated microdata & JSON-LD fallback`);
    logs.push(`[${new Date().toISOString().slice(11, 19)}] ✅ RECOVERY: Extracted 4 structured objects without schema loss.`);
  } else {
    logs.push(`[${new Date().toISOString().slice(11, 19)}] Demo pipeline execution completed cleanly. Zero challenge triggers.`);
  }

  const mockJobs = [
    {
      id: 'job-101',
      title: 'Senior Frontend Systems Engineer',
      company: 'Acdyon Engineering',
      location: 'Remote / Bengaluru, IN',
      source: sourceId,
      salary: '$140,000 - $180,000',
      posted: '2 hours ago',
    },
    {
      id: 'job-102',
      title: 'Distributed Scraping & Resilience Architect',
      company: 'DataForge AI',
      location: 'Remote (US/EU)',
      source: sourceId,
      salary: '$160,000 - $210,000',
      posted: '4 hours ago',
    },
    {
      id: 'job-103',
      title: 'Full-Stack Performance Specialist',
      company: 'Pulse Systems',
      location: 'Hybrid / San Francisco, CA',
      source: sourceId,
      salary: '$150,000 - $190,000',
      posted: '6 hours ago',
    },
    {
      id: 'job-104',
      title: 'Browser Automation Security Researcher',
      company: 'Stealth Labs',
      location: 'Remote',
      source: sourceId,
      salary: '$170,000 - $220,000',
      posted: '1 day ago',
    },
  ];

  return {
    status,
    latencyMs: baseLatency + jitter + (chaosMode ? 110 : 0),
    engineUsed: engine,
    fingerprintMode: 'Chrome 128 / macOS (Simulated Profile)',
    proxyIp: `198.51.100.${Math.floor(Math.random() * 200) + 10}`,
    bytesReceived: 48290,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'x-simulation-mode': 'active-demo',
      'x-tls-profile-match': 'SIMULATED_HEADER_MATCH',
      'x-resilience-retries': chaosMode && chaosMode !== 'none' ? '1' : '0',
      'cache-control': 'max-age=60, s-maxage=300',
    },
    data: mockJobs,
    resilienceLogs: logs,
  };
}
