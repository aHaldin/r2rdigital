import { useState } from 'react'
import { Link } from 'react-router-dom'

const packages = [
  {
    name: 'Starter',
    tagline: 'Get online and converting.',
    price: '£1,000',
    priceNote: '– £1,500',
    highlight: false,
    items: [
      'Single landing page',
      'Mobile-first responsive design',
      'Contact form & lead capture',
      'Basic chatbot setup',
      'Google Analytics integration',
      'Copy review & suggestions',
    ],
    cta: 'Request a Quote',
  },
  {
    name: 'Growth',
    tagline: 'A complete digital presence.',
    price: '£2,000',
    priceNote: '– £4,000',
    highlight: true,
    items: [
      'Full multi-page website',
      'Advanced lead capture system',
      'Custom chatbot & AI responses',
      'Automation setup (follow-ups, notifications)',
      'CRM-ready form integrations',
      'SEO foundations',
      'Performance & conversion review',
    ],
    cta: 'Request a Quote',
  },
  {
    name: 'Premium',
    tagline: 'Full-stack digital infrastructure.',
    price: '£5,000',
    priceNote: '+',
    highlight: false,
    items: [
      'Custom website + conversion funnel',
      'Advanced chatbot & AI lead qualification',
      'Full CRM integration',
      'Multi-step automation workflows',
      'Conversion rate optimisation',
      'Analytics & reporting setup',
      'Ongoing support (first 30 days)',
    ],
    cta: 'Request a Quote',
  },
]

const deliverables = [
  { icon: '🌐', title: 'Website Design & Development', desc: 'Clean, conversion-focused websites built to perform — not just look good.' },
  { icon: '📄', title: 'Landing Pages', desc: 'High-converting landing pages for campaigns, lead gen, and product launches.' },
  { icon: '🤖', title: 'Chatbots & AI Lead Capture', desc: 'Automated lead qualification and response so you never miss an enquiry.' },
  { icon: '⚡', title: 'Automation Setups', desc: 'Connect your tools and automate the repetitive work between them.' },
  { icon: '💼', title: 'CRM Integrations', desc: 'Connect your website and leads directly into your CRM pipeline.' },
  { icon: '📊', title: 'Analytics & Tracking', desc: 'Know exactly where your leads come from and what converts them.' },
]

