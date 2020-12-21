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
exports.PostCreateInput = void 0;
const TypeGraphQL = require("type-graphql");
const UserCreateOneWithoutPostsInput_1 = require("../inputs/UserCreateOneWithoutPostsInput");
let PostCreateInput = class PostCreateInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", String)
], PostCreateInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], PostCreateInput.prototype, "content", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Boolean)
], PostCreateInput.prototype, "published", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCreateOneWithoutPostsInput_1.UserCreateOneWithoutPostsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", UserCreateOneWithoutPostsInput_1.UserCreateOneWithoutPostsInput)
], PostCreateInput.prototype, "author", void 0);
PostCreateInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], PostCreateInput);
exports.PostCreateInput = PostCreateInput;
//# sourceMappingURL=PostCreateInput.js.map