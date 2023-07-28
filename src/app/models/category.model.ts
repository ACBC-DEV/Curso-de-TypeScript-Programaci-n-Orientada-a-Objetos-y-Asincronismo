export enum Accestype {
  PRIVATE = 'private',
  PUBLIC = 'public',
}
export interface Category {
  id: number;
  name: string;
  image: string;
  creationAt: Date;
  updatedAt: Date;
  access?: Accestype;
}
