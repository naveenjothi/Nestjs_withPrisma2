import { CreateUserArgs, FindManyUserArgs, FindUniqueUserArgs } from "../../prisma/generated/type-graphql/resolvers/crud/User/args/index";
import { User } from "../../prisma/generated/type-graphql/models/index";
import { UserService } from "./user.service";
export declare class UserResolver {
    private userService;
    constructor(userService: UserService);
    createUser(data: CreateUserArgs, ctx: string | any): Promise<User>;
    getMultipleUsers(data: FindManyUserArgs, ctx: string | any): Promise<User[]>;
    getSingleUser(data: FindUniqueUserArgs, ctx: string | any): Promise<User>;
}
