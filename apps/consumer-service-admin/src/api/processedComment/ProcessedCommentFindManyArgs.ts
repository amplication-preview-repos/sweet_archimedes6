import { ProcessedCommentWhereInput } from "./ProcessedCommentWhereInput";
import { ProcessedCommentOrderByInput } from "./ProcessedCommentOrderByInput";

export type ProcessedCommentFindManyArgs = {
  where?: ProcessedCommentWhereInput;
  orderBy?: Array<ProcessedCommentOrderByInput>;
  skip?: number;
  take?: number;
};
