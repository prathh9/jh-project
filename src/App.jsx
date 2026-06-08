import React from 'react';
import './index.css'

export default function App() {
  return (
    <div className="relative min-h-screen bg-neutral-950 text-white overflow-hidden font-sans">
      
      {/* vid bg*/}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-40 transition-opacity duration-1000"
        >
          <source src="/JH.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-neutral-950/40 to-neutral-950"></div>
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-neutral-950/80"></div>
      </div>

      {/* 2. Minimalist Header / Navigation */}
      <header className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12 backdrop-blur-xs bg-black/10 border-b border-white/5">
        <div className="text-xl font-black tracking-widest uppercase">
          <span style={{ color: '#FAC857' }}>Jihyo</span> <span className="text-neutral-400 font-light">GLOBAL</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest uppercase">
          <a href="/" className="text-white border-b border-white pb-1">Home</a>
          <a href="/releases.html" className="text-neutral-400 hover:text-white transition-colors">Releases</a>
          <a href="#stationhead" className="text-neutral-400 hover:text-white transition-colors">Stationhead</a>
          <a href="#socials" className="text-neutral-400 hover:text-white transition-colors">Socials</a>
        </nav>
      </header>


      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-88px)] px-4 text-center">
        <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-neutral-400 mb-4 animate-pulse">
          Official Fan Site Coming Soon 
        </p>
        <div className="flex justify-center items-center w-full my-6">
          <div className="animate-typing-welcome max-w-max">
            <h1 className="text-xl sm:text-3xl md:text-5xl font-black uppercase tracking-wide text-white">
              Welcome to <span style={{ color: '#FAC857' }}>Jihyo</span> Global Fan website
            </h1>
          </div>
        </div>
        <p className="max-w-md text-sm md:text-base text-neutral-400 tracking-wide leading-relaxed font-light mb-8">
          <span style={{ color: '#FAC857' }}>Jihyo</span> is the multi-talented award-winning leader and main vocalist of the kpop girl group TWICE. As a soloist Jihyo released her debut mini album ZONE, 4 OSTs and multiple other projects. Jihyo is known as the perfect idol possessing an incredible skillset as a vocalist, dancer, performer, songwriter and variety star who isn't afraid to take on new challenges.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#releases" 
            className="px-8 py-3 bg-white text-black font-semibold text-xs tracking-[0.2em] uppercase rounded-xs hover:bg-neutral-200 transition-all duration-300 transform hover:scale-[1.02]"
          >
            Explore Releases
          </a>
          <a 
            href="https://www.stationhead.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-8 py-3 bg-transparent text-white border border-white/20 font-semibold text-xs tracking-[0.2em] uppercase rounded-xs hover:bg-white/10 hover:border-white transition-all duration-300"
          >
            Join Stationhead
          </a>
        </div>
      </main>

    </div>
  );
}