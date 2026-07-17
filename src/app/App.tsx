import { useState } from "react";
import { ArrowRight, Check, Phone, Mail } from "lucide-react";

// ── Brand constants (extracted from genuineq.com assets) ──────────────────────
const BRAND_BLUE = "#1544BD";
const BRAND_NAVY = "#0B1829";
const BRAND_WHITE = "#F8F9FE";

// ── Genuine logo mark SVG (circular orbital mark) ────────────────────────────
function LogoMark({ size = 40, dark = false }: { size?: number; dark?: boolean }) {
  const fill = dark ? BRAND_WHITE : BRAND_NAVY;
  return (
    <svg width={size} height={size} viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M29.4792 27.4812C18.6736 33.7756 19.7361 52.1063 11.158 41.4686C3.07553 31.446 8.88055 16.9481 19.3429 10.8139C29.6696 4.7589 45.6842 6.64814 50.4052 18.6666C55.4451 31.4944 39.7173 21.5179 29.4792 27.4812ZM42.6325 50.4684C42.6499 50.4583 42.6671 50.4483 42.6849 50.4382C46.8271 48.0511 52.1281 49.4283 54.5675 53.5189C54.919 53.1582 55.2648 52.7881 55.6021 52.4066C55.6044 52.4044 55.6069 52.4013 55.6093 52.3991C67.1896 39.3139 65.905 19.3767 52.7398 7.86741C39.5716 -3.64659 19.5035 -2.37408 7.91672 10.7104C-3.67011 23.7944 -2.38858 43.7357 10.7791 55.2498C18.9418 62.3874 29.7554 64.609 39.5566 62.152C37.1786 58.0826 38.5476 52.8626 42.6325 50.4684Z"
        fill={fill}
      />
      <circle cx="47.094" cy="57.652" r="6.282" fill={BRAND_BLUE} />
    </svg>
  );
}

// ── Inline landscape logo (wordmark + mark) ───────────────────────────────────
function LogoFull({ dark = false }: { dark?: boolean }) {
  const textFill = dark ? BRAND_WHITE : BRAND_NAVY;
  return (
    <div className="flex items-center gap-2.5">
      <LogoMark size={34} dark={dark} />
      <span
        style={{
          fontFamily: "'Hanken Grotesk', system-ui, sans-serif",
          fontWeight: 600,
          fontSize: "1.15rem",
          color: textFill,
          letterSpacing: "-0.02em",
        }}
      >
        genuineq
      </span>
    </div>
  );
}

// ── Content data ──────────────────────────────────────────────────────────────
const expertise = [
  "Software development",
  "AI solutions and integrations",
  "Technical strategy and consulting",
  "Software architecture",
  "UX and interface design",
  "Manual quality assurance",
];

const goodFit = [
  "Need additional capacity for an existing technology team or product",
  "Need expertise that is not consistently available in-house",
  "Want to move several technical initiatives forward without hiring multiple specialists",
  "Require support with technical decisions, architecture or coordination",
  "Want to develop or integrate AI capabilities",
  "Prefer the continuity of one technology partner over coordinating several separate providers",
];

const benefits = [
  {
    title: "Fixed and predictable monthly capacity",
    desc: "A predefined number of team hours is reserved for your company every month, making technical capacity easier to plan and manage.",
  },
  {
    title: "Access to multiple capabilities",
    desc: "Access several areas of expertise through one engagement, without sourcing and coordinating separate specialists for each need.",
  },
  {
    title: "Flexibility across services",
    desc: "Allocate the fixed monthly capacity across the agreed service areas during monthly planning, based on your current priorities.",
  },
  {
    title: "Continuity and accumulated context",
    desc: "A stable core team remains involved over time and develops a stronger understanding of your product, business, technical environment and working processes.",
  },
  {
    title: "One point of contact",
    desc: "Work through one consistent point of contact, reducing coordination effort and maintaining clear visibility over priorities, capacity and progress.",
  },
  {
    title: "Reduced hiring and coordination effort",
    desc: "You gain access to a broader range of expertise without recruiting and managing several separate internal roles or external specialists.",
  },
];

