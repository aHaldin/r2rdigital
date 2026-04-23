import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
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
        body: JSON.stringify({ ...body, _subject: 'New Contact Enquiry — Road2Resolve' }),
      })
      setSent(true)
    } catch {
      setSending(false)
    }
  }

  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #8A2BE2 0%, transparent 70%)' }} />
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="fade-in-up text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">Get In Touch</p>
          <h1 className="fade-in-up delay-100 text-5xl sm:text-6xl font-black text-white mb-4">
            Let's talk about
            <span className="gradient-text block">your business.</span>
          </h1>
          <p className="fade-in-up delay-200 text-lg text-slate-400 max-w-xl mx-auto">
            Tell us what you are working on. We respond to every message within 48 hours.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 pb-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 items-start">

            {/* Left — info */}
            <div className="fade-in-up space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Not sure where to start?</h2>
                <p className="text-slate-400 leading-relaxed">
                  Just tell us a bit about your business and what you are trying to fix. We will point you in the right direction — no hard sell.
                </p>
              </div>

              <div className="space-y-4">
                <a href="mailto:info@road2resolve.digital"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#12121f] border border-white/7 hover:border-white/15 transition-colors group">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: 'linear-gradient(135deg, rgba(138,43,226,0.2), rgba(255,45,149,0.2))', border: '1px solid rgba(138,43,226,0.3)' }}>
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <path d="M3 5h14l-7 8L3 5z" stroke="#8A2BE2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3 5v10h14V5" stroke="#8A2BE2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">Email us directly</p>
                    <p className="text-white font-medium group-hover:gradient-text transition-colors">info@road2resolve.digital</p>
                  </div>
                </a>
              </div>

              {/* Service shortcuts */}
              <div>
                <p className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wider">Or go straight to</p>
                <div className="space-y-3">
                  <Link to="/operations"
                    className="flex items-center justify-between p-4 rounded-2xl bg-[#12121f] border border-white/7 hover:border-white/15 transition-all group">
                    <div>
                      <p className="text-white font-semibold group-hover:gradient-text transition-colors">Operations Consulting</p>
                      <p className="text-slate-500 text-sm">From £250 audit call</p>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-slate-600 group-hover:text-white transition-colors">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                  <Link to="/digital-solutions"
                    className="flex items-center justify-between p-4 rounded-2xl bg-[#12121f] border border-white/7 hover:border-white/15 transition-all group">
                    <div>
                      <p className="text-white font-semibold group-hover:gradient-text transition-colors">Digital Solutions</p>
                      <p className="text-slate-500 text-sm">From £99/month</p>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-slate-600 group-hover:text-white transition-colors">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </div>

              <p className="text-slate-600 text-xs">
                Road2Resolve is an independent consultancy. Not affiliated with any platform vendor.
              </p>
            </div>

            {/* Right — form */}
            <div className="fade-in-up delay-200">
              <div className="card-dark rounded-2xl p-8">
                {sent ? (
                  <div className="text-center py-12">
                    <div className="text-5xl mb-4">✓</div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message received</h3>
                    <p className="text-slate-400">We will be in touch within 48 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1.5">
                          Your Name <span className="text-pink-500">*</span>
                        </label>
                        <input type="text" name="name" required placeholder="Jane Smith"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-purple-500 transition-colors" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1.5">
                          Business Name
                        </label>
                        <input type="text" name="business" placeholder="Acme Ltd"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-purple-500 transition-colors" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1.5">
                        Email Address <span className="text-pink-500">*</span>
                      </label>
                      <input type="email" name="email" required placeholder="jane@acme.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-purple-500 transition-colors" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1.5">
                        What are you interested in?
                      </label>
                      <select name="service"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-400 text-sm focus:outline-none focus:border-purple-500 transition-colors">
                        <option value="">Select a service</option>
                        <option>Operations Consulting</option>
                        <option>Digital Solutions</option>
                        <option>Both / not sure yet</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1.5">
                        Tell us about your business <span className="text-pink-500">*</span>
                      </label>
                      <textarea name="message" required rows={5}
                        placeholder="What does your business do? What are you trying to fix or improve? What have you tried so far?"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-purple-500 transition-colors resize-none" />
                    </div>

                    <button type="submit" disabled={sending}
                      className="btn-gradient w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-white font-semibold disabled:opacity-60">
                      {sending ? 'Sending…' : 'Send Message'}
                      {!sending && (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </button>
                    <p className="text-center text-xs text-slate-600">We respond to every message within 48 hours.</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
