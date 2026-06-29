window.TAXONOMY = [
  {
    title: "MITRE ATT&CK Tactics",
    subtitle: "Sort each adversary technique or behavior into the ATT&CK tactic it serves.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "access", label: "Initial Access" },
      { id: "persistence", label: "Persistence" },
      { id: "credaccess", label: "Credential Access" },
      { id: "exfil", label: "Exfiltration" }
    ],
    items: [
      { text: "Spearphishing attachment", cat: "access" },
      { text: "Exploit public-facing application", cat: "access" },
      { text: "Drive-by compromise", cat: "access" },
      { text: "Valid accounts on a VPN gateway", cat: "access" },
      { text: "Create new local admin account", cat: "persistence" },
      { text: "Registry Run key autostart", cat: "persistence" },
      { text: "Scheduled task for reboot survival", cat: "persistence" },
      { text: "Web shell dropped on a server", cat: "persistence" },
      { text: "LSASS memory credential dump", cat: "credaccess" },
      { text: "Brute force password guessing", cat: "credaccess" },
      { text: "Kerberoasting service tickets", cat: "credaccess" },
      { text: "Keylogging captured input", cat: "credaccess" },
      { text: "Data transfer to cloud storage", cat: "exfil" },
      { text: "Exfiltration over DNS tunneling", cat: "exfil" },
      { text: "Compressed archive over C2 channel", cat: "exfil" },
      { text: "Scheduled bulk upload to external host", cat: "exfil" }
    ]
  },
  {
    title: "Indicators of Compromise: Atomic vs Computed vs Behavioral",
    subtitle: "Classify each indicator by whether it is atomic, computed, or behavioral.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "atomic", label: "Atomic Indicators" },
      { id: "computed", label: "Computed Indicators" },
      { id: "behavioral", label: "Behavioral Indicators" }
    ],
    items: [
      { text: "Malicious IP address", cat: "atomic" },
      { text: "Phishing email sender address", cat: "atomic" },
      { text: "Suspicious domain name", cat: "atomic" },
      { text: "Hardcoded C2 URL", cat: "atomic" },
      { text: "Specific TCP port number", cat: "atomic" },
      { text: "SHA-256 file hash", cat: "computed" },
      { text: "MD5 checksum of a payload", cat: "computed" },
      { text: "YARA rule match score", cat: "computed" },
      { text: "Regex-derived signature value", cat: "computed" },
      { text: "Fuzzy import hash (imphash)", cat: "computed" },
      { text: "Beaconing at regular intervals", cat: "behavioral" },
      { text: "Lateral movement followed by data staging", cat: "behavioral" },
      { text: "PowerShell spawning from a Word document", cat: "behavioral" },
      { text: "Privilege escalation then log clearing", cat: "behavioral" },
      { text: "Repeated failed logins then success off-hours", cat: "behavioral" }
    ]
  },
  {
    title: "CVSS Base Metrics",
    subtitle: "Sort each metric value under the CVSS base metric it belongs to.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "av", label: "Attack Vector (AV)" },
      { id: "ac", label: "Attack Complexity (AC)" },
      { id: "pr", label: "Privileges Required (PR)" },
      { id: "ui", label: "User Interaction (UI)" }
    ],
    items: [
      { text: "Network exploitable (N)", cat: "av" },
      { text: "Adjacent network (A)", cat: "av" },
      { text: "Local access required (L)", cat: "av" },
      { text: "Physical access required (P)", cat: "av" },
      { text: "Low complexity (L)", cat: "ac" },
      { text: "High complexity (H)", cat: "ac" },
      { text: "No special conditions to exploit", cat: "ac" },
      { text: "Attacker-controlled race condition needed", cat: "ac" },
      { text: "None: unauthenticated attacker (N)", cat: "pr" },
      { text: "Low: basic user account (L)", cat: "pr" },
      { text: "High: administrator account (H)", cat: "pr" },
      { text: "Authorization level before attack", cat: "pr" },
      { text: "None: no victim action (N)", cat: "ui" },
      { text: "Required: victim must click (R)", cat: "ui" },
      { text: "Victim must open a file", cat: "ui" },
      { text: "No user participation needed", cat: "ui" }
    ]
  },
  {
    title: "Vulnerability Scan Types",
    subtitle: "Sort each scan tool or technique into the scanning approach it represents.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "credentialed", label: "Credentialed" },
      { id: "noncred", label: "Non-credentialed" },
      { id: "passive", label: "Passive Discovery" },
      { id: "active", label: "Active Scanning" }
    ],
    items: [
      { text: "Authenticated patch-level audit", cat: "credentialed" },
      { text: "Reads registry with admin login", cat: "credentialed" },
      { text: "Enumerates installed software via SSH", cat: "credentialed" },
      { text: "Configuration compliance check with credentials", cat: "credentialed" },
      { text: "Unauthenticated network probe", cat: "noncred" },
      { text: "Attacker's-eye external view", cat: "noncred" },
      { text: "Banner grabbing without login", cat: "noncred" },
      { text: "Service version guess from open ports", cat: "noncred" },
      { text: "Sniffing traffic with no packets sent", cat: "passive" },
      { text: "Network tap fingerprinting", cat: "passive" },
      { text: "Listening for broadcast advertisements", cat: "passive" },
      { text: "Zero-footprint asset identification", cat: "passive" },
      { text: "Sending probe packets to targets", cat: "active" },
      { text: "TCP SYN port sweep", cat: "active" },
      { text: "Injecting test payloads to confirm a flaw", cat: "active" },
      { text: "OS detection via crafted packets", cat: "active" }
    ]
  },
  {
    title: "Incident Response Phases",
    subtitle: "Map each action to its NIST 800-61 incident response phase.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "prep", label: "Preparation" },
      { id: "detect", label: "Detection and Analysis" },
      { id: "contain", label: "Containment, Eradication, and Recovery" },
      { id: "post", label: "Post-Incident Activity" }
    ],
    items: [
      { text: "Build the incident response plan", cat: "prep" },
      { text: "Deploy and tune the SIEM", cat: "prep" },
      { text: "Assemble the jump bag and tools", cat: "prep" },
      { text: "Train responders with tabletop exercises", cat: "prep" },
      { text: "Correlate alerts to confirm an incident", cat: "detect" },
      { text: "Triage and categorize severity", cat: "detect" },
      { text: "Determine the scope of compromise", cat: "detect" },
      { text: "Analyze logs for indicators", cat: "detect" },
      { text: "Isolate the affected host from the network", cat: "contain" },
      { text: "Remove malware and close the vector", cat: "contain" },
      { text: "Reimage and restore from clean backups", cat: "contain" },
      { text: "Validate systems before return to service", cat: "contain" },
      { text: "Hold the lessons-learned meeting", cat: "post" },
      { text: "Write the final incident report", cat: "post" },
      { text: "Update playbooks from findings", cat: "post" },
      { text: "Retain evidence per the policy", cat: "post" }
    ]
  },
  {
    title: "Security Operations Tools by Function",
    subtitle: "Sort each tool into the SOC function it primarily supports.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "packet", label: "Packet Analysis" },
      { id: "siem", label: "SIEM / Log Analysis" },
      { id: "endpoint", label: "Endpoint / File Analysis" },
      { id: "threatintel", label: "Threat Intelligence" }
    ],
    items: [
      { text: "Wireshark", cat: "packet" },
      { text: "tcpdump", cat: "packet" },
      { text: "Zeek", cat: "packet" },
      { text: "Snort", cat: "packet" },
      { text: "Splunk", cat: "siem" },
      { text: "Elastic Stack", cat: "siem" },
      { text: "Microsoft Sentinel", cat: "siem" },
      { text: "Graylog", cat: "siem" },
      { text: "YARA", cat: "endpoint" },
      { text: "Strings", cat: "endpoint" },
      { text: "EDR agent telemetry", cat: "endpoint" },
      { text: "Sysinternals Autoruns", cat: "endpoint" },
      { text: "MISP", cat: "threatintel" },
      { text: "AlienVault OTX", cat: "threatintel" },
      { text: "OpenCTI", cat: "threatintel" },
      { text: "VirusTotal", cat: "threatintel" }
    ]
  },
  {
    title: "Control Types and Functions",
    subtitle: "Classify each security control by its implementation type.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "managerial", label: "Administrative / Managerial" },
      { id: "technical", label: "Technical" },
      { id: "physical", label: "Physical" }
    ],
    items: [
      { text: "Acceptable use policy", cat: "managerial" },
      { text: "Risk assessment program", cat: "managerial" },
      { text: "Security awareness training", cat: "managerial" },
      { text: "Background check requirement", cat: "managerial" },
      { text: "Vendor risk management process", cat: "managerial" },
      { text: "Firewall ruleset", cat: "technical" },
      { text: "Multifactor authentication", cat: "technical" },
      { text: "Full-disk encryption", cat: "technical" },
      { text: "Intrusion prevention system", cat: "technical" },
      { text: "Access control list", cat: "technical" },
      { text: "Security guard patrol", cat: "physical" },
      { text: "Biometric door lock", cat: "physical" },
      { text: "Bollards at the entrance", cat: "physical" },
      { text: "Perimeter fencing", cat: "physical" },
      { text: "Surveillance cameras", cat: "physical" }
    ]
  }
];