const steps = [
  {
    num: "01",
    title: "Initial alignment",
    desc: "Align your business priorities, technology context and existing team with the way the collaboration will operate.",
  },
  {
    num: "02",
    title: "Monthly planning",
    desc: "Agree and prioritise the activities to be covered within the fixed monthly capacity.",
  },
  {
    num: "03",
    title: "Team coordination",
    desc: "Work through one consistent point of contact, while the required expertise is coordinated within the Genuineq team.",
  },
  {
    num: "04",
    title: "Ongoing collaboration",
    desc: "Integrate the collaboration into your existing communication, project management and technical processes.",
  },
  {
    num: "05",
    title: "Regular checkpoints",
    desc: "Maintain visibility over progress, capacity and upcoming priorities through regular checkpoints agreed with your team.",
  },
];

const plans = [
  {
    name: "Core Capacity",
    hours: "40",
    desc: "Suitable for companies that need limited but consistent access to technology expertise and implementation support.",
    highlight: false,
  },
  {
    name: "Growth Capacity",
    hours: "80",
    desc: "Suitable for companies with recurring technology needs across several areas of expertise.",
    highlight: true,
  },
  {
    name: "Extended Capacity",
    hours: "160",
    desc: "Suitable for companies that need significant ongoing capacity across multiple technology priorities.",
    highlight: false,
  },
];

