import { Link } from 'react-router-dom'
import { useState } from 'react'

const whatYouGet = [
  { icon: '🔍', title: '90-minute deep dive', desc: 'We go through your entire business — how work flows, where it breaks, and where time and money is being lost.' },
  { icon: '🗺️', title: 'A clear roadmap', desc: 'You leave with a written plan of exactly what needs to change, in priority order. No fluff — just actionable next steps.' },
  { icon: '💡', title: 'Practical advice', desc: 'Honest recommendations you can act on immediately, regardless of whether you work with us further.' },
  { icon: '💰', title: 'A transparent quote', desc: 'If you want us to implement anything from the roadmap, we give you a clear fixed price. No obligation to proceed.' },
]

const wecover = [
  'How work moves through your business',
  'Where your team is losing time on manual tasks',
  'Your current tools and whether they are working',
  'CRM, pipeline, and follow-up processes',
  'Reporting and visibility gaps',
  'Automation opportunities',
  'Where growth is being constrained',
]

const goodfit = [
  'You feel like the business runs through you personally',
  'Your team is busy but things still fall through the cracks',
  'You have no clear visibility into what is actually happening',
  'You are generating revenue but operations are holding you back',
  'You want an honest external perspective — not a sales pitch',
]

const faqs = [
  { q: 'What happens after the call?', a: 'You get a written roadmap and a clear quote for any follow-on work. There is zero obligation to continue — many clients find the roadmap alone extremely valuable and act on it themselves.' },
  { q: 'Is this just a sales call?', a: 'No. This is a genuine working session. We review your actual setup, give you real advice, and hand you something useful before you spend another penny.' },
  { q: 'What if I want you to implement the roadmap?', a: 'We will give you a clear fixed price for any implementation work as part of the roadmap. The scope and cost depends on what we find — which is exactly why we audit first before quoting.' },
  { q: 'How do I prepare?', a: 'Nothing formal required. Just be ready to walk us through how your business operates day-to-day — your tools, your team, your key processes, and where things currently break down.' },
  { q: 'Who is this for?', a: 'Service businesses doing £8k/month or more who feel operationally stretched. Agencies, clinics, consultancies, studios — any business where people are the core product and operations need to scale with them.' },
  { q: 'Do you only work with businesses locally?', a: 'No. We work remotely with businesses across the UK. The audit call is conducted via video — everything we need can be shared on screen.' },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`rounded-2xl border transition-all duration-300 ${open ? 'border-white/15 bg-white/3' : 'border-white/7 bg-transparent'}`}>
      <button className="w-full text-left px-6 py-5 flex items-center justify-between gap-4" onClick={() => setOpen(!open)}>
        <span className="text-white font-medium">{q}</span>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
          className={`shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
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
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    const revenue = e.target.elements.revenue?.value
    const invest = e.target.elements.investment_ready?.value
    setSending(true)
    const data = new FormData(e.target)
    const body = {}
    data.forEach((v, k) => (body[k] = v))
    try {
      await fetch('https://formsubmit.co/ajax/info@road2resolve.digital', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...body, _subject: 'New Operations Audit Call Booking' }),
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
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #8A2BE2 0%, transparent 70%)' }} />
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-slate-400 font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Audit calls available now
          </div>
          <h1 className="fade-in-up delay-100 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05] mb-6">
            Your business doesn't
            <br />
            need more leads —
            <br />
            <span className="gradient-text">it needs better systems.</span>
          </h1>
          <p className="fade-in-up delay-200 text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10">
            Start with a 90-minute audit call. We review your entire operation, build you a clear roadmap, and give you a transparent plan to fix it — with no obligation to go further.
          </p>
          <div className="fade-in-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#book"
              className="btn-gradient w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base">
              Book the Audit Call — £250
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="#what-you-get"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/15 text-white font-semibold text-base hover:bg-white/5 transition-colors">
              What's included
            </a>
          </div>
          <div className="fade-in-up delay-400 flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-slate-500">
            {['£250 · one-time', '90-minute video call', 'Written roadmap included', 'No commitment to proceed'].map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M2 8l4 4 8-8" stroke="#8A2BE2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section id="what-you-get" className="py-24 bg-[#0d0d1a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="fade-in-up text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">What's Included</p>
            <h2 className="fade-in-up delay-100 text-4xl sm:text-5xl font-black text-white">For £250, you get four things.</h2>
            <p className="fade-in-up delay-200 text-lg text-slate-400 mt-4 max-w-xl mx-auto">
              A working session, not a sales pitch. You leave with something genuinely useful.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whatYouGet.map((item, i) => (
              <div key={i}
                className="fade-in-up card-dark rounded-2xl p-6 hover:border-white/15 transition-all duration-300"
                style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE COVER */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="fade-in-up text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">The Audit</p>
              <h2 className="fade-in-up delay-100 text-4xl font-black text-white mb-6">
                We cover every part
                <span className="gradient-text block">of how you operate.</span>
              </h2>
              <p className="fade-in-up delay-200 text-lg text-slate-400 leading-relaxed mb-8">
                In 90 minutes we go deep. Not a surface-level chat — a genuine analysis of your workflows, tools, team, and growth constraints.
              </p>
              <ul className="fade-in-up delay-300 space-y-3">
                {wecover.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-300 text-sm">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8l4 4 8-8" stroke="#8A2BE2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="fade-in-up delay-200 space-y-4">
              {/* Audit card */}
              <div className="rounded-2xl p-px"
                style={{ background: 'linear-gradient(135deg, #8A2BE2, #FF2D95)' }}>
                <div className="rounded-2xl bg-[#12121f] p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-2">The Audit Call</p>
                  <h3 className="text-3xl font-black text-white mb-1">
                    £250
                  </h3>
                  <p className="text-slate-500 text-sm mb-6">One-time · No commitment beyond the call</p>
                  <ul className="space-y-2 mb-8">
                    {['90-minute video call', 'Full operational review', 'Written roadmap delivered after', 'Transparent quote for any follow-on work', 'Honest advice — regardless of next steps'].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-slate-400">
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M2 8l4 4 8-8" stroke="#FF2D95" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href="#book"
                    className="btn-gradient w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold">
                    Book Your Audit Call
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </a>
                </div>
              </div>

              {/* What happens next */}
              <div className="card-dark rounded-2xl p-6">
                <h4 className="text-white font-semibold mb-3 text-sm">What happens after the call?</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  You receive a written roadmap and — if you want us to implement it — a clear fixed quote. Implementation pricing varies depending on what we find. We give you a realistic from-price during the call so there are no surprises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="py-24 bg-[#0d0d1a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="fade-in-up text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">Who It's For</p>
              <h2 className="fade-in-up delay-100 text-4xl font-black text-white mb-6">
                This call is right for you if…
              </h2>
              <ul className="fade-in-up delay-200 space-y-3">
                {goodfit.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-300">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5"><path d="M2 8l4 4 8-8" stroke="#8A2BE2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="fade-in-up delay-200">
              <div className="card-dark rounded-2xl p-8">
                <h3 className="text-white font-bold text-lg mb-2">Not the right fit if you are:</h3>
                <ul className="space-y-3 mt-4">
                  {['Pre-revenue or very early-stage', 'Looking for general business coaching', 'Generating less than £8,000/month', 'Not ready to change how you operate'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-500 text-sm">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 3l8 8M11 3L3 11" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
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

      {/* BOOKING FORM */}
      <section id="book" className="py-24 bg-[#0d0d1a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="fade-in-up text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">Book Now</p>
            <h2 className="fade-in-up delay-100 text-4xl font-black text-white">Book your audit call.</h2>
            <p className="fade-in-up delay-200 text-lg text-slate-400 mt-4">
              Fill in a few details. We will confirm your booking and send a calendar invite within 48 hours.
            </p>
          </div>

          <div className="fade-in-up card-dark rounded-2xl p-8">
            {sent ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-bold text-white mb-2">Request received</h3>
                <p className="text-slate-400">We will be in touch within 48 hours to arrange a time for your audit call.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
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
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5">Email Address <span className="text-pink-500">*</span></label>
                    <input type="email" name="email" required placeholder="jane@acme.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-purple-500 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5">Monthly Revenue</label>
                    <select name="revenue"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-400 text-sm focus:outline-none focus:border-purple-500 transition-colors">
                      <option value="">Select range</option>
                      <option>£8k–£20k/month</option>
                      <option>£20k–£50k/month</option>
                      <option>£50k–£100k/month</option>
                      <option>£100k+/month</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">What is your biggest operational challenge? <span className="text-pink-500">*</span></label>
                  <textarea name="challenge" required rows={4}
                    placeholder="Describe what is not working in your business right now..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-purple-500 transition-colors resize-none" />
                </div>
                <button type="submit" disabled={sending}
                  className="btn-gradient w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-white font-semibold disabled:opacity-60">
                  {sending ? 'Sending…' : 'Book My Audit Call — £250'}
                  {!sending && <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                </button>
                <p className="text-center text-xs text-slate-600">We confirm all bookings within 48 hours. Payment details shared on confirmation.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
