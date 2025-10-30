import { Cpu, Radar, SmartphoneNfc, Cable, Car, ShieldAlert } from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'Edge AI Monitoring',
    desc: 'On-device learning analyzes voltage, current, and moisture to detect faults in milliseconds.'
  },
  {
    icon: Radar,
    title: 'Smart Isolation',
    desc: 'Automated relay control isolates faulty sections to prevent fires and reduce outage time.'
  },
  {
    icon: SmartphoneNfc,
    title: 'GSM/LoRa Alerts',
    desc: 'Sends instant alerts to nearby linemen or electricians with precise fault location.'
  },
  {
    icon: Cable,
    title: 'Mesh Networking',
    desc: 'Resilient node-to-node communication keeps monitoring active during disasters.'
  },
  {
    icon: Car,
    title: 'EV-Safe Power',
    desc: 'Protects EV batteries by detecting minor faults in lines and charging systems.'
  },
  {
    icon: ShieldAlert,
    title: 'Home & Grid Ready',
    desc: 'Compact home unit and industrial-grade variant for utilities like KSEB, TNEB, and BESCOM.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          One platform. Two scales.
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Grid Guard adapts from household panels to distribution lines with the same AI core.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-400">
              <f.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{f.title}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
