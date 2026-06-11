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
      
      // Keeping 4 messages on screen since the box is bigger now
      setChats((prev) => [...prev.slice(-3), { id, user: randomUser, text: randomText }]);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="stationhead" className="relative w-full py-16 px-6">
      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* TOP: Side-by-Side Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full items-center">
          
          {/* LEFT: SH Image Container */}
          <div className="relative w-full aspect-square md:aspect-auto md:h-[400px] bg-neutral-900 rounded-[2rem] overflow-hidden shadow-2xl border border-white/5">
            <img 
              src="/jh-sh-bg.png" 
              alt="ONCE JIHYO Stationhead" 
              className="w-full h-full object-cover select-none pointer-events-none"
            />
            <div className="absolute top-5 right-5 flex items-center gap-2 bg-red-600/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg animate-pulse">
              <span className="w-2 h-2 rounded-full bg-white"></span>
              <span className="text-[10px] font-black text-white tracking-widest">LIVE</span>
            </div>
          </div>

          {/* RIGHT: Dedicated Fake Chat Box */}
          <div className="relative w-full h-[400px] bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col">
            
            {/* Header for Chat Box */}
            <div className="w-full px-6 py-4 border-b border-white/10 bg-black/20">
              <h3 className="text-xs font-black tracking-widest uppercase text-white/50">
                <span style={{ color: '#FAC857' }}>Live</span> Chat
              </h3>
            </div>

            {/* Chat Messages Area */}
            <div className="flex-1 p-6 flex flex-col justify-end gap-3 overflow-hidden bg-gradient-to-t from-black/40 to-transparent">
              {chats.map((chat) => (
                <div 
                  key={chat.id} 
                  className="bg-black/60 px-4 py-2.5 rounded-2xl rounded-tl-sm border border-white/5 text-xs text-white/90 shadow-xl animate-pop-in w-fit max-w-[95%]"
                >
                  <span className="font-bold mr-2 tracking-wide" style={{ color: '#FAC857' }}>
                    {chat.user}
                  </span>
                  {chat.text}
                </div>
              ))}
            </div>
            <button 
              className="absolute bottom-5 right-5 p-3.5 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg transition-all duration-150 active:scale-75 z-20 group cursor-pointer"
              aria-label="Send Love"
              onClick={(e) => {
                e.preventDefault(); // Prevents the page from jumping
              }}
            >
              <svg 
                className="w-5 h-5 text-[#FAC857] drop-shadow-md transform group-active:scale-110 transition-transform duration-150" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </button>
          </div>
          
        </div>

        {/* BOTTOM: Wave Design Divider & Button */}
        <div className="w-full flex flex-col items-center mt-6">
          
          {/* SVG Wave - Changed height to h-8 and mb-8 to mb-4 for a tighter gap */}
          <svg className="w-full max-w-md h-8 text-white/10 mb-4" viewBox="0 0 400 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 25C100 -10 300 60 400 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M50 35C150 0 250 70 350 35" stroke="#FAC857" strokeOpacity="0.3" strokeWidth="1" strokeLinecap="round"/>
          </svg>

          {/* Call to Action Button */}
          <a 
            href="https://www.stationhead.com/c/oncejihyo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-black font-extrabold px-10 py-4 rounded-full text-xs shadow-[0_0_30px_-5px_rgba(250,200,87,0.4)] tracking-[0.2em] transform hover:scale-105 transition-all duration-300 uppercase"
            style={{ backgroundColor: '#FAC857' }} 
          >
            Enter Listening Party
          </a>
        </div>

      </div>
    </section>
  );
}