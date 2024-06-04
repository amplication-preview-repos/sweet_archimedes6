import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProcessedCommentServiceBase } from "./base/processedComment.service.base";

@Injectable()
export class ProcessedCommentService extends ProcessedCommentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
