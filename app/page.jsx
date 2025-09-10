"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
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
  Calendar,
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

// Floating particles background component
function FloatingParticles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      speed: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-amber-400/20 to-amber-600/20"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.opacity,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [particle.opacity, particle.opacity * 0.3, particle.opacity],
          }}
          transition={{
            duration: particle.speed * 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

export default function FMLLandingPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-slate-200 font-sans scroll-smooth overflow-x-hidden">
      <FloatingParticles />
      
      {/* Cursor glow effect */}
      <div 
        className="fixed pointer-events-none z-50 w-96 h-96 rounded-full opacity-20 mix-blend-screen transition-all duration-300 ease-out"
        style={{
          background: `radial-gradient(circle, ${BRAND.accent}40 0%, transparent 70%)`,
          transform: `translate(${mousePosition.x - 192}px, ${mousePosition.y - 192}px)`,
        }}
      />

      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-50"
        style={{
          background: `linear-gradient(90deg, ${BRAND.accent}, #fbbf24)`,
          scaleX: scrollYProgress,
          transformOrigin: "0%",
        }}
      />

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
      {primary && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-amber-300 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ scale: 0 }}
          whileHover={{ scale: 1 }}
        />
      )}
    </motion.a>
  );
}

function Navbar({ mobileOpen, setMobileOpen }) {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center font-bold text-black">
                F
              </div>
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
            <NavButton href="#properties">
            View all properties
            <ArrowRight className="ml-2 h-4 w-4" />
          </NavButton>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="group relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm overflow-hidden hover:border-amber-400/30 transition-all duration-700"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.02, y: -10 }}
            >
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 p-8">
                {/* Property image area */}
                <div className={`aspect-[16/10] rounded-2xl ${card.image} mb-6 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <card.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                      Available
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {card.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 rounded-full border border-white/15 bg-white/5 text-slate-300 text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="text-amber-400 font-semibold text-lg mb-6">{card.yield}</div>

                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-amber-400 transition-colors group-hover:translate-x-2 duration-300"
                  whileHover={{ x: 5 }}
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </motion.a>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-400/10 to-amber-600/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="py-24 scroll-mt-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent" />
      
      <Container>
        <motion.div
          className="max-w-3xl mb-16 text-center mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-serif text-white mb-6">
            How it <span className="text-amber-400">Works</span>
          </h2>
          <p className="text-xl text-slate-300">
            Invest in premium real estate in three elegant steps.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection lines */}
          <div className="hidden md:block absolute top-1/2 left-1/3 right-1/3 h-px bg-gradient-to-r from-amber-400/50 to-amber-600/50 transform -translate-y-1/2" />
          
          {BRAND.howItWorks.map((step, i) => (
            <motion.div
              key={step.step}
              className="relative text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
            >
              {/* Step circle */}
              <div className="relative mx-auto w-20 h-20 mb-8">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black font-bold text-xl relative z-10">
                  {step.step}
                </div>
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/50 to-amber-600/50 blur-lg"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                />
              </div>

              <motion.div
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm p-6 hover:border-amber-400/30 transition-all duration-500"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-slate-300 leading-relaxed">{step.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FeatureGrid() {
  return (
    <section id="features" className="py-24 scroll-mt-24">
      <Container>
        <motion.div
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-serif text-white mb-6">
            Built for <span className="text-amber-400">Modern Investors</span>
          </h2>
          <p className="text-xl text-slate-300">
            Premium experience, transparent economics, and a platform that scales with you.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRAND.features.map((feature, i) => (
            <motion.div
              key={i}
              className="group relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm p-8 hover:border-amber-400/30 transition-all duration-700"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400/20 to-amber-600/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-7 w-7 text-amber-400" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed mb-6">{feature.desc}</p>
                
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-amber-400 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </motion.a>
              </div>

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-400/10 to-amber-600/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function TestimonialStrip() {
  return (
    <section className="py-24">
      <Container>
        <motion.div
          className="relative rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.1] to-white/[0.03] backdrop-blur-sm overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent" />
          
          <div className="relative z-10 p-8 md:p-16">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="max-w-3xl">
                <motion.div
                  className="flex gap-1 mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                    >
                      <Star className="h-6 w-6 text-amber-400 fill-current" />
                    </motion.div>
                  ))}
                </div>

                <motion.p
                  className="text-2xl md:text-3xl font-semibold leading-relaxed font-serif text-white mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  "The experience is polished and effortless. Diversifying into real estate finally feels premium."
                </motion.p>

                <motion.div
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black font-bold text-lg">
                    AC
                  </div>
                  <div>
                    <div className="font-semibold text-white text-lg">Ari Cohen</div>
                    <div className="text-slate-400">Private Investor</div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <NavButton href="#properties" primary>
                  Explore properties <ArrowRight className="h-4 w-4 ml-2" />
                </NavButton>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-24 scroll-mt-24">
      <Container>
        <motion.div
          className="max-w-3xl mb-16 text-center mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-serif text-white mb-6">
            Frequently Asked <span className="text-amber-400">Questions</span>
          </h2>
          <p className="text-xl text-slate-300">
            Short answers. Detailed disclosures live in each offering.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {BRAND.faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <motion.button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/[0.02] transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                whileHover={{ x: 5 }}
              >
                <span className="font-semibold text-white text-lg">{faq.q}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="h-5 w-5 text-amber-400" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 text-slate-300 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="py-24 scroll-mt-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent" />
      
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold font-serif text-white mb-6">
              <span className="text-amber-400">{BRAND.ctaPrimary}</span> Today
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Tell us a bit about your goals and we'll tailor a walkthrough specifically for you.
            </p>

            <div className="space-y-4">
              {[
                { icon: Mail, text: BRAND.contactEmail },
                { icon: Phone, text: BRAND.contactPhone },
                { icon: MapPin, text: BRAND.contactAddress },
              ].map((contact, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400/20 to-amber-600/10 flex items-center justify-center">
                    <contact.icon className="h-5 w-5 text-amber-400" />
                  </div>
                  <span className="text-lg">{contact.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.form
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
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              {[
                { name: "name", label: "Your name", placeholder: "Esther Goldman", type: "text" },
                { name: "email", label: "Work email", placeholder: "you@company.com", type: "email" },
                { name: "amount", label: "Approximate first investment", placeholder: "$1,000", type: "text" },
              ].map((field, i) => (
                <motion.div
                  key={field.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                >
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    {field.label}
                  </label>
                  <input
                    name={field.name}
                    type={field.type}
                    required={field.name === "name" || field.name === "email"}
                    className="w-full rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:border-amber-400/50 focus:bg-white/10 transition-all duration-300"
                    placeholder={field.placeholder}
                  />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Notes
                </label>
                <textarea
                  name="notes"
                  rows={4}
                  className="w-full rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:border-amber-400/50 focus:bg-white/10 transition-all duration-300 resize-none"
                  placeholder="Tell us what you're looking for…"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <NavButton href="#" primary>
                  {BRAND.ctaPrimary} <ArrowRight className="h-4 w-4 ml-2" />
                </NavButton>
              </motion.div>
            </div>
          </motion.form>
        </div>
      </Container>
    </section>
  );
}

function LuxFooter() {
  return (
    <footer className="pt-20 pb-8 border-t border-white/10 bg-gradient-to-b from-black/60 to-black/80">
      <Container>
        <motion.div
          className="grid md:grid-cols-4 gap-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center font-bold text-black">
                F
              </div>
              <span className="font-bold text-xl text-white">{BRAND.company}</span>
            </div>
            <p className="text-slate-300 max-w-md leading-relaxed mb-6">
              Premium real estate investment platform for modern investors seeking passive income and long-term growth.
            </p>
            <div className="flex gap-4">
              {["Twitter", "LinkedIn", "Instagram"].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-amber-400/30 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  {social[0]}
                </motion.a>
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
        </motion.div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400 mb-8">
            <div>© {new Date().getFullYear()} {BRAND.company}. All rights reserved.</div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>

          <div className="text-xs leading-relaxed text-slate-500">
            <p className="mb-2">
              <strong>Risk Disclosures:</strong> All investments involve risk, including potential loss of principal. 
              Past performance does not guarantee future results. Real estate investments are illiquid and may not be suitable for all investors.
            </p>
            <p>
              <strong>Important:</strong> This is not an offer to sell securities or a solicitation to buy. 
              All offerings are made through official offering documents which contain important risk factors and disclosures. 
              Please read all materials carefully before investing.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}properties" onClick={(e) => handleAnchorClick(e, "#properties")}>
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
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background gradients */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ y, opacity }}
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
              {/* Main visual */}
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

              {/* Floating elements */}
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

              {/* Glow effects */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/20 via-transparent to-amber-600/20 blur-2xl opacity-50" />
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section 
      ref={ref}
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

              {/* Hover glow */}
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
    { 
      icon: Home, 
      title: "Aspen Ridge • CO", 
      tags: ["Short-term", "Ski market"], 
      yield: "Projected 6.2% net",
      image: "bg-gradient-to-br from-blue-600/20 to-blue-800/10"
    },
    { 
      icon: Building2, 
      title: "Lincoln Park • IL", 
      tags: ["Long-term", "Urban core"], 
      yield: "Projected 5.4% net",
      image: "bg-gradient-to-br from-emerald-600/20 to-emerald-800/10"
    },
    { 
      icon: Home, 
      title: "Palm Grove • FL", 
      tags: ["Vacation", "Beachfront"], 
      yield: "Projected 6.8% net",
      image: "bg-gradient-to-br from-orange-600/20 to-orange-800/10"
    },
  ];

  return (
    <section id="properties" className="py-24 scroll-mt-24">
      <Container>
        <motion.div
          className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold font-serif text-white mb-4">
              Featured <span className="text-amber-400">Properties</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl">
              Explore offerings with full underwriting, fees, and risk disclosures. Yields are illustrative.
            </p>
          </div>
          <NavButton href="#
