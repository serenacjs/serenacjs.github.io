'use client';

import { useMemo, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ExperienceCard from './ExperienceCard';

interface ExperienceItem {
  id: string;
  name: string;
  company: string;
  dates: string;
  tag?: string;
  description?: string;
  link?: string;
  displayImage?: string;
  hoverImage?: string;
}

interface ExperienceSection {
  category: string;
  items: ExperienceItem[];
}

interface ExperienceSectionsProps {
  sections: ExperienceSection[];
}

type ResearchBuckets = {
  published: ExperienceItem[];
  ongoing: ExperienceItem[];
  past: ExperienceItem[];
};

function getSectionLabel(category: string) {
  return category.toLowerCase().replace(/(^|\s)\S/g, (letter) => letter.toUpperCase());
}

function splitResearchItems(items: ExperienceItem[]): ResearchBuckets {
  return items.reduce<ResearchBuckets>(
    (acc, item) => {
      const tag = item.tag?.toLowerCase() ?? '';

      if (tag.includes('published')) {
        acc.published.push(item);
      } else if (tag.includes('ongoing')) {
        acc.ongoing.push(item);
      } else {
        acc.past.push(item);
      }

      return acc;
    },
    { published: [], ongoing: [], past: [] },
  );
}

function SectionCard({
  title,
  items,
}: {
  title: string;
  items: ExperienceItem[];
}) {
  if (!items.length) {
    return null;
  }

  return (
    <section className="space-y-3">
      <div className="flex items-end justify-between gap-4">
        <h3 className="font-heading text-aseb text-[color:var(--accent-deep)]">{title}</h3>
      </div>

      <div className="divide-y divide-[color:var(--border)]">
        {items.map((item) => (
          <ExperienceCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

export default function ExperienceSections({ sections }: ExperienceSectionsProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    () => new Set(sections.map((section) => section.category)),
  );

  const toggleSection = (category: string) => {
    setExpandedSections((current) => {
      const next = new Set(current);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
  };

  const researchBuckets = useMemo(() => {
    const researchSection = sections.find((section) => section.category === 'RESEARCH');
    return researchSection ? splitResearchItems(researchSection.items) : null;
  }, [sections]);

  return (
    <div className="w-full space-y-6 pt-8">
      {sections.map((section) => {
        const isOpen = expandedSections.has(section.category);
        const isResearch = section.category === 'RESEARCH' && researchBuckets;
        const sectionLabel = getSectionLabel(section.category);

        return (
          <section
            key={section.category}
            className="rounded-[5px] py-5"
          >
            <button
              type="button"
              onClick={() => toggleSection(section.category)}
              className="flex w-full items-start justify-between gap-4 text-left"
              aria-expanded={isOpen}
              aria-label={isOpen ? `Collapse ${section.category}` : `Expand ${section.category}`}
            >
              <div className="space-y-2">
                <h2 className="font-heading text-3xl text-[color:var(--accent-deep)] sm:text-3xl">
                  {sectionLabel}
                </h2>
              </div>

              <ChevronDown
                className={[
                  'mt-1 h-5 w-5 shrink-0 text-[color:var(--muted)] transition-transform duration-300',
                  isOpen ? 'rotate-0' : '-rotate-90',
                ].join(' ')}
              />
            </button>

            {isOpen ? (
              <div className="mt-6 space-y-8">
                {isResearch ? (
                  <>
                    <SectionCard title='Published' items={researchBuckets.published} />
                    <SectionCard title='Ongoing' items={researchBuckets.ongoing} />
                    <SectionCard title="Past Research" items={researchBuckets.past} />
                  </>
                ) : (
                  <div className="divide-y divide-[color:var(--border)]">
                    {section.items.map((item) => (
                      <ExperienceCard key={item.id} {...item} />
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <p className="mt-4 text-sm text-[color:var(--muted)]">Click to expand this section.</p>
            )}
          </section>
        );
      })}
    </div>
  );
}
