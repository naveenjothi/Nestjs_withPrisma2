import { Module } from "@nestjs/common";
import { UserResolver } from "./user.resolver";
import { UserService } from "./user.service";
import { UserQueryHandler } from "./query/index";
import { CqrsModule } from "@nestjs/cqrs";
import { PrismaService } from "src/user/prisma.service";
import { PrismaClient } from "@prisma/client";
import { UserCommandHandler } from "./command";

@Module({
   imports: [CqrsModule],
   providers: [
      PrismaClient,
      UserService,
      PrismaService,
      UserResolver,
      ...UserQueryHandler,
      ...UserCommandHandler,
   ],
   // exports: [UserService],
})
export class UserModule {}
