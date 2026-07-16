export interface Options {
  name: string;
  title: string;
}

export interface Content {
  id: string;
  title: string;
  type: 'none' | 'encoder' | 'transform' | 'hash' | 'block' | 'password';
  options?: Options[];
}

export type Type = Content['type'];

export interface PageContents {
  title: string;
  content: Content[];
}
