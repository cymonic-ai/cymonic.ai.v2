import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, BarChart2, Eye, Zap, Shield, ChevronDown } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { FadeUp } from '../ui/FadeUp';
import { PLATFORM_PRODUCTS } from '../../constants/content';

const iconMap: Record<string,React.ReactNode> = {
  users:<Users size={24}/>, 'bar-chart':<BarChart2 size={24}/>,
  eye:<Eye size={24}/>, zap:<Zap size={24}/>, shield:<Shield size={24}/>,
};

const Platform: React.FC = () => {
  const [expanded, setExpanded] = useState<string|null>(null);
  return (
  <section id="platform" className="py-16 sm:py-20 md:py-28 lg:py-32 bg-graphite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label="Platform Ecosystem" title="Architecting the Autonomous Enterprise"
          subtitle="Five purpose-built engines that work together to give your organisation complete agentic intelligence — from execution to oversight."/>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {PLATFORM_PRODUCTS.map((product,i) => {
            const isOpen = expanded === product.id;
            return (
              <FadeUp key={product.id} delay={i*0.07} className="h-full">
                <div onClick={() => setExpanded(isOpen ? null : product.id)}
                  className={`rounded-2xl border cursor-pointer transition-all duration-300 overflow-hidden h-full
                    ${isOpen ? 'border-emerald/40 shadow-xl shadow-emerald/8 bg-graphite'
                             : 'border-gray-100 hover:border-emerald/30 hover:shadow-lg bg-white'}`}>
                  <div className="p-6 md:p-7">
                    <div className="flex items-start justify-between mb-5">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300
                        ${isOpen?'bg-emerald/15 text-emerald':'bg-emerald-tint text-emerald'}`}>
                        {iconMap[product.icon]}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full transition-all
                          ${isOpen?'bg-emerald/15 text-emerald':'bg-emerald-tint text-emerald-dark'}`}>
                          {product.badge}
                        </span>
                        <ChevronDown size={16} className={`transition-transform duration-300
                          ${isOpen?'rotate-180 text-emerald':'text-gray-400'}`}/>
                      </div>
                    </div>
                    <h3 className={`font-display font-bold mb-1 transition-colors text-[clamp(1.1rem,2.4vw,1.25rem)] ${isOpen?'text-white':'text-graphite'}`}>
                      {product.name}
                    </h3>
                    <p className={`text-sm font-medium transition-colors ${isOpen?'text-emerald':'text-emerald-dark'}`}>
                      {product.tagline}
                    </p>
                  </div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}}
                        exit={{height:0,opacity:0}} transition={{duration:0.35,ease:[0.22,1,0.36,1]}}
                        className="overflow-hidden">
                        <div className="px-6 md:px-7 pb-7 border-t border-white/10 pt-5">
                          <p className="text-white/60 text-sm leading-relaxed mb-5">{product.description}</p>
                          <ul className="space-y-2.5">
                            {product.features.map((f) => (
                              <li key={f} className="flex items-center gap-2.5 text-sm text-white/75">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald flex-shrink-0"/>
                                {f}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeUp>
            );
          })}
          <FadeUp delay={0.35} className="h-full">
            <div className="rounded-2xl border border-dashed border-emerald/25 bg-emerald-tint/40
                            p-6 md:p-7 flex flex-col justify-center items-center text-center min-h-[160px] h-full">
              <p className="font-display font-bold text-graphite text-lg mb-2">Ready to deploy your first Digital Worker?</p>
              <p className="text-gray-500 text-sm mb-5">Start with a 30-minute architecture session.</p>
              <a href="mailto:contact@cymonic.ai" className="btn-primary text-xs px-5 py-2.5 w-full sm:w-auto justify-center">Book a Session</a>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};
export default Platform;
