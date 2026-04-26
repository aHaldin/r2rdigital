import { Link } from 'react-router-dom'

const problems = [
  {
    icon: '🔄',
    title: 'Everything runs through you',
    desc: 'Every decision, every approval, every task. You cannot step away without things breaking.',
  },
  {
    icon: '📋',
    title: 'No documented processes',
    desc: 'Your systems live in your head. New hires take forever to onboard. The same mistakes keep happening.',
  },
  {
    icon: '💸',
    title: 'Leads are slipping through',
    desc: 'No CRM, no follow-up system, no visibility. You are generating enquiries but not converting them.',
  },
  {
    icon: '🔌',
    title: 'Tools that do not talk to each other',
    desc: 'A dozen apps, zero integration. Your team is copying data manually between platforms every day.',
  },
]

const benefits = [
  { label: 'More control', desc: 'Clear visibility into every part of your business — not just gut feel.' },
  { label: 'More revenue', desc: 'Convert existing leads better with CRM pipelines and follow-up automation.' },
  { label: 'Less chaos', desc: 'Documented processes and automated workflows that run without you.' },
  { label: 'Scalable systems', desc: 'Infrastructure built to grow with you — not fall apart when you do.' },
]

const steps = [
  { num: '01', title: 'Discovery call', desc: 'We learn about your business, identify the biggest gaps, and agree on priorities.' },
  { num: '02', title: 'Audit & plan', desc: 'A deep analysis of your current operations, tools, and workflows. We deliver a clear action plan.' },
  { num: '03', title: 'Build & implement', desc: 'We build and implement the systems — CRM, automations, workflows, dashboards.' },
  { num: '04', title: 'Optimise & support', desc: 'Ongoing refinement, training, and support as your business grows.' },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #8A2BE2 0%, transparent 70%)' }} />
          <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full opacity-5"
            style={{ background: 'radial-gradient(circle, #FF2D95 0%, transparent 70%)' }} />
          {/* Grid lines */}
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="fade-in-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-slate-400 font-medium mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Currently accepting new clients
            </div>

            <h1 className="fade-in-up delay-100 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05] mb-6">
              We fix how your
              <br />
              <span className="gradient-text">business runs</span>
              <br />
              — and how it grows.
            </h1>

            <p className="fade-in-up delay-200 text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10">
              Road2Resolve builds the systems, processes, and digital infrastructure that let ambitious businesses scale — without the chaos.
            </p>

            <div className="fade-in-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/operations"
                className="btn-gradient w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base"
              >
                Operations Consulting
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                to="/digital-solutions"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/15 text-white font-semibold text-base hover:bg-white/5 transition-colors"
              >
                Digital Solutions
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            {/* Trust strip */}
            <div className="fade-in-up delay-400 flex flex-wrap items-center justify-center gap-6 mt-14 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M2 8l4 4 8-8" stroke="#8A2BE2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Limited availability — bespoke by design
              </span>
              <span className="hidden sm:block w-px h-4 bg-white/10" />
              <span className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M2 8l4 4 8-8" stroke="#8A2BE2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                3-month minimum commitment
              </span>
              <span className="hidden sm:block w-px h-4 bg-white/10" />
              <span className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M2 8l4 4 8-8" stroke="#8A2BE2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Everything we build is yours
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="fade-in-up text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">The Problem</p>
            <h2 className="fade-in-up delay-100 text-4xl sm:text-5xl font-black text-white leading-tight">
              Does this sound familiar?
            </h2>
            <p className="fade-in-up delay-200 text-lg text-slate-400 mt-4 max-w-2xl mx-auto">
              Most growing service businesses hit the same wall — more clients, more revenue, but more chaos, more manual work, and less clarity.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {problems.map((p, i) => (
              <div
                key={i}
                className={`fade-in-up card-dark rounded-2xl p-6 hover:border-white/15 transition-all duration-300 hover:-translate-y-1`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="text-white font-semibold mb-2">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="fade-in-up mt-12 text-center">
            <p className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/8 text-slate-300 text-sm">
              <span className="gradient-text font-semibold">This is not a scaling problem.</span>
              It is an operations problem — and it is exactly what we fix.
            </p>
          </div>
        </div>
      </section>

      {/* TWO SERVICES */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="fade-in-up text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">What We Do</p>
            <h2 className="fade-in-up delay-100 text-4xl sm:text-5xl font-black text-white">Two services. One focus.</h2>
            <p className="fade-in-up delay-200 text-lg text-slate-400 mt-4">
              Building the systems that make your business work — inside and out.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Operations */}
            <div className="fade-in-up gradient-border rounded-2xl p-px">
              <div className="rounded-2xl bg-[#12121f] p-8 h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: 'linear-gradient(135deg, rgba(138,43,226,0.2), rgba(255,45,149,0.2))', border: '1px solid rgba(138,43,226,0.3)' }}>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M3 11h4l3 7 4-14 3 7h4" stroke="#8A2BE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-2">Service 01</div>
                <h3 className="text-2xl font-bold text-white mb-3">Operations & Growth Systems</h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  We embed into your business as an external Head of Operations — building the workflows, CRM systems, and automations that let you scale without hiring a full ops team.
                </p>
                <ul className="space-y-2 mb-8 flex-1">
                  {['Workflow design & implementation', 'CRM setup & pipeline optimisation', 'Automation builds', 'Reporting dashboards', 'Process documentation'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-400">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M2 8l4 4 8-8" stroke="#8A2BE2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 text-sm">Discovery call — £250</span>
                  <Link
                    to="/operations"
                    className="btn-gradient inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold"
                  >
                    Learn more
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Digital Solutions */}
            <div className="fade-in-up delay-200 rounded-2xl bg-[#12121f] border border-white/7 p-8 flex flex-col hover:border-white/15 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <rect x="3" y="3" width="16" height="11" rx="2" stroke="#FF2D95" strokeWidth="2"/>
                  <path d="M7 19h8M11 14v5" stroke="#FF2D95" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-2">Service 02</div>
              <h3 className="text-2xl font-bold text-white mb-3">Digital Solutions</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                Productised digital builds — websites, landing pages, chatbots, and lead capture systems that convert visitors into paying clients.
              </p>
              <ul className="space-y-2 mb-8 flex-1">
                {['Website design & development', 'Landing pages', 'Chatbots & AI lead capture', 'Automation setups', 'CRM integrations'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-400">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M2 8l4 4 8-8" stroke="#FF2D95" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-slate-500 text-sm">From £99/month</span>
                <Link
                  to="/digital-solutions"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 text-white text-sm font-semibold hover:bg-white/5 transition-colors"
                >
                  See packages
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 bg-[#0d0d1a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
            <div>
              <p className="fade-in-up text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">Why It Matters</p>
              <h2 className="fade-in-up delay-100 text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
                What good operations
                <span className="gradient-text block">actually gives you</span>
              </h2>
              <p className="fade-in-up delay-200 text-lg text-slate-400 leading-relaxed">
                Operational excellence is not a nice-to-have. It is the difference between a business that scales and one that burns out.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className={`fade-in-up card-dark rounded-2xl p-6 hover:border-white/15 transition-all duration-300`}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="w-8 h-8 rounded-lg btn-gradient mb-4" />
                  <h4 className="text-white font-semibold mb-2">{b.label}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="fade-in-up text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">Process</p>
            <h2 className="fade-in-up delay-100 text-4xl sm:text-5xl font-black text-white">How it works</h2>
            <p className="fade-in-up delay-200 text-lg text-slate-400 mt-4 max-w-xl mx-auto">
              A structured four-step process from first conversation to fully operational systems.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <div key={i} className={`fade-in-up`} style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="card-dark rounded-2xl p-6 relative">
                    <div className="text-5xl font-black gradient-text mb-4">{step.num}</div>
                    <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-[#0d0d1a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl p-12 text-center"
            style={{ background: 'linear-gradient(135deg, rgba(138,43,226,0.15) 0%, rgba(255,45,149,0.1) 100%)', border: '1px solid rgba(138,43,226,0.2)' }}>
            {/* Glow */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-20 pointer-events-none"
              style={{ background: 'radial-gradient(circle, #8A2BE2, transparent 70%)' }} />

            <div className="relative">
              <p className="fade-in-up text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-4">Ready?</p>
              <h2 className="fade-in-up delay-100 text-4xl sm:text-5xl font-black text-white mb-4">
                Let's build something
                <span className="gradient-text block">that actually works.</span>
              </h2>
              <p className="fade-in-up delay-200 text-lg text-slate-400 max-w-xl mx-auto mb-10">
                We only work with a small number of clients at a time. If you are serious about fixing your operations, apply now.
              </p>
              <div className="fade-in-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/operations"
                  className="btn-gradient w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-semibold"
                >
                  Operations Consulting
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
                <Link
                  to="/digital-solutions"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/15 text-white font-semibold hover:bg-white/5 transition-colors"
                >
                  Digital Solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
