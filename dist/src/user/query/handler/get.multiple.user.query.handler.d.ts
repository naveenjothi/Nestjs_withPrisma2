import { IQueryHandler } from "@nestjs/cqrs";
import { User as UserAlais } from "prisma/generated/type-graphql";
import { PrismaService } from "src/user/prisma.service";
import { GetMultipleUserQuery } from "../impl";
export declare class GetMultipleUserQueryHandler implements IQueryHandler<GetMultipleUserQuery> {
    private prisma;
    constructor(prisma: PrismaService);
    execute(command: GetMultipleUserQuery): Promise<UserAlais[]>;
}
