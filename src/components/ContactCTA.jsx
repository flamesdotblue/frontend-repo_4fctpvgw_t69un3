import { Mail, Phone, Building2 } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-emerald-600 to-cyan-600 p-8 text-white shadow-lg dark:border-slate-800">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Partner with Grid Guard</h2>
            <p className="mt-3 text-emerald-50">
              Utilities and OEMs: accelerate deployments, reduce downtime, and elevate safety.
              Request a pilot for domestic or distribution networks.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <a href="mailto:team@gridguard.ai" className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3 text-sm font-medium backdrop-blur transition hover:bg-white/20">
                <Mail className="h-4 w-4" /> team@gridguard.ai
              </a>
              <a href="tel:+919000000000" className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3 text-sm font-medium backdrop-blur transition hover:bg-white/20">
                <Phone className="h-4 w-4" /> +91 90000 00000
              </a>
              <span className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3 text-sm font-medium backdrop-blur">
                <Building2 className="h-4 w-4" /> India
              </span>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl bg-white p-6 text-slate-900 shadow-sm dark:bg-slate-950 dark:text-white">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm text-slate-600 dark:text-slate-300">Name</label>
                <input className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-emerald-400 focus:ring-2 dark:border-slate-800 dark:bg-slate-900" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm text-slate-600 dark:text-slate-300">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-emerald-400 focus:ring-2 dark:border-slate-800 dark:bg-slate-900" placeholder="you@company.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-slate-600 dark:text-slate-300">Message</label>
                <textarea rows={4} className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-emerald-400 focus:ring-2 dark:border-slate-800 dark:bg-slate-900" placeholder="Tell us about your use case" />
              </div>
            </div>
            <button className="mt-4 w-full rounded-lg bg-emerald-600 px-4 py-2.5 text-white transition hover:bg-emerald-500">Request demo</button>
            <p className="mt-2 text-center text-xs text-slate-500 dark:text-slate-400">We’ll get back within 24–48 hours.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
