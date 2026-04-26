import { useState } from 'react'
import { Link } from 'react-router-dom'

const packages = [
  {
    id: 'presence',
    badge: 'Monthly',
    name: 'Presence',
    tagline: 'Stay visible without the effort.',
    price: '£99',
    period: '/month',
    highlight: false,
    color: '#8A2BE2',
    items: [
      'AI chatbot on your website',
      'Google Business Profile management',
      'Regular profile updates & posts',
      'LinkedIn company page posts',
      'Monthly performance summary',
      'Direct support included',
    ],
    note: 'No setup fee · Cancel anytime after month 3',
    cta: 'Get Started',
  },
  {
    id: 'website',
    badge: 'One-Time',
    name: 'Website',
    tagline: 'A professional site that converts.',
    price: '£699',
    period: '',
    highlight: false,
    color: '#FF2D95',
    items: [
      'Custom designed website (up to 5 pages)',
      'Mobile-first, fast-loading build',
      'Contact form & lead capture',
      'Basic chatbot integration',
      'Google Analytics setup',
      'SEO foundations',
      'Delivered in 2–3 weeks',
    ],
    note: 'One-time payment · You own everything',
    cta: 'Get Started',
  },
  {
    id: 'growth',
    badge: 'One-Time',
    name: 'Growth Site',
    tagline: 'Website built to generate leads.',
    price: '£1,499',
    period: '',
    highlight: true,
    color: '#8A2BE2',
    items: [
      'Everything in Website package',
      'Advanced lead capture system',
      'AI chatbot with custom flows',
      'CRM-ready form integrations',
      'Automation setup (follow-ups, alerts)',
      'Conversion-focused copywriting',
      '30-day post-launch support',
    ],
    note: 'One-time payment · Includes 30 days support',
    cta: 'Get Started',
  },
  {
    id: 'scale',
    badge: 'One-Time + Retainer',
    name: 'Scale',
    tagline: 'Full digital stack, built to scale.',
    price: '£2,999',
    period: '+',
    highlight: false,
    color: '#FF2D95',
    items: [
      'Everything in Growth Site',
      'Full CRM integration & pipeline',
      'Multi-step automation workflows',
      'Funnel design & optimisation',
      'Analytics & conversion tracking',
      'Ongoing monthly support retainer',
      'Quarterly strategy review',
    ],
    note: 'Build fee + optional ongoing retainer',
    cta: 'Get Started',
  },
]

const faqs = [
  { q: 'Can I combine the Presence plan with a website build?', a: 'Yes — and we recommend it. Get your site built as a one-time package, then add the Presence plan to keep it active and visible month to month.' },
  { q: 'How long does a website take to build?', a: 'The Website package typically takes 2–3 weeks. Growth Site takes 3–4 weeks. Scale projects are scoped individually — timeline agreed before we start.' },
  { q: 'Do I own my website after the build?', a: 'Yes. The code, design, and content are entirely yours. No lock-in, no ongoing fee forced on you.' },
  { q: 'What does the chatbot do?', a: 'The chatbot captures enquiries outside business hours, qualifies leads with a few key questions, and sends them directly to your inbox. It is set up around your specific business and services.' },
  { q: 'What goes into the Google Business and LinkedIn posts?', a: 'We write and post regular updates — service highlights, reviews, business news — that keep your profiles active and visible. You approve the content or give us guidelines and we handle the rest.' },
  { q: 'Can this work alongside Operations Consulting?', a: 'Absolutely. Many clients combine digital infrastructure with operational systems for the full picture. The two services are designed to complement each other.' },
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
      {open && <div className="px-6 pb-5"><p className="text-slate-400 leading-relaxed">{a}</p></div>}
    </div>
  )
}

