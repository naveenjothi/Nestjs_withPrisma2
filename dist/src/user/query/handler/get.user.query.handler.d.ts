import { IQueryHandler } from "@nestjs/cqrs";
import { User as UserAlais } from "prisma/generated/type-graphql";
import { PrismaService } from "src/user/prisma.service";
import { GetUserQuery } from "../impl/get.user.query";
export declare class GetUserQueryHandler implements IQueryHandler<GetUserQuery> {
    private prisma;
    constructor(prisma: PrismaService);
    execute(command: GetUserQuery): Promise<UserAlais>;
}
