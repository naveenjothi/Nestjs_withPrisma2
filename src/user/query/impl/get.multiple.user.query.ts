import { FindManyUserArgs } from "../../../../prisma/generated/type-graphql/resolvers/crud/User/args/index";

export class GetMultipleUserQuery {
  constructor(
    public readonly data: FindManyUserArgs,
    public readonly ctx: string | any
  ) {}
}
