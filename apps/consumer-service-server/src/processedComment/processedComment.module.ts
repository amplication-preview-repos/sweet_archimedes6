import { Module } from "@nestjs/common";
import { ProcessedCommentModuleBase } from "./base/processedComment.module.base";
import { ProcessedCommentService } from "./processedComment.service";
import { ProcessedCommentController } from "./processedComment.controller";
import { ProcessedCommentResolver } from "./processedComment.resolver";

@Module({
  imports: [ProcessedCommentModuleBase],
  controllers: [ProcessedCommentController],
  providers: [ProcessedCommentService, ProcessedCommentResolver],
  exports: [ProcessedCommentService],
})
export class ProcessedCommentModule {}
