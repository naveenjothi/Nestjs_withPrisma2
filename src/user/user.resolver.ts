// import { GraphQLSchemaBuilderModule} from "@nestjs/graphql";
import { Args, Mutation, Query, Resolver, Ctx } from "type-graphql";
import {
  CreateUserArgs,
  FindManyUserArgs,
  FindUniqueUserArgs,
} from "../../prisma/generated/type-graphql/resolvers/crud/User/args/index";
import { User } from "../../prisma/generated/type-graphql/models/index";
// import { GetUserQueryInput } from "./query/input/get.user.query.input";
import { UserService } from "./user.service";

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Mutation(() => User, {
    name: "CreateUser",
    description: "Create Author Field",
  })
  async createUser(
    @Args() data: CreateUserArgs,
    @Ctx() ctx: string | any
  ): Promise<User> {
    return await this.userService.createUser(data, ctx);
  }

  @Query(() => [User])
  async getMultipleUsers(
    @Args()
    data: FindManyUserArgs,
    @Ctx() ctx: string | any
  ): Promise<User[]> {
    return await this.userService.getMultipleUsers(data, ctx);
  }

  @Query(() => User)
  async getSingleUser(
    @Args() data: FindUniqueUserArgs,
    @Ctx() ctx: string | any
  ): Promise<User> {
    return await this.userService.getSingleUser(data, ctx);
  }
}
