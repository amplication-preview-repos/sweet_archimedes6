import { CommentUpdateManyWithoutPostsInput } from "./CommentUpdateManyWithoutPostsInput";

export type PostUpdateInput = {
  authorName?: string | null;
  comments?: CommentUpdateManyWithoutPostsInput;
  content?: string | null;
  publishedDate?: Date | null;
  title?: string | null;
};
