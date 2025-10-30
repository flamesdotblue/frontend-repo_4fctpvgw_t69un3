import Spline from '@splinetool/react-spline';
import { ShieldCheck, Bolt, Bell } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/5m4rWf0cB6X0Jd9b/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/90 dark:from-slate-900/70 dark:via-slate-900/70 dark:to-slate-900/90" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center md:py-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300">
          <Bolt className="h-3.5 w-3.5 text-amber-500" />
          Real-time LV grid protection
        </span>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl dark:text-white">
          Grid Guard
          <span className="block bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
            AI-Powered Fault Detection & Smart Response
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          Edge AI monitors voltage, current, and line health to detect anomalies instantly, isolate faults, and alert responders via GSM/LoRa. Safer homes, resilient grids, protected EVs.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-white shadow-sm transition hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
          >
            <ShieldCheck className="h-5 w-5" />
            Request a demo
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-slate-700 transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
          >
            <Bell className="h-5 w-5" />
            See how it works
          </a>
        </div>
      </div>
    </section>
  );
}
