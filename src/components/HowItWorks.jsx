import { LineChart, Zap, Satellite, Sparkles } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            How it works
          </h2>
          <ul className="mt-6 space-y-6">
            <li className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 text-sky-600 dark:bg-sky-900/30 dark:text-sky-400">
                <LineChart className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">Signal sensing</h3>
                <p className="text-slate-600 dark:text-slate-300">Voltage, current, and moisture sensors continuously sample line conditions.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">Edge AI inference</h3>
                <p className="text-slate-600 dark:text-slate-300">ESP32 runs compact models to classify anomalies and adapt with on-device learning.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">Smart isolation</h3>
                <p className="text-slate-600 dark:text-slate-300">Relays isolate the faulty segment within milliseconds to prevent escalation.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                <Satellite className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">Reliable alerts</h3>
                <p className="text-slate-600 dark:text-slate-300">GSM/LoRa dispatches location-tagged alerts to field teams and home electricians.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-emerald-200 via-cyan-200 to-sky-200 blur-2xl opacity-60 dark:from-emerald-500/20 dark:via-cyan-500/20 dark:to-sky-500/20" />
          <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-xl bg-slate-50 p-4 dark:bg-slate-800/60">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Line Voltage</p>
                <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">231V</p>
                <p className="mt-1 text-xs text-emerald-600">Stable</p>
              </div>
              <div className="rounded-xl bg-slate-50 p-4 dark:bg-slate-800/60">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Current</p>
                <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">8.3A</p>
                <p className="mt-1 text-xs text-emerald-600">Nominal</p>
              </div>
              <div className="rounded-xl bg-slate-50 p-4 dark:bg-slate-800/60">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Moisture</p>
                <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">12%</p>
                <p className="mt-1 text-xs text-amber-600">Watch</p>
              </div>
              <div className="rounded-xl bg-slate-50 p-4 dark:bg-slate-800/60">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Fault Risk</p>
                <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">Low</p>
                <p className="mt-1 text-xs text-emerald-600">Protected</p>
              </div>
            </div>
            <p className="mt-4 text-center text-xs text-slate-500 dark:text-slate-400">Sample UI preview. Live data can stream from devices or utility SCADA.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
