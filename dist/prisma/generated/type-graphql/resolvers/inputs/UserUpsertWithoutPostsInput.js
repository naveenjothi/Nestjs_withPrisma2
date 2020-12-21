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
exports.UserUpsertWithoutPostsInput = void 0;
const TypeGraphQL = require("type-graphql");
const UserCreateWithoutPostsInput_1 = require("../inputs/UserCreateWithoutPostsInput");
const UserUpdateWithoutPostsInput_1 = require("../inputs/UserUpdateWithoutPostsInput");
let UserUpsertWithoutPostsInput = class UserUpsertWithoutPostsInput {
};
__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutPostsInput_1.UserUpdateWithoutPostsInput, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", UserUpdateWithoutPostsInput_1.UserUpdateWithoutPostsInput)
], UserUpsertWithoutPostsInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutPostsInput_1.UserCreateWithoutPostsInput, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", UserCreateWithoutPostsInput_1.UserCreateWithoutPostsInput)
], UserUpsertWithoutPostsInput.prototype, "create", void 0);
UserUpsertWithoutPostsInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], UserUpsertWithoutPostsInput);
exports.UserUpsertWithoutPostsInput = UserUpsertWithoutPostsInput;
//# sourceMappingURL=UserUpsertWithoutPostsInput.js.map