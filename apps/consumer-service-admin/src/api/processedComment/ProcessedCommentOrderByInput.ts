import { SortOrder } from "../../util/SortOrder";

export type ProcessedCommentOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  originalCommentId?: SortOrder;
  processedDate?: SortOrder;
  processingStatus?: SortOrder;
  updatedAt?: SortOrder;
};
