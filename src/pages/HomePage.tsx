import Sidebar from '../../components/Sidebar';
import updatesData from '../../data/updates.json';
import experienceData from '../../data/experience_brief.json';

interface UpdateItem {
  id: string;
  title: string;
  description: string;
  date: string;
}

interface HomeExperienceItem {
  id: string;
  title: string;
  organization: string;
  dates: string;
  link?: string;
}

const updates = updatesData as UpdateItem[];
const experience = experienceData as HomeExperienceItem[];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 gap-6 px-4 py-4 md:grid-cols-[300px_minmax(0,1fr)] md:px-6 md:py-6">
        <Sidebar />

        <main className="min-w-0 space-y-8 md:space-y-10">
          <section className="min-w-0 pt-8">
            <p className="text-xs tracking-[0.34em] text-[color:var(--muted)]">Hello~~</p>
            <h1 className="mt-4 font-heading text-5xl leading-none text-[color:var(--accent-deep)] md:text-5xl md:text-5xl">
              Serena Chang
            </h1>
            <p className="mt-3 text-sm text-[color:var(--muted)] md:text-sm">JiaSyuan Chang</p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[color:var(--foreground)]/85 md:text-sm md:leading-8">
              UCLA | Junior | Cognitive Science & Data Science Engineering
              {/* UCLA junior in Cognitive Science and Data Science Engineering, focusing on human-centered AI, interface design, and software systems that help people think, create, and collaborate more clearly. */}
            </p>
            <div className="mt-6 max-w-3xl space-y-3 text-sm leading-7 text-[color:var(--foreground)]">
              <p>
                My work focuses on Human-Centered AI, combining human-computer interaction, artificial intelligence, and software engineering to explore how AI systems can support human workflows, decision-making, and collaboration across various application domains.
              </p>
              <p>
                Currently, I'm...
              </p>
              <ul className="list-disc list-inside space-y-3 pl-4">
                <li>Software Engineer Intern at Labcorp</li>
                <li>Researcher in UCLA HCI Research</li>
                <li>Co-President of ACM AI at UCLA</li>
              </ul>
            </div>
          </section>

          {/* <section className="grid min-w-0 gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-10"> */}
            <div className="min-w-0 border-t border-[color:var(--border)] pt-6">
              <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between md:gap-4">
                <div>
                  <h2 className="mt-2 font-heading text-3xl text-[color:var(--accent-deep)] md:text-3xl">
                    Experience
                  </h2>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {experience.map((item) => (
                  <article key={item.id} className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-4">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                        <h3 className="font-body text-sm text-[color:var(--accent-deep)] md:text-sm">
                          {item.title}
                        </h3>
                        <p className="text-sm text-[color:var(--muted)]">
                         | {item.organization}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--muted)] md:shrink-0 md:text-right">
                      {item.dates}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            {/* <div className="min-w-0 space-y-6">
              <section className="border-t border-[color:var(--border)] pt-6">
                <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between md:gap-4">
                  <div>
                    <h2 className="mt-2 font-heading text-3xl text-[color:var(--accent-deep)] md:text-4xl">
                      Recent notes
                    </h2>
                  </div>
                </div>

                <div className="mt-6 divide-y divide-[color:var(--border)]">
                  {updates.map((update) => (
                    <div key={update.id} className="flex flex-col gap-2 py-4 md:flex-row md:gap-4">
                      <p className="w-auto shrink-0 text-xs uppercase tracking-[0.22em] text-[color:var(--muted)] md:w-24">
                        {update.date}
                      </p>
                      <div>
                        <p className="text-sm leading-7 text-[color:var(--foreground)]/82">
                          {update.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div> */}
          {/* </section> */}
        </main>
      </div>
    </div>
  );
}
