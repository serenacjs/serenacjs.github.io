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
  link: string;
}

const updates = updatesData as UpdateItem[];
const experience = experienceData as HomeExperienceItem[];

export default function HomePage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="w-2/3 ml-auto min-h-screen overflow-y-auto">
        <main className="px-5 py-20">
          <section id="home" className="grid gap-8 pb-5">
            <div>
              <p className="text-sm text-black/60">HELLO!</p>
              <h1 className="text-5xl font-bold mt-3 font-heading">Serena Chang</h1>
              <p className="mt-2 text-base text-black/50 font-body">JiaSyuan Chang</p>
              <p className="mt-2 text-lg text-black font-body">UCLA | Junior | Cognitive Science & Data Science Engineering</p>
            </div>

            <div className="grid gap-6 text-black">
              <p className="text-lg leading-relaxed">
                My work focuses on Human-Centered AI, combining human-computer interaction, artificial intelligence, and software engineering to explore how AI systems can support human workflows, decision-making, and collaboration across various application domains. 
              </p>
              <div className="space-y-2 text-lg">
                <p>
                  <span>Currently, I'm...</span>
                </p>
                <ul className="list-disc list-inside space-y-2 text-black pl-4">
                  <li>Researcher in UCLA HCI Research lab (Advisor: Xiang 'Anthony' Chen)</li>
                  <li>Co-President for ACM AI at UCLA</li>
                </ul>
              </div>
              <p className="text-base leading-relaxed italic">
                Note: Still in the process of updating descriptions for experiences (aka some placeholders are used for now, tagged with "[Placeholder]"). In the meantime, my complete resume can be downloaded on the left.
              </p>
            </div>
          </section>

          <section className="pt-16">
            <div className="grid gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-4 font-heading">Experience</h2>
                <div className="text-base text-black/80">
                  {experience.map((item) => item.link ? (
                    <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      <div className="flex justify-between space-y-2">
                        <div>
                          <p className="font-semibold">{item.title}<span className="font-normal italic">{", " + item.organization}</span></p>
                        </div>
                        <p className="text-right">{item.dates}</p>
                      </div>
                    </a>
                  ) : (
                    <div key={item.id} className="flex justify-between gap-4">
                      <div>
                        <p className="font-semibold">{item.title}<span className="font-normal italic">{", " + item.organization}</span></p>
                      </div>
                      <p className="text-right">{item.dates}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                {/**TODO: find a good height for the scrolling updates */}
                <h2 className="text-2xl font-bold mb-4 font-heading">Updates</h2>
                <div className="relative">
                  <div className="overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-transparent hover:scrollbar-thumb-gray-400">
                    {updates.map((update) => (
                      <div key={update.id} className="flex items-start gap-0.5">
                        <span className="w-[100px] shrink-0 text-base font-semibold text-black/80">{update.date}</span>
                        <div>
                          <p className="text-base text-black/80 flex-1">{update.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* <div className="absolute bottom-x left-1/4 -translate-x-1/2 text-gray-400">
                    ↓
                  </div> */}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
