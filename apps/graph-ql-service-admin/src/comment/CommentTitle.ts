import { Comment as TComment } from "../api/comment/Comment";

export const COMMENT_TITLE_FIELD = "authorName";

export const CommentTitle = (record: TComment): string => {
  return record.authorName?.toString() || String(record.id);
};
