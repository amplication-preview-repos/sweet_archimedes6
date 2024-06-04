export type ProcessedComment = {
  createdAt: Date;
  id: string;
  originalCommentId: string | null;
  processedDate: Date | null;
  processingStatus: string | null;
  updatedAt: Date;
};
