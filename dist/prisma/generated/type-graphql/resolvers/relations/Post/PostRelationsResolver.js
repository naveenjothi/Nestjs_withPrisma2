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
exports.PostRelationsResolver = void 0;
const TypeGraphQL = require("type-graphql");
const Post_1 = require("../../../models/Post");
const User_1 = require("../../../models/User");
let PostRelationsResolver = class PostRelationsResolver {
    async author(post, ctx) {
        return ctx.prisma.post.findUnique({
            where: {
                id: post.id,
            },
        }).author({});
    }
};
__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: true,
        description: undefined,
    }),
    __param(0, TypeGraphQL.Root()), __param(1, TypeGraphQL.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Post_1.Post, Object]),
    __metadata("design:returntype", Promise)
], PostRelationsResolver.prototype, "author", null);
PostRelationsResolver = __decorate([
    TypeGraphQL.Resolver(_of => Post_1.Post)
], PostRelationsResolver);
exports.PostRelationsResolver = PostRelationsResolver;
//# sourceMappingURL=PostRelationsResolver.js.map