export default function DigitalSolutions() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setSending(true)
    const data = new FormData(e.target)
    const body = {}
    data.forEach((v, k) => (body[k] = v))
    try {
      await fetch('https://formsubmit.co/ajax/info@road2resolve.digital', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...body, _subject: 'New Digital Solutions Enquiry' }),
      })
      setSent(true)
    } catch {
      setSending(false)
    }
  }

  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/3 w-[500px] h-[500px] rounded-full opacity-[0.03]"
            style={{ background: 'radial-gradient(circle, #FF2D95 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full opacity-[0.03]"
            style={{ background: 'radial-gradient(circle, #8A2BE2 0%, transparent 70%)' }} />
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-slate-400 font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
            From £99/month · Fixed-price builds available
          </div>
          <h1 className="fade-in-up delay-100 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05] mb-6">
            Digital infrastructure
            <br />
            <span className="gradient-text">that converts.</span>
          </h1>
          <p className="fade-in-up delay-200 text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10">
            Websites, chatbots, lead capture, and online presence management — built to turn visitors into paying clients.
          </p>
          <div className="fade-in-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#packages"
              className="btn-gradient w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base">
              See All Packages
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/15 text-white font-semibold text-base hover:bg-white/5 transition-colors">
              Request a Custom Quote
            </a>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="py-24 bg-[#0d0d1a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="fade-in-up text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">Packages</p>
            <h2 className="fade-in-up delay-100 text-4xl sm:text-5xl font-black text-white">Four packages. Clear pricing.</h2>
            <p className="fade-in-up delay-200 text-lg text-slate-400 mt-4 max-w-xl mx-auto">
              Start with what you need. Add more as you grow. Every package is quoted exactly before any work begins.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {packages.map((pkg, i) => (
              <div
                key={pkg.id}
                className={`fade-in-up relative rounded-2xl ${pkg.highlight ? 'p-px' : ''}`}
                style={{
                  transitionDelay: `${i * 0.1}s`,
                  ...(pkg.highlight ? { background: 'linear-gradient(135deg, #8A2BE2, #FF2D95)' } : {}),
                }}
              >
                <div className={`rounded-2xl p-8 h-full flex flex-col ${pkg.highlight ? 'bg-[#12121f]' : 'bg-[#12121f] border border-white/7 hover:border-white/15'} transition-all duration-300`}>
                  {pkg.highlight && (
                    <div className="absolute -top-3 left-8">
                      <span className="btn-gradient text-white text-xs font-semibold px-3 py-1 rounded-full">Most Popular</span>
                    </div>
                  )}
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full border"
                      style={{ color: pkg.color, borderColor: `${pkg.color}40`, background: `${pkg.color}15` }}>
                      {pkg.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{pkg.name}</h3>
                  <p className="text-slate-500 text-sm mb-4">{pkg.tagline}</p>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-black" style={{ background: `linear-gradient(135deg, ${pkg.color}, #FF2D95)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                      {pkg.price}
                    </span>
                    {pkg.period && <span className="text-slate-500 text-base">{pkg.period}</span>}
                  </div>
                  <p className="text-slate-600 text-xs mb-6">{pkg.note}</p>
                  <ul className="space-y-2.5 flex-1 mb-8">
                    {pkg.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5">
                          <path d="M2 8l4 4 8-8" stroke={pkg.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact"
                    className={`inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl font-semibold text-sm transition-all ${
                      pkg.highlight ? 'btn-gradient text-white' : 'border border-white/15 text-white hover:bg-white/5'
                    }`}>
                    {pkg.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="fade-in-up text-center text-sm text-slate-600 mt-8">
            Not sure which package fits? <a href="#contact" className="text-slate-400 hover:text-white underline underline-offset-2 transition-colors">Get in touch</a> and we will help you decide.
          </p>
        </div>
      </section>

      {/* COMBINE WITH OPS */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fade-in-up rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
            style={{ background: 'linear-gradient(135deg, rgba(138,43,226,0.1), rgba(255,45,149,0.08))', border: '1px solid rgba(138,43,226,0.2)' }}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-2">Works Even Better With</p>
              <h3 className="text-2xl font-bold text-white mb-2">Operations Consulting</h3>
              <p className="text-slate-400 text-sm max-w-lg">
                Digital tools perform better when the operational systems behind them are built right. Start with an discovery call to see how both services can work together.
              </p>
            </div>
            <Link to="/operations"
              className="shrink-0 btn-gradient inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold whitespace-nowrap">
              View Operations Consulting
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#0d0d1a]">
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
      <section id="contact" className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="fade-in-up text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">Get Started</p>
            <h2 className="fade-in-up delay-100 text-4xl font-black text-white">Request a quote.</h2>
            <p className="fade-in-up delay-200 text-lg text-slate-400 mt-4">
              Tell us what you need. We will come back within 48 hours with a clear price and next steps.
            </p>
          </div>
          <div className="fade-in-up card-dark rounded-2xl p-8">
            {sent ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-bold text-white mb-2">Enquiry received</h3>
                <p className="text-slate-400">We will be in touch within 48 hours with a clear quote and next steps.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
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
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Email Address <span className="text-pink-500">*</span></label>
                  <input type="email" name="email" required placeholder="jane@acme.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-pink-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Which package are you interested in?</label>
                  <select name="package"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-400 text-sm focus:outline-none focus:border-pink-500 transition-colors">
                    <option value="">Select a package</option>
                    <option>Presence — £99/month</option>
                    <option>Website — £699</option>
                    <option>Growth Site — £1,499</option>
                    <option>Scale — £2,999+</option>
                    <option>Custom / not sure yet</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Tell us about your project <span className="text-pink-500">*</span></label>
                  <textarea name="project" required rows={4}
                    placeholder="What do you need? What is the goal? What do you currently have?"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-pink-500 transition-colors resize-none" />
                </div>
                <button type="submit" disabled={sending}
                  className="btn-gradient w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-white font-semibold disabled:opacity-60">
                  {sending ? 'Sending…' : 'Send Enquiry'}
                  {!sending && <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                </button>
                <p className="text-center text-xs text-slate-600">We respond within 48 hours. No commitment required.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
