import React, { useState } from 'react';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('#home');

  const navItems = [
    { name: 'HOME', href: '#home' },
    { name: 'STATIONHEAD', href: '#stationhead' },
    { name: 'RELEASES', href: '#releases' },
    { name: 'SOCIALS', href: '#socials' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault(); 
    setActiveLink(href);

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      // 90px offset for the transparent navbar
      const navbarOffset = 90; 
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/10 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="text-xl font-black tracking-widest text-white uppercase drop-shadow-md"
        >
          <span className="text-[#FAC857]">JIHYO</span> GLOBAL
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="relative text-sm font-bold tracking-widest text-white/80 hover:text-white transition-colors py-2 drop-shadow-md"
            >
              {item.name}
              
              {/* The Gold Underline */}
              {activeLink === item.href && (
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FAC857] shadow-[0_0_10px_rgba(250,200,87,0.5)] animate-pop-in"></div>
              )}
            </a>
          ))}
        </div>

      </div>
    </nav>
  );
}