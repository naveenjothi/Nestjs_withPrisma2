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
var UserWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserWhereInput = void 0;
const TypeGraphQL = require("type-graphql");
const IntFilter_1 = require("../inputs/IntFilter");
const PostListRelationFilter_1 = require("../inputs/PostListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let UserWhereInput = UserWhereInput_1 = class UserWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput_1], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], UserWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput_1], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], UserWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput_1], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], UserWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", IntFilter_1.IntFilter)
], UserWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], UserWhereInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostListRelationFilter_1.PostListRelationFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", PostListRelationFilter_1.PostListRelationFilter)
], UserWhereInput.prototype, "posts", void 0);
UserWhereInput = UserWhereInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], UserWhereInput);
exports.UserWhereInput = UserWhereInput;
//# sourceMappingURL=UserWhereInput.js.map