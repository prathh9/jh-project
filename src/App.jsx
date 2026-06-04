import React from 'react';

function App() {
  return (
    <div className="w-full font-sans">
      {/* Nav bar*/ }
      <nav className="fixed top-0 w-full z-50 bg-blue-600/90 text-white p-4">
        <ul className="flex space-x-8 font-bold max-w-6xl mx-auto">
          <li className="cursor-pointer hover:text-blue-200">WELCOME</li>
          <li className="cursor-pointer hover:text-blue-200">HOME</li>
          <li className="cursor-pointer hover:text-blue-200">RELEASES</li>
          <li className="cursor-pointer hover:text-blue-200">PLAYLIST</li>
          <li className="cursor-pointer hover:text-blue-200">ABOUT</li>
          <li className="cursor-pointer hover:text-blue-200">LINKS</li>
        </ul>
      </nav>

      {/* 1: Welcome/Home */}
      <section className="relative min-h-screen bg-blue-900 flex items-center justify-center pt-16 overflow-hidden">
        
        {/* Yt background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <iframe 
            className="absolute top-1/2 left-1/2 w-[150vw] h-[150vh] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-60"
            src="https://www.youtube.com/embed/_opQpDYh33I?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=_opQpDYh33I&start=9&end=45"
            title="YouTube video background" 
            frameBorder="0" 
            allow="autoplay; encrypted-media" 
            allowFullScreen
          ></iframe>
        </div>
        
        {/* Content that goes on top of yt background */}
        <div className="relative z-10 text-white text-center">
          <h1 className="text-7xl font-extrabold mb-4 drop-shadow-lg">WELCOME</h1>
          <p className="text-2xl font-medium drop-shadow-md">JIHYO.</p>
        </div>
      </section>

      {/* 2: Releases section */}
      <section className="min-h-screen bg-gray-300 flex flex-col items-center justify-center p-8">
        <h2 className="text-4xl font-bold text-gray-700 mb-8">RELEASES HERE?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {/* Mock content boxes for merch/releases */}
          <div className="h-64 bg-gray-400 rounded-lg shadow-md"></div>
          <div className="h-64 bg-gray-400 rounded-lg shadow-md"></div>
          <div className="h-64 bg-gray-400 rounded-lg shadow-md"></div>
        </div>
      </section>

      {/* 3: Playlist/Links/About */}
      <section className="min-h-screen bg-orange-400 flex flex-col items-center justify-center p-8">
        <h2 className="text-4xl font-bold text-orange-900 mb-8">PLAYLIST/LINK and ABOUT here?</h2>
        <div className="w-full max-w-4xl bg-orange-300 h-96 rounded-lg shadow-md flex items-center justify-center">
          <p className="text-orange-800 text-lg">Spotify embed or About text goes here</p>
        </div>
      </section>
    </div>
  );
}

export default App;