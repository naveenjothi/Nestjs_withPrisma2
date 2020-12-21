import { CreateUserArgs } from "../../../../prisma/generated/type-graphql/resolvers/crud/User/args/index";

export class CreateUserCommand {
  constructor(
    public readonly data: CreateUserArgs,
    public readonly ctx: string | any
  ) {}
}
