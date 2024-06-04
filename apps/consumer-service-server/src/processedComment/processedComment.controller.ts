import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProcessedCommentService } from "./processedComment.service";
import { ProcessedCommentControllerBase } from "./base/processedComment.controller.base";

@swagger.ApiTags("processedComments")
@common.Controller("processedComments")
export class ProcessedCommentController extends ProcessedCommentControllerBase {
  constructor(protected readonly service: ProcessedCommentService) {
    super(service);
  }
}
