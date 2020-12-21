import { InternalServerErrorException } from "@nestjs/common";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { User as UserAlais } from "prisma/generated/type-graphql";
// import { UserSchema as UserAlais } from "../../model/user.model";
import { PrismaService } from "src/user/prisma.service";
import { GetMultipleUserQuery } from "../impl";

@QueryHandler(GetMultipleUserQuery)
export class GetMultipleUserQueryHandler
  implements IQueryHandler<GetMultipleUserQuery> {
  constructor(private prisma: PrismaService) {}
  async execute(command: GetMultipleUserQuery): Promise<UserAlais[]> {
    try {
      // const { searchstring } = command.data;
      const result = await this.prisma.user.findMany({
        ...command.data,
      });
      return result;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
