import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ProcessedCommentWhereInput = {
  id?: StringFilter;
  originalCommentId?: StringNullableFilter;
  processedDate?: DateTimeNullableFilter;
  processingStatus?: StringNullableFilter;
};
