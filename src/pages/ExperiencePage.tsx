import Sidebar from '../../components/Sidebar';
import ExperienceSections from '../../components/ExperienceSections';
import sectionsData from '../../data/experience_detail.json';

interface ExperienceItem {
  id: string;
  name: string;
  company: string;
  dates: string;
  tag?: string;
  description?: string;
  link?: string;
}

interface ExperienceSection {
  category: string;
  items: ExperienceItem[];
}

const sections = sectionsData as ExperienceSection[];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 gap-6 px-4 py-4 md:grid-cols-[300px_minmax(0,1fr)] md:px-6 md:py-6">
        <Sidebar />

        <main className="min-w-0 space-y-8 md:space-y-10">

          <ExperienceSections sections={sections} />
        </main>
      </div>
    </div>
  );
}
