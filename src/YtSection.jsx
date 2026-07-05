import React, { useState, useEffect } from 'react';

export default function YtSection() {
  const [ytVideos, setYtVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchCachedVideos = async () => {
      try {
        const response = await fetch('/api/youtube');
        const data = await response.json();

        if (data && data.items) {
          const fetchedVideos = data.items
            .filter(item => item.snippet.title !== 'Private video' && item.snippet.title !== 'Deleted video')
            .map((item, index) => ({
              id: `yt-${item.id || index}`,
              title: item.snippet.title,
              embedUrl: `https://www.youtube.com/embed/${item.snippet.resourceId.videoId}?rel=0`
            }));
          setYtVideos(fetchedVideos);
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to read server cache:", error);
        setIsLoading(false);
      }
    };

    fetchCachedVideos();
  }, []);

  const nextSlide = () => {
    if (currentIndex < ytVideos.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section id="music-videos" className="relative w-full bg-neutral-950 pt-4 pb-12 flex flex-col items-center overflow-hidden">
      
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-widest text-white drop-shadow-lg">
          Music <span style={{ color: '#FAC857' }}>Videos</span>
        </h2>
      </div>

      {isLoading ? (
        <div className="py-20 text-[#FAC857] font-bold tracking-widest animate-pulse relative z-10">
          LOADING VIDEOS...
        </div>
      ) : ytVideos.length > 0 ? (
        <>
          <div className="relative z-10 w-full max-w-5xl mx-auto px-4 flex items-center justify-between gap-2 md:gap-8">
            
            {/* Left Arrow */}
            <button 
              onClick={prevSlide} 
              disabled={currentIndex === 0}
              className="p-2 md:p-5 text-white/50 rounded-full transition-all duration-300 transform z-20 shrink-0
                         enabled:hover:text-[#FAC857] enabled:hover:bg-white/5 enabled:hover:scale-110 enabled:active:scale-95
                         disabled:opacity-30 disabled:cursor-default"
              aria-label="Previous Video"
            >
              <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex-1 max-w-2xl mx-auto w-full overflow-hidden rounded-[2rem]">
              <div 
                className="flex transition-transform duration-500 ease-in-out w-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {ytVideos.map((video) => (
                  <div key={video.id} className="w-full shrink-0 flex flex-col justify-center">
                    <div className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] shadow-2xl p-2 md:p-4">
                      <div className="w-full relative aspect-video bg-[#111] rounded-xl overflow-hidden shadow-lg flex items-center justify-center">
                        <iframe 
                          src={video.embedUrl}
                          width="100%" 
                          height="100%"
                          className="w-full h-full" 
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowFullScreen
                          loading="lazy"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button 
              onClick={nextSlide} 
              disabled={currentIndex === ytVideos.length - 1}
              className="p-2 md:p-5 text-white/50 rounded-full transition-all duration-300 transform z-20 shrink-0
                         enabled:hover:text-[#FAC857] enabled:hover:bg-white/5 enabled:hover:scale-110 enabled:active:scale-95
                         disabled:opacity-30 disabled:cursor-default"
              aria-label="Next Video"
            >
              <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Slider Dots */}
          <div className="relative z-10 flex gap-3 mt-10 flex-wrap justify-center px-4">
            {ytVideos.map((_, index) => (
              <button
                key={`dot-${index}`}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-[#FAC857] w-8' : 'bg-white/20 w-2.5 hover:bg-white/40'
                }`}
                aria-label={`Go to video ${index + 1}`}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="py-20 text-white/50 tracking-widest relative z-10">
          NO VIDEOS FOUND.
        </div>
      )}
    </section>
  );
}