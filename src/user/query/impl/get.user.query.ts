import { FindUniqueUserArgs } from "../../../../prisma/generated/type-graphql/resolvers/crud/User/args/index";

export class GetUserQuery {
  constructor(
    public readonly data: FindUniqueUserArgs,
    public readonly ctx: string | any
  ) {}
}
