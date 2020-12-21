"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserCommandHandler = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const prisma_service_1 = require("../../prisma.service");
const create_user_command_1 = require("../impl/create.user.command");
let CreateUserCommandHandler = class CreateUserCommandHandler {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async execute(command) {
        try {
            const values = Object.assign({}, command.data.data);
            const result = await this.prisma.user.create({
                data: {
                    email: values.email,
                    name: values.name,
                },
            });
            return result;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
};
CreateUserCommandHandler = __decorate([
    cqrs_1.CommandHandler(create_user_command_1.CreateUserCommand),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CreateUserCommandHandler);
exports.CreateUserCommandHandler = CreateUserCommandHandler;
//# sourceMappingURL=create.user.command.handler.js.map