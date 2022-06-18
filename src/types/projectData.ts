export type projectDataType = {
  id: number;
  title: string;
  img: string;
  url: string;
  slider: Array<string>;
  about: string;
  tools: Array<string>;
  more?: {
    description: string;
    moreLists: Array<{ head: string; text: string }>;
  };
};
