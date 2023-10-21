export interface IGrid2 {
  title: string;
  subtitle: string;
  items: {
    id: number;
    title: string;
    href: string;
    description: string;
    src: string;
    date: string;
    datetime: string;
    category: { title: string; href: string };
    author: {
      name: string;
      role: string;
      href: string;
      src: string;
    };
  }[];
}
