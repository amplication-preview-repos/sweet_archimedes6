import { ProcessedComment as TProcessedComment } from "../api/processedComment/ProcessedComment";

export const PROCESSEDCOMMENT_TITLE_FIELD = "originalCommentId";

export const ProcessedCommentTitle = (record: TProcessedComment): string => {
  return record.originalCommentId?.toString() || String(record.id);
};
