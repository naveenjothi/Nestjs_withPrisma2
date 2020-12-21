import { Injectable } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { CreateUserCommand } from "./command/impl/create.user.command";
import {
  CreateUserArgs,
  FindManyUserArgs,
} from "../../prisma/generated/type-graphql/resolvers/crud/User/args/index";
import { GetUserQuery, GetMultipleUserQuery } from "./query/impl/index";
import { User, FindUniqueUserArgs } from "prisma/generated/type-graphql";

@Injectable()
export class UserService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus
  ) {}

  async createUser(data: CreateUserArgs, ctx: string | any): Promise<User> {
    return this.commandBus.execute(new CreateUserCommand(data, ctx));
  }

  async getMultipleUsers(
    data: FindManyUserArgs,
    ctx: string | any
  ): Promise<User[]> {
    return this.queryBus.execute(new GetMultipleUserQuery(data, ctx));
  }

  async getSingleUser(
    data: FindUniqueUserArgs,
    ctx: string | any
  ): Promise<User> {
    return this.queryBus.execute(new GetUserQuery(data, ctx));
  }
}
