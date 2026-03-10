export interface PropsIcon {
  fill?: string;
  width?: string;
  height?: string;
}

export interface DataGithub {
  login: string;
  avatar_url: string;
  bio: string | null;
  html_url: string;
}

export interface DataRepository {
  name: string;
  html_url: string;
  description: string;
  license: { name: string } | null;
  forks_count: number;
  stargazers_count: number;
}

export interface DataPost {
  id: number | string;
  title: string;
  body: string;
  date: string;
  category: string;
}