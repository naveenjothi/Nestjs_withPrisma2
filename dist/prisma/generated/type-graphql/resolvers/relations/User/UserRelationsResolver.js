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
exports.UserRelationsResolver = void 0;
const TypeGraphQL = require("type-graphql");
const Post_1 = require("../../../models/Post");
const User_1 = require("../../../models/User");
const UserPostsArgs_1 = require("./args/UserPostsArgs");
let UserRelationsResolver = class UserRelationsResolver {
    async posts(user, ctx, args) {
        return ctx.prisma.user.findUnique({
            where: {
                id: user.id,
            },
        }).posts(args);
    }
};
__decorate([
    TypeGraphQL.FieldResolver(_type => [Post_1.Post], {
        nullable: true,
        description: undefined,
    }),
    __param(0, TypeGraphQL.Root()), __param(1, TypeGraphQL.Ctx()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_1.User, Object, UserPostsArgs_1.UserPostsArgs]),
    __metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "posts", null);
UserRelationsResolver = __decorate([
    TypeGraphQL.Resolver(_of => User_1.User)
], UserRelationsResolver);
exports.UserRelationsResolver = UserRelationsResolver;
//# sourceMappingURL=UserRelationsResolver.js.map