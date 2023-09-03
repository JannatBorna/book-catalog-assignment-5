import { ReactNode } from 'react';

export interface IProduct {
  [x: string]: ReactNode;
  _id?: string;
  no: number;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  price?: number;
  image?: string;
  description?: string;
  email?: string;
  name: string;
  userId: string;
}

// export interface IError {
// data: {
// message: string;
// };
// }
