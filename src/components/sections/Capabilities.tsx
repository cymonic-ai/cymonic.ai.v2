import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Brain, Database, Cloud, Layers } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { CAPABILITIES } from '../../constants/content';

const iconMap: Record<string,React.ReactNode> = {
  cpu:<Cpu size={22}/>, brain:<Brain size={22}/>, database:<Database size={22}/>,
  cloud:<Cloud size={22}/>, layers:<Layers size={22}/>,
};

const fadeUp = (delay:number) => ({
  initial:{opacity:0,y:24}, whileInView:{opacity:1,y:0},
  viewport:{once:true,margin:'-50px'},
  transition:{duration:0.55,delay,ease:[0.22,1,0.36,1] as any},
});

const Capabilities: React.FC = () => (
  <section id="capabilities" className="py-16 sm:py-20 md:py-28 lg:py-32 bg-graphite">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        label="Core Capabilities"
        title="High-Fidelity Engineering for the Agentic Era"
        subtitle="Five interconnected disciplines that form the foundation of every Cymonic engagement — from data to deployment."
      />
      {/* grid with no items-start so cards stretch to equal height per row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CAPABILITIES.map((cap,i) => (
          <motion.div key={cap.title} {...fadeUp(i*0.08)} style={{isolation:'isolate'}}>
            <div className="group card-base flex flex-col h-full">
              <div className="w-11 h-11 rounded-xl bg-emerald-tint flex items-center justify-center text-emerald mb-5
                              group-hover:bg-emerald group-hover:text-white transition-all duration-300 flex-shrink-0">
                {iconMap[cap.icon]}
              </div>
              <div className="flex-1">
                <h3 className="font-display text-graphite font-bold mb-1 text-[clamp(1.1rem,2.4vw,1.25rem)]">{cap.title}</h3>
                <p className="text-emerald-dark text-xs font-semibold tracking-wide uppercase mb-3">{cap.subtitle}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{cap.description}</p>
              </div>
              <div className="mt-5 pt-5 border-t border-gray-100">
                <a href="mailto:contact@cymonic.ai"
                  className="text-emerald text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all w-fit">
                  Get in touch
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Dark CTA card */}
        <motion.div {...fadeUp(0.4)} style={{isolation:'isolate'}}>
          <div className="bg-graphite rounded-2xl p-6 md:p-8 flex flex-col justify-between h-full min-h-[220px]">
            <div>
              <p className="text-emerald text-xs font-semibold tracking-widest uppercase mb-3">Our Approach</p>
              <h3 className="font-display text-white text-2xl font-bold leading-snug">Partner, Not Vendor.</h3>
              <p className="text-white/50 text-sm mt-3 leading-relaxed">
                We immerse ourselves in your data, workflows, and language — so the intelligence we build fits exactly how you operate.
              </p>
            </div>
            <a href="mailto:contact@cymonic.ai" className="btn-primary mt-6 self-stretch sm:self-start text-xs px-5 py-2.5 justify-center w-full sm:w-auto">
              Start a Conversation
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Capabilities;
