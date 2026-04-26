import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#0d0d1a] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr] gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block text-xl font-bold tracking-tight mb-4">
              Road2<span className="gradient-text">Resolve</span>
              <span className="gradient-text">.</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Premium operations consulting and digital solutions for ambitious service businesses.
            </p>
            <p className="text-slate-600 text-xs mt-4">info@road2resolve.digital</p>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-white text-sm font-semibold mb-4">Services</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/operations" className="text-slate-500 hover:text-white text-sm transition-colors">
                  Operations Consulting
                </Link>
              </li>
              <li>
                <Link to="/digital-solutions" className="text-slate-500 hover:text-white text-sm transition-colors">
                  Digital Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-white text-sm font-semibold mb-4">Get Started</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/operations" className="text-slate-500 hover:text-white text-sm transition-colors">
                  Book a Discovery Call
                </Link>
              </li>
              <li>
                <a href="mailto:info@road2resolve.digital" className="text-slate-500 hover:text-white text-sm transition-colors">
                  info@road2resolve.digital
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">© 2026 Road2Resolve. All rights reserved.</p>
          <p className="text-slate-600 text-xs">Road2Resolve is an independent consultancy.</p>
        </div>
      </div>
    </footer>
  )
}
