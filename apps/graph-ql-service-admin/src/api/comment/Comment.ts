import { Post } from "../post/Post";

export type Comment = {
  authorName: string | null;
  content: string | null;
  createdAt: Date;
  createdDate: Date | null;
  id: string;
  post?: Post | null;
  updatedAt: Date;
};
