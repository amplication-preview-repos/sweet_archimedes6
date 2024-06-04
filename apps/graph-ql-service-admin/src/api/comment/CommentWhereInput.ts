import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type CommentWhereInput = {
  authorName?: StringNullableFilter;
  content?: StringNullableFilter;
  createdDate?: DateTimeNullableFilter;
  id?: StringFilter;
  post?: PostWhereUniqueInput;
};
