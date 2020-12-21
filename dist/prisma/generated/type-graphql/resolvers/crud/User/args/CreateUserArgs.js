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
exports.CreateUserArgs = void 0;
const TypeGraphQL = require("type-graphql");
const UserCreateInput_1 = require("../../../inputs/UserCreateInput");
let CreateUserArgs = class CreateUserArgs {
};
__decorate([
    TypeGraphQL.Field(_type => UserCreateInput_1.UserCreateInput, { nullable: false }),
    __metadata("design:type", UserCreateInput_1.UserCreateInput)
], CreateUserArgs.prototype, "data", void 0);
CreateUserArgs = __decorate([
    TypeGraphQL.ArgsType()
], CreateUserArgs);
exports.CreateUserArgs = CreateUserArgs;
//# sourceMappingURL=CreateUserArgs.js.map