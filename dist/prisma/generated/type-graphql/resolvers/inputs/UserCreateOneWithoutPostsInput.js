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
exports.UserCreateOneWithoutPostsInput = void 0;
const TypeGraphQL = require("type-graphql");
const UserCreateOrConnectWithoutpostsInput_1 = require("../inputs/UserCreateOrConnectWithoutpostsInput");
const UserCreateWithoutPostsInput_1 = require("../inputs/UserCreateWithoutPostsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOneWithoutPostsInput = class UserCreateOneWithoutPostsInput {
};
__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutPostsInput_1.UserCreateWithoutPostsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", UserCreateWithoutPostsInput_1.UserCreateWithoutPostsInput)
], UserCreateOneWithoutPostsInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOneWithoutPostsInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutpostsInput_1.UserCreateOrConnectWithoutpostsInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", UserCreateOrConnectWithoutpostsInput_1.UserCreateOrConnectWithoutpostsInput)
], UserCreateOneWithoutPostsInput.prototype, "connectOrCreate", void 0);
UserCreateOneWithoutPostsInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], UserCreateOneWithoutPostsInput);
exports.UserCreateOneWithoutPostsInput = UserCreateOneWithoutPostsInput;
//# sourceMappingURL=UserCreateOneWithoutPostsInput.js.map