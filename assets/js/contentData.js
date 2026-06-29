/* ============================================================================
   cysa+  ::  contentData.js
   Exam facts, per-domain metadata + objectives, PBQ format definitions,
   curated external resources, the Exam-Mechanics and Career-Guidance readers,
   and (lazy-loaded) the textbook-dense domain reading content.

   This file loads first and establishes the global CYSAPLUS namespace consumed
   by quizEngine.js and app.js. EVERY exam figure lives once in CYSAPLUS.exam;
   the dashboard, mock engine, scoring, analytics, and readouts all read from it.

   Authored by Professor Rizwan Virani.
   ========================================================================== */
window.CYSAPLUS = window.CYSAPLUS || {};

/* ---- SINGLE SOURCE OF TRUTH for every exam figure ---- */
CYSAPLUS.exam = {
  code: "CS0-004",
  name: "CompTIA CySA+",
  minutes: 165,
  maxQuestions: 85,
  scaleLow: 100, scaleHigh: 900, passing: 750,
  domains: 4,
  launched: "2025",
  retiredPredecessor: "CS0-003"
};

/* Per-domain metadata. `objectives` mirror the official CS0-004 exam outline.
   `sectionCount` is the number of dense reading sections in each domain module. */
CYSAPLUS.domainMeta = [
  { id: 1, weight: 34, color: "d1", icon: "🛰", title: "Security Operations", sectionCount: 16,
    short: "The largest domain: system and network architecture, logging, IAM, and encryption that support secure operations; analyzing network, host, application, cloud, identity, and email indicators of malicious activity; the analyst's tooling (SIEM, EDR/XDR, packet and file analysis, sandboxing); threat intelligence and threat hunting; efficiency and process improvement; and the use of AI in security operations.",
    objectives: [
      { id: "1.1", t: "Explain concepts related to system and network architecture in security operations" },
      { id: "1.2", t: "Given a scenario, analyze indicators of potential malicious activity" },
      { id: "1.3", t: "Given a scenario, use tools to determine malicious activity" },
      { id: "1.4", t: "Explain threat intelligence and threat-hunting concepts" },
      { id: "1.5", t: "Explain the importance of efficiency and process improvement in security operations" },
      { id: "1.6", t: "Summarize concepts related to the use of AI in security operations" }
    ] },
  { id: 2, weight: 26, color: "d2", icon: "🔎", title: "Vulnerability Management", sectionCount: 14,
    short: "Implementing the right vulnerability scanning method, analyzing the output of assessment tools, and prioritizing and mitigating findings with CVSS, EPSS, threat intelligence, and business context — plus the control types, risk concepts, application security, and third-party risk that frame vulnerability management.",
    objectives: [
      { id: "2.1", t: "Given a scenario, implement the appropriate vulnerability scanning method" },
      { id: "2.2", t: "Given a scenario, analyze output from vulnerability assessment tools" },
      { id: "2.3", t: "Given a scenario, analyze data to prioritize and mitigate vulnerabilities" },
      { id: "2.4", t: "Explain concepts related to control types, risks, and vulnerability management" }
    ] },
  { id: 3, weight: 24, color: "d3", icon: "🚨", title: "Incident Response and Management", sectionCount: 12,
    short: "Attack-methodology frameworks (the Cyber Kill Chain, the Diamond Model, and MITRE ATT&CK), the full incident-response lifecycle from preparation through post-incident activity, and the hands-on techniques an analyst applies: triage, timeline building, evidence acquisition and chain of custody, containment, eradication, and continuous monitoring.",
    objectives: [
      { id: "3.1", t: "Summarize concepts related to attack methodology frameworks" },
      { id: "3.2", t: "Summarize the incident response process" },
      { id: "3.3", t: "Given a scenario, implement incident response techniques" }
    ] },
  { id: 4, weight: 16, color: "d4", icon: "📊", title: "Reporting and Communication", sectionCount: 9,
    short: "Turning analysis into action: vulnerability scan reports, compliance findings, risk scorecards, action plans, and the inhibitors to remediation; plus incident declaration and escalation, executive summaries, communication plans, post-incident reporting, and the metrics and KPIs (mean time to detect, respond, and remediate) that measure a security program.",
    objectives: [
      { id: "4.1", t: "Explain the importance of vulnerability management reporting and communication" },
      { id: "4.2", t: "Explain the importance of security operations and incident response reporting and communication" }
    ] }
];

