import { Request } from 'express';

export interface INote {
  _id: string;
  body: string;
  author: string;
  isActive: boolean;
}

export interface INoteRequestBody extends Request {
  body: {
    body: INote['body'];
    author: INote['author'];
  };
}
