import React, { useState } from 'react';

const RELEASES = [
  { 
    id: 1, 
    title: 'This is Jihyo', 
    platform: 'Spotify', 
    description: 'This is Jihyo Spotify',
    link: 'https://open.spotify.com/playlist/37i9dQZF1DZ06evO4xlyaE', 
    type: 'spotify',
    embedUrl: 'https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO4xlyaE?utm_source=generator&si=471c3e3835ed46c0'
  },
  { 
    id: 2, 
    title: 'Music Videos', 
    platform: 'YouTube', 
    description: 'Music Videos',
    link: 'https://www.youtube.com/playlist?list=PLPkGm97cdEBiBxVLrVa4RSJjTbLDvgQPB',
    type: 'youtube',
    embedUrl: 'https://www.youtube.com/embed/jMQEhehlZjk?list=PLPkGm97cdEBiBxVLrVa4RSJjTbLDvgQPB'
  },
  { 
    id: 3, 
    title: 'Profile', 
    platform: 'Spotify', 
    description: 'Listen on Spotify',
    link: 'https://open.spotify.com/artist/7F1iAHRYxR3MY7yAEuFqgL?si=EdCPnXpsSDOBy-WHviVq6A',
    type: 'spotify',
    embedUrl: 'https://open.spotify.com/embed/artist/7F1iAHRYxR3MY7yAEuFqgL?utm_source=generator&si=5df1773f17a24a35'
  },
];

export default function ReleasesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev === RELEASES.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? RELEASES.length - 1 : prev - 1));

  return (
    <section id="releases" className="relative w-full pt-12 pb-12 bg-neutral-950 overflow-hidden flex flex-col items-center justify-center">
      
      {/* Z background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <svg 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none"
          className="w-full h-[70%] md:h-[90%] opacity-[0.04] text-[#FAC857] drop-shadow-[0_0_50px_rgba(250,200,87,0.3)]" 
          fill="currentColor"
        >
          <path d="M 0 10 H 100 V 25 L 30 75 H 100 V 90 H 0 V 75 L 70 25 H 0 Z" />
        </svg>
      </div>

      {/* Section Header */}
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-widest text-white drop-shadow-lg">
          Explore <span style={{ color: '#FAC857' }}>Releases</span>
        </h2>
      </div>

      {/* 2. The Slider Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 flex items-center justify-between gap-2 md:gap-8">
        
        {/* Left Arrow */}
        <button 
          onClick={prevSlide}
          className="p-2 md:p-5 text-white/50 hover:text-[#FAC857] hover:bg-white/5 rounded-full transition-all duration-300 transform hover:scale-110 active:scale-95 z-20 shrink-0"
        >
          <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Grid */}
        <div className="flex-1 max-w-2xl mx-auto w-full">
          <div 
            key={currentIndex} 
            className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] shadow-2xl animate-pop-in p-2 md:p-4 flex flex-col"
          >
            <div className="w-full relative bg-black/20 rounded-xl flex items-center justify-center overflow-hidden">
              
              {RELEASES[currentIndex].type === 'spotify' && (
                <iframe 
                  src={RELEASES[currentIndex].embedUrl} 
                  width="100%" 
                  height="352" 
                  className="rounded-xl shadow-lg" 
                  frameBorder="0" 
                  allowFullScreen="" 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                  loading="lazy"
                ></iframe>
              )}

                {RELEASES[currentIndex].type === 'youtube' && (
                        <div className="relative w-full aspect-video rounded-xl shadow-lg overflow-hidden group">
                        
                        <a 
                            href={RELEASES[currentIndex].link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="absolute inset-0 z-20"
                            aria-label="Open YouTube Playlist"
                        ></a>

                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 z-10 pointer-events-none flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 bg-[#FAC857] text-black text-xs font-bold px-4 py-2 rounded-full tracking-widest uppercase transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                            Open on YouTube
                            </div>
                        </div>

                        {/* iframe */}
                        <iframe 
                            src={RELEASES[currentIndex].embedUrl}
                            width="100%" 
                            height="100%"
                            className="w-full h-full pointer-events-none" 
                            frameBorder="0" 
                            title="YouTube video player" 
                            loading="lazy"
                        ></iframe>
                        </div>
                )}

            </div>
          </div>
        </div>

        {/* Right Arrow */}
        <button 
          onClick={nextSlide}
          className="p-2 md:p-5 text-white/50 hover:text-[#FAC857] hover:bg-white/5 rounded-full transition-all duration-300 transform hover:scale-110 active:scale-95 z-20 shrink-0"
        >
          <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

      </div>

      {/* dots (below) */}
      <div className="relative z-10 flex gap-3 mt-10">
        {RELEASES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'bg-[#FAC857] w-8' : 'bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>

    </section>
  );
}