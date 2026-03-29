import React from 'react';
import { Mail, Globe } from 'lucide-react';
import { NAV_ITEMS } from '../../constants/content';

const navTo = (anchor: string) => {
  const el = document.querySelector(anchor);
  if (el) { const top = el.getBoundingClientRect().top + window.scrollY - 64; window.scrollTo({top,behavior:'smooth'}); }
};

const Footer: React.FC = () => (
  <footer className="bg-graphite text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5 mb-4">
            <svg width="30" height="30" viewBox="0 0 34 34" fill="none">
              <polygon points="17,2 30,9.5 30,24.5 17,32 4,24.5 4,9.5" fill="none" stroke="#10B981" strokeWidth="1.5"/>
              <polygon points="17,8 25,12.5 25,21.5 17,26 9,21.5 9,12.5" fill="#10B981" fillOpacity="0.15" stroke="#10B981" strokeWidth="1"/>
              <circle cx="17" cy="17" r="3" fill="#10B981"/>
            </svg>
            <span className="font-display text-white text-lg font-bold">CYMONIC<span className="text-emerald">.</span></span>
          </div>
          <p className="text-white/40 text-sm leading-relaxed mb-5 italic">Instinct Meets Intelligence</p>
          <div className="space-y-2">
            <a href="mailto:contact@cymonic.ai" className="flex items-center gap-2 text-white/50 hover:text-emerald transition-colors text-sm">
              <Mail size={14}/><span>contact@cymonic.ai</span>
            </a>
            <a href="https://www.cymonic.ai" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/50 hover:text-emerald transition-colors text-sm">
              <Globe size={14}/><span>www.cymonic.ai</span>
            </a>
          </div>
        </div>
        {NAV_ITEMS.filter(n => n.dropdown).map((item) => (
          <div key={item.label}>
            <h4 className="text-white/80 font-semibold text-sm mb-4 tracking-wide">{item.label}</h4>
            <ul className="space-y-2.5">
              {item.dropdown!.map((d) => (
                <li key={d.label}>
                  <button onClick={() => navTo(d.anchor)}
                    className="text-white/40 hover:text-emerald text-sm transition-colors text-left">
                    {d.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <p className="text-white/25 text-xs">© 2026 Cymonic Technologies. All rights reserved.</p>
        <p className="text-white/25 text-xs">Kochi, Kerala, India · Architecting Autonomous Intelligence for Global Enterprises</p>
      </div>
    </div>
  </footer>
);
export default Footer;
