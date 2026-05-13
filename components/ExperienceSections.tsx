'use client';

import { useState } from 'react';
import ExperienceCard from './ExperienceCard';
import { ChevronDown } from "lucide-react";

interface ExperienceItem {
  id: string;
  name: string;
  company: string;
  dates: string;
  tag?: string;
  displayImage?: string;
  description?: string;
  link?: string;
  hoverImage?: string;
}

interface ExperienceSection {
  category: string;
  items: ExperienceItem[];
}

interface ExperienceSectionsProps {
  sections: ExperienceSection[];
}

export default function ExperienceSections({ sections }: ExperienceSectionsProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(sections.map(s => s.category))
  );

  const toggleSection = (category: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(category)) {
      newExpanded.delete(category);
    } else {
      newExpanded.add(category);
    }
    setExpandedSections(newExpanded);
  };

  return (
    <div className="space-y-10 px-8 py-20">
      {sections.map((section) => (
        <div key={section.category}>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-xl font-semibold uppercase tracking-[0.25em] text-black/70">
              {section.category}
            </h2>
            <button
              onClick={() => toggleSection(section.category)}
              className="text-black/70 hover:text-black transition-colors"
              aria-label={expandedSections.has(section.category) ? `Collapse ${section.category}` : `Expand ${section.category}`}
            >
                <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                    expandedSections.has(section.category) ? "rotate-0" : "-rotate-90"
                    }`}
                />
            </button>
          </div>
          {expandedSections.has(section.category) && (
            <div className="space-y-4">
              {section.items.map((item) => (
                <ExperienceCard key={item.id} {...item} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
