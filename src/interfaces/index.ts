export interface IMenuOption {
  id: number;
  name: string;
  href: string;
}

export interface ITag {
  name: string;
  className: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export interface IProject {
  id: number;
  title: string;
  description: string;
  url: string;
  image: string;
  type: 'personal' | 'client';
  tags: ITag[];
}

export interface IExperience {
  id: number;
  role: string;
  date: string;
  company: string;
  description: string;
  achievements: IAchievement[];
  tags: ITag[];
}

export interface IAchievement {
  id: number;
  text: string;
}
