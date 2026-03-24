import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { FadeUp } from '../ui/FadeUp';

const CTABand: React.FC = () => (
  <section className="relative py-24 md:py-32 bg-graphite-mid overflow-hidden" style={{background:'#1F2937'}}>
    <div className="absolute inset-0 hex-pattern opacity-40 pointer-events-none"/>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px]
                    bg-emerald/8 rounded-full blur-3xl pointer-events-none"/>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <FadeUp>
        <span className="inline-flex items-center gap-2 border border-emerald/25 rounded-full px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse"/>
          <span className="text-emerald text-xs font-medium tracking-widest uppercase">Start the Conversation</span>
        </span>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2 className="font-display text-white text-3xl md:text-5xl font-bold leading-snug mb-6 pb-1">
          Ready to Architect Your<br/>
          <span className="text-emerald">Autonomous Enterprise?</span>
        </h2>
      </FadeUp>
      <FadeUp delay={0.2}>
        <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Whether you're a startup racing to ship or a global enterprise modernising at scale — we plug in as your senior AI engineering partner.
        </p>
      </FadeUp>
      <FadeUp delay={0.3}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="mailto:contact@cymonic.ai" className="group btn-primary text-base px-8 py-4">
            <Mail size={16}/>
            Get in Touch
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform"/>
          </a>
          <a href="https://www.cymonic.ai" className="btn-outline text-base px-8 py-4">www.cymonic.ai</a>
        </div>
      </FadeUp>
      <FadeUp delay={0.4}>
        <p className="text-white/25 text-sm mt-8">contact@cymonic.ai · Kochi, Kerala, India</p>
      </FadeUp>
    </div>
  </section>
);
export default CTABand;