/* The five PBQ formats. `domainColor` just drives the badge tint. */
CYSAPLUS.pbqFormats = [
  { id: 1, icon: "🚨", domainColor: 1, obj: "1.2 / 1.3", badge: "SIEM & LOG TRIAGE", title: "SIEM Alert & Log Triage",
    desc: "Read SIEM, EDR, and authentication-log exhibits, name the suspicious indicator and likely technique, set severity, and choose the correct first response.",
    long: "You are the on-call analyst staring at an alert. Read the log exhibit, then identify the <b>indicator of compromise</b>, map it to a likely <b>technique</b>, assign a <b>severity</b>, and select the correct <b>first response</b> — escalating, isolating, or collecting evidence in line with sound triage." },
  { id: 2, icon: "🔢", domainColor: 2, obj: "2.2 / 2.3", badge: "CVSS & PRIORITIZATION", title: "CVSS Scoring & Vulnerability Prioritization",
    desc: "Interpret CVSS vector strings and scan-finding tables (CVE, CVSS, EPSS, exposure), then decide which vulnerability to remediate first and why.",
    long: "Risk-based prioritization. Decode a <b>CVSS</b> vector, read <b>EPSS</b> and asset exposure, and weigh <b>active exploitation</b> and business context to rank findings. The exam rewards remediating the vulnerability that is both exploitable and exposed — not merely the highest base score." },
  { id: 3, icon: "🔥", domainColor: 3, obj: "3.2 / 3.3", badge: "INCIDENT RESPONSE", title: "Incident Response Lifecycle",
    desc: "Given an unfolding incident, identify the current IR phase, choose the correct next action, order the steps, and apply proper evidence handling.",
    long: "Drive the incident to closure. Identify whether you are in <b>detection, containment, eradication,</b> or <b>recovery</b>, pick the correct next action, and respect <b>chain of custody</b> and <b>order of volatility</b> so the response is both effective and defensible." },
  { id: 4, icon: "📡", domainColor: 1, obj: "1.2 / 1.3", badge: "PACKET ANALYSIS", title: "Packet & Network Indicator Analysis",
    desc: "Interpret tcpdump/Wireshark summaries, Zeek logs, and Snort/Suricata alerts to spot beaconing, exfiltration, scanning, and command-and-control.",
    long: "Read the wire. From a <b>packet capture</b>, <b>Zeek conn log</b>, or <b>IDS alert</b>, identify the malicious pattern — periodic <b>beaconing</b>, bulk <b>exfiltration</b>, a port <b>scan</b>, or <b>C2</b> — name the ports and protocols involved, and choose the right detection or containment." },
  { id: 5, icon: "🎯", domainColor: 3, obj: "1.4 / 3.1", badge: "THREAT INTEL & ATT&CK", title: "Threat Intelligence & MITRE ATT&CK Mapping",
    desc: "Map observed adversary behavior to ATT&CK tactics and techniques, place indicators on the Pyramid of Pain, judge intel confidence, and form a hunt hypothesis.",
    long: "Think like a threat hunter. Translate observed <b>TTPs</b> into <b>MITRE ATT&CK</b> tactics and techniques, rank indicators on the <b>Pyramid of Pain</b>, weigh the <b>confidence</b> of your intelligence, and turn it into a testable <b>hunting hypothesis</b>." }
];

