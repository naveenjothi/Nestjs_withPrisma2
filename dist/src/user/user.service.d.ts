import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { CreateUserArgs, FindManyUserArgs } from "../../prisma/generated/type-graphql/resolvers/crud/User/args/index";
import { User, FindUniqueUserArgs } from "prisma/generated/type-graphql";
export declare class UserService {
    private readonly commandBus;
    private readonly queryBus;
    constructor(commandBus: CommandBus, queryBus: QueryBus);
    createUser(data: CreateUserArgs, ctx: string | any): Promise<User>;
    getMultipleUsers(data: FindManyUserArgs, ctx: string | any): Promise<User[]>;
    getSingleUser(data: FindUniqueUserArgs, ctx: string | any): Promise<User>;
}
