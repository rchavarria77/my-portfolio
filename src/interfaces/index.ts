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
  tags: ITag[];
}
