"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Check,
  ArrowRight,
  Menu,
  X,
  Sparkles,
  Shield,
  Gauge,
  Zap,
  Mail,
  Phone,
  MapPin,
  Star,
  Home,
  Building2,
  Landmark,
  BadgeCheck,
} from "lucide-react";

const BRAND = {
  company: "FML Real Estate Company",
  tagline: "Buy into premium houses and condos for investment.",
  subline:
    "FML acquires and manages residential and condo properties designed for long-term growth and consistent rental income.",
  ctaPrimary: "Start Investing",
  ctaSecondary: "Browse Properties",
  contactEmail: "frenkld222@gmail.com",
  contactPhone: "929-591-8059",
  contactAddress: "123 Example Ave, City, ST",
  accent: "#C49A3A",
  valueBullets: [
    "Exclusive properties in prime locations",
    "Passive rental income",
    "Flexible minimum investment",
    "Transparent reporting",
  ],
  features: [
    {
      icon: Sparkles,
      title: "Prime Acquisitions",
      desc: "We handpick high-value houses and condos in top markets for maximum return potential.",
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      desc: "Every property is vetted and structured under the highest legal and financial standards.",
    },
    {
      icon: Gauge,
      title: "Steady Income",
      desc: "Investors benefit from regular rental distributions without the hassle of management.",
    },
    {
      icon: Zap,
      title: "Easy Entry",
      desc: "Sign up, choose a property, and invest within minutes — fully digital onboarding.",
    },
  ],
  stats: [
    { label: "Investors", value: "1,200+" },
    { label: "Properties Managed", value: "75+" },
    { label: "Distributions Paid", value: "$4M+" },
    { label: "Avg. ROI", value: "6.5%" },
  ],
  howItWorks: [
    { step: "1", title: "Sign up & verify", desc: "Create your account and complete verification in minutes." },
    { step: "2", title: "Select a property", desc: "Browse vetted houses and condos with full financial details." },
    { step: "3", title: "Invest & earn", desc: "Fund your share and receive regular income distributions." },
  ],
  faqs: [
    {
      q: "What does FML invest in?",
      a: "FML acquires residential houses and condos in prime U.S. markets for rental income and appreciation.",
    },
    {
      q: "How do investors make money?",
      a: "Through rental distributions and long-term property appreciation.",
    },
    {
      q: "Do I need to be accredited?",
      a: "Offerings may be available to both accredited and non-accredited investors, depending on the structure.",
    },
    {
      q: "Is my investment liquid?",
      a: "Investments are long-term and not guaranteed liquid. Hold periods vary by property.",
    },
  ],
};

export default function FMLLandingPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0C10] text-slate-200 font-sans scroll-smooth">
      <Navbar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <Hero />
      <ComplianceBar />
      <LogoBar />
      <Stats />
      <PropertyShowcase />
      <HowItWorks />
      <FeatureGrid />
      <TestimonialStrip />
      <FAQ />
      <CTA />
      <LuxFooter />
    </div>
  );
}

function Container({ children }) {
  return <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>;
}

function NavButton({ href = "#", children, primary = false, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={
        (primary
          ? "rounded-2xl px-4 py-2 text-sm font-medium bg-white text-[#0B0C10] hover:shadow-lg"
          : "rounded-2xl px-4 py-2 text-sm font-medium border border-white/20 hover:bg-white/5") +
        " transform-gpu transition-all duration-200 hover:scale-[1.03]"
      }
      style={primary ? { boxShadow: "0 0 0 1px " + BRAND.accent } : {}}
    >
      {children}
    </a>
  );
}

