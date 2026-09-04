import { useState, type MouseEvent } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowDownToLine, GraduationCap, Mail } from 'lucide-react';

const images = [
  '/pfp/royce_formal.jpeg',
  '/pfp/garden.png',
  '/pfp/river.jpeg',
  '/pfp/jumpy.jpeg',
];

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'rounded-full px-4 py-2 text-sm tracking-[0.22em] transition',
    isActive
      ? 'bg-[color:var(--accent-soft)] text-[color:var(--accent-deep)]'
      : 'text-[color:var(--muted)] hover:bg-white/70 hover:text-[color:var(--accent-deep)]',
  ].join(' ');

export default function Sidebar() {
  const [currentImage, setCurrentImage] = useState(0);
  const [tooltip, setTooltip] = useState<{ x: number; y: number; visible: boolean }>({
    x: 0,
    y: 0,
    visible: false,
  });

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const updateTooltip = (event: MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setTooltip({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      visible: true,
    });
  };

  return (
    <aside className="w-full max-w-[300px] min-w-0 justify-self-center xl:sticky xl:top-8 xl:justify-self-start">
      <div className="rounded-[32px] bg-[color:var(--surface)] p-5 shadow-[var(--shadow)]">
        <div className="border-b border-[color:var(--border)] pb-5">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--accent-deep)] text-center">Serena Chang</p>
          </div>
        </div>

        <nav className="mt-4 flex flex-wrap items-center justify-center gap-2">
          <NavLink to="/" className={navLinkClass}>
            home
          </NavLink>
          <NavLink to="/experience" className={navLinkClass}>
            experience
          </NavLink>
        </nav>

        <button
          type="button"
          onClick={nextImage}
          onMouseEnter={updateTooltip}
          onMouseMove={updateTooltip}
          onMouseLeave={() => setTooltip((current) => ({ ...current, visible: false }))}
          className="group mt-6 w-full cursor-pointer overflow-hidden rounded-[28px] p-0 text-left transition hover:-translate-y-0.25"
          aria-label="Cycle profile image"
        >
          <div className="relative aspect-[4/4] overflow-hidden rounded-[28px] border border-[color:var(--border)] bg-[linear-gradient(180deg,rgba(250,244,236,0.9),rgba(241,229,215,0.72))]">
            <img
              src={images[currentImage]}
              alt="Serena portrait"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
            />
            {tooltip.visible ? (
              <span
                className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full rounded-full border border-[color:var(--border)]/70 bg-[rgba(255,248,241,0.78)] px-2.5 py-1 text-[9px] uppercase tracking-[0.22em] text-[color:var(--accent-deep)]/70 backdrop-blur-sm whitespace-nowrap"
                style={{ left: tooltip.x, top: tooltip.y - 10 }}
              >
                click to cycle
              </span>
            ) : null}
          </div>
          <div className="mt-3 flex items-center justify-center gap-2 px-1 pb-1">
            {images.map((_, index) => (
              <span
                key={index}
                className={`h-2.5 rounded-full border border-[color:var(--border)] transition-all duration-300 ${
                  index === currentImage
                    ? 'w-6 bg-[color:var(--accent-deep)]'
                    : 'w-2.5 bg-[color:var(--accent-soft)]'
                }`}
                aria-hidden="true"
              />
            ))}
          </div>
        </button>

        <div className="mt-6 space-y-4">
          <div className="p-0">
            <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--muted)]">contact</p>
            <div className="mt-4 space-y-3 text-sm text-[color:var(--accent-deep)]">
              <a
                href="mailto:serenacjs@g.ucla.edu"
                className="flex items-center gap-3 transition hover:opacity-70"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--accent-soft)]">
                  <Mail size={15} />
                </span>
                <span>serenacjs@g.ucla.edu</span>
              </a>
              <a
                href="https://www.linkedin.com/in/serena-chang-878005245"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition hover:opacity-70"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--accent-soft)]">
                  <img src="/icon/linkedin.png" className="h-4 w-4" alt="" />
                </span>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://scholar.google.com/citations?user=30bGPfkAAAAJ&hl=en&oi=ao"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition hover:opacity-70"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--accent-soft)]">
                  <GraduationCap size={15} />
                </span>
                <span>Google Scholar</span>
              </a>
              <a
                href="https://github.com/serenacjs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition hover:opacity-70"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--accent-soft)]">
                  <img src="/icon/github.svg" className="h-4 w-4" alt="" />
                </span>
                <span>GitHub</span>
              </a>
            </div>
          </div>

          <a
            href="/files/JiaSyuan_Chang_Resume.pdf"
            download
            className="group flex items-center justify-between border-t border-[color:var(--border)] pt-4 text-sm text-[color:var(--accent-deep)] transition hover:opacity-70"
          >
            <span className="flex flex-col">
              <span className="tracking-[0.2em] uppercase">Resume / CV</span>
            </span>
            <ArrowDownToLine size={16} className="transition group-hover:translate-y-0.5" />
          </a>
        </div>
      </div>
    </aside>
  );
}
