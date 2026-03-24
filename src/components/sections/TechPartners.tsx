import React from 'react';
import { FadeUp } from '../ui/FadeUp';
import { TECH_PARTNERS } from '../../constants/content';

const TechPartners: React.FC = () => (
  <section className="py-14 bg-white border-y border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <FadeUp>
        <p className="text-center text-xs font-semibold tracking-widest uppercase text-gray-400 mb-8">
          Technologies & Platforms We Engineer On
        </p>
      </FadeUp>
      <FadeUp delay={0.1}>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {TECH_PARTNERS.map((p) => (
            <div key={p.name}
              className="group flex items-center gap-3 px-5 py-2.5 rounded-xl border border-gray-100
                         hover:border-emerald/30 hover:shadow-md transition-all duration-250 bg-white">
              <div className="w-8 h-8 rounded-lg bg-graphite flex items-center justify-center flex-shrink-0">
                <span className="text-emerald text-xs font-bold font-display">{p.abbr}</span>
              </div>
              <span className="text-graphite font-semibold text-sm group-hover:text-emerald-dark transition-colors">{p.name}</span>
            </div>
          ))}
        </div>
      </FadeUp>
    </div>
  </section>
);
export default TechPartners;
