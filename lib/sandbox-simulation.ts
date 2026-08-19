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
  { id: 'rss-remote-tech', name: 'Public Tech Job RSS (Low Risk)', type: 'rss', url: 'https://news.ycombinator.com/jobs' },
  { id: 'wellfound-sandbox', name: 'Wellfound Startup Feed (Sandbox)', type: 'api', url: 'https://api.wellfound.com/v1/jobs/public' },
  { id: 'indeed-public', name: 'Indeed Remote Roles (Public Index)', type: 'html', url: 'https://indeed.com/jobs?q=frontend' },
  { id: 'linkedin-public-rss', name: 'LinkedIn Open Index (RSS Fallback)', type: 'rss', url: 'https://linkedin.com/jobs/rss' },
];

export function runSimulatedExtraction(
  sourceId: string,
  engine: 'stealth-headless' | 'tls-camouflage' | 'rss-fallback',
  chaosMode?: 'none' | 'rate-limit-429' | 'cloudflare-challenge' | 'markup-drift'
): ExecutionResult {
  const isRss = sourceId.includes('rss');
  const baseLatency = engine === 'stealth-headless' ? 340 : engine === 'tls-camouflage' ? 145 : 85;
  const jitter = Math.floor(Math.random() * 40) - 20;

  let status = 200;
  const logs: string[] = [];

  logs.push(`[${new Date().toISOString().slice(11, 19)}] Initializing request to target targetId="${sourceId}"`);
  logs.push(`[${new Date().toISOString().slice(11, 19)}] Applied TLS Client Hello: JA3/JA4 fingerprint (Chrome 128/macOS)`);
  logs.push(`[${new Date().toISOString().slice(11, 19)}] Rotated Residential IP: 198.51.100.${Math.floor(Math.random() * 250)}`);

  if (chaosMode === 'rate-limit-429') {
    logs.push(`[${new Date().toISOString().slice(11, 19)}] ⚠️ Received HTTP 429 (Too Many Requests) from primary gateway`);
    logs.push(`[${new Date().toISOString().slice(11, 19)}] 🔄 Active Resilience Triggered: Jittered exponential backoff (250ms) + IP swap`);
    logs.push(`[${new Date().toISOString().slice(11, 19)}] ✅ Retry Successful via fallback pool. Status: 200 OK`);
  } else if (chaosMode === 'cloudflare-challenge') {
    logs.push(`[${new Date().toISOString().slice(11, 19)}] ⚠️ Cloudflare JavaScript challenge detected (Turnstile)`);
    logs.push(`[${new Date().toISOString().slice(11, 19)}] 🔄 Executing off-thread v8 isolate challenge solver...`);
    logs.push(`[${new Date().toISOString().slice(11, 19)}] ✅ Token solved in 180ms. Bypass headers injected.`);
  } else if (chaosMode === 'markup-drift') {
    logs.push(`[${new Date().toISOString().slice(11, 19)}] ⚠️ Target CSS selectors mismatched (DOM class drift detected)`);
    logs.push(`[${new Date().toISOString().slice(11, 19)}] 🔄 AST Heuristic Parser activated: Matching microdata & semantic JSON-LD tags`);
    logs.push(`[${new Date().toISOString().slice(11, 19)}] ✅ Extracted 4 structured job objects without error.`);
  } else {
    logs.push(`[${new Date().toISOString().slice(11, 19)}] Pipeline completed cleanly. Zero challenge triggers.`);
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
    latencyMs: baseLatency + jitter + (chaosMode ? 120 : 0),
    engineUsed: engine,
    fingerprintMode: 'Chrome 128 / macOS Sequoia (JA4+ spoofed)',
    proxyIp: `198.51.100.${Math.floor(Math.random() * 250)}`,
    bytesReceived: 48290,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'x-pulse-engine-bypass': 'active',
      'x-tls-fingerprint-verdict': 'PASSED_HUMAN_SCORE_0.98',
      'x-resilience-retries': chaosMode && chaosMode !== 'none' ? '1' : '0',
      'cache-control': 'max-age=60, s-maxage=300',
    },
    data: mockJobs,
    resilienceLogs: logs,
  };
}
