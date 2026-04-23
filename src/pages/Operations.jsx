import { Link } from 'react-router-dom'
import { useState } from 'react'

const services = [
  {
    icon: '⚡',
    title: 'Workflow Systems',
    desc: 'We design and build your complete workflow infrastructure — from project management to client delivery. Everything structured around how your business actually operates.',
  },
  {
    icon: '📊',
    title: 'CRM Pipelines',
    desc: 'A custom CRM built around your sales and delivery process. Track every lead, automate follow-ups, and never let another opportunity slip through.',
  },
  {
    icon: '🤖',
    title: 'Automation',
    desc: 'We identify and eliminate manual work across your business. Status updates, notifications, onboarding flows — automated so your team focuses on what matters.',
  },
  {
    icon: '📈',
    title: 'Reporting Dashboards',
    desc: 'Real-time visibility into your business performance. Revenue, capacity, project status, and key metrics — all in one place, updated automatically.',
  },
  {
    icon: '📖',
    title: 'Process Documentation',
    desc: 'Standard Operating Procedures (SOPs) for every key process in your business. Written, recorded, and organised so your team operates consistently.',
  },
  {
    icon: '🎓',
    title: 'Team Training & Adoption',
    desc: 'Video tutorials, written guides, and live training so your team actually uses what we build. We stay embedded for the first 30 days.',
  },
]

const phases = [
  {
    num: '01',
    title: 'Audit',
    timing: 'Week 1–2',
    desc: 'We go deep into your current operations. No assumptions — a thorough analysis of where your business is leaking time and money.',
    bullets: ['Full operational review', 'Bottleneck identification', 'Workflow mapping', 'Automation opportunity audit', 'Priority action plan delivered'],
  },
  {
    num: '02',
    title: 'Build',
    timing: 'Week 2–4',
    desc: 'We build the foundation. A custom workflow workspace, automated processes, CRM, and documented SOPs for every key process.',
    bullets: ['Workflow workspace setup', 'Automation build', 'CRM pipeline implementation', 'Process documentation', 'Team dashboards & reporting'],
  },
  {
    num: '03',
    title: 'Optimise',
    timing: 'Ongoing',
    desc: 'We stay embedded. Weekly reviews, performance tracking, team training, and continuous improvements every month.',
    bullets: ['Weekly strategy calls', 'Performance tracking', 'Team training & onboarding', 'Process refinement', 'Monthly progress reports'],
  },
]

