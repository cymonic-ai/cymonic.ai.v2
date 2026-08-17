import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../../constants/content';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled]       = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [expanded, setExpanded]       = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navTo = (anchor: string) => {
    const el = document.querySelector(anchor);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setMobileOpen(false);
    setExpanded(null);
  };

  return (
    <nav style={{ zIndex: 100 }}
      className={`fixed top-0 left-0 right-0 transition-all duration-300
        ${scrolled ? 'bg-graphite shadow-lg shadow-black/30' : 'bg-graphite'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

        {/* Logo */}
        <button onClick={() => navTo('#home')} className="flex items-center gap-2.5 flex-shrink-0">
          <img src="/cy-192x192.png" alt="Cymonic technologies logo" className="h-8 w-8" />
          <span className="font-display text-white text-lg font-bold tracking-tight">
            CYMONIC TECHNOLOGIES<span className="text-emerald">.</span>
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="relative group">
              <button onClick={() => navTo(item.anchor)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-white/70
                           hover:text-emerald hover:bg-white/5 transition-all duration-150 text-sm font-medium">
                {item.label}
                {item.dropdown && <ChevronDown size={13} className="transition-transform duration-200 group-hover:rotate-180"/>}
              </button>
              {item.dropdown && (
                <div className="nav-dropdown">
                  {item.dropdown.map((d) => (
                    <button key={d.label} onClick={() => navTo(d.anchor)} className="dropdown-link">
                      <div>
                        <div className="font-medium text-white/90 text-sm">{d.label}</div>
                        <div className="text-white/40 text-xs mt-0.5">{d.desc}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex">
          <a href="mailto:contact@cymonic.ai" className="btn-primary text-xs px-5 py-2.5">Contact Us</a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/80 hover:text-emerald transition-colors p-1"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22}/> : <Menu size={22}/>}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div id="mobile-menu" className="md:hidden bg-graphite border-t border-white/8 px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
          {NAV_ITEMS.map((item) => (
            <div key={item.label}>
              <button
                onClick={() => item.dropdown ? setExpanded(expanded === item.label ? null : item.label) : navTo(item.anchor)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg
                           text-white/75 hover:text-emerald hover:bg-white/5 text-sm font-medium transition-all">
                {item.label}
                {item.dropdown && <ChevronDown size={14} className={`transition-transform duration-200 ${expanded === item.label ? 'rotate-180' : ''}`}/>}
              </button>
              {item.dropdown && expanded === item.label && (
                <div className="ml-4 mt-1 border-l border-emerald/20 pl-3 pb-1 space-y-0.5">
                  {item.dropdown.map((d) => (
                    <button key={d.label} onClick={() => navTo(d.anchor)}
                      className="block w-full text-left py-2 px-2 text-white/55 hover:text-emerald text-sm transition-colors rounded">
                      {d.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-3 border-t border-white/8">
            <a href="mailto:contact@cymonic.ai" className="btn-primary w-full justify-center text-sm">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
