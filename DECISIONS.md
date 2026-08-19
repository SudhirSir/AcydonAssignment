# DECISIONS.md — PulseEngine Architecture & Design Choices

**Candidate Track**: Part 2 — The Premium Home Page  
**Product Concept**: PulseEngine (Resilient Data Intelligence Platform)  
**Target Evaluator**: Acdyon Technologies Engineering Team  

---

### 1. Why This Product & Design Strategy Over the Obvious Alternative Rejected?

**Strategy Chosen**: A developer-first product landing page featuring an **interactive architecture simulation** (sandbox terminal & real-time chaos recovery lab) combined with 100% transparent copy (**zero fabricated user counts, fake client logos, or invented quotes**).

**Obvious Alternative Rejected**: A traditional SaaS landing page populated with static screenshots, fake Fortune 500 client logos (e.g., "Used by Meta"), stock-photo testimonials, and exaggerated marketing counters.

**Rationale**:
- **Signal Over Hype**: Senior evaluators instantly identify fake social proof. Acdyon's prompt explicitly highlights: *"Constraint that separates signal from noise: no fabricated testimonials, fake user counts, or fake logos... This is the single biggest thing we grade on."*
- **Interactive Concept Demonstration**: Rather than making unverifiable marketing claims, we built an in-browser interactive simulator. Evaluators can trigger simulated failure events (429 rate limits, anti-bot challenges, HTML layout changes) to observe PulseEngine's self-healing recovery mechanism in real time.
- **Honest Simulation Scope**: We explicitly label the interactive sandbox as an **Interactive Simulation** running against low-risk public/demo feeds, respecting scope guardrails rather than claiming live production scraping against third-party platforms.

---

### 2. One Trade-Off Made Under the Time Limit & What Would Be Done With a Real Week

**Trade-Off Made Under Time Limit**:
- **In-Memory Simulation Engine**: To guarantee 100% deterministic, zero-latency evaluation without relying on third-party proxy credentials, rate limits, or IP bans during review, the interactive sandbox runs an in-memory simulation module (`lib/sandbox-simulation.ts`).

**What I Would Build With a Real Week**:
1. **Live WebAssembly (Wasm) TLS Socket Engine**: Compile a Go/Rust HTTP/2 client to Wasm, enabling socket-level TLS Client Hello customization directly inside browser JS.
2. **Visual DOM Diff Parser**: Render a side-by-side AST tree comparison showing how microdata and JSON-LD tags extract structured schemas when target HTML class names change.
3. **Runnable SDK Generator**: Add interactive tabs to export copy-pasteable client code in Python (`httpx` stealth), Node.js, and Go.

---

### 3. Where AI Tools Were Used & What Was Personally Verified / Changed

**Where AI Tools Were Used**:
- **Layout & Component Scaffolding**: AI assisted in drafting initial Tailwind CSS container utility classes and Framer Motion transition parameters.
- **Mock Telemetry Strings**: AI generated realistic JA4 TLS ciphersuite strings and HTTP/2 pseudo-header definitions.

**What I Personally Verified & Modified**:
- **Honesty & Credibility Audit**: Audited all copy to remove absolute claims (e.g. replaced "Zero Blocked Requests" with "Resilient Data Extraction") and explicitly labeled all demo data as **Interactive Simulation**.
- **Dark Mode & Contrast Audit**: Verified color contrast across `--background`, `--card`, and code blocks in both light and dark themes using `next-themes`.
- **Responsive Layout Verification**: Tested rendered layouts at **390px mobile** and **1440px desktop** to ensure zero horizontal scrolling, responsive drawer navigation, and clean text wrapping.
- **Konami Code Listener**: Implemented and tested custom keydown buffer logic for `↑ ↑ ↓ ↓ ← → ← → B A` and `Ctrl+K` for the Easter Egg modal.
