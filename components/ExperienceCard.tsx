import { useMemo, useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';

interface ExperienceCardProps {
  name: string;
  company: string;
  dates: string;
  tag?: string;
  description?: string;
  link?: string;
  image?: string;
}

export default function ExperienceCard({
  name,
  company,
  dates,
  tag,
  description,
  link,
  image
}: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
          <div
            className={[
              'grid items-start gap-4 px-5 py-5',
              image ? 'grid-cols-[minmax(0,1fr)_40%]' : '',
            ].join(' ')}
          >
            <div className="min-w-0 space-y-4">
              {description ? (
                <p className="max-w-3xl text-sm leading-7 text-[color:var(--foreground)]/85">
                  {description}
                </p>
              ) : (
                <p className="text-sm leading-7 text-[color:var(--muted)]">
                  Details will be added here.
                </p>
              )}

              {link ? (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex max-w-full items-center gap-2 rounded-full border border-[color:var(--border)] px-4 py-2 text-xs tracking-[0.22em] text-[color:var(--accent-deep)] transition hover:bg-[var(--muted)]/25"
                >
                  <ExternalLink size={14}/>
                  LINK:<span className="tracking-[0.125em]">{link}</span>
                </a>
              ) : null}
            </div>

            {image ? (
              <div className="w-full overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white/60">
                <img
                  src={image}
                  alt={`${name} preview`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
