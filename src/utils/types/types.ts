export interface ResponseData {
  data: Comment;
  total: number;
  page: number;
  limit: number;
}

export interface Comment {
  id: string;
  message: string;
  owner: object;
  post: string;
  publishDate: string;
}