const faqs = [
  {
    q: 'What does "embedded" mean in practice?',
    a: 'It means we get access to your tools and work inside your business like an in-house team member — not a remote supplier sending reports. We are in the business with you, building and improving in real time.',
  },
  {
    q: 'Do I need existing systems in place?',
    a: 'No. We build them for you. Whether you are starting from scratch or untangling a mess of tools, we assess your situation during the audit and recommend the right approach. We work around your existing stack where possible.',
  },
  {
    q: 'Why only 5 clients?',
    a: 'Because we are consultants, not an agency with a hundred clients and a junior team. Limiting our client load means every business gets our full attention, fast turnaround, and meaningful results.',
  },
  {
    q: 'How quickly will I see results?',
    a: 'It depends on your business. The audit alone tends to surface quick wins that can be acted on immediately. Core systems take shape over the first month, with improvements building throughout the relationship. We will give you a realistic picture on the initial call.',
  },
  {
    q: 'What happens if I want to cancel?',
    a: 'We ask for a 3-month minimum commitment. Real operational change takes time. After the initial period, you can cancel with 30 days notice. Everything we build is yours to keep.',
  },
  {
    q: 'How many hours do you work per client each week?',
    a: 'Typically 10–15 hours per client per week across both team members. During the build phase (weeks 1–4) this may increase. This is one reason we cap at 5 clients — quality over quantity.',
  },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`rounded-2xl border transition-all duration-300 ${open ? 'border-white/15 bg-white/3' : 'border-white/7 bg-transparent'}`}>
      <button
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
        onClick={() => setOpen(!open)}
      >
        <span className="text-white font-medium">{q}</span>
        <svg
          width="18" height="18" viewBox="0 0 18 18" fill="none"
          className={`shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        >
          <path d="M4 7l5 5 5-5" stroke="#8A2BE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="text-slate-400 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function Operations() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #8A2BE2 0%, transparent 70%)' }} />
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-slate-400 font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Limited spots — 2 available in May 2026
          </div>
          <h1 className="fade-in-up delay-100 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05] mb-6">
            Your business doesn't
            <br />
            need more leads —
            <br />
            <span className="gradient-text">it needs better systems.</span>
          </h1>
          <p className="fade-in-up delay-200 text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10">
            We embed into your business as a dedicated operations partner — building the workflows, CRM, and automations that let you scale without the chaos.
          </p>
          <div className="fade-in-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#apply"
              className="btn-gradient w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base"
            >
              Apply Now — From £2,000/month
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a
              href="#process"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/15 text-white font-semibold text-base hover:bg-white/5 transition-colors"
            >
              See how it works
            </a>
          </div>

          {/* Trust strip */}
          <div className="fade-in-up delay-400 flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-slate-500">
            {['Embedded from day one', '3-month minimum', 'Max 5 clients', 'Everything you build is yours'].map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M2 8l4 4 8-8" stroke="#8A2BE2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-24 bg-[#0d0d1a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="fade-in-up text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">What We Do</p>
            <h2 className="fade-in-up delay-100 text-4xl sm:text-5xl font-black text-white">Six core deliverables.</h2>
            <p className="fade-in-up delay-200 text-lg text-slate-400 mt-4 max-w-xl mx-auto">
              One retainer covers everything you need to build a properly-run operation.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <div
                key={i}
                className="fade-in-up card-dark rounded-2xl p-6 hover:border-white/15 transition-all duration-300 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-white font-semibold mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="fade-in-up text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">Who It's For</p>
              <h2 className="fade-in-up delay-100 text-4xl font-black text-white mb-6">
                Built for ambitious
                <span className="gradient-text block">service businesses</span>
              </h2>
              <p className="fade-in-up delay-200 text-lg text-slate-400 leading-relaxed mb-8">
                We work best with businesses already generating revenue and ready to scale — but hitting an operational ceiling.
              </p>
              <ul className="fade-in-up delay-300 space-y-3 mb-8">
                {['Marketing & creative agencies', 'Podcast studios & content businesses', 'Clinics & professional services', 'Tech & consultancy businesses', 'Growing service businesses doing £10k–£150k/month'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-300">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8l4 4 8-8" stroke="#8A2BE2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="fade-in-up delay-200">
              <div className="card-dark rounded-2xl p-8">
                <h3 className="text-white font-bold text-lg mb-2">Not the right fit if you are:</h3>
                <p className="text-slate-500 text-sm mb-6">We are selective because we go deep with every client.</p>
                <ul className="space-y-3">
                  {['Pre-revenue or very early-stage', 'Looking for a one-off project only', 'Generating less than £8,000/month', 'Not ready to invest in proper systems'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-500 text-sm">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 3l8 8M11 3L3 11" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* ROI box */}
              <div className="mt-4 rounded-2xl p-6"
                style={{ background: 'linear-gradient(135deg, rgba(138,43,226,0.1), rgba(255,45,149,0.08))', border: '1px solid rgba(138,43,226,0.2)' }}>
                <h4 className="text-white font-semibold mb-4 text-sm">Illustrative ROI — 10-person service business</h4>
                <div className="space-y-2 text-sm">
                  {[
                    ['Hours/week lost to operational waste', '~20 hrs'],
                    ['Estimated cost of that time', '~£75/hr'],
                    ['Monthly cost of waste', '~£6,000/mo'],
                    ['Road2Resolve retainer', '£2k–£5k/mo'],
                  ].map(([label, val]) => (
                    <div key={label} className="flex items-center justify-between">
                      <span className="text-slate-500">{label}</span>
                      <span className="text-slate-300 font-medium">{val}</span>
                    </div>
                  ))}
                  <div className="border-t border-white/10 pt-2 mt-2 flex items-center justify-between">
                    <span className="text-white font-semibold">Net monthly saving</span>
                    <span className="gradient-text font-bold">+£1k–£4k</span>
                  </div>
                </div>
                <p className="text-slate-600 text-xs mt-3">Illustrative figures only. ROI varies by business and scope.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-24 bg-[#0d0d1a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="fade-in-up text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">How It Works</p>
            <h2 className="fade-in-up delay-100 text-4xl sm:text-5xl font-black text-white">Three phases. Real results.</h2>
            <p className="fade-in-up delay-200 text-lg text-slate-400 mt-4 max-w-xl mx-auto">
              A structured framework that builds solid foundations while creating long-term operational excellence.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {phases.map((phase, i) => (
              <div
                key={i}
                className="fade-in-up card-dark rounded-2xl p-8 hover:border-white/15 transition-all duration-300"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="text-5xl font-black gradient-text">{phase.num}</div>
                  <span className="text-xs text-slate-500 bg-white/5 px-3 py-1 rounded-full border border-white/8">{phase.timing}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{phase.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{phase.desc}</p>
                <ul className="space-y-2">
                  {phase.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-slate-500">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M2 8l4 4 8-8" stroke="#8A2BE2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="fade-in-up text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">Pricing</p>
            <h2 className="fade-in-up delay-100 text-4xl sm:text-5xl font-black text-white">One offer. Done properly.</h2>
            <p className="fade-in-up delay-200 text-lg text-slate-400 mt-4 max-w-xl mx-auto">
              A one-time setup to get the foundations built, then a monthly retainer that keeps things moving. Everything included — nothing outsourced.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Setup */}
            <div className="fade-in-up card-dark rounded-2xl p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-2">Optional Add-on</p>
              <h3 className="text-2xl font-bold text-white mb-1">Onboarding & Audit</h3>
              <div className="flex items-baseline gap-1 my-4">
                <span className="text-slate-400 text-lg">£</span>
                <span className="text-5xl font-black text-white">1,500</span>
                <span className="text-slate-500 text-sm">one-time</span>
              </div>
              <p className="text-slate-500 text-sm mb-6">Waived for clients committing to 6+ months upfront</p>
              <ul className="space-y-2">
                {['Full operational audit (2 weeks)', 'Workflow mapping & analysis', 'Bottleneck identification report', 'Automation opportunity map', 'Priority action plan', 'Initial workflow workspace setup'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-400">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M2 8l4 4 8-8" stroke="#8A2BE2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Retainer */}
            <div
              className="fade-in-up delay-200 relative rounded-2xl p-px"
              style={{ background: 'linear-gradient(135deg, #8A2BE2, #FF2D95)' }}
            >
              <div className="rounded-2xl bg-[#12121f] p-8 h-full flex flex-col">
                <div className="absolute -top-3 left-8">
                  <span className="btn-gradient text-white text-xs font-semibold px-3 py-1 rounded-full">Core Offer</span>
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-2 mt-2">Monthly Retainer</p>
                <h3 className="text-2xl font-bold text-white mb-1">Operations Partner</h3>
                <div className="flex items-baseline gap-1 my-4">
                  <span className="text-slate-400 text-lg">£</span>
                  <span className="text-5xl font-black text-white">2,000</span>
                  <span className="text-slate-500 text-sm">/mo</span>
                </div>
                <p className="text-slate-500 text-sm mb-6">Up to £5,000/month depending on scope</p>
                <ul className="space-y-2 flex-1">
                  {['Full audit & onboarding included', 'Workflow workspace (full build)', 'Automation workflows', 'CRM pipeline implementation', 'Process documentation (SOPs)', 'Performance dashboards', 'Weekly 60-min strategy call', 'Dedicated support channel', 'Team training & video guides', 'Monthly progress reports'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-400">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M2 8l4 4 8-8" stroke="#FF2D95" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#apply"
                  className="btn-gradient mt-8 inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl text-white font-semibold"
                >
                  Apply for This
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
                <div className="mt-4 flex items-center gap-2 text-xs text-slate-500 justify-center">
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="currentColor"><path d="M7 0a7 7 0 100 14A7 7 0 007 0zm0 3a1 1 0 011 1v3a1 1 0 01-2 0V4a1 1 0 011-1zm0 7.5a1 1 0 110-2 1 1 0 010 2z"/></svg>
                  Only 2 spots remaining — May 2026
                </div>
              </div>
            </div>
          </div>

          <p className="fade-in-up text-center text-sm text-slate-600 mt-6">
            3-month minimum · Retainer reviewed at 90 days · Cancel with 30 days notice after initial period
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#0d0d1a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="fade-in-up text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">FAQ</p>
            <h2 className="fade-in-up delay-100 text-4xl font-black text-white">Common questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="fade-in-up" style={{ transitionDelay: `${i * 0.05}s` }}>
                <FaqItem q={faq.q} a={faq.a} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section id="apply" className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="fade-in-up text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">Apply</p>
            <h2 className="fade-in-up delay-100 text-4xl font-black text-white">Ready to fix your operations?</h2>
            <p className="fade-in-up delay-200 text-lg text-slate-400 mt-4">
              Fill out the application below. We review every submission personally and respond within 48 hours.
            </p>
            <div className="fade-in-up delay-300 mt-4">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-white btn-gradient">
                ⚡ Only 2 spots remaining in May 2026
              </span>
            </div>
          </div>

          <div className="fade-in-up card-dark rounded-2xl p-8">
            <form
              onSubmit={async (e) => {
                e.preventDefault()
                const form = e.target
                const btn = form.querySelector('button[type=submit]')
                const success = form.parentElement.querySelector('#ops-success')
                btn.disabled = true
                btn.textContent = 'Sending…'
                const data = new FormData(form)
                const body = {}
                data.forEach((v, k) => (body[k] = v))
                try {
                  await fetch('https://formsubmit.co/ajax/info@road2resolve.digital', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                    body: JSON.stringify({ ...body, _subject: 'New Operations Consulting Application' }),
                  })
                  form.style.display = 'none'
                  success.style.display = 'block'
                } catch {
                  btn.disabled = false
                  btn.textContent = 'Submit Application'
                }
              }}
            >
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Your Name <span className="text-pink-500">*</span></label>
                  <input type="text" name="name" required placeholder="Jane Smith"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-purple-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Business Name <span className="text-pink-500">*</span></label>
                  <input type="text" name="business" required placeholder="Acme Agency"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-purple-500 transition-colors" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Email Address <span className="text-pink-500">*</span></label>
                  <input type="email" name="email" required placeholder="jane@acme.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-purple-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Monthly Revenue</label>
                  <select name="revenue"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-400 text-sm focus:outline-none focus:border-purple-500 transition-colors">
                    <option value="" disabled>Select range</option>
                    <option>£8k–£20k/month</option>
                    <option>£20k–£50k/month</option>
                    <option>£50k–£100k/month</option>
                    <option>£100k+/month</option>
                  </select>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Ready to invest £2,000–£5,000/month? <span className="text-pink-500">*</span></label>
                <select name="investment_ready" required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-400 text-sm focus:outline-none focus:border-purple-500 transition-colors">
                  <option value="" disabled>Select</option>
                  <option value="yes">Yes, if the value is there</option>
                  <option value="no">Not at this stage</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-300 mb-1.5">What is your biggest operational challenge? <span className="text-pink-500">*</span></label>
                <textarea name="challenge" required rows={4} placeholder="Describe what's not working in your business right now..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-purple-500 transition-colors resize-none" />
              </div>
              <button type="submit"
                className="btn-gradient w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-white font-semibold">
                Submit Application
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <p className="text-center text-xs text-slate-600 mt-3">We review every application personally and respond within 48 hours.</p>
            </form>
            <div id="ops-success" style={{ display: 'none' }} className="text-center py-8">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-xl font-bold text-white mb-2">Application received</h3>
              <p className="text-slate-400">We will be in touch within 48 hours to schedule your initial call.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
