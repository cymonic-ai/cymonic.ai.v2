import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroGraphic: React.FC = () => (
  <svg viewBox="0 0 420 400" fill="none" className="w-full h-auto max-w-[520px]">
    {[80,130,180,230].map((r,i) => (
      <polygon key={r}
        points={Array.from({length:6},(_,k)=>{const a=(Math.PI/3)*k-Math.PI/6;return `${210+r*Math.cos(a)},${200+r*Math.sin(a)}`;}).join(' ')}
        fill="none" stroke="#10B981" strokeOpacity={0.07+i*0.04} strokeWidth="1"/>
    ))}
    {[
      {cx:210,cy:80, label:'Crew',    r:30},
      {cx:330,cy:150,label:'Pulse',   r:26},
      {cx:330,cy:260,label:'Lens',    r:26},
      {cx:210,cy:325,label:'Orbit',   r:28},
      {cx:88, cy:260,label:'Sentinel',r:26},
      {cx:88, cy:150,label:'Operate', r:26},
    ].map(({cx,cy,label,r},i)=>(
      <motion.g key={label} initial={{opacity:0,scale:0.6}} animate={{opacity:1,scale:1}}
        transition={{delay:0.3+i*0.12,duration:0.5,ease:'easeOut'}}>
        <polygon
          points={Array.from({length:6},(_,k)=>{const a=(Math.PI/3)*k-Math.PI/6;return `${cx+r*Math.cos(a)},${cy+r*Math.sin(a)}`;}).join(' ')}
          fill="#1F2937" stroke="#10B981" strokeOpacity="0.55" strokeWidth="1"/>
        <text x={cx} y={cy+4} textAnchor="middle" fill="#10B981" fontSize="9"
          fontFamily="DM Sans,sans-serif" fontWeight="500">{label}</text>
      </motion.g>
    ))}
    <motion.g initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}}
      transition={{delay:0.1,duration:0.6,ease:[0.22,1,0.36,1]}}>
      <polygon
        points={Array.from({length:6},(_,k)=>{const a=(Math.PI/3)*k-Math.PI/6;return `${210+52*Math.cos(a)},${200+52*Math.sin(a)}`;}).join(' ')}
        fill="#1F2937" stroke="#10B981" strokeWidth="2"/>
      <circle cx="210" cy="200" r="8" fill="#10B981"/>
      <motion.circle cx="210" cy="200" r="18" fill="none" stroke="#10B981" strokeWidth="1" strokeOpacity="0.3"
        animate={{r:[18,30,18],opacity:[0.3,0,0.3]}} transition={{repeat:Infinity,duration:2.5,ease:'easeOut'}}/>
    </motion.g>
    {[[210,148,210,108],[270,173,305,160],[270,227,305,245],[210,250,210,298],[148,227,112,245],[148,173,112,160]]
      .map(([x1,y1,x2,y2],i)=>(
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="#10B981" strokeOpacity="0.18" strokeWidth="1" strokeDasharray="4 3"/>
      ))}
  </svg>
);

const Hero: React.FC = () => (
  <section id="home" className="relative min-h-screen bg-graphite hex-pattern flex items-center overflow-hidden">
    <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald/5 rounded-full blur-3xl pointer-events-none"/>
    <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-emerald/4 rounded-full blur-3xl pointer-events-none"/>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="min-w-0">
          <motion.h1 initial={{opacity:0,y:28}} animate={{opacity:1,y:0}}
            transition={{duration:0.7,delay:0.2,ease:[0.22,1,0.36,1]}}
            className="font-display text-white font-bold leading-[1.1] mb-6 pb-1 text-[clamp(2.35rem,6vw,4rem)]">
            Where Instinct<br/>
            <span className="text-emerald">Meets</span> Intelligence
          </motion.h1>

          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.35}}
            className="text-white/55 leading-relaxed mb-8 sm:mb-10 max-w-lg text-[clamp(1rem,2.4vw,1.125rem)]">
            High-fidelity AI engineering for the Agentic Era. We architect the cognitive engines and autonomous workflows that power the next generation of global enterprise transformation.
          </motion.p>

          <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.5,delay:0.5}}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
            <a href="#platform"
              onClick={e=>{e.preventDefault();document.querySelector('#platform')?.scrollIntoView({behavior:'smooth'});}}
              className="btn-primary group w-full sm:w-auto justify-center">
              Explore Platform
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform"/>
            </a>
            <a href="mailto:contact@cymonic.ai" className="btn-outline w-full sm:w-auto justify-center">Get in Touch</a>
          </motion.div>

          {/* ARISE teaser */}
          <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:0.9,duration:0.5}}
            className="mt-10 pt-8 border-t border-white/10">
            <p className="text-white/30 text-xs tracking-widest uppercase mb-3 font-medium">We live by</p>
            <div className="flex flex-wrap items-center gap-2 justify-center sm:justify-start">
              {[
                {l:'A', v:'Accountability'},
                {l:'R', v:'Reliability'},
                {l:'I', v:'Integrity'},
                {l:'S', v:'Solidarity'},
                {l:'E', v:'Excellence'},
              ].map(({l, v}, i) => (
                <div key={l} className="flex items-center gap-1">
                  <div className="flex flex-col items-center px-2.5 py-1.5 rounded-lg hover:bg-white/5 transition-colors cursor-default group">
                    <span className="font-display text-xl font-bold text-white group-hover:text-emerald transition-colors">{l}</span>
                    <span className="text-white/35 text-xs font-medium">{v}</span>
                  </div>
                  {i < 4 && <span className="text-white/15 text-xs hidden sm:inline">·</span>}
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        <motion.div initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1}}
          transition={{duration:0.9,delay:0.3,ease:[0.22,1,0.36,1]}}
          className="flex items-center justify-center h-64 sm:h-72 lg:h-auto">
          <HeroGraphic/>
        </motion.div>
      </div>
    </div>

    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.2}}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
      <span className="text-white/25 text-xs tracking-widest uppercase">Scroll</span>
      <motion.div animate={{y:[0,6,0]}} transition={{repeat:Infinity,duration:1.6}}
        className="w-px h-8 bg-gradient-to-b from-emerald/40 to-transparent"/>
    </motion.div>
  </section>
);

export default Hero;
