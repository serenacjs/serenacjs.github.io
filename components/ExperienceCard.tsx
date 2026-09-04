import { useMemo, useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';

interface ExperienceCardProps {
  name: string;
  company: string;
  dates: string;
  tag?: string;
  description?: string;
  link?: string;
  displayImage?: string;
  hoverImage?: string;
}

export default function ExperienceCard({
  name,
  company,
  dates,
  tag,
  description,
  link,
  displayImage,
  hoverImage,
}: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const imageSrc = useMemo(() => {
    if (isHovered && hoverImage) {
      return hoverImage;
    }

    return displayImage || hoverImage || '';
  }, [displayImage, hoverImage, isHovered]);

  return (
    <article
      className={[
        'group transition-colors duration-300 bg-transparent',
      ].join(' ')}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        type="button"
        onClick={() => setIsExpanded((current) => !current)}
        className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-soft)]"
        aria-expanded={isExpanded}
        aria-label={isExpanded ? `Collapse ${name}` : `Expand ${name}`}
      >
        <div className="min-w-0 space-y-3">
          <div className="flex flex-col gap-1">
            <h3 className="font-heading text-xl leading-tight text-[color:var(--accent-deep)]">
              {name}
            </h3>
            <p className="text-sm text-[color:var(--muted)]">{company}</p>
          </div>

        </div>

        <div className="flex shrink-0 items-start gap-3 pt-1">
          <span className="text-xs uppercase tracking-[0.22em] text-[color:var(--muted)] text-right">
            {dates}
          </span>

          <ChevronDown
            className={[
              'mt-1 h-5 w-5 shrink-0 text-[color:var(--muted)] transition-transform duration-300',
              isExpanded ? 'rotate-0' : '-rotate-90',
            ].join(' ')}
          />
        </div>
      </button>

      <div
        className={[
          'grid overflow-hidden transition-all duration-300',
          isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        ].join(' ')}
      >
        <div className="min-h-0">
          <div className="grid gap-4 px-5 py-5 md:grid-cols-[minmax(0,1.15fr)_minmax(230px,0.85fr)] md:items-stretch">
            <div className="space-y-4">
              {description ? (
                <p className="max-w-3xl text-sm leading-7 text-[color:var(--foreground)]/85">
                  {description}
                </p>
              ) : (
                <p className="text-sm leading-7 text-[color:var(--muted)]">
                  Details will be added here.
                </p>
              )}

              <div className="flex flex-wrap gap-3">
                {link ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white/60 px-4 py-2 text-xs uppercase tracking-[0.22em] text-[color:var(--accent-deep)] transition hover:bg-white"
                  >
                    <ExternalLink size={14} />
                    Open link
                  </a>
                ) : null}
              </div>
            </div>

            <div className="overflow-hidden rounded-[24px] border border-[color:var(--border)] bg-white/60">
              {imageSrc ? (
                <img
                  src={imageSrc}
                  alt={`${name} preview`}
                  className="h-full min-h-[220px] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                />
              ) : (
                <div className="flex min-h-[220px] flex-col justify-between p-5">
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--muted)]">
                      Image slot
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
