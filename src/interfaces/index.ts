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

export interface ISkill {
  id: number;
  name: string;
  direction: 'r' | 'l';
  icons: ITag[];
}

export interface IAchievement {
  id: number;
  text: string;
}

export interface IFormData {
  name: string;
  email: string;
  message: string;
}

export interface IInput {
  fieldName: string;
  defaultValue?: string;
  labelText?: string;
  placeholder?: string;
  inputType?: 'text' | 'email';
  isDisabled?: boolean;
  isRequired?: boolean;
  className?: string;
  errors?: Record<string, string>;
  rows?: number;
  handleChange?:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
}
