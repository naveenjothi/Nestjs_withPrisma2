import { FindManyUserArgs } from "../../../../prisma/generated/type-graphql/resolvers/crud/User/args/index";
export declare class GetMultipleUserQuery {
    readonly data: FindManyUserArgs;
    readonly ctx: string | any;
    constructor(data: FindManyUserArgs, ctx: string | any);
}
