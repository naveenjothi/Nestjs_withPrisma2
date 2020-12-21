import { FindUniqueUserArgs } from "../../../../prisma/generated/type-graphql/resolvers/crud/User/args/index";
export declare class GetUserQuery {
    readonly data: FindUniqueUserArgs;
    readonly ctx: string | any;
    constructor(data: FindUniqueUserArgs, ctx: string | any);
}
