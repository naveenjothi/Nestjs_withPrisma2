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
exports.GetUserQueryHandler = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const type_graphql_1 = require("../../../../prisma/generated/type-graphql");
const prisma_service_1 = require("../../prisma.service");
const get_user_query_1 = require("../impl/get.user.query");
let GetUserQueryHandler = class GetUserQueryHandler {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async execute(command) {
        try {
            const result = await this.prisma.user.findUnique(Object.assign({}, command.data));
            return result;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
};
GetUserQueryHandler = __decorate([
    cqrs_1.QueryHandler(get_user_query_1.GetUserQuery),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], GetUserQueryHandler);
exports.GetUserQueryHandler = GetUserQueryHandler;
//# sourceMappingURL=get.user.query.handler.js.map