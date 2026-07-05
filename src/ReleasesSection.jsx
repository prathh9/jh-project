import React, { useState } from 'react';

const SPOTIFY_RELEASES = [
  { 
    id: 'spotify-playlist', 
    title: 'This is Jihyo',
    embedUrl: 'https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO4xlyaE?utm_source=generator&theme=0'
  },
  { 
    id: 'spotify-artist', 
    title: 'Artist Profile',
    embedUrl: 'https://open.spotify.com/embed/artist/7F1iAHRYxR3MY7yAEuFqgL?utm_source=generator&theme=0'
  }
];

export default function ReleasesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev === SPOTIFY_RELEASES.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? SPOTIFY_RELEASES.length - 1 : prev - 1));

  return (
    <section id="releases" className="relative w-full bg-neutral-950 pt-12 pb-12 flex flex-col items-center overflow-hidden">
      
      {/* Background (Leaving the raw SVG here for now) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-[70%] md:h-[90%] opacity-[0.04] text-[#FAC857] drop-shadow-[0_0_50px_rgba(250,200,87,0.3)]" fill="currentColor">
          <path d="M 0 10 H 100 V 25 L 30 75 H 100 V 90 H 0 V 75 L 70 25 H 0 Z" />
        </svg>
      </div>

      <div className="relative z-10 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-widest text-white drop-shadow-lg">
          Explore <span style={{ color: '#FAC857' }}>Releases</span>
        </h2>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 flex items-center justify-between gap-2 md:gap-8">
        
        {/* Left Arrow */}
        <button onClick={prevSlide} className="p-2 md:p-5 text-white/50 hover:text-[#FAC857] hover:bg-white/5 rounded-full transition-all duration-300 z-20 shrink-0" aria-label="Previous Release">
          <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex-1 max-w-2xl mx-auto w-full overflow-hidden rounded-[2rem]">
          <div 
            className="flex transition-transform duration-500 ease-in-out w-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {SPOTIFY_RELEASES.map((release) => (
              <div key={release.id} className="w-full shrink-0 flex flex-col justify-center">
                <div className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] shadow-2xl p-2 md:p-4">
                  <div className="w-full relative bg-black/20 rounded-xl overflow-hidden shadow-lg flex items-center justify-center">
                    <iframe 
                      src={release.embedUrl} 
                      width="100%" 
                      height="352" 
                      className="rounded-xl shadow-lg" 
                      title={release.title}
                      allowFullScreen="" 
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button onClick={nextSlide} className="p-2 md:p-5 text-white/50 hover:text-[#FAC857] hover:bg-white/5 rounded-full transition-all duration-300 z-20 shrink-0" aria-label="Next Release">
          <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="relative z-10 flex gap-3 mt-10 flex-wrap justify-center px-4">
        {SPOTIFY_RELEASES.map((_, index) => (
          <button
            key={`dot-${index}`}
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'bg-[#FAC857] w-8' : 'bg-white/20 w-2.5 hover:bg-white/40'
            }`}
            aria-label={`Go to release ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}