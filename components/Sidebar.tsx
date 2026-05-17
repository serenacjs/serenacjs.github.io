'use client';

import { useState } from 'react';
import { Mail, GraduationCap, ArrowDownToLine } from "lucide-react";
import { Link } from 'react-router-dom';

{/** TODO: add in images */}
{/** TODO: automate this? take everything from the folder automatically*/}
const images = [
  '/pfp/royce_formal.jpeg',
  // '/pfp/acm_ai.jpeg',
  '/pfp/getty_ctr.jpeg',
  '/pfp/getty_villa.jpeg',
  '/pfp/river.jpg',
  '/pfp/jumpy.jpeg'
];

export default function Sidebar() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="w-1/3 h-screen pt-10 fixed">

      {/* navigation */}
      <header className="flex items-center justify-center">
        <div className="border-b border-black/20 pb-6 px-6">
          <nav className="flex gap-10 text-sm uppercase tracking-[0.35em] text-black/70">
            {/** TODO: maybe maybe maybe add an icon here (in fromt of home)... like a drawing casual thing...?*/}
            <Link to="/" className="hover:text-black">Home</Link>
            <Link to="/experience" className="hover:text-black">Experience</Link>
          </nav>
        </div>
      </header>

      <div className="left-0 flex flex-col items-center justify-start pt-10 space-y-8">
        {/* picture */}
        <div
          className="relative w-70 h-70 cursor-pointer"
          onClick={nextImage}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* image */}
          {/** TODO: make the ui look better, idk how*/}
          <div className="w-70 h-70 rounded-full overflow-hidden">
            <img
              src={images[currentImage]}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* dots */}
          {isHovered && (
            <div className="absolute left-1/2 -bottom-4 -translate-x-1/2 flex">
              <div className="flex space-x-2">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      index === currentImage ? 'bg-black' : 'bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* name */}
        <div className="text-center">
          <h1 className="text-2xl font-bold underline">Serena Chang</h1>
        </div>

        {/* contact info */}
        <div className="flex flex-col space-y-2 text-left">
          <a href="mailto:serenacjs@g.ucla.edu" className="flex items-center gap-2 hover:underline"><span className="w-[18px]"><Mail size={18} className="relative right-[1px]"/></span> <span>Email: <span className="italic">serenacjs@g.ucla.edu</span></span> </a>
          <a></a>
          <a></a>
          <a href="https://www.linkedin.com/in/serena-chang-878005245" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline"><span className="w-[18px]"><img src="/icon/linkedin.png" className="w-4 h-4" alt="GitHub"/></span>LinkedIn</a>
          <a href="https://scholar.google.com/citations?user=30bGPfkAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline"><span className="w-[18px]"><GraduationCap size={18} className="relative right-[1px]"/></span>Google Scholar</a>
          <a href="https://github.com/serenacjs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline"><span className="w-[18px]"><img src="/icon/github.svg" className="w-4 h-4" alt="GitHub"/></span>GitHub</a>
          <a></a>
          <a></a>
          <a href="/files/JiaSyuan_Chang_Resume.pdf" download className="flex items-center gap-2 hover:underline"><ArrowDownToLine size={18}/>Resume/CV</a>
        </div>
      </div>
    </div>
  );
}