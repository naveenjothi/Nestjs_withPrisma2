import { ICommandHandler } from "@nestjs/cqrs";
import { UserSchema as UserAlais } from "../../model/user.model";
import { PrismaService } from "src/user/prisma.service";
import { CreateUserCommand } from "../impl/create.user.command";
export declare class CreateUserCommandHandler implements ICommandHandler<CreateUserCommand> {
    private prisma;
    constructor(prisma: PrismaService);
    execute(command: CreateUserCommand): Promise<UserAlais>;
}
