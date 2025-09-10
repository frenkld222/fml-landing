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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-slate-200 font-sans scroll-smooth">
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
          ? "rounded-2xl px-6 py-3 text-sm font-medium bg-gradient-to-r from-amber-400 to-amber-600 text-black hover:shadow-2xl hover:shadow-amber-500/25"
          : "rounded-2xl px-6 py-3 text-sm font-medium border border-white/20 backdrop-blur-sm hover:bg-white/10") +
        " transform transition-all duration-300 hover:scale-105 hover:-translate-y-1"
      }
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
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-black/80 border-b border-white/10 shadow-2xl">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Image src="/logo.png" alt="FML Logo" width={40} height={40} className="rounded-xl" />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-400/30 to-amber-600/30 blur-md animate-pulse" />
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
              {BRAND.company}
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleAnchorClick(e, l.href)}
                className="relative hover:text-white transition-all duration-300 group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 group-hover:w-full transition-all duration-300" />
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
          
          <button className="md:hidden p-2 rounded-xl hover:bg-white/10 transition-colors" onClick={() => setMobileOpen(!mobileOpen)}>
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
                  className="rounded-lg px-3 py-2 hover:bg-white/5 transition-colors"
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
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-amber-700/5" />
        <div className="absolute top-20 -left-40 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 -right-40 w-96 h-96 bg-amber-600/15 rounded-full blur-3xl animate-pulse" />
      </div>

      <Container>
        <div className="py-20 sm:py-24 lg:py-28 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm px-4 py-2 text-xs text-slate-300">
              <BadgeCheck className="h-3.5 w-3.5 text-amber-400" /> 
              <span>Institutional diligence</span>
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <span>Automated income</span>
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            </div>
            
            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight font-serif">
              <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Buy into
              </span>
              <br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
                premium
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                real estate
              </span>
            </h1>
            
            <p className="mt-6 text-xl text-slate-300 max-w-xl leading-relaxed">{BRAND.subline}</p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <NavButton href="#contact" primary>{BRAND.ctaPrimary}</NavButton>
              <NavButton href="#properties">{BRAND.ctaSecondary}</NavButton>
            </div>
            
            <ul className="mt-8 grid grid-cols-2 gap-3 text-sm text-slate-300">
              {BRAND.valueBullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <div className="mt-1 p-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-600">
                    <Check className="h-3 w-3 text-black" />
                  </div>
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] w-full rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm border border-white/20 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-amber-600/5" />
              <div className="absolute inset-4 rounded-2xl bg-gradient-to-br from-amber-400/20 to-transparent border border-amber-400/30 animate-pulse" />
            </div>
            
            <div className="absolute -bottom-6 -left-6 hidden md:block h-28 w-28 rounded-2xl bg-gradient-to-br from-amber-400/20 to-amber-600/10 backdrop-blur-sm border border-white/10 animate-float" />
            <div className="absolute -top-6 -right-6 hidden md:block h-16 w-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 animate-float" />
            
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/20 via-transparent to-amber-600/20 blur-2xl opacity-50" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function ComplianceBar() {
  return (
    <section className="border-y border-white/10 bg-gradient-to-r from-black/60 via-black/40 to-black/60 backdrop-blur-sm">
      <Container>
        <div className="py-3 text-[13px] text-slate-300 flex flex-wrap items-center gap-x-4 gap-y-2">
          <Landmark className="h-4 w-4 text-amber-400" />
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
    <section className="py-16">
      <Container>
        <div className="text-center">
          <p className="text-xs uppercase tracking-wider text-slate-400 mb-8">As seen in</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
            {["Fortune", "Forbes", "Bloomberg", "TechCrunch", "WSJ", "CNBC"].map((name) => (
              <div key={name} className="text-center text-lg font-semibold text-slate-300 hover:text-white transition-all duration-300 cursor-pointer hover:scale-110">
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
            <div key={s.label} className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm p-6 text-center hover:border-amber-400/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="text-3xl font-bold text-white font-serif">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-slate-400">{s.label}</div>
              </div>
              
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-400/10 to-amber-600/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
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
            <h2 className="text-4xl font-bold font-serif mb-2">
              Featured <span className="text-amber-400">Properties</span>
            </h2>
            <p className="text-slate-300">
              Explore offerings with full underwriting, fees, and risk disclosures. Yields are illustrative.
            </p>
          </div>
          <NavButton href="#properties">View all</NavButton>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div
              key={c.title}
              className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm p-8 hover:border-amber-400/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400/20 to-amber-600/10 flex items-center justify-center mb-6">
                  <c.icon className="h-6 w-6 text-amber-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{c.title}</h3>
                <div className="flex flex-wrap gap-2 text-xs mb-4">
                  {c.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="text-amber-400 font-semibold mb-6">{c.yield}</div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-sm font-medium hover:text-amber-400 transition-colors"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-400/10 to-amber-600/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
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
        <div className="max-w-2xl mb-12">
          <h2 className="text-4xl font-bold font-serif text-white mb-4">
            How it <span className="text-amber-400">Works</span>
          </h2>
          <p className="text-xl text-slate-300">Invest in a few elegant steps.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {BRAND.howItWorks.map((s) => (
            <div
              key={s.step}
              className="relative text-center group"
            >
              <div className="mx-auto w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black font-bold text-xl relative z-10">
                {s.step}
              </div>
              
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm p-6 hover:border-amber-400/30 transition-all duration-500 hover:scale-105">
                <div className="font-semibold text-white text-lg mb-2">{s.title}</div>
                <div className="text-slate-300">{s.desc}</div>
              </div>
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
        <div className="max-w-2xl mb-12">
          <h2 className="text-4xl font-bold font-serif text-white mb-4">
            Built for <span className="text-amber-400">Modern Investors</span>
          </h2>
          <p className="text-xl text-slate-300">
            Premium experience, transparent economics, and a platform that scales with you.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRAND.features.map((f, i) => (
            <div
              key={i}
              className="relative group rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm p-8 hover:border-amber-400/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400/20 to-amber-600/10 flex items-center justify-center mb-6">
                  <f.icon className="h-7 w-7 text-amber-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{f.title}</h3>
                <p className="text-slate-300 mb-6">{f.desc}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-sm font-medium hover:text-amber-400 transition-colors"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-400/10 to-amber-600/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
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
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] backdrop-blur-sm text-white p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                ))}
              </div>
              
              <p className="text-xl md:text-2xl font-semibold leading-snug font-serif mb-6">
                "The experience is polished and effortless. Diversifying into real estate finally feels premium."
              </p>
              
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black font-bold">
                  AC
                </div>
                <div>
                  <div className="font-medium text-white">Ari Cohen</div>
                  <div className="text-slate-400">Private Investor</div>
                </div>
              </div>
            </div>
            
            <NavButton href="#properties" primary>
              Explore properties <ArrowRight className="h-4 w-4 ml-1" />
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
        <div className="max-w-2xl mb-12 text-center mx-auto">
          <h2 className="text-4xl font-bold font-serif text-white mb-4">
            Frequently Asked <span className="text-amber-400">Questions</span>
          </h2>
          <p className="text-xl text-slate-300">Short answers. Detailed disclosures live in each offering.</p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {BRAND.faqs.map((f, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm p-6 hover:border-amber-400/30 transition-all duration-500 hover:scale-105"
            >
              <div className="font-medium text-white text-lg mb-3">{f.q}</div>
              <div className="text-slate-300">{f.a}</div>
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
            <h2 className="text-4xl font-bold font-serif text-white mb-4">
              <span className="text-amber-400">{BRAND.ctaPrimary}</span> Today
            </h2>
            <p className="text-xl text-slate-300 mb-8">Tell us a bit about your goals and we'll tailor a walkthrough.</p>
            <div className="grid gap-3 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-amber-400" /> {BRAND.contactEmail}
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-amber-400" /> {BRAND.contactPhone}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-amber-400" /> {BRAND.contactAddress}
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
Notes: ${data.get("notes")}`
              );
              window.location.href = `mailto:${BRAND.contactEmail}?subject=${subject}&body=${body}`;
            }}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm p-6"
          >
            <div className="grid gap-4">
              <div>
                <label className="text-sm text-slate-300">Your name</label>
                <input
                  name="name"
                  required
                  className="mt-1 w-full rounded-xl border border-white/15 bg-white/5 backdrop-blur-sm px-3 py-2 text-slate-100 placeholder:text-slate-400 focus:border-amber-400/50 transition-colors"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="text-sm text-slate-300">Approximate first investment</label>
                <input
                  name="amount"
                  className="mt-1 w-full rounded-xl border border-white/15 bg-white/5 backdrop-blur-sm px-3 py-2 text-slate-100 placeholder:text-slate-400 focus:border-amber-400/50 transition-colors"
                  placeholder="$1,000"
                />
              </div>
              <div>
                <label className="text-sm text-slate-300">Notes</label>
                <textarea
                  name="notes"
                  rows={4}
                  className="mt-1 w-full rounded-xl border border-white/15 bg-white/5 backdrop-blur-sm px-3 py-2 text-slate-100 placeholder:text-slate-400 focus:border-amber-400/50 transition-colors resize-none"
                  placeholder="Tell us what you're looking for…"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-sm font-medium bg-gradient-to-r from-amber-400 to-amber-600 text-black hover:shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
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
    <footer className="pt-12 border-t border-white/10 bg-gradient-to-b from-black/60 to-black/80">
      <Container>
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image src="/logo.png" alt="FML Logo" width={32} height={32} className="rounded-xl" />
              <span className="font-bold text-xl text-white">{BRAND.company}</span>
            </div>
            <p className="text-slate-300 max-w-md leading-relaxed mb-6">
              Premium real estate investment platform for modern investors seeking passive income and long-term growth.
            </p>
            <div className="flex gap-4">
              {["Twitter", "LinkedIn", "Instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-amber-400/30 transition-all duration-300 hover:scale-110"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Platform</h4>
            <div className="space-y-2">
              {["Properties", "How it works", "Pricing", "Security"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-slate-400 hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <div className="space-y-2">
              {["Help Center", "Contact", "Privacy", "Terms"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-slate-400 hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-300 pb-8 border-t border-white/10 pt-8">
          <div>© {new Date().getFullYear()} {BRAND.company}. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
        
        <div className="text-xs leading-relaxed text-slate-500 pb-10">
          <p>
            <strong>Disclosures:</strong> Past performance is not indicative of future results. Investments are illiquid
            and involve risk, including loss of principal. Any examples are hypothetical and for illustrative purposes
            only. Read all offering documents before investing.
          </p>
        </div>
      </Container>
    </footer>
  );
} focus:border-amber-400/50 transition-colors"
                  placeholder="Esther Goldman"
                />
              </div>
              <div>
                <label className="text-sm text-slate-300">Work email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1 w-full rounded-xl border border-white/15 bg-white/5 backdrop-blur-sm px-3 py-2 text-slate-100 placeholder:text-slate-400
