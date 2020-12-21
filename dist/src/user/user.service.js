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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const create_user_command_1 = require("./command/impl/create.user.command");
const index_1 = require("./query/impl/index");
const type_graphql_1 = require("../../prisma/generated/type-graphql");
let UserService = class UserService {
    constructor(commandBus, queryBus) {
        this.commandBus = commandBus;
        this.queryBus = queryBus;
    }
    async createUser(data, ctx) {
        return this.commandBus.execute(new create_user_command_1.CreateUserCommand(data, ctx));
    }
    async getMultipleUsers(data, ctx) {
        return this.queryBus.execute(new index_1.GetMultipleUserQuery(data, ctx));
    }
    async getSingleUser(data, ctx) {
        return this.queryBus.execute(new index_1.GetUserQuery(data, ctx));
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [cqrs_1.CommandBus,
        cqrs_1.QueryBus])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map