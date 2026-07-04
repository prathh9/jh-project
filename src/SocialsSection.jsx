import React from 'react';
import { FaInstagram, FaSpotify, FaYoutube } from 'react-icons/fa';
import { SlSocialSpotify } from 'react-icons/sl';
import { SiApplemusic } from 'react-icons/si';
import { HiOutlineUsers } from 'react-icons/hi';

const SOCIAL_LINKS = [
  { 
    id: 'insta', 
    name: 'INSTAGRAM', 
    url: 'https://www.instagram.com/_zyozyo/', 
    clipPath: 'polygon(2% 8%, 98% 0%, 95% 95%, 0% 100%)', 
    rotation: '-rotate-2',
    delay: '0s',
    duration: '6s',
    icon: <FaInstagram className="w-6 h-6 md:w-8 md:h-8 mb-1" />
  },
  { 
    id: 'spotify', 
    name: 'SPOTIFY', 
    url: 'https://open.spotify.com/artist/7F1iAHRYxR3MY7yAEuFqgL', 
    clipPath: 'polygon(0% 0%, 100% 5%, 98% 100%, 5% 95%)', 
    rotation: 'rotate-1',
    delay: '1.2s',
    duration: '7s',
    icon: <SlSocialSpotify className='w-6 h-6 md:w-8 md:h-8 mb-1' />
  },
  { 
    id: 'apple', 
    name: 'APPLE MUSIC', 
    url: 'https://music.apple.com/us/artist/jihyo/1071369936', 
    clipPath: 'polygon(5% 0%, 95% 5%, 100% 100%, 0% 92%)', 
    rotation: 'rotate-3',
    delay: '2.5s',
    duration: '5.5s',
    icon: <SiApplemusic className='w-6 h-6 ml-6 md:w-8 md:h-8 mb-1' />
  },
  { 
    id: 'youtube', 
    name: 'YOUTUBE', 
    url: 'https://www.youtube.com/channel/UCZSRKU2kYtBSL11AhMS-C8Q', 
    clipPath: 'polygon(0% 5%, 100% 0%, 95% 95%, 2% 100%)', 
    rotation: '-rotate-1',
    delay: '0.8s',
    duration: '6.5s', 
    icon: <FaYoutube className='w-6 h-6 md:w-8 md:h-8 mb-1' />

  },
];

export default function SocialsSection() {
  return (
    <section id="socials" className="relative w-full pt-0 pb-32 bg-neutral-950 overflow-hidden flex flex-col items-center justify-center z-10">
      
      {/* css floating animation */}
      <style>{`
        @keyframes float-drifting {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(1.5deg); }
        }
      `}</style>

      {/* bg ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#FAC857] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-widest text-white drop-shadow-lg">
            Follow <span style={{ color: '#FAC857' }}>JIHYO</span>
        </h2>
      </div>

      {/* assynetrical grid container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 flex flex-wrap items-center justify-center gap-6 md:gap-10">
        
        {SOCIAL_LINKS.map((social) => (
          <div 
            key={social.id}
            className="block"
            style={{ 
              animation: `float-drifting ${social.duration} ease-in-out infinite`,
              animationDelay: social.delay
            }}
          >
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative block w-40 h-20 md:w-56 md:h-24 transition-all duration-300 hover:scale-110 hover:z-20 active:scale-95 ${social.rotation}`}
            >
              <div
                className="absolute inset-0 bg-[#1A1A1A] group-hover:bg-[#FAC857] transition-all duration-300 flex items-center justify-center shadow-2xl border border-white/5"
                style={{ clipPath: social.clipPath }}
              >
                <div className="text-[#FAC857] group-hover:text-black transition-colors duration-300 drop-shadow-sm">
                {social.icon}
                </div>
                <span className="text-[#FAC857] group-hover:text-black font-black uppercase tracking-widest text-sm md:text-xl transition-colors duration-300 text-center px-4 leading-tight drop-shadow-sm">
                  {social.name}
                </span>
              </div>
              <div
                className="absolute inset-0 border border-white/20 group-hover:border-[#FAC857]/50 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
                style={{ 
                  clipPath: social.clipPath, 
                  transform: 'scale(1.08)', 
                }}
              ></div>
            </a>
          </div>
        ))}
      </div>

    </section>
  );
}