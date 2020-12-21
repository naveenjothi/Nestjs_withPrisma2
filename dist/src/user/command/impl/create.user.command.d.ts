import { CreateUserArgs } from "../../../../prisma/generated/type-graphql/resolvers/crud/User/args/index";
export declare class CreateUserCommand {
    readonly data: CreateUserArgs;
    readonly ctx: string | any;
    constructor(data: CreateUserArgs, ctx: string | any);
}
