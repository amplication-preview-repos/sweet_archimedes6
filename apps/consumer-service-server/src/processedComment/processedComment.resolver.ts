import * as graphql from "@nestjs/graphql";
import { ProcessedCommentResolverBase } from "./base/processedComment.resolver.base";
import { ProcessedComment } from "./base/ProcessedComment";
import { ProcessedCommentService } from "./processedComment.service";

@graphql.Resolver(() => ProcessedComment)
export class ProcessedCommentResolver extends ProcessedCommentResolverBase {
  constructor(protected readonly service: ProcessedCommentService) {
    super(service);
  }
}
