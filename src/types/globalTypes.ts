import { ReactNode } from 'react';

export interface IProduct {
  [x: string]: ReactNode;
  _id: number;
  author: string;
  title: string;
  publicationDate: string;
  no: number;
}
