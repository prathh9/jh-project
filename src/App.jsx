import React from 'react';
import './index.css'
import Navbar from './Navbar'; 
import StationheadSection from './StationheadSection';
import ReleasesSection from './ReleasesSection';
import SocialsSection from './SocialsSection';

export default function App() {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId.replace('#', ''));
    if (element) {
      const navbarOffset = 90; //same value as navbar height for smooth scroll!
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative bg-neutral-950 text-white font-sans">
      
      {/* fixed video*/}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-50 transition-opacity duration-1000"
        >
          <source src="/JH.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
      </div>


      <Navbar />

      {/* scroll to enter */}
      <div className="relative z-10 w-full">
        <div id="home" className="h-screen w-full flex items-end justify-center pb-12">
          <span className="text-white/50 text-xs tracking-widest uppercase animate-bounce drop-shadow-lg">
            Scroll to Reveal
          </span>
        </div>

        {/* info section */}
        <main className="w-full flex flex-col items-center justify-center px-4 text-center bg-gradient-to-b from-transparent via-neutral-950/95 to-neutral-950 pt-32 pb-8">
          
          <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-neutral-400 mb-4 animate-pulse">
            Official Fan Site Coming Soon 
          </p>
          
          <div className="flex justify-center items-center w-full my-6">
            <div className="animate-typing-welcome max-w-max">
              <h1 className="text-xl sm:text-3xl md:text-5xl font-black uppercase tracking-wide text-white drop-shadow-xl">
                Welcome to <span style={{ color: '#FAC857' }}>Jihyo</span> Global website
              </h1>
            </div>
          </div>
          
          <p className="max-w-md text-sm md:text-base text-neutral-300 tracking-wide leading-relaxed font-light mb-10 drop-shadow-md">
            <span style={{ color: '#FAC857', fontWeight: 'bold' }}>Jihyo</span> is the multi-talented award-winning leader and main vocalist of the kpop girl group TWICE. As a soloist Jihyo released her debut mini album ZONE, 4 OSTs and multiple other projects. Jihyo is known as the perfect idol possessing an incredible skillset as a vocalist, dancer, performer, songwriter and variety star who isn't afraid to take on new challenges.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
          <button 
              onClick={(e) => handleSmoothScroll(e, '#releases')}
              className="px-8 py-3 bg-white text-black font-semibold text-xs tracking-[0.2em] uppercase rounded-xs hover:bg-neutral-200 transition-all duration-300 transform hover:scale-[1.02]"
            >
              Explore Releases
            </button>
            <a 
              href="https://www.stationhead.com/c/oncejihyo" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-3 bg-black/50 backdrop-blur-md text-white border border-white/20 font-semibold text-xs tracking-[0.2em] uppercase rounded-xs hover:bg-white/10 hover:border-white transition-all duration-300"
            >
              Join Stationhead
            </a>
          </div>
        </main>

        {/* rest of the website */}
        <div className="relative z-20 bg-neutral-950 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FAC857] opacity-15 blur-[100px] rounded-full pointer-events-none"></div>
          
          <StationheadSection />
          <ReleasesSection />
          <SocialsSection />
          
        </div>
      </div>
    </div>
  );
}