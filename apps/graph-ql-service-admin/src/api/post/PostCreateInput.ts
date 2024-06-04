import { CommentCreateNestedManyWithoutPostsInput } from "./CommentCreateNestedManyWithoutPostsInput";

export type PostCreateInput = {
  authorName?: string | null;
  comments?: CommentCreateNestedManyWithoutPostsInput;
  content?: string | null;
  publishedDate?: Date | null;
  title?: string | null;
};
