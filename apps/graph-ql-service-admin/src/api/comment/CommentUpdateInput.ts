import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type CommentUpdateInput = {
  authorName?: string | null;
  content?: string | null;
  createdDate?: Date | null;
  post?: PostWhereUniqueInput | null;
};
