import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import ContactCTA from './components/ContactCTA';

function Footer() {
  return (
    <footer className="mx-auto mt-10 max-w-7xl px-6 pb-12">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400 md:flex-row">
        <p>© {new Date().getFullYear()} Grid Guard. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#features" className="hover:text-slate-700 dark:hover:text-slate-200">Features</a>
          <a href="#contact" className="hover:text-slate-700 dark:hover:text-slate-200">Contact</a>
          <a href="#" className="hover:text-slate-700 dark:hover:text-slate-200">Privacy</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-white">
      <Hero />
      <Features />
      <HowItWorks />
      <ContactCTA />
      <Footer />
    </div>
  );
}
