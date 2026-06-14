import React, { useState, useEffect } from 'react';

const MOCK_MESSAGES = [
    "JIHYO'S VOCALS ARE AMAZING! 🔥🔥🔥",
    "Stream the new track on Spotify and Apple Music!!",
    "The collaboration is absolutely perfect 😭💖",
    "Let's hit the streaming goals today ONCE!",
    "This track is on repeat 24/7 🎧",
    "WE LOVE JIHYO 🧡",
    "Killing me good 🔫 ",
];

const USER_NAMES = ["onceu", "teuwaise", "nayeonyny", "jy_piece", "momo", "m.by__sana", "mina_sr_my", "dahhyunnee", "chaeyo.0", "thinkaboutzu"];


export default function StationheadSection() {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomUser = USER_NAMES[Math.floor(Math.random() * USER_NAMES.length)];
      const randomText = MOCK_MESSAGES[Math.floor(Math.random() * MOCK_MESSAGES.length)];
      const id = Date.now() + Math.random();
      
      setChats((prev) => [...prev.slice(-2), { id, user: randomUser, text: randomText }]);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="stationhead" className="w-full max-w-6xl mx-auto pt-8 pb-0 px-6 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">

        {/* Left Side */}
        <div className="md:col-span-6 flex justify-center">
          <div className="relative w-full max-w-md aspect-square bg-neutral-900 rounded-[2rem] overflow-hidden shadow-2xl border border-white/5">
            <img 
              src="/jh-sh-bg.png" 
              alt="ONCE JIHYO Stationhead" 
              className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
            />
            
            {/* LIVE */}
            <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-red-600 px-2.5 py-1 rounded-full shadow-md animate-pulse z-20">
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              <span className="text-[9px] font-black text-white tracking-widest">LIVE</span>
            </div>

            {/* Glassy Chat Overlay */}
            <div className="absolute bottom-0 left-0 w-full md:w-[85%] p-4 flex flex-col justify-end gap-2.5 z-20 pointer-events-none pb-5">
              {chats.map((chat) => (
                <div 
                  key={chat.id} 
                  className="bg-white/5 backdrop-blur-md px-3 py-2 rounded-xl border border-white/20 text-[11px] text-white shadow-xl animate-pop-in w-fit max-w-full"
                >
                  <span className="font-bold mr-1.5 tracking-wide drop-shadow-md" style={{ color: '#FAC857' }}>
                    {chat.user}
                  </span>
                  <span className="drop-shadow-sm leading-snug">{chat.text}</span>
                </div>
              ))}
            </div>

            {/* Interactive Heart button */}
            <button 
              className="absolute bottom-5 right-5 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 rounded-full shadow-2xl transition-all duration-150 active:scale-75 z-30 group cursor-pointer"
              aria-label="Send Love"
              onClick={(e) => e.preventDefault()}
            >
              <svg 
                className="w-5 h-5 text-[#FAC857] drop-shadow-md transform group-active:scale-110 transition-transform duration-150" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </button>

            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent pointer-events-none z-10"></div>
            
          </div>
        </div>

        {/* Right Side */}
        <div className="md:col-span-6 space-y-6 text-center md:text-left">
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-widest uppercase drop-shadow-md" style={{ color: '#FAC857' }}>
              Streaming Party Channel
            </span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wider text-white drop-shadow-lg">
              Join ONCE JIHYO on Stationhead
            </h2>
          </div>
          
          <p className="text-neutral-300 text-sm md:text-base font-light leading-relaxed max-w-xl drop-shadow-md mx-auto md:mx-0">
            Join here and let's stream together ONCE 🧡
          </p>

          <div className="pt-2">
            <a 
              href="https://www.stationhead.com/c/oncejihyo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-black font-black px-8 py-3.5 rounded-full text-xs tracking-widest transition-all duration-300 hover:opacity-90 transform hover:-translate-y-0.5 uppercase shadow-[0_0_30px_-5px_rgba(250,200,87,0.4)]"
              style={{ backgroundColor: '#FAC857' }}
            >
                Enter Listening Party
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}