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
var PostWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostWhereInput = void 0;
const TypeGraphQL = require("type-graphql");
const BoolNullableFilter_1 = require("../inputs/BoolNullableFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const IntNullableFilter_1 = require("../inputs/IntNullableFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let PostWhereInput = PostWhereInput_1 = class PostWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [PostWhereInput_1], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], PostWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostWhereInput_1], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], PostWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostWhereInput_1], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], PostWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", IntFilter_1.IntFilter)
], PostWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], PostWhereInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], PostWhereInput.prototype, "content", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], PostWhereInput.prototype, "published", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], PostWhereInput.prototype, "author", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], PostWhereInput.prototype, "authorId", void 0);
PostWhereInput = PostWhereInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], PostWhereInput);
exports.PostWhereInput = PostWhereInput;
//# sourceMappingURL=PostWhereInput.js.map