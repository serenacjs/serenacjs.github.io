import { promises as fs } from 'fs';
import path from 'path';
import Sidebar from '../../components/Sidebar';
import ExperienceSections from '../../components/ExperienceSections';

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

async function getExperienceSections(): Promise<ExperienceSection[]> {
  const filePath = path.join(process.cwd(), 'data', 'experience_detail.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export default async function ExperiencePage() {
  const sections = await getExperienceSections();

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="w-2/3 ml-auto overflow-y-auto">
        <ExperienceSections sections={sections} />
      </div>
    </div>
  );
}