function Navbar({ mobileOpen, setMobileOpen }) {
  const links = [
    { href: "#properties", label: "Properties" },
    { href: "#how", label: "How it works" },
    { href: "#features", label: "Why us" },
    { href: "#faq", label: "FAQ" },
  ];

  function handleAnchorClick(e, href) {
    if (!href?.startsWith("#")) return;
    const el = document.querySelector(href);
    if (el) {
      e.preventDefault();
      const headerOffset = 72;
      const rect = el.getBoundingClientRect();
      const scrollTop = window.pageYOffset + rect.top - headerOffset;
      window.scrollTo({ top: scrollTop, behavior: "smooth" });
      setMobileOpen(false);
    }
  }

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/50 bg-black/40 border-b border-white/10">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Put your logo image at public/logo.png */}
            <Image src="/logo.png" alt="FML Logo" width={32} height={32} className="rounded-md" />
            <span className="font-semibold tracking-wide">{BRAND.company}</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleAnchorClick(e, l.href)}
                className="hover:text-white transform-gpu transition-transform duration-200 hover:scale-[1.03]"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <NavButton href="#properties" onClick={(e) => handleAnchorClick(e, "#properties")}>
              {BRAND.ctaSecondary}
            </NavButton>
            <NavButton href="#contact" primary onClick={(e) => handleAnchorClick(e, "#contact")}>
              {BRAND.ctaPrimary} <ArrowRight className="ml-1 inline h-4 w-4" />
            </NavButton>
          </div>
          <button className="md:hidden p-2" aria-label="Toggle menu" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => handleAnchorClick(e, l.href)}
                  className="rounded-lg px-3 py-2 hover:bg-white/5 transform-gpu transition-transform duration-200 hover:scale-[1.02]"
                >
                  {l.label}
                </a>
              ))}
              <NavButton href="#contact" primary onClick={(e) => handleAnchorClick(e, "#contact")}>
                {BRAND.ctaPrimary}
              </NavButton>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          background:
            "radial-gradient(800px 300px at 10% 10%, rgba(196,154,58,0.25), transparent 60%), radial-gradient(800px 300px at 90% 0%, rgba(196,154,58,0.12), transparent 60%)",
        }}
      />
      <Container>
        <div className="py-20 sm:py-24 lg:py-28 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-xs text-slate-300">
              <BadgeCheck className="h-3.5 w-3.5" /> <span>Institutional diligence</span>
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <span>Automated income</span>
            </div>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl font-serif text-white">
              {BRAND.tagline}
            </h1>
            <p className="mt-4 text-lg text-slate-300 max-w-xl">{BRAND.subline}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <NavButton href="#contact">{BRAND.ctaPrimary}</NavButton>
              <NavButton href="#properties">{BRAND.ctaSecondary}</NavButton>
            </div>
            <ul className="mt-6 grid grid-cols-2 gap-2 text-sm text-slate-300">
              {BRAND.valueBullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4" style={{ color: BRAND.accent }} /> {b}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-white/10 to-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] ring-1 ring-white/10" />
            <div className="absolute -bottom-6 -left-6 hidden md:block h-28 w-28 rounded-2xl bg-white/5 ring-1 ring-white/10" />
            <div className="absolute -top-6 -right-6 hidden md:block h-16 w-16 rounded-2xl bg-white/5 ring-1 ring-white/10" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function ComplianceBar() {
  return (
    <section className="border-y border-white/10 bg-black/40">
      <Container>
        <div className="py-3 text-[13px] text-slate-300 flex flex-wrap items-center gap-x-4 gap-y-2">
          <Landmark className="h-4 w-4" style={{ color: BRAND.accent }} />
          <span>
            Offerings may involve securities; not an offer to sell or a solicitation to buy. Read all risk factors &
            disclosures in each offering document.
          </span>
        </div>
      </Container>
    </section>
  );
}

function LogoBar() {
  return (
    <section>
      <Container>
        <div className="py-10 border-y border-white/10 bg-white/5 rounded-2xl">
          <p className="text-center text-xs uppercase tracking-wider text-slate-400">As seen in</p>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center opacity-90">
            {["Fortune", "Forbes", "Bloomberg", "TechCrunch", "WSJ", "CNBC"].map((name) => (
              <div key={name} className="text-center text-sm font-medium text-slate-300">
                {name}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Stats() {
  return (
    <section className="py-12">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {BRAND.stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center">
              <div className="text-2xl font-semibold text-white font-serif">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function PropertyShowcase() {
  const cards = [
    { icon: Home, title: "Aspen Ridge • CO", tags: ["Short-term", "Ski market"], yield: "Projected 6.2% net" },
    { icon: Building2, title: "Lincoln Park • IL", tags: ["Long-term", "Urban core"], yield: "Projected 5.4% net" },
    { icon: Home, title: "Palm Grove • FL", tags: ["Vacation", "Beachfront"], yield: "Projected 6.8% net" },
  ];
  return (
    <section id="properties" className="py-16 scroll-mt-24">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold font-serif text-white">Featured properties</h2>
            <p className="mt-2 text-slate-300">
              Explore offerings with full underwriting, fees, and risk disclosures. Yields are illustrative.
            </p>
          </div>
          <NavButton href="#properties">View all</NavButton>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div
              key={c.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.06] transform-gpu transition-all duration-200 hover:scale-[1.03] hover:shadow-xl"
            >
              <c.icon className="h-6 w-6" style={{ color: BRAND.accent }} />
              <h3 className="mt-3 font-semibold text-white">{c.title}</h3>
              <div className="mt-2 flex flex-wrap gap-2 text-xs">
                {c.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/15 px-2 py-1 text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 text-sm text-slate-300">{c.yield}</div>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-1 text-sm transform-gpu transition-transform duration-200 hover:scale-[1.03]"
              >
                Learn more <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="py-16 border-t border-white/10 scroll-mt-24">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold font-serif text-white">How it works</h2>
          <p className="mt-2 text-slate-300">Invest in a few elegant steps.</p>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {BRAND.howItWorks.map((s) => (
            <div
              key={s.step}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transform-gpu transition-all duration-200 hover:scale-[1.03]"
            >
              <div className="text-sm text-slate-400">Step {s.step}</div>
              <div className="mt-1 font-medium text-white">{s.title}</div>
              <div className="mt-2 text-sm text-slate-300">{s.desc}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FeatureGrid() {
  return (
    <section id="features" className="py-20 scroll-mt-24">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold font-serif text-white">Built for modern investors</h2>
          <p className="mt-2 text-slate-300">
            Premium experience, transparent economics, and a platform that scales with you.
          </p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRAND.features.map((f, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.06] transform-gpu transition-all duration-200 hover:scale-[1.03]"
            >
              <f.icon className="h-6 w-6" style={{ color: BRAND.accent }} />
              <h3 className="mt-3 font-semibold text-white">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-300">{f.desc}</p>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-1 text-sm transform-gpu transition-transform duration-200 hover:scale-[1.03]"
              >
                Learn more <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function TestimonialStrip() {
  return (
    <section className="py-16">
      <Container>
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] text-white p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xl md:text-2xl font-semibold leading-snug font-serif">
                “The experience is polished and effortless. Diversifying into real estate finally feels premium.”
              </p>
              <div className="mt-4 flex items-center gap-3 text-sm text-slate-300">
                <div className="h-9 w-9 rounded-full bg-white/10 grid place-items-center">
                  <Star className="h-4 w-4" style={{ color: BRAND.accent }} />
                </div>
                <div>
                  <div className="font-medium text-white">Ari Cohen</div>
                  <div className="text-slate-400">Private Investor</div>
                </div>
              </div>
            </div>
            <NavButton href="#properties">
              Explore properties <ArrowRight className="h-4 w-4" />
            </NavButton>
          </div>
        </div>
      </Container>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="py-20 scroll-mt-24">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold font-serif text-white">Frequently asked questions</h2>
          <p className="mt-2 text-slate-300">Short answers. Detailed disclosures live in each offering.</p>
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {BRAND.faqs.map((f, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transform-gpu transition-all duration-200 hover:scale-[1.03]"
            >
              <div className="font-medium text-white">{f.q}</div>
              <div className="mt-2 text-sm text-slate-300">{f.a}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="py-20 scroll-mt-24">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold font-serif text-white">{BRAND.ctaPrimary}</h2>
            <p className="mt-2 text-slate-300">Tell us a bit about your goals and we’ll tailor a walkthrough.</p>
            <div className="mt-6 grid gap-3 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" style={{ color: BRAND.accent }} /> {BRAND.contactEmail}
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" style={{ color: BRAND.accent }} /> {BRAND.contactPhone}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" style={{ color: BRAND.accent }} /> {BRAND.contactAddress}
              </div>
            </div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = new FormData(form);
              const subject = encodeURIComponent(`Investor inquiry — ${BRAND.company}`);
              const body = encodeURIComponent(
                `Name: ${data.get("name")}
Email: ${data.get("email")}
Amount: ${data.get("amount")}
Notes: ${data.get("notes")}
`
              );
              window.location.href = `mailto:${BRAND.contactEmail}?subject=${subject}&body=${body}`;
            }}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
          >
            <div className="grid gap-4">
              <div>
                <label className="text-sm text-slate-300">Your name</label>
                <input
                  name="name"
                  required
                  className="mt-1 w-full rounded-xl border border-white/15 bg-transparent px-3 py-2 text-slate-100 placeholder:text-slate-400"
                  placeholder="Esther Goldman"
                />
              </div>
              <div>
                <label className="text-sm text-slate-300">Work email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1 w-full rounded-xl border border-white/15 bg-transparent px-3 py-2 text-slate-100 placeholder:text-slate-400"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="text-sm text-slate-300">Approximate first investment</label>
                <input
                  name="amount"
                  className="mt-1 w-full rounded-xl border border-white/15 bg-transparent px-3 py-2 text-slate-100 placeholder:text-slate-400"
                  placeholder="$1,000"
                />
              </div>
              <div>
                <label className="text-sm text-slate-300">Notes</label>
                <textarea
                  name="notes"
                  rows={4}
                  className="mt-1 w-full rounded-xl border border-white/15 bg-transparent px-3 py-2 text-slate-100 placeholder:text-slate-400"
                  placeholder="Tell us what you’re looking for…"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium bg-white text-[#0B0C10] hover:shadow-lg transform-gpu transition-transform duration-200 hover:scale-[1.03]"
                style={{ boxShadow: "0 0 0 1px " + BRAND.accent }}
              >
                {BRAND.ctaPrimary} <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}

function LuxFooter() {
  return (
    <footer className="pt-12 border-t border-white/10 bg-black/40">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-300 pb-8">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="FML Logo" width={20} height={20} className="rounded-md" />
            <span>{BRAND.company}</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>
          <div>© {new Date().getFullYear()} {BRAND.company}. All rights reserved.</div>
        </div>
        <div className="text-[12px] leading-relaxed text-slate-400 pb-10">
          <p>
            <strong>Disclosures:</strong> Past performance is not indicative of future results. Investments are illiquid
            and involve risk, including loss of principal. Any examples are hypothetical and for illustrative purposes
            only. Read all offering documents before investing.
          </p>
        </div>
      </Container>
    </footer>
  );
}