/* Curated free study resources. */
CYSAPLUS.resources = [
  { icon: "📄", title: "Official CompTIA CySA+ CS0-004 Exam Objectives (PDF)", host: "comptia.org",
    url: "https://www.comptia.org/en-us/certifications/cybersecurity-analyst/",
    desc: "The authoritative exam outline — every objective and sub-bullet CompTIA can test. Download the objectives PDF from the certification page and use it as your master checklist." },
  { icon: "🧮", title: "MITRE ATT&CK Framework", host: "attack.mitre.org",
    url: "https://attack.mitre.org/",
    desc: "The knowledge base of adversary tactics and techniques at the heart of Domains 1 and 3. Use the matrices to practice mapping observed behavior to techniques and to drive threat-hunting hypotheses." },
  { icon: "📚", title: "NIST SP 800-61 & the CSRC Glossary", host: "csrc.nist.gov",
    url: "https://csrc.nist.gov/glossary",
    desc: "The incident-handling lifecycle CySA+ tests comes straight from NIST SP 800-61. The CSRC glossary and 800-series publications (800-53 controls, 800-40 patching) underpin much of the exam's vocabulary." },
  { icon: "🎯", title: "FIRST — CVSS & EPSS", host: "first.org",
    url: "https://www.first.org/cvss/",
    desc: "The official specifications for the Common Vulnerability Scoring System and the Exploit Prediction Scoring System — the two scoring models Domain 2 expects you to read, compute, and combine for risk-based prioritization." },
  { icon: "👥", title: "r/CompTIA — Community Wiki & Study Guides", host: "reddit.com/r/CompTIA",
    url: "https://www.reddit.com/r/CompTIA/wiki/index/",
    desc: "Crowd-sourced study plans, exam-day experiences, and well-known community guides. Read recent “passed CySA+” posts for current question-style intel." },
  { icon: "🛡", title: "MITRE Engenuity & Atomic Red Team", host: "github.com/redcanaryco",
    url: "https://github.com/redcanaryco/atomic-red-team",
    desc: "Open detection and adversary-emulation content. Atomic Red Team tests map directly to ATT&CK techniques, reinforcing the detection-engineering and threat-hunting skills the exam rewards." }
];

