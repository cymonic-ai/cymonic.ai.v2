import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { FadeUp } from '../ui/FadeUp';

const CTABand: React.FC = () => (
  <section className="relative py-16 md:py-24 lg:py-32 bg-graphite-mid overflow-hidden" style={{background:'#1F2937'}}>
    <div className="absolute inset-0 hex-pattern opacity-40 pointer-events-none"/>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 md:w-96 md:h-48 lg:w-[500px] lg:h-[200px]
                    bg-emerald/8 rounded-full blur-3xl pointer-events-none"/>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <FadeUp>
        <span className="inline-flex items-center gap-2 border border-emerald/25 rounded-full px-3 md:px-4 py-1 md:py-1.5 mb-6 md:mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse"/>
          <span className="text-emerald text-xs font-medium tracking-widest uppercase">Start the Conversation</span>
        </span>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2 className="font-display text-white text-2xl sm:text-4xl md:text-5xl font-bold leading-snug mb-4 md:mb-6 pb-1">
          Ready to Architect Your<br/>
          <span className="text-emerald">Autonomous Enterprise?</span>
        </h2>
      </FadeUp>
      <FadeUp delay={0.2}>
        <p className="text-white/50 text-sm md:text-base lg:text-lg max-w-xl mx-auto mb-8 md:mb-10 leading-relaxed px-2">
          Whether you're a startup racing to ship or a global enterprise modernising at scale — we plug in as your senior AI engineering partner.
        </p>
      </FadeUp>
      <FadeUp delay={0.3}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 px-2">
          <a href="mailto:contact@cymonic.ai" className="group btn-primary text-sm md:text-base px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto">
            <Mail size={16}/>
            Get in Touch
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform"/>
          </a>
          <a href="https://www.cymonic.ai" className="btn-outline text-sm md:text-base px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto">www.cymonic.ai</a>
        </div>
      </FadeUp>
      <FadeUp delay={0.4}>
        <p className="text-white/25 text-xs md:text-sm mt-6 md:mt-8">contact@cymonic.ai · Kochi, Kerala, India</p>
      </FadeUp>
    </div>
  </section>
);
export default CTABand;
