import Sidebar from '../../components/Sidebar';
import ExperienceSections from '../../components/ExperienceSections';
import sectionsData from '../../data/experience_detail.json';

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

const sections = sectionsData as ExperienceSection[];

export default function ExperiencePage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="w-2/3 ml-auto overflow-y-auto">
        <ExperienceSections sections={sections} />
      </div>
    </div>
  );
}
