# Architecture & Engineering Decisions: PulseEngine

**Candidate Track**: Part 2 — The Premium Home Page  
**Project**: PulseEngine (Resilient Data Extraction & Web Intelligence Platform)  
**Target Evaluator**: Acdyon Technologies Engineering Team  

---

### 1. Why This Ingestion & Product Strategy Over the Obvious Alternative Rejected?

**Strategy Chosen**: An interactive, developer-first product landing page featuring a live in-browser telemetry sandbox, real-time chaos simulator (429 rate limits, Turnstile challenges, DOM class drift), and complete transparency with **zero fake social proof or fabricated logos**.

**Obvious Alternative Rejected**: A standard SaaS landing page with static hero screenshots, fake enterprise client logos (e.g., "Used by Meta, Google"), stock photo testimonials, and hardcoded marketing counters.

**Rationale**:
- **Signal Over Hype**: Senior engineers evaluating code immediately spot fake logos and stock testimonials. Acdyon's prompt explicitly called out *"Constraint that separates signal from noise: no fabricated testimonials, fake user counts, or fake logos... This is the single biggest thing we grade on."*
- **Interactive Verification**: Rather than claiming "we bypass anti-bots", we built an interactive sandbox right inside the hero where evaluators can trigger live simulated extractions, inspect spoofed JA4+ TLS Client Hello headers, and inject chaos events to watch self-healing AST parsers recover in real-time.
- **Alignment with Acdyon's Core Domain**: By designing the product home page around resilient data extraction, proxy rotation, and anti-bot evasion, the landing page demonstrates deep domain awareness matching Part 1 of the challenge.

---

### 2. One Trade-Off Made Under the Time Limit & What I'd Do with a Real Week

**Trade-Off Made Under Time Limit**:
- **Simulated Ingestion Engine**: To ensure 100% reliable, zero-latency evaluation without dependency on external rate limits, live proxy API keys, or target IP bans during review, the interactive sandbox runs an in-memory simulation engine (`lib/sandbox-simulation.ts`) with deterministic headers, telemetry logs, and chaos state triggers.

**What I'd Build With a Real Week**:
1. **Live WebAssembly (Wasm) TLS Socket Engine**: Compile a Rust/Go HTTP/2 client to WebAssembly so the browser sandbox makes actual socket-level TLS requests with customizable Client Hello ciphersuites directly from client JS.
2. **Dynamic DOM Parser Visualizer**: Render an interactive DOM tree split-view showing before-and-after HTML markup when a target site mutates its class names, highlighting how the self-healing JSON-LD/Microdata AST fallback extracts clean JSON.
3. **OpenAPI / SDK Code Generator**: Add live tabs to copy runnable client SDK code snippets in Python (`httpx` + stealth TLS), Node.js, and Go for any selected extraction pipeline.

---

### 3. Where AI Tools Were Used & What Was Personally Verified / Modified

**Where AI Tools Were Used**:
- **Component Scaffold & Layout Geometry**: AI was used to draft initial Tailwind CSS utility class combinations for responsive container breakpoints (390px mobile to 1440px desktop) and framer-motion transition configurations.
- **Simulation Log & Header Mock Generation**: AI assisted in generating realistic Chrome 128 JA4 TLS extension strings and HTTP/2 pseudo-header sequences.

**What I Personally Verified & Modified**:
- **Dark Mode & Contrast Audit**: Verified every background surface (`--card`, `--background`, `--muted`) using Tailwind CSS variables and `next-themes` to guarantee zero unreadable dark text on dark backgrounds or FOUC flashes on load.
- **Responsive Layout Integrity**: Tested at exactly 390px (iPhone width) and 1440px (desktop width) to confirm zero horizontal scroll, perfect touch target sizing, and responsive drawer menu behavior.
- **Konami Code Keyboard Listener**: Wrote and verified the custom `keydown` event buffer logic for `↑ ↑ ↓ ↓ ← → ← → B A` and `Ctrl+K` to ensure the Easter Egg terminal opens smoothly without memory leaks or event duplicate listeners.
- **Strict Compliance with Grading Guardrails**: Audited every line of text across all components to ensure zero fabricated user counts, fake customer quotes, or unauthorized brand logos were used.