const faqs = [
  { q: 'How long does a project take?', a: 'Starter projects typically take 1–2 weeks. Growth packages take 3–4 weeks. Premium projects are scoped individually and timelines are agreed upfront.' },
  { q: 'Do you work with my existing website?', a: 'Yes. We can improve, rebuild, or extend existing sites. We will assess what you have during the initial conversation and recommend the right approach.' },
  { q: 'Who owns the website once it is built?', a: 'You do. Everything we build is yours — the code, the design, the content. No lock-in.' },
  { q: 'Can I combine Digital Solutions with Operations Consulting?', a: 'Absolutely. Many clients work with us across both services — we build the digital infrastructure and the operational systems that sit behind it.' },
  { q: 'Do you offer hosting and maintenance?', a: 'We do not include ongoing hosting as standard, but we can arrange it. We will point you to the right hosting setup and can provide maintenance packages on request.' },
  { q: 'What do you need from me to get started?', a: 'A brief about your business, your goals, any existing brand assets (logo, colours), and access to any platforms you want us to integrate with. We guide you through everything in the kickoff call.' },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`rounded-2xl border transition-all duration-300 ${open ? 'border-white/15 bg-white/3' : 'border-white/7'}`}>
      <button className="w-full text-left px-6 py-5 flex items-center justify-between gap-4" onClick={() => setOpen(!open)}>
        <span className="text-white font-medium">{q}</span>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
          className={`shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
          <path d="M4 7l5 5 5-5" stroke="#FF2D95" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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

export default function DigitalSolutions() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-8"
            style={{ background: 'radial-gradient(circle, #FF2D95 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full opacity-6"
            style={{ background: 'radial-gradient(circle, #8A2BE2 0%, transparent 70%)' }} />
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-slate-400 font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
            Fixed-price packages · No surprise invoices
          </div>
          <h1 className="fade-in-up delay-100 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05] mb-6">
            Digital infrastructure
            <br />
            <span className="gradient-text">that converts.</span>
          </h1>
          <p className="fade-in-up delay-200 text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10">
            Websites, landing pages, chatbots, and automation setups built for one purpose — turning visitors into paying clients.
          </p>
          <div className="fade-in-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#packages"
              className="btn-gradient w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base">
              View Packages
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/15 text-white font-semibold text-base hover:bg-white/5 transition-colors">
              Request a Custom Quote
            </a>
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="py-24 bg-[#0d0d1a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="fade-in-up text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">What We Build</p>
            <h2 className="fade-in-up delay-100 text-4xl sm:text-5xl font-black text-white">Six digital services.</h2>
            <p className="fade-in-up delay-200 text-lg text-slate-400 mt-4 max-w-xl mx-auto">
              Each one built to generate results — not just tick a box.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {deliverables.map((d, i) => (
              <div key={i}
                className="fade-in-up card-dark rounded-2xl p-6 hover:border-white/15 transition-all duration-300 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="text-3xl mb-4">{d.icon}</div>
                <h3 className="text-white font-semibold mb-2">{d.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="fade-in-up text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">Packages</p>
            <h2 className="fade-in-up delay-100 text-4xl sm:text-5xl font-black text-white">Three clear packages.</h2>
            <p className="fade-in-up delay-200 text-lg text-slate-400 mt-4 max-w-xl mx-auto">
              Fixed-price ranges so you know what you are investing before we start. All quoted exactly before any work begins.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={`fade-in-up relative flex flex-col rounded-2xl p-px ${pkg.highlight ? '' : ''}`}
                style={{
                  transitionDelay: `${i * 0.1}s`,
                  background: pkg.highlight ? 'linear-gradient(135deg, #8A2BE2, #FF2D95)' : 'transparent',
                }}
              >
                <div className={`rounded-2xl p-8 flex flex-col h-full ${pkg.highlight ? 'bg-[#12121f]' : 'bg-[#12121f] border border-white/7'}`}>
                  {pkg.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="btn-gradient text-white text-xs font-semibold px-4 py-1.5 rounded-full whitespace-nowrap">Most Popular</span>
                    </div>
                  )}
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-1">{pkg.tagline}</p>
                  <h3 className="text-2xl font-bold text-white mb-4">{pkg.name}</h3>
                  <div className="flex items-baseline gap-0.5 mb-6">
                    <span className={`text-4xl font-black ${pkg.highlight ? 'gradient-text' : 'text-white'}`}>{pkg.price}</span>
                    <span className="text-slate-500 text-base">{pkg.priceNote}</span>
                  </div>
                  <ul className="space-y-2.5 flex-1 mb-8">
                    {pkg.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5">
                          <path d="M2 8l4 4 8-8" stroke={pkg.highlight ? '#FF2D95' : '#8A2BE2'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className={`inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl font-semibold text-sm transition-all ${
                      pkg.highlight
                        ? 'btn-gradient text-white'
                        : 'border border-white/15 text-white hover:bg-white/5'
                    }`}
                  >
                    {pkg.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
          <p className="fade-in-up text-center text-sm text-slate-600 mt-8">
            All prices are guide ranges. Exact quote provided before any work begins.
          </p>
        </div>
      </section>

      {/* ALSO PAIRS WITH */}
      <section className="py-16 bg-[#0d0d1a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fade-in-up rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
            style={{ background: 'linear-gradient(135deg, rgba(138,43,226,0.1), rgba(255,45,149,0.08))', border: '1px solid rgba(138,43,226,0.2)' }}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-2">Works Even Better With</p>
              <h3 className="text-2xl font-bold text-white mb-2">Operations Consulting</h3>
              <p className="text-slate-400 max-w-lg">
                Digital tools are more powerful when the operational systems behind them are built right. Combine Digital Solutions with Operations Consulting for the full picture.
              </p>
            </div>
            <Link
              to="/operations"
              className="shrink-0 btn-gradient inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold whitespace-nowrap"
            >
              Learn More
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="fade-in-up text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">FAQ</p>
            <h2 className="fade-in-up delay-100 text-4xl font-black text-white">Questions answered.</h2>
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

      {/* CONTACT */}
      <section id="contact" className="py-24 bg-[#0d0d1a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="fade-in-up text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">Get Started</p>
            <h2 className="fade-in-up delay-100 text-4xl font-black text-white">Request a quote</h2>
            <p className="fade-in-up delay-200 text-lg text-slate-400 mt-4">
              Tell us what you need. We will come back to you within 48 hours with a clear quote.
            </p>
          </div>

          <div className="fade-in-up card-dark rounded-2xl p-8">
            <form
              onSubmit={async (e) => {
                e.preventDefault()
                const form = e.target
                const btn = form.querySelector('button[type=submit]')
                const success = form.parentElement.querySelector('#ds-success')
                btn.disabled = true
                btn.textContent = 'Sending…'
                const data = new FormData(form)
                const body = {}
                data.forEach((v, k) => (body[k] = v))
                try {
                  await fetch('https://formsubmit.co/ajax/info@road2resolve.digital', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                    body: JSON.stringify({ ...body, _subject: 'New Digital Solutions Enquiry' }),
                  })
                  form.style.display = 'none'
                  success.style.display = 'block'
                } catch {
                  btn.disabled = false
                  btn.textContent = 'Send Enquiry'
                }
              }}
            >
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Your Name <span className="text-pink-500">*</span></label>
                  <input type="text" name="name" required placeholder="Jane Smith"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-pink-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Business Name <span className="text-pink-500">*</span></label>
                  <input type="text" name="business" required placeholder="Acme Agency"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-pink-500 transition-colors" />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Email Address <span className="text-pink-500">*</span></label>
                <input type="email" name="email" required placeholder="jane@acme.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-pink-500 transition-colors" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Which package interests you?</label>
                <select name="package"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-400 text-sm focus:outline-none focus:border-pink-500 transition-colors">
                  <option value="" disabled>Select a package</option>
                  <option>Starter — £1,000–£1,500</option>
                  <option>Growth — £2,000–£4,000</option>
                  <option>Premium — £5,000+</option>
                  <option>Custom / not sure yet</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Tell us about your project <span className="text-pink-500">*</span></label>
                <textarea name="project" required rows={4} placeholder="What do you need built? What is the goal? What do you currently have?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-pink-500 transition-colors resize-none" />
              </div>
              <button type="submit"
                className="btn-gradient w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-white font-semibold">
                Send Enquiry
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <p className="text-center text-xs text-slate-600 mt-3">We respond within 48 hours with a clear quote. No commitment required.</p>
            </form>
            <div id="ds-success" style={{ display: 'none' }} className="text-center py-8">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-xl font-bold text-white mb-2">Enquiry received</h3>
              <p className="text-slate-400">We will be in touch within 48 hours with a clear quote and next steps.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
