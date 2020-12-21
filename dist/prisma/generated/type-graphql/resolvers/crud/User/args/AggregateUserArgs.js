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
exports.AggregateUserArgs = void 0;
const TypeGraphQL = require("type-graphql");
const UserOrderByInput_1 = require("../../../inputs/UserOrderByInput");
const UserWhereInput_1 = require("../../../inputs/UserWhereInput");
const UserWhereUniqueInput_1 = require("../../../inputs/UserWhereUniqueInput");
let AggregateUserArgs = class AggregateUserArgs {
};
__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, { nullable: true }),
    __metadata("design:type", UserWhereInput_1.UserWhereInput)
], AggregateUserArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserOrderByInput_1.UserOrderByInput], { nullable: true }),
    __metadata("design:type", Array)
], AggregateUserArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, { nullable: true }),
    __metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], AggregateUserArgs.prototype, "cursor", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true }),
    __metadata("design:type", Number)
], AggregateUserArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true }),
    __metadata("design:type", Number)
], AggregateUserArgs.prototype, "skip", void 0);
AggregateUserArgs = __decorate([
    TypeGraphQL.ArgsType()
], AggregateUserArgs);
exports.AggregateUserArgs = AggregateUserArgs;
//# sourceMappingURL=AggregateUserArgs.js.map