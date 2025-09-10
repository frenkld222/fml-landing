"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
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
  ChevronDown,
  Play,
  Award,
  TrendingUp,
  Users,
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
    { label: "Investors", value: "1,200+", icon: Users },
    { label: "Properties Managed", value: "75+", icon: Building2 },
    { label: "Distributions Paid", value: "$4M+", icon: TrendingUp },
    { label: "Avg. ROI", value: "6.5%", icon: Award },
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
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-slate-200 font-sans scroll-smooth overflow-x-hidden">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-50 bg-gradient-to-r from-amber-400 to-amber-600"
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      />

      <Navbar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} scrolled={scrolled} />
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

function Container({ children, className = "" }) {
  return <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

function NavButton({ href = "#", children, primary = false, onClick }) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      className={
        (primary
          ? "relative overflow-hidden rounded-2xl px-6 py-3 text-sm font-medium bg-gradient-to-r from-amber-400 to-amber-600 text-black hover:shadow-2xl hover:shadow-amber-500/25"
          : "relative overflow-hidden rounded-2xl px-6 py-3 text-sm font-medium border border-white/20 backdrop-blur-sm hover:bg-white/10 hover:border-white/30") +
        " group transition-all duration-300"
      }
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10">{children}</span>
    </motion.a>
  );
}

function Navbar({ mobileOpen, setMobileOpen, scrolled }) {
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
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled 
          ? 'backdrop-blur-xl bg-black/80 border-b border-white/10 shadow-2xl shadow-black/50' 
          : 'backdrop-blur-sm bg-black/20'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              <Image src="/logo.png" alt="FML Logo" width={40} height={40} className="rounded-xl" />
              <motion.div
                className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-400/50 to-amber-600/50 blur-md"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              {BRAND.company}
            </span>
          </motion.div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={(e) => handleAnchorClick(e, l.href)}
                className="relative hover:text-white transition-colors duration-300 group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center gap-4">
            <NavButton href="#properties" onClick={(e) => handleAnchorClick(e, "#properties")}>
              {BRAND.ctaSecondary}
            </NavButton>
            <NavButton href="#contact" primary onClick={(e) => handleAnchorClick(e, "#contact")}>
              {BRAND.ctaPrimary} <ArrowRight className="ml-1 inline h-4 w-4" />
            </NavButton>
          </div>
          
          <motion.button 
            className="md:hidden p-2 rounded-xl hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>
        
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="md:hidden pb-6 border-t border-white/10 mt-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col gap-3 pt-4">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={(e) => handleAnchorClick(e, l.href)}
                    className="rounded-xl px-4 py-3 hover:bg-white/5 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                  >
                    {l.label}
                  </motion.a>
                ))}
                <NavButton href="#contact" primary onClick={(e) => handleAnchorClick(e, "#contact")}>
                  {BRAND.ctaPrimary}
                </NavButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <motion.div
        className="absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-amber-700/5" />
        <motion.div
          className="absolute top-20 -left-40 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 -right-40 w-96 h-96 bg-amber-600/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </motion.div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-2 text-sm text-slate-300 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <BadgeCheck className="h-4 w-4 text-amber-400" />
              <span>Institutional diligence</span>
              <div className="h-1 w-1 rounded-full bg-white/40" />
              <span>Automated income</span>
              <Sparkles className="h-4 w-4 text-amber-400" />
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight font-serif mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
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
            </motion.h1>

            <motion.p
              className="text-xl text-slate-300 max-w-2xl mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {BRAND.subline}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <NavButton href="#contact" primary>
                {BRAND.ctaPrimary}
                <ArrowRight className="ml-2 h-5 w-5" />
              </NavButton>
              <NavButton href="#properties">
                <Play className="mr-2 h-4 w-4" />
                {BRAND.ctaSecondary}
              </NavButton>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {BRAND.valueBullets.map((bullet, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                >
                  <div className="mt-1 p-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-600">
                    <Check className="h-3 w-3 text-black" />
                  </div>
                  <span className="text-sm text-slate-300">{bullet}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative">
              <div className="aspect-[4/3] w-full rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm border border-white/20 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-amber-600/5" />
                <motion.div
                  className="absolute inset-4 rounded-2xl bg-gradient-to-br from-amber-400/20 to-transparent border border-amber-400/30"
                  animate={{
                    background: [
                      "linear-gradient(135deg, rgba(251, 191, 36, 0.2), transparent)",
                      "linear-gradient(135deg, rgba(245, 158, 11, 0.3), transparent)",
                      "linear-gradient(135deg, rgba(251, 191, 36, 0.2), transparent)",
                    ],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </div>

              <motion.div
                className="absolute -bottom-8 -left-8 w-32 h-32 rounded-3xl bg-gradient-to-br from-amber-400/20 to-amber-600/10 backdrop-blur-sm border border-white/10 shadow-xl"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              
              <motion.div
                className="absolute -top-8 -right-8 w-20 h-20 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 shadow-xl"
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/20 via-transparent to-amber-600/20 blur-2xl opacity-50" />
            </div>
          </motion.div>
        </div>
      </Container>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-slate-400"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function ComplianceBar() {
  return (
    <motion.section
      className="border-y border-white/10 bg-gradient-to-r from-black/60 via-black/40 to-black/60 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Container>
        <div className="py-4 text-sm text-slate-300 flex flex-wrap items-center gap-x-4 gap-y-2">
          <Landmark className="h-5 w-5 text-amber-400" />
          <span>
            Offerings may involve securities; not an offer to sell or a solicitation to buy. Read all risk factors &
            disclosures in each offering document.
          </span>
        </div>
      </Container>
    </motion.section>
  );
}

function LogoBar() {
  const logos = ["Fortune", "Forbes", "Bloomberg", "TechCrunch", "WSJ", "CNBC"];

  return (
    <motion.section
      className="py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Container>
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider text-slate-400 mb-8">Trusted by industry leaders</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
            {logos.map((name, i) => (
              <motion.div
                key={name}
                className="text-center text-lg font-semibold text-slate-300 hover:text-white transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                {name}
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </motion.section>
  );
}

function Stats() {
  return (
    <motion.section 
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {BRAND.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="group relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm p-8 text-center hover:border-amber-400/30 transition-all duration-500"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="mx-auto w-12 h-12 mb-4 rounded-2xl bg-gradient-to-br from-amber-400/20 to-amber-600/10 flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-amber-400" />
                </div>
                
                <motion.div
                  className="text-3xl font-bold text-white font-serif mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: i * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                >
                  {stat.value}
                </motion.div>
                
                <div className="text-sm uppercase tracking-wider text-slate-400">{stat.label}</div>
              </div>

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-400/10 to-amber-600/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </Container>
    </motion.section>
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
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="text-3xl font-bold font-serif text-white">Featured properties</h2>
            <p className="mt-2 text-slate-300">
              Explore offerings with full underwriting, fees, and risk disclosures. Yields are illustrative.
            </p>
          </div>
          <NavButton href="#properties">View all</NavButton>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
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
                "The experience is polished and effortless. Diversifying into real estate finally feels premium."
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
  const [openIndex, setOpenIndex] = useState(null);

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
            <p className="mt-2 text-slate-300">Tell us a bit about your goals and we'll tailor a walkthrough.</p>
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
Notes: ${data.get("notes")}`
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
                  placeholder="Tell us what you're looking for…"
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
