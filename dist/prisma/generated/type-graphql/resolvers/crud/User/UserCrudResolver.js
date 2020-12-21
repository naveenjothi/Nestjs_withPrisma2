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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCrudResolver = void 0;
const TypeGraphQL = require("type-graphql");
const graphql_fields_1 = require("graphql-fields");
const AggregateUserArgs_1 = require("./args/AggregateUserArgs");
const CreateUserArgs_1 = require("./args/CreateUserArgs");
const DeleteManyUserArgs_1 = require("./args/DeleteManyUserArgs");
const DeleteUserArgs_1 = require("./args/DeleteUserArgs");
const FindFirstUserArgs_1 = require("./args/FindFirstUserArgs");
const FindManyUserArgs_1 = require("./args/FindManyUserArgs");
const FindUniqueUserArgs_1 = require("./args/FindUniqueUserArgs");
const UpdateManyUserArgs_1 = require("./args/UpdateManyUserArgs");
const UpdateUserArgs_1 = require("./args/UpdateUserArgs");
const UpsertUserArgs_1 = require("./args/UpsertUserArgs");
const User_1 = require("../../../models/User");
const AggregateUser_1 = require("../../outputs/AggregateUser");
const BatchPayload_1 = require("../../outputs/BatchPayload");
let UserCrudResolver = class UserCrudResolver {
    async user(ctx, args) {
        return ctx.prisma.user.findUnique(args);
    }
    async findFirstUser(ctx, args) {
        return ctx.prisma.user.findFirst(args);
    }
    async users(ctx, args) {
        return ctx.prisma.user.findMany(args);
    }
    async createUser(ctx, args) {
        return ctx.prisma.user.create(args);
    }
    async deleteUser(ctx, args) {
        return ctx.prisma.user.delete(args);
    }
    async updateUser(ctx, args) {
        return ctx.prisma.user.update(args);
    }
    async deleteManyUser(ctx, args) {
        return ctx.prisma.user.deleteMany(args);
    }
    async updateManyUser(ctx, args) {
        return ctx.prisma.user.updateMany(args);
    }
    async upsertUser(ctx, args) {
        return ctx.prisma.user.upsert(args);
    }
    async aggregateUser(ctx, info, args) {
        function transformFields(fields) {
            return Object.fromEntries(Object.entries(fields)
                .filter(([key, value]) => !key.startsWith("_"))
                .map(([key, value]) => {
                if (Object.keys(value).length === 0) {
                    return [key, true];
                }
                return [key, transformFields(value)];
            }));
        }
        return ctx.prisma.user.aggregate(Object.assign(Object.assign({}, args), transformFields(graphql_fields_1.default(info))));
    }
};
__decorate([
    TypeGraphQL.Query(_returns => User_1.User, {
        nullable: true,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindUniqueUserArgs_1.FindUniqueUserArgs]),
    __metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "user", null);
__decorate([
    TypeGraphQL.Query(_returns => User_1.User, {
        nullable: true,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindFirstUserArgs_1.FindFirstUserArgs]),
    __metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "findFirstUser", null);
__decorate([
    TypeGraphQL.Query(_returns => [User_1.User], {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindManyUserArgs_1.FindManyUserArgs]),
    __metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "users", null);
__decorate([
    TypeGraphQL.Mutation(_returns => User_1.User, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreateUserArgs_1.CreateUserArgs]),
    __metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "createUser", null);
__decorate([
    TypeGraphQL.Mutation(_returns => User_1.User, {
        nullable: true,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DeleteUserArgs_1.DeleteUserArgs]),
    __metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "deleteUser", null);
__decorate([
    TypeGraphQL.Mutation(_returns => User_1.User, {
        nullable: true,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateUserArgs_1.UpdateUserArgs]),
    __metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "updateUser", null);
__decorate([
    TypeGraphQL.Mutation(_returns => BatchPayload_1.BatchPayload, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DeleteManyUserArgs_1.DeleteManyUserArgs]),
    __metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "deleteManyUser", null);
__decorate([
    TypeGraphQL.Mutation(_returns => BatchPayload_1.BatchPayload, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateManyUserArgs_1.UpdateManyUserArgs]),
    __metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "updateManyUser", null);
__decorate([
    TypeGraphQL.Mutation(_returns => User_1.User, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpsertUserArgs_1.UpsertUserArgs]),
    __metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "upsertUser", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateUser_1.AggregateUser, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateUserArgs_1.AggregateUserArgs]),
    __metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "aggregateUser", null);
UserCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => User_1.User)
], UserCrudResolver);
exports.UserCrudResolver = UserCrudResolver;
//# sourceMappingURL=UserCrudResolver.js.map