const techStack = ["Laravel and PHP", "Vue.js and Nuxt", "AI technologies and integrations"];

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif" }}
    >
      {/* ── Navigation ── */}
      <header style={{ background: BRAND_NAVY }} className="sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="https://genuineq.com" target="_blank" rel="noopener noreferrer">
            <LogoFull dark />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {["Overview", "Expertise", "Packages", "Process"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm transition-colors duration-150"
                style={{ color: "rgba(248,249,254,0.55)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = BRAND_WHITE)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(248,249,254,0.55)")}
              >
                {item}
              </a>
            ))}
          </nav>
          <a
            href="https://genuineq.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium px-5 py-2.5 transition-all duration-150"
            style={{ background: BRAND_BLUE, color: BRAND_WHITE }}
          >
            Get in touch <ArrowRight size={14} />
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section style={{ background: BRAND_NAVY }} className="relative overflow-hidden">
        {/* subtle background mark */}
        <div
          className="absolute right-0 top-0 w-[600px] h-[600px] pointer-events-none opacity-[0.04]"
          style={{ transform: "translate(20%, -15%)" }}
        >
          <LogoMark size={600} dark />
        </div>

        <div className="max-w-6xl mx-auto px-6 pt-20 pb-24 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 mb-6">
                <span
                  className="inline-block w-6 h-px"
                  style={{ background: BRAND_BLUE }}
                />
                <p
                  className="text-xs font-medium uppercase tracking-widest"
                  style={{ color: BRAND_BLUE, letterSpacing: "0.18em" }}
                >
                  Engagement Model
                </p>
              </div>
              <h1
                className="text-5xl sm:text-6xl lg:text-[5rem] font-bold leading-[1.02] tracking-tight"
                style={{ color: BRAND_WHITE }}
              >
                Team Capacity<br />Retainer
              </h1>
              <p
                className="mt-6 text-lg leading-relaxed max-w-xl"
                style={{ color: "rgba(248,249,254,0.6)" }}
              >
                Ongoing access to an experienced technology team — without building every capability internally.
              </p>
              <div className="mt-10 flex items-center gap-4">
                <a
                  href="https://genuineq.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold transition-all duration-150 hover:gap-3"
                  style={{ background: BRAND_BLUE, color: BRAND_WHITE }}
                >
                  Book a discovery call <ArrowRight size={15} />
                </a>
                <a
                  href="https://genuineq.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium transition-colors duration-150"
                  style={{ color: "rgba(248,249,254,0.5)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = BRAND_WHITE)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(248,249,254,0.5)")}
                >
                  genuineq.com →
                </a>
              </div>
            </div>

            <aside
              className="lg:col-span-4 border-l pl-8 py-4 hidden lg:flex flex-col gap-5"
              style={{ borderColor: "rgba(248,249,254,0.1)" }}
            >
              <p className="text-sm leading-relaxed" style={{ color: "rgba(248,249,254,0.55)" }}>
                A fixed number of hours reserved each month gives you access to expertise across software development, AI, technical strategy, architecture and design.
              </p>
              <div className="space-y-3 pt-1">
                {["Fixed monthly capacity", "One point of contact", "3-month minimum term"].map((t) => (
                  <div key={t} className="flex items-center gap-2.5 text-xs" style={{ color: "rgba(248,249,254,0.45)" }}>
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: BRAND_BLUE }} />
                    {t}
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Overview ── */}
      <Section label="Overview">
        <p className="text-xl sm:text-2xl font-semibold leading-relaxed mb-5">
          Expand your technology capacity without having to recruit and manage every capability internally.
        </p>
        <p className="text-base text-muted-foreground leading-relaxed mb-4">
          The model is designed for companies that need additional capacity across software development, AI, technical strategy, architecture and design, without having to build every capability internally.
        </p>
        <p className="text-base text-muted-foreground leading-relaxed">
          A stable core team develops an increasing understanding of your business and technology, reducing repeated onboarding and improving continuity over time.
        </p>
      </Section>

      <Divider />

      {/* ── Expertise ── */}
      <Section label="Expertise">
        <h2 className="text-2xl font-semibold mb-2">Expertise available to your team</h2>
        <p className="text-sm text-muted-foreground mb-8">The reserved monthly capacity can be allocated across:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {expertise.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3.5 p-4 border border-border bg-background hover:bg-card transition-colors duration-150 group cursor-default"
              style={{ borderLeftColor: "transparent" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderLeftColor = BRAND_BLUE)}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderLeftColor = "transparent")}
            >
              <span
                className="text-[10px] font-mono mt-0.5 flex-shrink-0"
                style={{ color: BRAND_BLUE }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm text-foreground leading-snug">{item}</span>
            </div>
          ))}
        </div>
      </Section>

      <Divider />

      {/* ── Good fit ── */}
      <Section label="Good fit">
        <h2 className="text-2xl font-semibold mb-2">When this model is a good fit</h2>
        <p className="text-sm text-muted-foreground mb-8">The Team Capacity Retainer is designed for companies that:</p>
        <ul className="space-y-0">
          {goodFit.map((item, i) => (
            <li key={i} className="flex items-start gap-4 py-4 border-b border-border first:border-t group">
              <span
                className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                style={{ background: BRAND_BLUE }}
              >
                <Check size={10} color={BRAND_WHITE} strokeWidth={3} />
              </span>
              <span className="text-sm text-foreground leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Divider />

      {/* ── Benefits ── */}
      <Section label="Benefits">
        <h2 className="text-2xl font-semibold mb-10">Key benefits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-9">
          {benefits.map((b, i) => (
            <div key={i} className="space-y-2">
              <div className="flex items-baseline gap-2.5">
                <span className="text-[10px] font-mono flex-shrink-0" style={{ color: BRAND_BLUE }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-sm font-semibold text-foreground leading-snug">{b.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed pl-[1.6rem]">{b.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Divider />

      {/* ── Process ── */}
      <Section label="Process">
        <h2 className="text-2xl font-semibold mb-8">How the collaboration works</h2>
        <div>
          {steps.map((s, i) => (
            <div
              key={i}
              className="grid grid-cols-12 gap-4 py-5 border-b border-border cursor-default select-none transition-colors duration-150 -mx-4 px-4"
              style={{ background: hoveredStep === i ? "rgba(21, 68, 189, 0.04)" : "transparent" }}
              onMouseEnter={() => setHoveredStep(i)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <div className="col-span-1 pt-0.5">
                <span
                  className="text-[10px] font-mono transition-colors duration-150"
                  style={{ color: hoveredStep === i ? BRAND_BLUE : "#62728A" }}
                >
                  {s.num}
                </span>
              </div>
              <div className="col-span-4 sm:col-span-3">
                <h3
                  className="text-sm font-semibold transition-colors duration-150"
                  style={{ color: hoveredStep === i ? BRAND_BLUE : BRAND_NAVY }}
                >
                  {s.title}
                </h3>
              </div>
              <div className="col-span-7 sm:col-span-8">
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Divider />

      {/* ── Engagement Options ── */}
      <Section label="Packages">
        <h2 className="text-2xl font-semibold mb-2">Engagement options</h2>
        <p className="text-sm text-muted-foreground mb-8">
          The number of monthly hours is fixed according to the selected package and functions as a monthly team retainer.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="flex flex-col gap-5 p-6 border"
              style={{
                borderColor: plan.highlight ? BRAND_BLUE : "var(--border)",
                background: plan.highlight ? `rgba(21,68,189,0.04)` : "var(--card)",
              }}
            >
              {plan.highlight && (
                <span
                  className="text-[9px] font-mono uppercase tracking-widest"
                  style={{ color: BRAND_BLUE }}
                >
                  Most popular
                </span>
              )}
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1.5">
                  <span
                    className="text-5xl font-bold leading-none"
                    style={{ color: plan.highlight ? BRAND_BLUE : BRAND_NAVY }}
                  >
                    {plan.hours}
                  </span>
                  <span className="text-xs text-muted-foreground">hrs / month</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{plan.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Divider />

      {/* ── Technology focus + Terms ── */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground mb-5">
              Technology focus
            </p>
            <h2 className="text-xl font-semibold mb-4">Primary technology stack</h2>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              This engagement is primarily designed for companies working with:
            </p>
            <ul className="space-y-3">
              {techStack.map((t, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-foreground">
                  <span className="w-5 h-px flex-shrink-0" style={{ background: BRAND_BLUE }} />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:border-l lg:border-border lg:pl-16">
            <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground mb-5">
              Commercial terms
            </p>
            <h2 className="text-xl font-semibold mb-6">Engagement period</h2>
            <div className="space-y-3">
              <div className="p-5 border border-border bg-card">
                <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1.5">
                  Minimum period
                </p>
                <p className="text-base font-medium text-foreground">Three months</p>
              </div>
              <div
                className="p-5 border"
                style={{ borderColor: BRAND_BLUE, background: "rgba(21,68,189,0.04)" }}
              >
                <p
                  className="text-[10px] font-mono uppercase tracking-widest mb-1.5"
                  style={{ color: BRAND_BLUE }}
                >
                  Recommended
                </p>
                <p className="text-base font-medium text-foreground">
                  Six months{" "}
                  <span className="text-sm font-normal text-muted-foreground">
                    — for a stable, long-term partnership
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA / About ── */}
      <section style={{ background: BRAND_NAVY }} className="relative overflow-hidden">
        {/* decorative mark */}
        <div
          className="absolute left-0 bottom-0 pointer-events-none opacity-[0.05]"
          style={{ transform: "translate(-30%, 30%)" }}
        >
          <LogoMark size={500} dark />
        </div>

        <div className="max-w-6xl mx-auto px-6 py-24 relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-5">
              <span className="inline-block w-6 h-px" style={{ background: BRAND_BLUE }} />
              <p
                className="text-xs font-medium uppercase tracking-widest"
                style={{ color: BRAND_BLUE, letterSpacing: "0.18em" }}
              >
                About Genuineq
              </p>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold leading-tight mb-6"
              style={{ color: BRAND_WHITE }}
            >
              A technology partner,<br />not just a vendor.
            </h2>
            <p className="text-base leading-relaxed max-w-lg" style={{ color: "rgba(248,249,254,0.6)" }}>
              Genuineq is a technology partner for companies building and evolving digital products with Laravel, Vue and AI. Our multidisciplinary approach gives clients access to both hands-on implementation and the broader technical expertise required to make informed decisions and move initiatives forward.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div
              className="p-8 border"
              style={{ borderColor: "rgba(248,249,254,0.1)", background: "rgba(248,249,254,0.04)" }}
            >
              <p
                className="text-[10px] font-mono uppercase tracking-widest mb-4"
                style={{ color: BRAND_BLUE }}
              >
                Next step
              </p>
              <p className="text-base leading-relaxed mb-7" style={{ color: "rgba(248,249,254,0.6)" }}>
                The next step is a discovery call to discuss your current priorities, technology stack, internal capacity and how we could support your team.
              </p>
              <a
                href="https://genuineq.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold transition-all duration-150 hover:gap-3"
                style={{ background: BRAND_BLUE, color: BRAND_WHITE }}
              >
                Book a discovery call <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ background: BRAND_NAVY, borderTop: "1px solid rgba(248,249,254,0.08)" }}>
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <LogoFull dark />
            <div className="flex items-center gap-6">
              <a
                href="mailto:hello@genuineq.com"
                className="flex items-center gap-1.5 text-xs transition-colors duration-150"
                style={{ color: "rgba(248,249,254,0.4)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = BRAND_WHITE)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(248,249,254,0.4)")}
              >
                <Mail size={13} /> hello@genuineq.com
              </a>
              <a
                href="https://genuineq.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs transition-colors duration-150"
                style={{ color: "rgba(248,249,254,0.4)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = BRAND_WHITE)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(248,249,254,0.4)")}
              >
                genuineq.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ── Layout helpers ─────────────────────────────────────────────────────────────
function Divider() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="h-px bg-border" />
    </div>
  );
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-3">
          <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground lg:pt-1">
            {label}
          </p>
        </div>
        <div className="lg:col-span-9">{children}</div>
      </div>
    </section>
  );
}
