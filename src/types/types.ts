export interface PropsIcon {
  fill: string;
  width?: string;
  height?: string;
}

export interface DataGithub {
  login: string;
  avatar_url: string;
}

export interface DataRepository {
  name: string;
  html_url: string;
  description: string;
  license: string | null;
  forks_count: number;
  stargazers_count: number;
}