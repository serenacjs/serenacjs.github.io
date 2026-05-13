'use client';

import { useState } from 'react';

interface ExperienceCardProps {
  name: string;
  company: string;
  dates: string;
  tag?: string;
  displayImage?: string;
  description?: string;
  link?: string;
  hoverImage?: string;
}

export default function ExperienceCard({
  name,
  company,
  dates,
  tag,
  displayImage,
  description,
  link,
  hoverImage,
}: ExperienceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <div
      className={`bg-[#F0E8DF] p-6 rounded-lg shadow-md cursor-pointer transition-all duration-300 ${
        isHovered ? 'transform scale-105' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {!isHovered ? (
        <div className="relative">
          {tag ? (
            <div className="absolute top-0 right-0 bg-gray-200 px-2 py-1 rounded text-sm">
                {/** TODO: add colors*/}
              {tag}
            </div>
          ) : null}
          <h3 className="text-xl font-semibold mb-1">{name}<span className = "font-normal text-base italic">, {company}</span></h3>
          <p className="text-gray-600 mb-4">{dates}</p>
          {displayImage ? (
            <div className="flex justify-end">
              <img src={displayImage} alt={name} className="w-16 h-16 object-cover rounded" />
            </div>
          ) : null}
        </div>
      ) : (
        <div className="relative">
        {tag ? (
        <div className="absolute top-0 right-0 bg-gray-200 px-2 py-1 rounded text-sm">
            {tag}
        </div>
          ) : null}
          <h3 className="text-xl font-semibold mb-2">{name}<span className = "font-normal text-base italic">, {company}</span></h3>
          <p className="text-gray-600 mb-2">{dates}</p>
          {description ? <p className="mb-4">{description}</p> : null}
          {hoverImage ? (
            <img src={hoverImage} alt={name} className="w-full h-32 object-cover rounded mb-2" />
          ) : null}
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              View Project
            </a>
          ) : null}
        </div>
      )}
    </div>
  );
}