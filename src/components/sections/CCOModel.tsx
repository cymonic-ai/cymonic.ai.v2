import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { FadeUp } from '../ui/FadeUp';
import { CCO_STEPS } from '../../constants/content';

const CCOModel: React.FC = () => {
  const [active, setActive] = useState(0);
  const step = CCO_STEPS[active];
  return (
    <section id="cco-model" className="py-24 md:py-32" style={{background:'#F9FAFB'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label="The CCO Engagement Model" title="A Framework Built for Agentic Maturity"
          subtitle="Three deliberate phases that take you from strategy to autonomous production — and keep you there." center/>
        <FadeUp delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-3 mb-10 justify-center">
            {CCO_STEPS.map((s,i) => (
              <button key={s.title} onClick={() => setActive(i)}
                className={`flex items-center gap-3 px-6 py-3.5 rounded-xl border transition-all duration-250 text-left sm:flex-col sm:items-center sm:px-8 sm:py-4
                  ${active===i ? 'bg-graphite border-emerald/30 text-white shadow-lg shadow-graphite/20'
                               : 'bg-white border-gray-200 text-gray-500 hover:border-emerald/30 hover:shadow-md'}`}>
                <span className={`text-xs font-bold tracking-widest ${active===i?'text-emerald':'text-gray-400'}`}>{s.number}</span>
                <span className={`font-display font-bold text-base ${active===i?'text-white':'text-graphite'}`}>{s.title}</span>
              </button>
            ))}
          </div>
        </FadeUp>
        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-16}}
            transition={{duration:0.4,ease:[0.22,1,0.36,1]}}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-gray-100">
                <div className="inline-flex items-center gap-2 bg-emerald-tint rounded-full px-3 py-1 mb-6">
                  <span className="text-emerald text-xs font-bold">{step.number}</span>
                  <span className="text-emerald-dark text-xs font-semibold">{step.subtitle}</span>
                </div>
                <h3 className="font-display text-graphite text-3xl md:text-4xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base">{step.description}</p>
                <div className="flex items-center gap-2 mt-10">
                  {CCO_STEPS.map((_,i) => (
                    <button key={i} onClick={() => setActive(i)}
                      className={`rounded-full transition-all duration-300 ${i===active?'w-8 h-2 bg-emerald':'w-2 h-2 bg-gray-200 hover:bg-emerald/40'}`}/>
                  ))}
                </div>
              </div>
              <div className="p-8 md:p-12 bg-emerald-tint/30">
                <p className="text-graphite text-xs font-bold tracking-widest uppercase mb-6">What we deliver</p>
                <ul className="space-y-4">
                  {step.bullets.map((b,i) => (
                    <motion.li key={b} initial={{opacity:0,x:16}} animate={{opacity:1,x:0}}
                      transition={{delay:i*0.08,duration:0.4}} className="flex items-start gap-3">
                      <CheckCircle2 size={17} className="text-emerald flex-shrink-0 mt-0.5"/>
                      <span className="text-gray-600 text-sm leading-relaxed">{b}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <FadeUp delay={0.3}>
          <div className="flex justify-center gap-3 mt-6">
            {[{dir:-1,d:"M9 2L4 7l5 5"},{dir:1,d:"M5 2l5 5-5 5"}].map(({dir,d},i) => (
              <button key={i} onClick={() => setActive(Math.max(0,Math.min(CCO_STEPS.length-1,active+dir)))}
                disabled={dir===-1?active===0:active===CCO_STEPS.length-1}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center
                           text-gray-400 hover:border-emerald hover:text-emerald transition-all
                           disabled:opacity-30 disabled:cursor-not-allowed">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d={d} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
};
export default CCOModel;
