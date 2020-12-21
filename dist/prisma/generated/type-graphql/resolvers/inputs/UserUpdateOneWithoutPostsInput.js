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
exports.UserUpdateOneWithoutPostsInput = void 0;
const TypeGraphQL = require("type-graphql");
const UserCreateOrConnectWithoutpostsInput_1 = require("../inputs/UserCreateOrConnectWithoutpostsInput");
const UserCreateWithoutPostsInput_1 = require("../inputs/UserCreateWithoutPostsInput");
const UserUpdateWithoutPostsInput_1 = require("../inputs/UserUpdateWithoutPostsInput");
const UserUpsertWithoutPostsInput_1 = require("../inputs/UserUpsertWithoutPostsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneWithoutPostsInput = class UserUpdateOneWithoutPostsInput {
};
__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutPostsInput_1.UserCreateWithoutPostsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", UserCreateWithoutPostsInput_1.UserCreateWithoutPostsInput)
], UserUpdateOneWithoutPostsInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneWithoutPostsInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Boolean)
], UserUpdateOneWithoutPostsInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Boolean)
], UserUpdateOneWithoutPostsInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutPostsInput_1.UserUpdateWithoutPostsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", UserUpdateWithoutPostsInput_1.UserUpdateWithoutPostsInput)
], UserUpdateOneWithoutPostsInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutPostsInput_1.UserUpsertWithoutPostsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", UserUpsertWithoutPostsInput_1.UserUpsertWithoutPostsInput)
], UserUpdateOneWithoutPostsInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutpostsInput_1.UserCreateOrConnectWithoutpostsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", UserCreateOrConnectWithoutpostsInput_1.UserCreateOrConnectWithoutpostsInput)
], UserUpdateOneWithoutPostsInput.prototype, "connectOrCreate", void 0);
UserUpdateOneWithoutPostsInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], UserUpdateOneWithoutPostsInput);
exports.UserUpdateOneWithoutPostsInput = UserUpdateOneWithoutPostsInput;
//# sourceMappingURL=UserUpdateOneWithoutPostsInput.js.map