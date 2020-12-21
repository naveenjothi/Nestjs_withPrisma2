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
exports.PostCrudResolver = void 0;
const TypeGraphQL = require("type-graphql");
const graphql_fields_1 = require("graphql-fields");
const AggregatePostArgs_1 = require("./args/AggregatePostArgs");
const CreatePostArgs_1 = require("./args/CreatePostArgs");
const DeleteManyPostArgs_1 = require("./args/DeleteManyPostArgs");
const DeletePostArgs_1 = require("./args/DeletePostArgs");
const FindFirstPostArgs_1 = require("./args/FindFirstPostArgs");
const FindManyPostArgs_1 = require("./args/FindManyPostArgs");
const FindUniquePostArgs_1 = require("./args/FindUniquePostArgs");
const UpdateManyPostArgs_1 = require("./args/UpdateManyPostArgs");
const UpdatePostArgs_1 = require("./args/UpdatePostArgs");
const UpsertPostArgs_1 = require("./args/UpsertPostArgs");
const Post_1 = require("../../../models/Post");
const AggregatePost_1 = require("../../outputs/AggregatePost");
const BatchPayload_1 = require("../../outputs/BatchPayload");
let PostCrudResolver = class PostCrudResolver {
    async post(ctx, args) {
        return ctx.prisma.post.findUnique(args);
    }
    async findFirstPost(ctx, args) {
        return ctx.prisma.post.findFirst(args);
    }
    async posts(ctx, args) {
        return ctx.prisma.post.findMany(args);
    }
    async createPost(ctx, args) {
        return ctx.prisma.post.create(args);
    }
    async deletePost(ctx, args) {
        return ctx.prisma.post.delete(args);
    }
    async updatePost(ctx, args) {
        return ctx.prisma.post.update(args);
    }
    async deleteManyPost(ctx, args) {
        return ctx.prisma.post.deleteMany(args);
    }
    async updateManyPost(ctx, args) {
        return ctx.prisma.post.updateMany(args);
    }
    async upsertPost(ctx, args) {
        return ctx.prisma.post.upsert(args);
    }
    async aggregatePost(ctx, info, args) {
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
        return ctx.prisma.post.aggregate(Object.assign(Object.assign({}, args), transformFields(graphql_fields_1.default(info))));
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Post_1.Post, {
        nullable: true,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindUniquePostArgs_1.FindUniquePostArgs]),
    __metadata("design:returntype", Promise)
], PostCrudResolver.prototype, "post", null);
__decorate([
    TypeGraphQL.Query(_returns => Post_1.Post, {
        nullable: true,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindFirstPostArgs_1.FindFirstPostArgs]),
    __metadata("design:returntype", Promise)
], PostCrudResolver.prototype, "findFirstPost", null);
__decorate([
    TypeGraphQL.Query(_returns => [Post_1.Post], {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindManyPostArgs_1.FindManyPostArgs]),
    __metadata("design:returntype", Promise)
], PostCrudResolver.prototype, "posts", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Post_1.Post, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreatePostArgs_1.CreatePostArgs]),
    __metadata("design:returntype", Promise)
], PostCrudResolver.prototype, "createPost", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Post_1.Post, {
        nullable: true,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DeletePostArgs_1.DeletePostArgs]),
    __metadata("design:returntype", Promise)
], PostCrudResolver.prototype, "deletePost", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Post_1.Post, {
        nullable: true,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdatePostArgs_1.UpdatePostArgs]),
    __metadata("design:returntype", Promise)
], PostCrudResolver.prototype, "updatePost", null);
__decorate([
    TypeGraphQL.Mutation(_returns => BatchPayload_1.BatchPayload, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DeleteManyPostArgs_1.DeleteManyPostArgs]),
    __metadata("design:returntype", Promise)
], PostCrudResolver.prototype, "deleteManyPost", null);
__decorate([
    TypeGraphQL.Mutation(_returns => BatchPayload_1.BatchPayload, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateManyPostArgs_1.UpdateManyPostArgs]),
    __metadata("design:returntype", Promise)
], PostCrudResolver.prototype, "updateManyPost", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Post_1.Post, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpsertPostArgs_1.UpsertPostArgs]),
    __metadata("design:returntype", Promise)
], PostCrudResolver.prototype, "upsertPost", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregatePost_1.AggregatePost, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregatePostArgs_1.AggregatePostArgs]),
    __metadata("design:returntype", Promise)
], PostCrudResolver.prototype, "aggregatePost", null);
PostCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Post_1.Post)
], PostCrudResolver);
exports.PostCrudResolver = PostCrudResolver;
//# sourceMappingURL=PostCrudResolver.js.map