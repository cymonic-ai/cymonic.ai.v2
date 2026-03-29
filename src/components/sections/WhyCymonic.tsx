import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { FadeUp } from '../ui/FadeUp';
import { WHY_CYMONIC } from '../../constants/content';

const WhyCymonic: React.FC = () => (
  <section id="why-cymonic" className="py-16 sm:py-20 md:py-28 lg:py-32" style={{background:'#F9FAFB'}}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="lg:sticky lg:top-28">
          <SectionHeader label="Why Cymonic" title="Setting a Higher Standard for AI Engineering"
            subtitle="We don't prototype and hope. Every solution is designed by seasoned architects — production-ready from day one."/>
          <FadeUp delay={0.3}>
            <div className="mt-8 p-6 bg-graphite rounded-2xl">
              <p className="text-emerald text-xs font-bold tracking-widest uppercase mb-3">Headquartered in</p>
              <p className="font-display text-white text-2xl font-bold">Kochi, Kerala</p>
              <p className="text-white/45 text-sm mt-2 leading-relaxed">
                Serving clients across New York · Toronto · Dubai · Singapore · Sydney
              </p>
            </div>
          </FadeUp>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {WHY_CYMONIC.map((item,i) => (
            <FadeUp key={item.title} delay={i*0.06} className="h-full">
              <div className="group bg-white rounded-xl border border-gray-100 p-5
                              hover:border-emerald/30 hover:shadow-md transition-all duration-250">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-tint flex items-center justify-center flex-shrink-0">
                    <span className="w-2 h-2 rounded-full bg-emerald"/>
                  </span>
                  <h4 className="font-display text-graphite text-sm font-bold">{item.title}</h4>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed pl-7">{item.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </div>
  </section>
);
export default WhyCymonic;
