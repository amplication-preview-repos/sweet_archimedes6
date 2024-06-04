import { Comment } from "../comment/Comment";

export type Post = {
  authorName: string | null;
  comments?: Array<Comment>;
  content: string | null;
  createdAt: Date;
  id: string;
  publishedDate: Date | null;
  title: string | null;
  updatedAt: Date;
};