/* ---- Reader: Exam Mechanics card ---- */
CYSAPLUS.examMechanics = [
  { heading: "Format, length, and delivery", body:
    "<p>The <strong>CompTIA CySA+ CS0-004</strong> is a single exam of <strong>up to 85 questions</strong> to be completed in <strong>165 minutes</strong>. It is delivered at a Pearson VUE testing center or via OnVUE online proctoring. Because the count is a <em>maximum</em>, your particular form may contain fewer scored items; CompTIA also seeds unscored items it is evaluating for future exams, and you cannot tell which is which — so treat every question as if it counts.</p>" +
    "<p>CySA+ is an <strong>intermediate, analyst-level</strong> exam. It leans heavily on <strong>performance-based questions (PBQs)</strong> — interactive tasks such as analyzing log output, interpreting a vulnerability scan, or sequencing an incident response — mixed with multiple-choice items. PBQs are worth more and consume more time, which drives the single most important time-management rule below.</p>" +
    "<div class='callout exam'><div class='lbl'>Exam tip</div>PBQs often appear first and can devour your clock. If one stalls you, <strong>flag it and move on</strong>. Bank the faster multiple-choice points first, then return to the flagged PBQs with the time you have left.</div>" },
  { heading: "Scoring: the 100–900 scale", body:
    "<p>CySA+ is scored on a <strong>scaled range of 100 to 900</strong>, and the passing score is <strong>750</strong>. Scaled scoring is not a simple percentage: CompTIA weights items by difficulty and equates across exam forms so no candidate is advantaged or disadvantaged by drawing a harder set. You cannot reverse-engineer an exact “number correct” from 750, and CompTIA does not publish the raw-to-scaled mapping.</p>" +
    "<p>There is <strong>no penalty for guessing</strong> — an unanswered question is simply wrong — so never leave an item blank. Eliminate obviously wrong options, make your best choice, flag it if unsure, and move on. For PBQs, partial credit is generally available, so complete every field you can even when one stumps you.</p>" +
    "<blockquote>This platform's mock exam reports a scaled score using a transparent linear approximation of the 100–900 band. Use it as a <em>relative</em> readiness signal — “am I trending toward 750?” — not as a literal prediction of your official score.</blockquote>" },
  { heading: "Question styles and how to read them", body:
    "<p>CompTIA writes “best answer” questions. Often two or three options are <em>plausible</em> and only one is <em>best</em> for the scenario described. Read the <strong>last sentence first</strong> — it usually contains the actual ask (“which action should the analyst take <em>first</em>”, “which finding should be remediated <em>first</em>”). Words like <strong>first</strong>, <strong>best</strong>, <strong>most likely</strong>, and <strong>least</strong> are decisive.</p>" +
    "<ul><li><strong>Multiple-response</strong> items tell you how many to pick (“choose two”). You must get all of them right for credit.</li><li><strong>Scenario</strong> items bury the relevant detail in a paragraph — identify the asset, the indicator, and the constraint before looking at options.</li><li><strong>PBQs</strong> reward methodical work; complete every field you can, because partial credit is generally available.</li></ul>" +
    "<div class='callout'><div class='lbl'>Strategy</div>Use the <strong>flag-and-review</strong> workflow. First pass: answer everything you know cold and flag the rest. Second pass: spend remaining minutes only on flagged items. This guarantees you never run out of time with easy points unanswered.</div>" },
  { heading: "Who should sit CySA+, prerequisites, and cost", body:
    "<p>There are <strong>no formal prerequisites</strong>, but CompTIA recommends <strong>Network+</strong> and <strong>Security+</strong> plus roughly <strong>four years</strong> of hands-on information-security or related experience. CySA+ is aimed at <em>working analysts</em> — SOC analysts, threat hunters, incident responders, and vulnerability-management staff — so the questions assume you can reason about real telemetry, not just recall definitions.</p>" +
    "<p>The exam voucher cost varies by region (commonly in the US$390+ range). Academic and bundle discounts exist — ask your institution, and ask your Program Director or professor about funding that may cover a voucher.</p>" +
    "<div class='callout scenario'><div class='lbl'>Where it sits</div>CySA+ is a <strong>cybersecurity analyst</strong> credential. It sits a tier above the foundational Security+ and alongside other intermediate analyst certifications, building toward advanced credentials such as CASP+/SecurityX and CISSP.</div>" },
  { heading: "Renewal and exam-day logistics", body:
    "<p>CySA+ is valid for <strong>three years</strong> and participates in CompTIA's <strong>Continuing Education (CE)</strong> program: you renew by earning continuing-education units or higher-level certifications rather than re-sitting the exam. Keep the certification active — for many DoD and employer roles, a lapsed cert means a lapsed authorization to work.</p>" +
    "<p>Bring two forms of ID; for online proctoring you must show a clear workspace, a working webcam, and a stable connection. You cannot use notes, phones, or smartwatches. Use any provided on-screen whiteboard to jot the things you will otherwise lose under pressure — the IR lifecycle order, the CVSS metric groups, the order of volatility.</p>" +
    "<div class='callout exam'><div class='lbl'>Mindset</div>CySA+ tests <strong>analytical judgment</strong>, not trivia. Most questions are answerable by applying core analyst reasoning — what does this indicator mean, what is the impact, what do I do next — to the scenario in front of you.</div>" }
];

