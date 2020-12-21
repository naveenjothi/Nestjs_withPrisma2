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
exports.FindManyPostArgs = void 0;
const TypeGraphQL = require("type-graphql");
const PostOrderByInput_1 = require("../../../inputs/PostOrderByInput");
const PostWhereInput_1 = require("../../../inputs/PostWhereInput");
const PostWhereUniqueInput_1 = require("../../../inputs/PostWhereUniqueInput");
const PostScalarFieldEnum_1 = require("../../../../enums/PostScalarFieldEnum");
let FindManyPostArgs = class FindManyPostArgs {
};
__decorate([
    TypeGraphQL.Field(_type => PostWhereInput_1.PostWhereInput, { nullable: true }),
    __metadata("design:type", PostWhereInput_1.PostWhereInput)
], FindManyPostArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostOrderByInput_1.PostOrderByInput], { nullable: true }),
    __metadata("design:type", Array)
], FindManyPostArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, { nullable: true }),
    __metadata("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], FindManyPostArgs.prototype, "cursor", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindManyPostArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindManyPostArgs.prototype, "skip", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostScalarFieldEnum_1.PostScalarFieldEnum], { nullable: true }),
    __metadata("design:type", Array)
], FindManyPostArgs.prototype, "distinct", void 0);
FindManyPostArgs = __decorate([
    TypeGraphQL.ArgsType()
], FindManyPostArgs);
exports.FindManyPostArgs = FindManyPostArgs;
//# sourceMappingURL=FindManyPostArgs.js.map