/* ---- Reader: Career Guidance card ---- */
CYSAPLUS.careerGuidance = [
  { heading: "Where CySA+ sits on the ladder", body:
    "<p><strong>CySA+ is an intermediate, analyst-focused cybersecurity certification.</strong> It sits above the foundational, vendor-neutral Security+ and below advanced credentials such as CASP+/SecurityX and CISSP. Where Security+ proves you understand security <em>concepts</em>, CySA+ proves you can <em>do the work</em> of a defender: read the logs, interpret the scan, hunt the threat, and run the incident.</p>" +
    "<p>For hiring managers, CySA+ on a résumé signals that a candidate can step into a security operations center and contribute to detection and response with limited ramp-up. It is frequently listed as a <em>preferred</em> or <em>required</em> qualification for SOC analyst and vulnerability-management roles.</p>" },
  { heading: "DoD 8140 / 8570 baseline", body:
    "<p>One of CySA+'s most concrete career levers is U.S. Department of Defense workforce policy. Under <strong>DoD Directive 8570.01-M</strong> — now being superseded by the <strong>DoD 8140</strong> framework — many cyber roles on DoD systems require an approved baseline certification. <strong>CySA+ satisfies several DoD baseline categories</strong>, including analyst and incident-response work roles (for example CSSP Analyst and CSSP Incident Responder).</p>" +
    "<p>In plain terms: a large number of defense and federal-contractor positions <em>cannot legally be staffed</em> by someone without an approved cert, and CySA+ is an approved option for analyst-level roles. Holding it can be the difference between being eligible and being disqualified for an entire category of jobs.</p>" +
    "<div class='callout exam'><div class='lbl'>Why it matters</div>The 8140/8570 baseline turns CySA+ from a “nice to have” into a <strong>gatekeeping requirement</strong> for government-adjacent defensive roles. If a DoD SOC or CSSP career interests you, an approved analyst cert is effectively mandatory.</div>" },
  { heading: "Roles CySA+ opens", body:
    "<p>CySA+ aligns with the cluster of defensive, operations-centric roles a security program depends on day to day:</p>" +
    "<ul>" +
    "<li><strong>SOC Analyst (Tier 1 / Tier 2)</strong> — triaging alerts, reading SIEM and EDR telemetry, escalating and investigating incidents. Domain 1 maps almost directly to this job.</li>" +
    "<li><strong>Incident Responder / DFIR analyst</strong> — running the IR lifecycle, acquiring evidence, and driving root cause analysis. Domain 3 is built for this.</li>" +
    "<li><strong>Vulnerability Management Analyst</strong> — scanning, interpreting findings, and prioritizing remediation with CVSS, EPSS, and business context. Domain 2 is the foundation.</li>" +
    "<li><strong>Threat Intelligence / Threat Hunting analyst</strong> — operationalizing intel, mapping TTPs to ATT&CK, and hunting proactively.</li>" +
    "<li><strong>Security Operations reporting / GRC-adjacent roles</strong> — communicating risk to stakeholders, building scorecards, and tracking program metrics. Domain 4 underpins these.</li>" +
    "</ul>" },
  { heading: "Building the path beyond CySA+", body:
    "<p>Treat CySA+ as the credential that gets you <em>into</em> defensive operations and lets you grow within them. A common trajectory: <em>Security+ → CySA+ → deeper specialization</em>. From here, detection-and-response analysts often add a SIEM/EDR vendor certification or pursue blue-team tracks; threat-focused learners move toward dedicated threat-hunting or intelligence credentials; and those eyeing senior or architect roles work toward <strong>CASP+/SecurityX</strong> or <strong>CISSP</strong> as their experience grows.</p>" +
    "<div class='callout scenario'><div class='lbl'>Practical advice</div>Pair the cert with <strong>demonstrable hands-on skill</strong> — a home SOC lab, a SIEM you have actually queried, CTF or detection-engineering practice, and documented investigations. Certifications get you past résumé filters; practical evidence gets you through interviews.</div>" }
];

/* Reading content and flashcard decks are lazy-loaded per domain from
   assets/js/content/domainN.js and flashN.js. Those modules populate the
   shared targets below the first time a card is opened. */
CYSAPLUS.reading = CYSAPLUS.reading || {};
CYSAPLUS.flash = CYSAPLUS.flash || {};
